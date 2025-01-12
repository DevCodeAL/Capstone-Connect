import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './AutContext.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <GoogleOAuthProvider clientId='117436019187-r8kdt6oc7sjiejl98pfna9svsq8rcoau.apps.googleusercontent.com'>
        <AuthProvider>
            <App/>
          </AuthProvider>
      </GoogleOAuthProvider>
  // </StrictMode>,
)
