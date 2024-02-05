import LoginPage from '@/pages/Login'
import RegisterPage from '@/pages/Register'
import { Route, Routes } from 'react-router-dom'

function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  )
}

export default Rotas
