import {
  LoginInterface,
  RegisterInterface,
  signInResponse,
  signUpResponse,
  userDataResponse,
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

export const userData = async (id: userDataResponse) => {
  const token = localStorage.getItem('token')
  const { data } = await api.get(`/user/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  })

  return data
}
