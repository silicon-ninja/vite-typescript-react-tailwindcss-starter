import { useState } from 'react'
import HelloPage from './pages/hello'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <HelloPage />
    </div>
  )
}

export default App
