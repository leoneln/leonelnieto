// blogLoader.js
// Uses Vite's import.meta.glob to load all markdown files at build time.
// To add a new blog post: create a new .md file in src/blog/ with frontmatter.
// Files starting with _ are ignored (e.g., _template.md).

const modules = import.meta.glob('../blog/[^_]*.md', { query: '?raw', import: 'default', eager: true })

/**
 * Parse YAML-style frontmatter from a markdown string.
 * Supports: string, number, and simple values.
 */
function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (!match) return { frontmatter: {}, content: raw }

  const frontmatter = {}
  match[1].split('\n').forEach(line => {
    const colonIdx = line.indexOf(': ')
    if (colonIdx === -1) return
    const key = line.slice(0, colonIdx).trim()
    const val = line.slice(colonIdx + 2).trim().replace(/^["']|["']$/g, '')
    frontmatter[key] = val
  })

  return { frontmatter, content: match[2].trim() }
}

/**
 * Returns all blog posts sorted by date (newest first).
 * Each post has: slug, title, date, category, excerpt, content
 */
export function getAllPosts() {
  return Object.entries(modules)
    .map(([path, raw]) => {
      const slug = path.replace(/.*\//, '').replace(/\.md$/, '')
      const { frontmatter, content } = parseFrontmatter(raw)
      return {
        slug,
        title: frontmatter.title || 'Untitled',
        date: frontmatter.date || '',
        category: frontmatter.category || 'General',
        excerpt: frontmatter.excerpt || '',
        content,
      }
    })
    .filter(post => !post.slug.startsWith('_'))
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

/**
 * Returns a single post by slug, or null if not found.
 */
export function getPost(slug) {
  const entry = Object.entries(modules).find(([path]) =>
    path.replace(/.*\//, '').replace(/\.md$/, '') === slug
  )
  if (!entry) return null
  const { frontmatter, content } = parseFrontmatter(entry[1])
  return {
    slug,
    title: frontmatter.title || 'Untitled',
    date: frontmatter.date || '',
    category: frontmatter.category || 'General',
    excerpt: frontmatter.excerpt || '',
    content,
  }
}

/**
 * Format a date string like "2025-05-01" → "May 1, 2025"
 */
export function formatDate(dateStr) {
  if (!dateStr) return ''
  const d = new Date(dateStr + 'T00:00:00')
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
