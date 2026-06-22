import { useState } from 'react'
import { levels, decks } from './data'

export default function StartScreen({ level, deck, onStart }) {
  const [pickedLevel, setPickedLevel] = useState(level)
  const [pickedDeck, setPickedDeck] = useState(deck)

  return (
    <main className="start">
      <h1 className="start-title">Find every matching pair</h1>
      <p className="start-text">
        The whole board is shown for a few seconds at the start. Memorize it, then flip the
        cards two at a time and match them all in as few moves as you can.
      </p>

      <div className="panel">
        <p className="picker-label">Difficulty</p>
        <div className="level-row">
          {levels.map((item) => (
            <button
              key={item.id}
              className={'level-btn' + (pickedLevel === item.id ? ' selected' : '')}
              aria-pressed={pickedLevel === item.id}
              onClick={() => setPickedLevel(item.id)}
            >
              <span className="level-name">{item.label}</span>
              <span className="level-pairs">{item.pairs} pairs</span>
            </button>
          ))}
        </div>

        <p className="picker-label">Card set</p>
        <div className="deck-row">
          {decks.map((item) => (
            <button
              key={item.id}
              className={'deck-btn' + (pickedDeck === item.id ? ' selected' : '')}
              aria-pressed={pickedDeck === item.id}
              onClick={() => setPickedDeck(item.id)}
            >
              <span className="deck-emojis">{item.emojis.slice(0, 3).join(' ')}</span>
              <span className="deck-name">{item.label}</span>
            </button>
          ))}
        </div>

        <button className="start-btn" onClick={() => onStart(pickedLevel, pickedDeck)}>
          Start game
        </button>
      </div>
    </main>
  )
}
