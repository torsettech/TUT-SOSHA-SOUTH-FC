import { useState } from 'react'
import './App.css'
import ClubLogo from "./assets/Club_Logo.png"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={ClubLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>TUT SOSHANGUVE SOUTH FC</h1>
    </>
  )
}

export default App
