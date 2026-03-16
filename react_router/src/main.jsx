import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter,Routes,Route, Outlet } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Services from './pages/Services.jsx'
import Layout from './layouts/Layout.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path='home/:username' element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='services' element={<Services />}/>
          <Route path='contact' element={<Contact />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
