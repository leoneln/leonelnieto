---
title: Building a dynamic Sankey chart in Oracle APEX
date: 2021-06-15
category: Data & Analytics
excerpt: The question was simple — what happens to students after they graduate? The answer needed a Sankey chart, some creative SQL, and more JavaScript than I expected.
---

One of the most common questions in higher education analytics is deceptively simple: what actually happens to students after they leave?

The ideal trajectory at a two-year institution looks something like this:

**Admissions → Award → Transfer or Workforce → Bachelor's Degree**

We had the data. What we didn't have was a way to tell that story clearly enough for decision-makers to actually act on it. A table of transfer conversion rates doesn't move people. A well-built Sankey chart does.

## What is a Sankey chart

A Sankey chart visualizes flow — how a population moves from one state to the next, with the width of each path representing volume. For student outcome data it's a natural fit. You can see at a glance how many students transferred, how many went straight to the workforce, and how many obtained a bachelor's degree downstream.

Worth noting: not all data belongs in a Sankey chart. The format works when you have meaningful flows between defined stages. Force it onto the wrong data and it creates confusion instead of clarity.

![Oracle APEX Dynamic Sankey Chart](/public/Sankey-Chart-In-Oracle-Apex.gif)

## D3 vs Google Charts

Both Google Charts and D3 have Sankey implementations. I went with D3. Google Charts would have worked but D3 gave me more flexibility — specifically the ability to drag and reposition nodes on the chart, which turned out to be important for readability when the data gets dense.

## Wrangling the data

Getting data into the right shape for a Sankey chart is honestly the hardest part of the whole build. The chart expects a JSON structure with two arrays — `links` defining the flows between nodes, and `nodes` defining each stage:

```json
{
  "links": [
    {"source": "A", "target": "B", "value": "10"},
    {"source": "A", "target": "C", "value": "10"},
    {"source": "B", "target": "D", "value": "5"}
  ],
  "nodes": [
    {"node": 0, "name": "A"},
    {"node": 1, "name": "B"},
    {"node": 2, "name": "C"},
    {"node": 3, "name": "D"}
  ]
}
```

Understanding this structure deeply is what made the SQL writable. The query uses `JSON_OBJECT` to output each flow as a row, then a `WITH` clause to hold the aggregated numbers. Adding filters for dynamic behavior is just a matter of parameterizing the WHERE clause with APEX page items.

The tricky part is that the SQL handles the `links` array but not the `nodes` array — that gets built in JavaScript from the query output.

## Loading it in Oracle APEX

My first attempt used a PL/SQL Dynamic Content region, which I quickly discovered can't be refreshed by a Dynamic Action. Since refreshing on filter change was essential, I switched to a stripped-down Classic Report — all attributes disabled, region template set to none — rendering each row as a hidden HTML element carrying the data as an attribute:

```html
<div class="chart-data" data-source="#S#"></div>
```

From there a JavaScript function grabs all those elements, parses the data, builds the nodes array, swaps source and target names for numeric indexes, and returns the final structure D3 expects. The rendering function then takes that output and draws the chart into a `div` placed in the Classic Report footer.

Refreshing is straightforward — a Dynamic Action on the Classic Report region fires `renderSankey()` on both initialization and refresh.

## The result

Filters work. The chart updates dynamically. Nodes are draggable. Decision-makers can see at a glance how student populations flow through each stage — and where they drop off.

This sounds like a lot of moving pieces, and it is. But the individual steps are manageable and the payoff is real. When you can show a room full of administrators a Sankey chart and watch them immediately understand something they've been looking at in tables for years — that's the whole point.

JavaScript fluency and solid SQL were both necessary here. Neither alone would have been enough.