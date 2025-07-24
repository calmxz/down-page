import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MaintenancePage from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MaintenancePage />
  </StrictMode>,
)
