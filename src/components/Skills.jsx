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

export default function Skills() {
  return (
    <section className="section section--blue" id="skills">
      <FadeIn>
        <div className="section-label">
          <div className="section-label__line" />
          <span className="section-label__text">Capabilities</span>
        </div>
        <h2 className="section-title section-title--white">Technical skills that travel.</h2>
        <p className="section-intro section-intro--white">
          Developed in complex environments, applicable anywhere data, strategy, and change need to work together.
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <div className="skills-grid">
          {resume.technicalSkills.map(group => (
            <div key={group.group}>
              <div className="skill-group__title">{group.group}</div>
              {group.items.map(item => (
                <div key={item} className="skill-item">
                  <span className="skill-dot" aria-hidden="true" />
                  {item}
                </div>
              ))}
            </div>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.2}>
        <div style={{ marginTop: '4rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '3rem' }}>
          <div className="section-label">
            <div className="section-label__line" />
            <span className="section-label__text">Leadership Skills</span>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginTop: '1rem' }}>
            {resume.leadershipSkills.map(skill => (
              <span
                key={skill}
                style={{
                  display: 'inline-block',
                  background: 'rgba(255,255,255,0.07)',
                  color: 'rgba(255,255,255,0.75)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '100px',
                  padding: '0.4rem 1rem',
                  fontSize: '0.85rem',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
