import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './pages/landing-page/App.jsx'
import Navbar from './components/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar></Navbar>
    <App />
  </StrictMode>,
)
