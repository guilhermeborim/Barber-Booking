import {
  LoginInterface,
  RegisterInterface,
  signInResponse,
  signUpResponse,
  userDataResponse,
} from '../../types/auth'
import { api } from '../api'
import Cookie from 'js-cookie'
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

export const userData = async (id: string) => {
  const token = Cookie.get('token')
  const { data } = await api.get<userDataResponse>(`/user/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  })
  return data
}
