import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { LoginInterface } from '@/types/auth'

export const useLoginForm = () => {
  // validacao com zod de email e senha

  const loginFormValidationSchema = z.object({
    email: z
      .string()
      .nonempty('O campo “E-mail” é obrigatório.')
      .email('Por favor, utilize um formato de e-mail válido.'),
    password: z
      .string()
      .nonempty('O campo “Senha” é obrigatório.')
      .min(4, { message: 'A senha precisa conter 4 caracteres' }),
  })

  // usando o useForm e o zod do Hook Form
  const { register, formState, setError, handleSubmit } =
    useForm<LoginInterface>({
      resolver: zodResolver(loginFormValidationSchema),
    })

  return { register, formState, setError, handleSubmit }
}
