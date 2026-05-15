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

export default function SelectedWork() {
  return (
    <section className="section" id="work">
      <FadeIn>
        <div className="section-label">
          <div className="section-label__line" />
          <span className="section-label__text">Selected Work</span>
        </div>
        <h2 className="section-title">Problems I've helped solve.</h2>
        <p className="section-intro">
          Real organizational challenges that required strategy, data, and people working together.
        </p>
      </FadeIn>

      <div className="work-grid">
        {resume.selectedWork.map((item, i) => (
          <FadeIn key={item.number} delay={(i % 3) * 0.08}>
            <div className="work-card">
              <div className="work-card__num">{item.number}</div>
              <div className="work-card__title">{item.title}</div>
              <p className="work-card__desc">{item.description}</p>
              <ul className="work-card__outcomes">
                {item.outcomes.map(o => <li key={o}>{o}</li>)}
              </ul>
              <div className="work-card__tags">
                {item.tags.map(t => <span key={t} className="work-tag">{t}</span>)}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  )
}
