import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from './components/ui/sonner'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/store'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <Toaster richColors position="top-center" />
  </React.StrictMode>,
)
