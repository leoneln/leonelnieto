# Leonel Nieto — Personal Website

Built with React + Vite. My resume is the data layer — edit one JSON file and the whole site updates.

---

## Quick Start

```bash
npm install
npm run dev
```

Open http://localhost:5173

---

## How to Update Your Resume

**Everything professional lives in one file:**

```
src/data/resume.json
```

Edit any section and save — the site hot-reloads automatically. The fields map directly to sections on the site:

| JSON field           | Site section                    |
|----------------------|---------------------------------|
| `personalInfo`       | Hero, About, Contact            |
| `experience`         | Experience timeline             |
| `education`          | Education sidebar               |
| `technicalSkills`    | Skills section (tech grid)      |
| `leadershipSkills`   | Skills section (tags)           |
| `selectedWork`       | Selected Work cards             |
| `pillars`            | What I Do section               |
| `additional`         | Additional panel in Experience  |

### Adding a new job

In `resume.json`, add a new object to the `experience` array:

```json
{
  "company": "Company Name",
  "location": "City, State",
  "companyPeriod": "Month Year – Month Year",
  "roles": [
    {
      "title": "Your Job Title",
      "period": "Month Year – Month Year",
      "description": "One sentence summary of the role.",
      "bullets": [
        "First accomplishment here.",
        "Second accomplishment here."
      ],
      "tags": ["Tag1", "Tag2", "Tag3"]
    }
  ]
}
```

A company with multiple roles just has multiple objects in the `roles` array — they all collapse under one company header.

---

## How to Write a Blog Post

1. **Copy the template:**
   ```bash
   cp src/blog/_template.md src/blog/YYYY-MM-DD-your-post-title.md
   ```

2. **Fill in the frontmatter** (the `---` block at the top):
   ```markdown
   ---
   title: Your Post Title
   date: 2025-06-15
   category: Data Storytelling
   excerpt: One or two sentences that appear in the preview card.
   ---
   ```

3. **Write your post** in standard Markdown below the frontmatter.

4. Save the file. The post appears automatically on the blog page — no other configuration needed.

**The file name becomes the URL slug.** For example:
`2025-06-15-my-post.md` → `/blog/2025-06-15-my-post`

**Files starting with `_` are ignored** (that's why `_template.md` doesn't appear).

### Supported Markdown

- `##` and `###` headings
- **Bold**, *italic*, [links](https://example.com)
- Bullet and numbered lists
- `> Blockquotes` (styled as pull quotes)
- `---` horizontal rules
- `inline code`

---

## Deploying

### Build for production
```bash
npm run build
```
This creates a `dist/` folder with static files.

### GitHub Pages
The app uses `HashRouter` — it works on GitHub Pages without extra config.

1. Push to GitHub
2. Go to Settings → Pages → Source: GitHub Actions
3. Or copy `dist/` contents to your hosting provider

## Project Structure

```
leonieto-website/
├── src/
│   ├── data/
│   │   └── resume.json          ← Edit this to update all professional content
│   ├── blog/
│   │   ├── _template.md         ← Copy this for new posts
│   │   └── YYYY-MM-DD-slug.md   ← Your blog posts
│   ├── components/
│   │   ├── Nav.jsx
│   │   ├── Hero.jsx
│   │   ├── WhatIDo.jsx
│   │   ├── About.jsx
│   │   ├── Experience.jsx
│   │   ├── SelectedWork.jsx
│   │   ├── Skills.jsx
│   │   ├── BlogPreview.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx             ← Assembles all sections
│   │   ├── BlogPage.jsx         ← Blog listing with category filter
│   │   └── BlogPostPage.jsx     ← Individual post with prev/next
│   ├── utils/
│   │   └── blogLoader.js        ← Reads markdown files, parses frontmatter
│   ├── hooks/
│   │   └── useIntersection.js   ← Scroll-triggered animations
│   ├── App.jsx                  ← Router
│   ├── main.jsx                 ← Entry point
│   └── index.css                ← All styles + design tokens
├── index.html
├── vite.config.js
└── package.json
```
