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

export type TFormRegisterField =
  | 'name'
  | 'email'
  | 'password'
  | 'confirmPassword'

export type TFormLoginField = 'email' | 'password'
