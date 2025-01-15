import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from "react-toastify";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ToastContainer
    className="font-montserrat"
    position="top-right"
    autoClose={6000}
    hideProgressBar={false}
    draggable
    pauseOnHover
    />
    <App />
  </StrictMode>,
)
