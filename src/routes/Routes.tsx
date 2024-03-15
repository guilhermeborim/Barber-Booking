import RegisterPage from '@/pages/Register'
import DashboardPage from '@/pages/Dashboard'
import { Routes, Route } from 'react-router-dom'
import LoginPage from '@/pages/Login'
import { PrivateRoute } from './PrivateRoute'
import ProfilePage from '@/pages/Profile'
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
      <Route
        path="/dashboard/profile/:id"
        element={
          <PrivateRoute>
            <ProfilePage />
          </PrivateRoute>
        }
      />
    </Routes>
  )
}

export default Rotas
