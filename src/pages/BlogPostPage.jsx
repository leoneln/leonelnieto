import { useParams, Link, Navigate } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getPost, getAllPosts, formatDate } from '../utils/blogLoader'

const BackIcon = () => (
  <svg viewBox="0 0 16 16" style={{ width: 14, height: 14, stroke: 'currentColor', fill: 'none', strokeWidth: 2 }}>
    <path d="M13 8H3M7 12l-4-4 4-4"/>
  </svg>
)
const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" style={{ width: 14, height: 14, stroke: 'currentColor', fill: 'none', strokeWidth: 2 }}>
    <path d="M3 8h10M9 4l4 4-4 4"/>
  </svg>
)

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = getPost(slug)

  if (!post) return <Navigate to="/blog" replace />

  // Get prev/next posts for navigation
  const all = getAllPosts()
  const idx = all.findIndex(p => p.slug === slug)
  const prev = all[idx + 1] || null
  const next = all[idx - 1] || null

  return (
    <main className="post-page">
      {/* ── Header ── */}
      <header className="post-header">
        <Link to="/blog" className="post-header__back">
          <BackIcon /> All posts
        </Link>
        <div className="post-header__cat">{post.category}</div>
        <h1 className="post-header__title">{post.title}</h1>
        <div className="post-header__date">{formatDate(post.date)}</div>
      </header>

      {/* ── Body ── */}
      <div className="post-body">
        <article className="prose">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {post.content}
          </ReactMarkdown>
        </article>

        {/* ── Post navigation ── */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '4rem',
          paddingTop: '2rem',
          borderTop: '1px solid var(--sand)',
          gap: '2rem',
          flexWrap: 'wrap',
        }}>
          {prev ? (
            <Link to={`/blog/${prev.slug}`} style={{ textDecoration: 'none', maxWidth: '45%' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <BackIcon /> Previous
              </div>
              <div style={{ fontFamily: 'var(--font-head)', fontSize: '0.95rem', fontWeight: 600, color: 'var(--blue)', lineHeight: 1.35 }}>
                {prev.title}
              </div>
            </Link>
          ) : <div />}

          {next ? (
            <Link to={`/blog/${next.slug}`} style={{ textDecoration: 'none', textAlign: 'right', maxWidth: '45%' }}>
              <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.4rem' }}>
                Next <ArrowIcon />
              </div>
              <div style={{ fontFamily: 'var(--font-head)', fontSize: '0.95rem', fontWeight: 600, color: 'var(--blue)', lineHeight: 1.35 }}>
                {next.title}
              </div>
            </Link>
          ) : <div />}
        </div>

        {/* ── Back CTA ── */}
        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <Link to="/blog" className="btn btn--ghost">
            <BackIcon /> Back to all posts
          </Link>
        </div>
      </div>
    </main>
  )
}
