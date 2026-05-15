import { Link } from 'react-router-dom'
import { useIntersection } from '../hooks/useIntersection'
import { getAllPosts, formatDate } from '../utils/blogLoader'

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" style={{ width: 14, height: 14, stroke: 'var(--blue)', fill: 'none', strokeWidth: 2 }}>
    <path d="M3 8h10M9 4l4 4-4 4"/>
  </svg>
)

function FadeIn({ children, delay = 0 }) {
  const [ref, visible] = useIntersection()
  return (
    <div ref={ref} className={`fade-in${visible ? ' visible' : ''}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  )
}

export default function BlogPreview() {
  const posts = getAllPosts().slice(0, 3)

  return (
    <section className="section section--white" id="blog">
      <FadeIn>
        <div className="section-label">
          <div className="section-label__line" />
          <span className="section-label__text">Writing</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h2 className="section-title">Ideas worth sharing.</h2>
            <p className="section-intro" style={{ marginBottom: 0 }}>
              On clear strategy, data storytelling, leading change, and building better systems.
            </p>
          </div>
          <Link to="/blog" className="btn btn--ghost" style={{ flexShrink: 0 }}>
            All posts <ArrowIcon />
          </Link>
        </div>
      </FadeIn>

      <div className="blog-grid" style={{ marginTop: '3rem' }}>
        {posts.map((post, i) => (
          <FadeIn key={post.slug} delay={i * 0.08}>
            <Link to={`/blog/${post.slug}`} className="blog-card">
              <div className="blog-card__cat">{post.category}</div>
              <div className="blog-card__title">{post.title}</div>
              <p className="blog-card__excerpt">{post.excerpt}</p>
              <div className="blog-card__footer">
                <span className="blog-card__date">{formatDate(post.date)}</span>
                <span className="blog-card__read">
                  Read <ArrowIcon />
                </span>
              </div>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
