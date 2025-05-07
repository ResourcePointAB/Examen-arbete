// Ingångspunkten där appen faktiskt renderas i DOM (vanligtvis använder du ReactDOM.render() här för att starta applikationen)
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import "./i18n"; 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
