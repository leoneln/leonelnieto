import { Link } from 'react-router-dom'
import resume from '../data/resume.json'

export default function Footer() {
  const year = new Date().getFullYear()
  const { name } = resume.personalInfo

  return (
    <footer className="footer">
      <span className="footer__name">{name}</span>
      <span className="footer__copy">Strategy, Data & Change · © {year}</span>
      <div className="footer__links">
        <Link to="/"      className="footer__link">Home</Link>
        <Link to="/blog"  className="footer__link">Writing</Link>
        <a href="/#contact" className="footer__link">Contact</a>
      </div>
    </footer>
  )
}
