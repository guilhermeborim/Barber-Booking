import RegisterPage from '@/pages/Register'
import DashboardPage from '@/pages/Dashboard'
import { Routes, Route } from 'react-router-dom'
import LoginPage from '@/pages/Login'
import { PrivateRoute } from './PrivateRoute'

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <DashboardPage />
          </PrivateRoute>
        }
      />
    </Routes>
  )
}

export default Rotas
