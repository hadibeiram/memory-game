export default function Portfolio({ onNavigate }) {
  return (
    <div className="app portfolio">
      <header className="header">
        <span className="logo">Hadi Beiram</span>
        <span className="logo-sub">portfolio</span>
      </header>

      <section className="hero">
        <p className="hero-eyebrow">Computer Engineering · University of Ottawa</p>
        <h1 className="hero-title">Hi, I'm Hadi Beiram.</h1>
        <p className="hero-text">
          I'm a computer engineering student from Lebanon, interested in networking and computer
          systems. This page collects the work I build for my UI design course.
        </p>
      </section>

      <section className="pf-section">
        <h2 className="pf-h2">About me</h2>
        <p className="pf-text">
          I'm a computer engineering student at the University of Ottawa, originally from Lebanon.
          Most of my focus is on networking and computer systems, and I enjoy building small
          software projects on the side.
        </p>
      </section>

      <section className="pf-section">
        <h2 className="pf-h2">How I work</h2>
        <p className="pf-text">
          I'm currently taking SEG3125 (Analysis and Design of User Interfaces) as part of my degree.
          It's my first hands-on experience with UI design, so I'm learning the ideas as I go and
          putting them into practice through the course. This page is where I collect that work.
        </p>
      </section>

      <section className="pf-section">
        <h2 className="pf-h2">Project</h2>
        <button
          className="project-card"
          onClick={() => onNavigate('#game')}
          aria-label="Pairs memory match game, play the game"
        >
          <span className="project-band">
            <span className="project-emoji">🧠</span>
          </span>
          <span className="project-body">
            <span className="project-title">Pairs — memory match game</span>
            <span className="project-desc">
              A card-matching memory game with difficulty levels, switchable card sets, and a short
              memorize peek at the start of each round. Built for SEG3125.
            </span>
            <span className="project-status">Play the game →</span>
          </span>
        </button>
      </section>

      <section className="pf-section">
        <h2 className="pf-h2">Get in touch</h2>
        <p className="pf-text">
          Based in Ottawa, originally from Lebanon.
          <br />
          GitHub:{' '}
          <a href="https://github.com/hadibeiram" target="_blank" rel="noreferrer">
            github.com/hadibeiram
          </a>
        </p>
      </section>

      <footer className="footer-pf">Hadi Beiram · SEG3125 · 2026</footer>
    </div>
  )
}
