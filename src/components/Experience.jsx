import { useState } from 'react'
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

function TimelineRole({ role, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="timeline-role">
      <div className="timeline-role__period">{role.period}</div>
      <button
        className="timeline-role__title"
        style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', padding: 0, width: '100%' }}
        onClick={() => setOpen(o => !o)}
        aria-expanded={open}
      >
        {role.title}
        <span style={{ marginLeft: '0.5rem', color: 'var(--clay)', fontSize: '0.8rem' }}>
          {open ? '▲' : '▼'}
        </span>
      </button>

      {open && (
        <>
          <p className="timeline-role__desc">{role.description}</p>
          <ul className="timeline-role__bullets">
            {role.bullets.map((b, i) => <li key={i}>{b}</li>)}
          </ul>
          <div className="timeline-tags">
            {role.tags.map(t => <span key={t} className="timeline-tag">{t}</span>)}
          </div>
        </>
      )}
    </div>
  )
}

function TimelineCompany({ company, defaultOpen = false }) {
  return (
    <div className="timeline-company">
      <div className="timeline-company__header">
        <div className="timeline-company__dot" aria-hidden="true" />
        <div>
          <div className="timeline-company__name">{company.company}</div>
          <div className="timeline-company__meta">
            {company.location} · {company.companyPeriod}
          </div>
        </div>
      </div>
      <div className="timeline-roles">
        {company.roles.map((role, i) => (
          <TimelineRole key={role.title} role={role} defaultOpen={i === 0 && defaultOpen} />
        ))}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <section className="section section--white" id="experience">
      <FadeIn>
        <div className="section-label">
          <div className="section-label__line" />
          <span className="section-label__text">Experience</span>
        </div>
        <h2 className="section-title">Work that shaped how I think.</h2>
        <p className="section-intro">
          Framed in transferable terms. Click any role to expand the details.
        </p>
      </FadeIn>

      <div className="experience-layout">
        {/* ── Timeline ── */}
        <FadeIn delay={0.1}>
          <div className="timeline">
            {resume.experience.map((company, i) => (
              <TimelineCompany key={company.company} company={company} defaultOpen={i === 0} />
            ))}
          </div>
        </FadeIn>

        {/* ── Education & Extras sidebar ── */}
        <FadeIn delay={0.2}>
          <div className="edu-sidebar">
            <div className="section-label" style={{ marginBottom: '1.25rem' }}>
              <div className="section-label__line" />
              <span className="section-label__text">Education</span>
            </div>
            {resume.education.map(edu => (
              <div key={edu.degree} className="edu-card">
                <div className="edu-card__degree">{edu.degree}</div>
                <div className="edu-card__school">{edu.institution}</div>
                <div className="edu-card__year">{edu.year}</div>
              </div>
            ))}

            <div className="edu-extra" style={{ marginTop: '1.5rem' }}>
              <div className="edu-extra__title">Additional</div>
              {resume.additional.map((item, i) => (
                <div key={i} className="edu-extra__item">{item}</div>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
