import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router-dom'
import { RouterProvider } from 'react-router'
import App from './pages/landing-page/App.jsx'
import Navbar from './components/Navbar.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>
  },

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <RouterProvider router={router}/>
  </StrictMode>,
)
