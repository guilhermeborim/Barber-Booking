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
