import { useEffect, useState } from 'react'
import Portfolio from './Portfolio'
import GamePage from './GamePage'

function readRoute() {
  return window.location.hash === '#game' ? 'game' : 'portfolio'
}

export default function App() {
  const [page, setPage] = useState(readRoute)

  useEffect(() => {
    const onChange = () => {
      setPage(readRoute())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  if (page === 'game') return <GamePage onBack={() => { window.location.hash = '' }} />
  return <Portfolio onNavigate={(hash) => { window.location.hash = hash }} />
}
