import { useIntersection } from '../hooks/useIntersection'
import resume from '../data/resume.json'

function FadeIn({ children, delay = 0 }) {
  const [ref, visible] = useIntersection()
  return (
    <div ref={ref} className={`fade-in${visible ? ' visible' : ''}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  )
}

export default function About() {
  const { aboutBody, pullQuote, values, stats } = resume.personalInfo

  return (
    <section className="section" id="about">
      <div className="about-grid">

        {/* ── Text column ── */}
        <div>
          <FadeIn>
            <div className="section-label">
              <div className="section-label__line" />
              <span className="section-label__text">About</span>
            </div>
            <h2 className="section-title">From complexity to clarity.</h2>
          </FadeIn>

          {aboutBody.map((para, i) => (
            <FadeIn key={i} delay={i * 0.08}>
              {i === 1 ? (
                <>
                  <blockquote className="about__pull-quote">"{pullQuote}"</blockquote>
                  <p className="about__body">{para}</p>
                </>
              ) : (
                <p className="about__body">{para}</p>
              )}
            </FadeIn>
          ))}

          <FadeIn delay={0.3}>
            <div className="values-list">
              {values.map(v => (
                <span key={v} className="value-tag">{v}</span>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* ── Portrait column ── */}
        <FadeIn delay={0.15}>
          <div className="about__portrait">
            <div className="about__frame">
              <img src="/yours_truly.jpeg" alt="Leonel Nieto" />
            </div>
            <div className="about__accent" aria-hidden="true" />
            <div className="about__stats">
              {stats.map(s => (
                <div key={s.number} className="stat">
                  <div className="stat__number">{s.number}</div>
                  <div className="stat__label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

      </div>
    </section>
  )
}
