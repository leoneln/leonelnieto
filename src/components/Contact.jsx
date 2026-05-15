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

const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
)
const MailIcon = () => (
  <svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></svg>
)
const ArrowIcon = () => (
  <svg className="btn__icon" viewBox="0 0 16 16"><path d="M14 2L9 7M14 2H9M14 2v5"/><rect x="1" y="5" width="12" height="9" rx="1"/></svg>
)

export default function Contact() {
  const { email, linkedin } = resume.personalInfo.contact

  return (
    <section className="section" id="contact">
      <div className="contact-inner">
        <FadeIn>
          <div className="section-label">
            <div className="section-label__line" />
            <span className="section-label__text">Get in Touch</span>
          </div>
          <h2 className="section-title">Let's work together.</h2>
          <p>
            Whether you're working through a strategic challenge, building better systems, or trying to make sense of your data — I'd enjoy a conversation. No pitch. Just a real exchange.
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="contact-actions">
            <a href={`mailto:${email}`} className="btn btn--primary">
              Send an email <ArrowIcon />
            </a>
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn btn--ghost">
              View résumé (PDF)
            </a>
          </div>

          <div className="contact-links">
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
              <LinkedInIcon /> LinkedIn
            </a>
            <a href={`mailto:${email}`} className="contact-link">
              <MailIcon /> {email}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
