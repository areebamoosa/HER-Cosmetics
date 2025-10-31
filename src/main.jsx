import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { CartProvider } from './Components/Cart/CartContext.jsx'
import { SearchProvider } from './Components/ProductSearch/SearchContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SearchProvider>
    <CartProvider>
    <App />
    </CartProvider>
    </SearchProvider>
  </StrictMode>,
)