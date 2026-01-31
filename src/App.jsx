import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div style={{ marginTop: '2rem', textAlign: 'center' }}>
        <ExpandingButton />
      </div>
    </>
  )
}

function ExpandingButton() {
  const [size, setSize] = useState(100);

  const handleClick = () => {
    setSize((prev) => prev + 20);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        width: `${size}px`,
        height: `${size / 2}px`,
        background: 'linear-gradient(90deg, #4e54c8, #8f94fb)',
        color: '#fff',
        border: 'none',
        borderRadius: '30px',
        fontSize: `${size / 10}px`,
        transition: 'all 0.3s cubic-bezier(.25,.8,.25,1)',
        boxShadow: '0 4px 14px 0 rgba(74,58,255,0.25)'
      }}
    >
      Click me! {size}px
    </button>
  )
}

export default App
