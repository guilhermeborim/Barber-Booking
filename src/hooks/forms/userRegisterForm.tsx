import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { RegisterInterface } from '@/types/auth'

export const useRegisterForm = () => {
  // validacao com zod de email e senha

  const registerFormValidationSchema = z
    .object({
      name: z
        .string()
        .nonempty('O campo “Nome” é obrigatório.')
        .min(3, { message: 'O nome precisa ter pelo menos 3 letras' }),
      email: z
        .string()
        .nonempty('O campo “E-mail” é obrigatório.')
        .email('Por favor, utilize um formato de e-mail válido.'),
      password: z
        .string()
        .nonempty('O campo “Senha” é obrigatório.')
        .min(4, { message: 'A senha precisa conter 4 caracteres' }),
      confirmPassword: z
        .string()
        .nonempty('O campo “Confirmação de senha” é obrigatório.')
        .min(4, { message: 'A senha precisa conter 4 caracteres' }),
    })
    .refine(({ password, confirmPassword }) => password === confirmPassword, {
      message: 'As senhas não são iguais',
      path: ['confirmPassword'],
    })

  // usando o useForm e o zod do Hook Form
  const { register, formState, setError, handleSubmit } =
    useForm<RegisterInterface>({
      resolver: zodResolver(registerFormValidationSchema),
    })

  return { register, formState, setError, handleSubmit }
}
