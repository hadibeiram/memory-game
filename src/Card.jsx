export default function Card({ emoji, showing, matched, onClick }) {
  let className = 'card'
  if (showing) className += ' showing'
  if (matched) className += ' matched'

  return (
    <button
      className={className}
      onClick={onClick}
      disabled={matched}
      aria-label={showing ? emoji : 'hidden card'}
    >
      <span className="card-inside">
        <span className="card-back"></span>
        <span className="card-front">{emoji}</span>
      </span>
    </button>
  )
}
