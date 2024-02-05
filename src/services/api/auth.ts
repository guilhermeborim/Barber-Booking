import { RegisterInterface, signUpResponse } from '../../types/auth'
import api from '../api'

export const signUp = async (dataRegister: RegisterInterface) => {
  const { data } = await api.post<signUpResponse>(
    '/auth/register',
    dataRegister,
  )

  return data
}
