import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import TestResultsDashboard from './TestResultsDashboard.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <TestResultsDashboard />
  </StrictMode>,
)
