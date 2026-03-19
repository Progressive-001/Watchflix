import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { MovieProvider } from './context/MovieContext.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'

import { CssVarsProvider } from "@mui/joy/styles";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <CssVarsProvider>
        <MovieProvider>
            <App />
        </MovieProvider>
      </CssVarsProvider>
    </AuthContextProvider>
  </StrictMode>
)
