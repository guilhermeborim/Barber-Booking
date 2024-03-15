import React from 'react'
import ReactDOM from 'react-dom/client'
import { Toaster } from './components/ui/sonner'
import App from './App'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './lib/react-query'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    <Toaster richColors position="top-center" />
  </React.StrictMode>,
)
