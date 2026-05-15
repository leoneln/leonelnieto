import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { scrollToSection } from '../utils/scroll'

const LogoMark = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="6" cy="14" r="4" fill="#1E3A5F" />
    <circle cx="22" cy="8" r="3" fill="#B86B4B" />
    <circle cx="22" cy="20" r="3" fill="#8FA99B" />
    <line x1="9.5" y1="12.5" x2="19.3" y2="9" stroke="#1E3A5F" strokeWidth="1.5" />
    <line x1="9.5" y1="15.5" x2="19.3" y2="19" stroke="#1E3A5F" strokeWidth="1.5" />
  </svg>
)

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobile] = useState(false)
  const { pathname } = useLocation()

  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMobile(false) }, [pathname])

  const links = [
    { label: 'About', id: 'about' },
    { label: 'Experience', id: 'experience' },
    { label: 'Work', id: 'work' },
    { label: 'Writing', path: '/blog' },   // this one is a real route, keep it as a Link
  ]

  function handleNavClick(id) {
    if (pathname !== '/') {
      navigate('/')
      setTimeout(() => scrollToSection(id), 100)
    } else {
      scrollToSection(id)
    }
  }

  return (
    <>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`}>
        <Link
          to="/"
          className="nav__wordmark"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <LogoMark />
          <div>
            <div className="nav__name">Leonel Nieto</div>
            <div className="nav__sub">Strategy · Data · Change</div>
          </div>
        </Link>

        <ul className="nav__links">
          {links.map(l => l.id ? (
            <li key={l.label}>
              <button className="nav__link" onClick={() => handleNavClick(l.id)}>
                {l.label}
              </button>
            </li>
          ) : (
            <li key={l.label}>
              <Link to={l.path} className="nav__link">{l.label}</Link>
            </li>
          ))}
          <li><a onClick={() => handleNavClick('contact')} className="nav__link nav__cta">Get in touch</a></li>
        </ul>

        <button
          className="nav__hamburger"
          aria-label="Toggle menu"
          onClick={() => setMobile(o => !o)}
        >
          <span style={mobileOpen ? { transform: 'rotate(45deg) translate(5px,5px)' } : {}} />
          <span style={mobileOpen ? { opacity: 0 } : {}} />
          <span style={mobileOpen ? { transform: 'rotate(-45deg) translate(5px,-5px)' } : {}} />
        </button>
      </nav>

      <div className={`nav__mobile${mobileOpen ? ' open' : ''}`}>
        {links.map(l => l.id ? (
          <li key={l.label}>
            <button className="nav__link" onClick={() => handleNavClick(l.id)}>
              {l.label}
            </button>
          </li>
        ) : (
          <li key={l.label}>
            <Link to={l.path} className="nav__link">{l.label}</Link>
          </li>
        ))}
        <a onClick={() => handleNavClick('contact')} className="btn btn--primary" style={{ alignSelf: 'flex-start', marginTop: '0.5rem' }}>
          Get in touch
        </a>
      </div>
    </>
  )
}
