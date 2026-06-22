export default function HoldPage({ title, onBack }) {
  return (
    <div className="app">
      <header className="header">
        <span className="logo">Hadi Beiram</span>
        <span className="logo-sub">portfolio</span>
        <button className="back-link" onClick={onBack}>← Portfolio</button>
      </header>

      <main className="hold">
        <p className="hold-tag">Case study</p>
        <h1 className="hold-title">{title}</h1>
        <p className="hold-text">
          Coming soon. This is a placeholder for a design I'll add later in the course. For now,
          the finished case study is the memory match game.
        </p>
        <button className="start-btn hold-btn" onClick={onBack}>Back to portfolio</button>
      </main>
    </div>
  )
}
