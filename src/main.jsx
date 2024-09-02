import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Inicio } from './Inicio';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Inicio />
  </BrowserRouter>
)
