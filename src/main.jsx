import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Cart from './components/Cart.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Cart>
      <App />
    </Cart>
  </StrictMode>
)
