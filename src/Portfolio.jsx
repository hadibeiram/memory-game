const cases = [
  {
    hash: '#service',
    emoji: '💈',
    title: 'Service booking site',
    desc: 'A booking page for a small local business.',
    status: 'Coming soon',
    band: '#f4ad2b',
  },
  {
    hash: '#game',
    emoji: '🧠',
    title: 'Pairs — memory match game',
    desc: 'A card-matching memory game with difficulty levels and a memorize peek.',
    status: 'Play',
    band: '#e8542f',
    live: true,
  },
  {
    hash: '#ecommerce',
    emoji: '🛍️',
    title: 'Online store',
    desc: 'A small e-commerce storefront with a cart.',
    status: 'Coming soon',
    band: '#1f9e8f',
  },
  {
    hash: '#analytics',
    emoji: '📊',
    title: 'Analytics dashboard',
    desc: 'A dashboard with charts and visual summaries.',
    status: 'Coming soon',
    band: '#3a6ea5',
  },
]

export default function Portfolio({ onNavigate }) {
  return (
    <div className="app portfolio">
      <header className="header">
        <span className="logo">Hadi Beiram</span>
        <span className="logo-sub">UI design portfolio</span>
      </header>

      <section className="hero">
        <p className="hero-eyebrow">SEG3125 · University of Ottawa</p>
        <h1 className="hero-title">I build clean, easy-to-use web interfaces.</h1>
        <p className="hero-text">
          I'm a software engineering student learning UI and UX design. This page collects the
          designs I build through the course, starting with a memory game you can play right now.
        </p>
      </section>

      <section className="pf-section">
        <h2 className="pf-h2">About me</h2>
        <p className="pf-text">
          I'm a software engineering student at the University of Ottawa. I like turning rough ideas
          into screens that feel obvious to use, and I spend a lot of my free time building small web
          projects and games. I care about clear layouts, readable type, and the small details that
          make a screen easier to read at a glance.
        </p>
      </section>

      <section className="pf-section">
        <h2 className="pf-h2">How I work</h2>
        <p className="pf-text">
          Right now I'm taking SEG3125 (Analysis and Design of User Interfaces), where I'm learning
          user-centered design, visual communication, and the Gestalt principles, and putting them
          into practice across a set of projects. My process is simple: figure out who the design is
          for, sketch a few directions, build a working prototype, then test it and cut whatever gets
          in the way. I keep the{' '}
          <a href="https://www.nngroup.com/articles/" target="_blank" rel="noreferrer">
            Nielsen Norman Group
          </a>{' '}
          articles close as a reference.
        </p>
        <p className="pf-text">Tools I'm comfortable with: HTML, CSS, JavaScript, React, and Figma.</p>
      </section>

      <section className="pf-section">
        <h2 className="pf-h2">Case studies</h2>
        <p className="pf-text">
          Four designs from the course. The memory game is finished — the others are on the way.
        </p>
        <div className="case-grid">
          {cases.map((item) => (
            <button
              key={item.hash}
              className={'case-card' + (item.live ? ' live' : '')}
              onClick={() => onNavigate(item.hash)}
              aria-label={item.title + (item.live ? ', play the game' : ', coming soon')}
            >
              <span className="case-band" style={{ background: item.band }}>
                <span className="case-emoji">{item.emoji}</span>
              </span>
              <span className="case-body">
                <span className="case-title">{item.title}</span>
                <span className="case-desc">{item.desc}</span>
                <span className="case-status">{item.status} →</span>
              </span>
            </button>
          ))}
        </div>
      </section>

      <section className="pf-section">
        <h2 className="pf-h2">Get in touch</h2>
        <p className="pf-text">
          GitHub:{' '}
          <a href="https://github.com/hadibeiram" target="_blank" rel="noreferrer">
            github.com/hadibeiram
          </a>
          <br />
          Email: <span className="pf-soft">your.email@uottawa.ca</span>
        </p>
      </section>

      <footer className="footer-pf">Hadi Beiram · SEG3125 · 2026</footer>
    </div>
  )
}
