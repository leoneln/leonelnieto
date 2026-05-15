import { useIntersection } from '../hooks/useIntersection'
import resume from '../data/resume.json'

const ICONS = {
  strategy: (
    <svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/><path d="M3 12h3M18 12h3"/></svg>
  ),
  data: (
    <svg viewBox="0 0 24 24"><path d="M3 3v18h18"/><path d="M7 16l4-4 4 4 4-7"/></svg>
  ),
  systems: (
    <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M3 12h6M15 12h6M12 3v6M12 15v6"/></svg>
  ),
  leadership: (
    <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/></svg>
  ),
}

function FadeIn({ children, delay = 0 }) {
  const [ref, visible] = useIntersection()
  return (
    <div ref={ref} className={`fade-in${visible ? ' visible' : ''}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  )
}

export default function WhatIDo() {
  return (
    <section className="section section--blue" id="what-i-do">
      <div className="section-label">
        <div className="section-label__line" />
        <span className="section-label__text">What I Do</span>
      </div>

      <FadeIn>
        <h2 className="section-title section-title--white">Four ways I make work better.</h2>
        <p className="section-intro section-intro--white">
          I work best where ideas, people, data, and systems need to come together. Here's how I show up.
        </p>
      </FadeIn>

      <div className="pillars-grid">
        {resume.pillars.map((p, i) => (
          <div key={p.title} className="pillar">
            <div className="pillar__icon" aria-hidden="true">
              {ICONS[p.icon]}
            </div>
            <div className="pillar__title">{p.title}</div>
            <p className="pillar__desc">{p.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
