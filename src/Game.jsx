import { useEffect, useRef, useState } from 'react'
import { levels, decks, shuffle } from './data'
import Card from './Card'

function buildCards(level, deck) {
  const pairs = levels.find((l) => l.id === level).pairs
  const emojis = decks.find((d) => d.id === deck).emojis.slice(0, pairs)
  const doubled = shuffle(emojis.concat(emojis))
  return doubled.map((emoji, i) => ({ id: i, emoji, matched: false }))
}

function formatTime(total) {
  const m = Math.floor(total / 60)
  const s = total % 60
  return m + ':' + (s < 10 ? '0' + s : s)
}

export default function Game({ level, deck, onPlayAgain, onExit }) {
  const levelInfo = levels.find((l) => l.id === level)
  const deckInfo = decks.find((d) => d.id === deck)
  const totalPairs = levelInfo.pairs

  const [cards, setCards] = useState(() => buildCards(level, deck))
  const [flipped, setFlipped] = useState([])
  const [moves, setMoves] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [countdown, setCountdown] = useState(3)

  const bestKey = 'pairs-best-' + level + '-' + deck
  const [best, setBest] = useState(() => {
    const saved = localStorage.getItem(bestKey)
    return saved ? JSON.parse(saved) : null
  })
  const [newBest, setNewBest] = useState(false)
  const playAgainRef = useRef(null)

  const matchedCount = cards.filter((c) => c.matched).length
  const won = matchedCount === cards.length
  const peeking = countdown > 0

  // show the board for a few seconds before play starts
  useEffect(() => {
    if (countdown <= 0) return
    const t = setTimeout(() => setCountdown(countdown - 1), 1000)
    return () => clearTimeout(t)
  }, [countdown])

  // count up the timer while playing
  useEffect(() => {
    if (peeking || won) return
    const t = setInterval(() => setSeconds((s) => s + 1), 1000)
    return () => clearInterval(t)
  }, [peeking, won])

  // resolve a turn once two cards are face up
  useEffect(() => {
    if (flipped.length !== 2) return
    setMoves((m) => m + 1)
    const [a, b] = flipped
    if (cards[a].emoji === cards[b].emoji) {
      const t = setTimeout(() => {
        setCards((prev) => prev.map((c, i) => (i === a || i === b ? { ...c, matched: true } : c)))
        setFlipped([])
      }, 500)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => setFlipped([]), 900)
    return () => clearTimeout(t)
  }, [flipped])

  // store the best run for this level and card set
  useEffect(() => {
    if (!won) return
    const run = { moves, seconds }
    if (!best || run.moves < best.moves || (run.moves === best.moves && run.seconds < best.seconds)) {
      localStorage.setItem(bestKey, JSON.stringify(run))
      setBest(run)
      setNewBest(true)
    }
  }, [won])

  // move focus to the win screen so it is announced
  useEffect(() => {
    if (won && playAgainRef.current) playAgainRef.current.focus()
  }, [won])

  function handleClick(index) {
    if (peeking || won) return
    if (flipped.length === 2) return
    if (flipped.includes(index)) return
    if (cards[index].matched) return
    setFlipped(flipped.concat(index))
  }

  return (
    <main className="game">
      <div className="bar">
        <button className="text-btn" onClick={onExit}>Settings</button>
        <div className="scores">
          <div className="score"><b>{matchedCount / 2}/{totalPairs}</b><span>pairs</span></div>
          <div className="score"><b>{moves}</b><span>moves</span></div>
          <div className="score"><b>{formatTime(seconds)}</b><span>time</span></div>
        </div>
        <button className="text-btn" onClick={onPlayAgain}>Restart</button>
      </div>

      <p className={peeking ? 'status' : 'status quiet'} role="status">
        {peeking ? 'Memorize the cards… ' + countdown : levelInfo.label + ' · ' + deckInfo.label}
      </p>

      <div className={'board ' + level}>
        {cards.map((card, i) => (
          <Card
            key={card.id}
            emoji={card.emoji}
            showing={peeking || flipped.includes(i) || card.matched}
            matched={card.matched}
            onClick={() => handleClick(i)}
          />
        ))}
      </div>

      {won && (
        <div className="overlay">
          <div className="result" role="dialog" aria-modal="true" aria-labelledby="result-title">
            <p className="result-tag">{newBest ? 'New best score!' : 'Nice work'}</p>
            <h2 id="result-title" className="result-title">You matched every pair</h2>
            <div className="result-scores">
              <div><b>{formatTime(seconds)}</b><span>time</span></div>
              <div><b>{moves}</b><span>moves</span></div>
            </div>
            {best && <p className="result-best">Best here: {best.moves} moves · {formatTime(best.seconds)}</p>}
            <button ref={playAgainRef} className="start-btn" onClick={onPlayAgain}>Play again</button>
            <button className="text-btn center" onClick={onExit}>Change settings</button>
          </div>
        </div>
      )}
    </main>
  )
}
