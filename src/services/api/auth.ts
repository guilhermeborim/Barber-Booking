import {
  LoginInterface,
  RegisterInterface,
  signInResponse,
  signUpResponse,
} from '../../types/auth'
import api from '../api'

export const signUp = async (dataRegister: RegisterInterface) => {
  const { data } = await api.post<signUpResponse>(
    '/auth/register',
    dataRegister,
  )
  return data
}

export const signIn = async (dataLogin: LoginInterface) => {
  const { data, status } = await api.post<signInResponse>(
    '/auth/user',
    dataLogin,
  )

  return { data, status }
}

// export const userData = async (id: userDataResponse) => {
//   const token = localStorage.getItem('token')
//   const { data } = await api.get(`/user/${id}`, {
//     headers: { Authorization: `Bearer ${token}` },
//   })

//   return data
// }

export const isAuthenticated = async () => {
  const token = localStorage.getItem('token') // ou cookie

  if (token) {
    try {
      // Faz uma requisição para sua API para verificar se o token é válido
      const response = await api.post('/verifyToken', { token })

      // Se a resposta for 200, o token é válido
      if (response.status === 200) {
        return true
      } else {
        return false
      }
    } catch (error) {
      // Se houver erro na requisição, ou se a resposta não for 200, o token é inválido
      return false
    }
  }

  return false // Se não houver token, o usuário não está autenticado
}
