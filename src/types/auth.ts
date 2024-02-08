export interface LoginInterface {
  email: string
  password: string
}

export interface RegisterInterface {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export type signUpResponse = {
  msg: string
}

export type signInResponse = {
  token: string
  msg: string
  id: string
  user: string
  email: string
}

export type userDataResponse = {
  user: string
  email: string
}
export type TFormRegisterField =
  | 'name'
  | 'email'
  | 'password'
  | 'confirmPassword'

export type TFormLoginField = 'email' | 'password'
