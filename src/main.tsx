import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ESignature } from './projects/01-state-management/ESignature.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ESignature/>
  </StrictMode>,
)
