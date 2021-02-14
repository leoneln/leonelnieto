## Oracle Apex Sankey Chart

#### The ask 
> My current role is Higher Education Business Analytics and one of the most common data questions is **"What happens to students after they graduate with an award from the college?"** 

The ideal trajectory of a student at 2 year institution could be as follows

```sql
admissions -> 
    award (along with some useless certificates) -> 
        transfer or workforce, if transfer -> 
            Bachelors Degree Attainment from 4 year instuttion. 
``` 
There are a few measures that are often cited to get at post-award student outcomes. For example our institution tracks *Transfer Conversion Rate* which is defined as the number of student who graduate with a transfer degree such as an Associates of Arts or and Associates of Science and go on to obtain a Bachelors Degree from a four year institution with an given time period.  

We got the data but struggle to tell a story such that descision-makers can gain insights and act on them. One way to visualize this trajectory is with Sankey chart. I didnt know much about Sankey charts up until a few months ago when our team started experimenting with them. From that limited experience I would point out that not all data lends its self to be visualized in a sankey chart. Check this [read](https://www.data-to-viz.com/graph/sankey.html) or this [read](https://towardsdatascience.com/the-what-why-and-how-of-sankey-diagrams-430cbd4980b5) to learn more about adequate use cases for Sankey Charts. 

#### D3 vs Google Charts

Both [Goggle Charts Sankey](https://developers.google.com/chart/interactive/docs/gallery/sankey) Chart and [D3 Sankey Chart](https://bl.ocks.org/d3noob/5028304) will work for this. But I found that the D3 Sankey Chart, while more heavier on the javascript side, it was more fexible and allowed for draggin of nodes. Dragging nodes on the visual is key and I am sure it can be implemented in Google Charts but I did not bother in to looking at how. 

#### Wrangling the data

I found that getting the data into a format that works with sanekey chart is one of the most challenging aspects of building a sankey chart. My goal is to build a dynamic Sankey chart which means that the data will be queried on demand as per the filters adjusted by the users on the UI. Even for a static sankey chart setting up the data is not tribial. It boils down to the getting the data into a JSON array of nodes progresively flowing from one to the next. For example;

```json
{
    "links": [
        {"source":"A","target":"B","value":"10"},
        {"source":"A","target":"C","value":"10"},
        {"source":"B","target":"D","value":"5"},
        {"source":"C","target":"E","value":"15"}
    ],
    "nodes": [
        {"node":0,"name":"A"},
        {"node":1,"name":"B"},
        {"node":2,"name":"C"},
        {"node":3,"name":"D"}
    ]
}
```
Notice that the JSON array will has to parent nodes `links` which defines the data flows and `nodes` which defines the names and order of each node. Having a solid understanding of this data structure was key to writing the sql that would output that data in this format. The SQL query would something like this. 

```sql
with wrapper as (
    select 13594 as enrollment,
        6053 as graduated,
        4540 as graduated_transfered,
        1500 as not_graduated_transfered,
        ......
    from dual
) select json_object('source' value 'Enrollment','target' value 'Graduated', 'value' value graduated) s
from wrapper
union
select json_object('source' value 'Graduated','target' value 'Transfered', 'value' value graduated_transfered) s
from wrapper
union
select json_object('source' value 'Enrollment','target' value 'Transfered', 'value' value not_graduated_transfered) s
from wrapper;
```
The output of this query will look something like the JSON Array above with the excpetion of the `nodes` part. But now I am ready to jump into Oracle Apex and implent this. 

#### Loading things in Oracle Apex

I am following the [d3 Snakey documentation here](https://bl.ocks.org/d3noob/5028304) to figure out what needs to happen in Oracle Apex. 
1. Since I needed to render HTML my first I attempted to use an Oracle Apex PLSQL Dynamic Content only to learn that these cannot be refreshed with a Dynamic Action. Refreshing was crucial so I had to find an alternative. Thanks to an a blog by [Scott Spendolini](https://spendolini.blogspot.com/2015/11/refreshing-plsql-regions-in-apex.html) I was able to achieve what I needed with a stripped classic report. By stripped down I mean disable all attributes and set the region tample to none or select. 
2. The first challenge to overcome is porting the data from the Classic Report to a format that can be used by Sankey Chart.
    - As mentioned the classic report uses the query above but does not render anything becuase the report is set to render as an HTML expression like so `<div class="chart-data" data-source="#S#"></div>`. What I am doing here is porting the data from each row in the query to a data-source html attribute.
    - Now I need to grab that data, parse it, clean it up and put it in a nice sankey chart format. This was achieved with the following Javascript function. 
    ```javascript
    console.log(parseSankeyData('chart-data')) //Testing
    function parseSankeyData(elementClass){
        let dataElements = document.querySelectorAll('.'+elementClass);
        let dataset = []
        dataElements.forEach(e => {
            let data = JSON.parse(e.dataset.source)
            dataset.push({"source":data.source,"target":data.target,"value":data.value})
        })
        let nodes = []
        let newSet = dataset
        let counter = 0;
        let finalDataset = []
        dataset.forEach((e)=>{
            pos = nodes.findIndex(i => i.name === e.source)
            if(pos === -1) {
            nodes.push({"node":counter,"name":e.source})
            counter += 1
            }
            pos = nodes.findIndex(i => i.name === e.target)
            if(pos === -1){
            nodes.push({"node":counter,"name":e.target})
            counter += 1
            }
        })
        newSet.forEach(y => {
            nodes.forEach(p => {
            if(y.source === p.name){
                y.source = p.node
            }
            if(y.target === p.name){
                y.target = p.node
            }
            })
        })
        finalDataset.push({"links":newSet})
        finalDataset.push({"nodes":nodes})
        return (finalDataset)
    }
    ```
    - The above finds all elements with a class of `chart-data` extracts the data-source attribute then appends all into one data source. The source and target names are then swapped by indexes and a nodes sub-array of with name and node id created. The output of this function would be exactly like JSON Array described in Wrangling the Data Section. 
3. Then I loaded the followng javascript libraries (d3 and sankey.js) either on a page or the entire application. I typically opt for using CDN files. 
    - https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.17/d3.min.js
    - https://cdn.rawgit.com/newrelic-forks/d3-plugins-sankey/master/sankey.js
4. I put the function in step two in the page JavaScript -> Function and Global Declarations. Above this function I added one more function below which renders the Sankey Chart.
    ```javascript
    function renderSankey(dataContainer,canvas) {
        var units = "Students";
        var margin = {
                top: 10,
                right: 10,
                bottom: 10,
                left: 10
            },
            width = 840 - margin.left - margin.right,
            height = 350 - margin.top - margin.bottom;
            //.... Rest of function on codepen
    }
    ```
    - This function is very long since its the one doing rendering the Snakey Chart. The entire function is documented on [CodePen](https://codepen.io/leonelnieto/pen/QWGKxwq?editors=1010). Notice that `renderSankey(dataContainer,canvas)` accepts two paramenters one is the class of the data containers and the other is the id of the element where the Sankey will be drawn. So this means that we still need the canvas div. I added this on footer section of the classic report described on step 1 like so `<div id="sankey-chart">render shakey here</div>`. 
5. Refreshing the Sankey Chart is simple. Create a dynamic function on refresh for the classic report and have it excute `renderSankey('chart-data',"sankey-chart")` javascript code. Set the action to fire on intialization for the first render. 
6. Lastly, I added some page items as filters and parametarized the SQL query like so. 
    ```plsql
    with wrapper as (
        select 13594 as enrollment,
            6053 as graduated,
            4540 as graduated_transfered,
            1500 as not_graduated_transfered
        from dual
        where foo = :filter1
            and bar = :filer2
            and foobar in (select * from apex_string.split(:filer3,':'))
    ) select json_object.... from wrapper;
    ```
Made to the end, sounds like quite a bit of work. Javascript knowhow defenetly came in handy as well as sql to wrangle the data properly. The final result is worth it!! 

![Oracle Apex Dynamic Snakey Chart](https://leonieto.website/img/Sankey-Chart-In-Oracle-Apex.gif)




