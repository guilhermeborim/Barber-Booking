import { Navigate } from 'react-router-dom'
import { toast } from 'sonner'
import Cookie from 'js-cookie'
interface PrivateRouteProps {
  children: React.ReactNode
}
export function PrivateRoute({ children }: PrivateRouteProps) {
  const token = Cookie.get('token')
  const currentUser = Cookie.get('currentUser')
  const isLoggedIn = token && currentUser
  if (isLoggedIn) {
    const tokenData = JSON.parse(atob(token.split('.')[1])) // Decodifica o payload do token JWT
    const tokenExpirationTime = tokenData.exp * 1000 // Converte o tempo de expiração do token de segundos para milissegundos
    const currentTime = Date.now() // Obtém o tempo atual em milissegundos
    if (currentTime < tokenExpirationTime) {
      return children
    } else {
      Cookie.remove('token')
      Cookie.remove('currentUser')
      toast.error('Realize o login novamente')
      return <Navigate to="/" />
    }
  } else {
    return <Navigate to="/" />
  }
}

export default PrivateRoute
