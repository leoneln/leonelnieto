import resume from '../data/resume.json'
import { scrollToSection } from '../utils/scroll'

const ArrowIcon = () => (
  <svg className="btn__icon" viewBox="0 0 16 16">
    <path d="M3 8h10M9 4l4 4-4 4" />
  </svg>
)

export default function Hero() {
  const { heroHeadline, heroIntro, heroNote } = resume.personalInfo

  // Split headline on \n and italicize the last line
  const lines = heroHeadline.split('\n')
  const lastLine = lines.pop()

  return (
    <section className="hero" id="home">
      <div className="hero__bg-blob" aria-hidden="true" />

      <svg className="hero__bg-dots" width="160" height="90" aria-hidden="true">
        {[0, 1, 2, 3].map(col =>
          [0, 1, 2].map(row => (
            <circle key={`${col}-${row}`} cx={col * 40 + 10} cy={row * 35 + 10} r="2" fill="#B86B4B" />
          ))
        )}
      </svg>

      <div className="hero__inner">
        <div className="hero__eyebrow">
          <div className="hero__eyebrow-line" />
          <span className="hero__eyebrow-text">Strategy · Data · Change</span>
        </div>

        <h1 className="hero__headline">
          {lines.map((line, i) => <span key={i}>{line}<br /></span>)}
          <em>{lastLine}</em>
        </h1>

        <div className="hero__body">
          <p>{heroIntro}</p>
          <p>{heroNote}</p>
        </div>

        <div className="hero__actions">
          <button className="btn btn--primary"
            onClick={() => scrollToSection('work')}>
            See my work
          </button>
          <button className="btn btn--ghost"
            onClick={() => scrollToSection('contact')}>
            Get in touch
          </button>
        </div>
      </div>

      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-text">Scroll</span>
        <div className="hero__scroll-line" />
      </div>
    </section>
  )
}
