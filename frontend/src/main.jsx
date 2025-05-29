import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CookiesProvider } from 'react-cookie'; 
import { UserProvider } from './context/userContext.jsx';
// import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <CookiesProvider>
      <UserProvider>


    <App />
      </UserProvider>
    </CookiesProvider>
  </React.StrictMode>,
)
