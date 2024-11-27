import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import CoinContextProvider from './context/CoinContext'
import {Auth0ProviderWithHistory} from './components/auth0-provider-with-history.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Auth0ProviderWithHistory>
      <CoinContextProvider>
        <App />
      </CoinContextProvider>
    </Auth0ProviderWithHistory>
  </BrowserRouter>,
)
