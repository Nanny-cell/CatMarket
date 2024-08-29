import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { HomePageMarketApp } from './HomePageMarketApp'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HomePageMarketApp />
  </StrictMode>
)
