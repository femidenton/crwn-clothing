import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import './index.scss'
import { UserProvider } from './context/user.context.jsx'
import { CategoriesProvider } from './context/categories.context.jsx'
import { CartDropdownProvider } from './context/cart-dropdown.context.jsx'




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CategoriesProvider>
          <CartDropdownProvider>
            <App />  
          </CartDropdownProvider>
        </CategoriesProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
