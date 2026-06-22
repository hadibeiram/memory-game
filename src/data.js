export const levels = [
  { id: 'easy', label: 'Easy', pairs: 6 },
  { id: 'medium', label: 'Medium', pairs: 8 },
  { id: 'hard', label: 'Hard', pairs: 12 },
]

export const decks = [
  { id: 'animals', label: 'Animals', emojis: ['🐶', '🐱', '🦊', '🐼', '🐨', '🦁', '🐸', '🐵', '🐧', '🦉', '🐢', '🦋'] },
  { id: 'fruit', label: 'Fruit', emojis: ['🍎', '🍌', '🍇', '🍓', '🍑', '🍍', '🥝', '🍉', '🍒', '🥥', '🍐', '🍊'] },
  { id: 'sports', label: 'Sports', emojis: ['⚽', '🏀', '🏈', '⚾', '🎾', '🏐', '🏓', '🥊', '⛳', '🏸', '🎳', '🏒'] },
  { id: 'travel', label: 'Travel', emojis: ['✈️', '🚗', '🚀', '⛵', '🚲', '🚂', '🏝️', '🗽', '🎡', '⛺', '🧭', '🗺️'] },
]

export function shuffle(list) {
  const copy = list.slice()
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    const temp = copy[i]
    copy[i] = copy[j]
    copy[j] = temp
  }
  return copy
}
