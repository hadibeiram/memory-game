import { useEffect, useState } from 'react'
import Portfolio from './Portfolio'
import GamePage from './GamePage'
import HoldPage from './HoldPage'

const comingSoon = {
  '#service': 'Service booking site',
  '#ecommerce': 'Online store',
  '#analytics': 'Analytics dashboard',
}

function readRoute() {
  const hash = window.location.hash
  if (hash === '#game') return { page: 'game' }
  if (comingSoon[hash]) return { page: 'soon', title: comingSoon[hash] }
  return { page: 'portfolio' }
}

export default function App() {
  const [route, setRoute] = useState(readRoute)

  useEffect(() => {
    const onChange = () => {
      setRoute(readRoute())
      window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onChange)
    return () => window.removeEventListener('hashchange', onChange)
  }, [])

  const goHome = () => { window.location.hash = '' }

  if (route.page === 'game') return <GamePage onBack={goHome} />
  if (route.page === 'soon') return <HoldPage title={route.title} onBack={goHome} />
  return <Portfolio onNavigate={(hash) => { window.location.hash = hash }} />
}
