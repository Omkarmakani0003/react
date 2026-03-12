import { useEffect, useState } from 'react'
import ToggleButton from './components/ToggleButton'
import { ThemeProvider } from './context/themeContext'
import './App.css'

function App() {

  const [themeMode, setTheme] = useState('light')

  const lightMode = ()=>{
    setTheme('light')
    localStorage.setItem('theme','light')
  }

  const darkMode = ()=>{
    setTheme('dark')
    localStorage.setItem('theme','dark')
  }

  useEffect(()=>{
      document.querySelector('.app').classList.remove('lighe','dark')
      document.querySelector('.app').classList.add(localStorage.getItem('theme') || themeMode)
  },[themeMode])

  return (
    <ThemeProvider value={{themeMode,lightMode,darkMode}}>
      <div className="app light">
        <header className="navbar">
          <div className="logo">MySite</div>
          <nav className="nav-links">
            <a href="#">Home</a>
            <a href="#">Features</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </nav>
          <ToggleButton />
        </header>

        <section className="hero">
          <div className="hero-content">
            <h1>Build Modern Websites</h1>
            <p>Create fast, responsive and beautiful websites.</p>
            <button className="primary-btn">Get Started</button>
          </div>
        </section>
        <section className="features">

          <div className="card">
            <h3>Fast</h3>
            <p>Optimized performance and clean structure.</p>
          </div>

          <div className="card">
            <h3>Responsive</h3>
            <p>Works perfectly on every device.</p>
          </div>

          <div className="card">
            <h3>Modern</h3>
            <p>Minimal UI with modern design.</p>
          </div>

        </section>

        <footer className="footer">
          <p>© 2026 MySite. All rights reserved.</p>
        </footer>

        </div>
      </ThemeProvider>
  )
}

export default App
