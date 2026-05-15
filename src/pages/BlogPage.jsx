import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllPosts, formatDate } from '../utils/blogLoader'

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" style={{ width: 14, height: 14, stroke: 'var(--blue)', fill: 'none', strokeWidth: 2 }}>
    <path d="M3 8h10M9 4l4 4-4 4"/>
  </svg>
)

export default function BlogPage() {
  const allPosts = getAllPosts()
  const categories = ['All', ...new Set(allPosts.map(p => p.category))]
  const [active, setActive] = useState('All')

  const posts = active === 'All' ? allPosts : allPosts.filter(p => p.category === active)

  return (
    <main className="blog-page">
      <header className="blog-page__header">
        <div className="section-label">
          <div className="section-label__line" />
          <span className="section-label__text">Writing</span>
        </div>
        <h1 className="section-title" style={{ maxWidth: 560 }}>
          Ideas on strategy, data, and change.
        </h1>
        <p style={{ color: 'var(--muted)', maxWidth: 480, lineHeight: 1.75 }}>
          Short, practical, honest. Written for leaders who want clarity without the jargon.
        </p>

        {/* Category filter */}
        <div style={{ display: 'flex', gap: '0.6rem', marginTop: '2rem', flexWrap: 'wrap' }}>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: '0.4rem 1rem',
                borderRadius: '100px',
                border: '1.5px solid',
                borderColor: active === cat ? 'var(--blue)' : 'var(--sand)',
                background: active === cat ? 'var(--blue)' : 'transparent',
                color: active === cat ? 'var(--white)' : 'var(--muted)',
                fontSize: '0.82rem',
                fontWeight: 500,
                cursor: 'pointer',
                fontFamily: 'var(--font-body)',
                transition: 'all 0.2s',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      <div className="blog-page__list">
        {posts.length === 0 && (
          <p style={{ color: 'var(--muted)', gridColumn: '1 / -1' }}>No posts in this category yet.</p>
        )}
        {posts.map(post => (
          <Link key={post.slug} to={`/blog/${post.slug}`} className="blog-card">
            <div className="blog-card__cat">{post.category}</div>
            <div className="blog-card__title">{post.title}</div>
            <p className="blog-card__excerpt">{post.excerpt}</p>
            <div className="blog-card__footer">
              <span className="blog-card__date">{formatDate(post.date)}</span>
              <span className="blog-card__read">Read <ArrowIcon /></span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}
