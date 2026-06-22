import { useState } from 'react'
import StartScreen from './StartScreen'
import Game from './Game'

export default function GamePage({ onBack }) {
  const [screen, setScreen] = useState('start')
  const [level, setLevel] = useState('easy')
  const [deck, setDeck] = useState('animals')
  const [round, setRound] = useState(0)

  function startGame(chosenLevel, chosenDeck) {
    setLevel(chosenLevel)
    setDeck(chosenDeck)
    setRound(round + 1)
    setScreen('game')
  }

  return (
    <div className="app">
      <header className="header">
        <span className="logo">Pairs</span>
        <span className="logo-sub">memory match</span>
        <button className="back-link" onClick={onBack}>← Portfolio</button>
      </header>

      {screen === 'start' ? (
        <StartScreen level={level} deck={deck} onStart={startGame} />
      ) : (
        <Game
          key={level + deck + round}
          level={level}
          deck={deck}
          onPlayAgain={() => setRound(round + 1)}
          onExit={() => setScreen('start')}
        />
      )}
    </div>
  )
}
