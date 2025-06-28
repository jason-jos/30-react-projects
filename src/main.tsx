import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import { ESignature } from './projects/01-state-management/ESignature.tsx'
// import { Color } from './projects/02-color-switcher/Color.tsx'
// import Photo from './projects/03-like-photo/Photo.tsx'
// import { Pdf } from './projects/04-pdf-app/Pdf.tsx'
import ThemeToogle from "./projects/05-ThemeToggle/ThemeToogle"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <ESignature/> */} 
    {/* <Color/> */}
    {/* <Photo/> */}
    {/* <Pdf/> */}
    <ThemeToogle/>
  </StrictMode>,
)
