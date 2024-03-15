import { Link, Navigate } from 'react-router-dom'
import { RegisterInterface, TFormRegisterField } from '@/types/auth'
import {
  PostRegisterMutate,
  useRegisterForm,
} from '../../hooks/forms/userRegisterForm'
import { toast } from 'sonner'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'

const FormRegister = () => {
  const { mutate, isSuccess, isPending } = PostRegisterMutate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useRegisterForm()
  const registerFormFields = [
    {
      name: 'name',
      label: 'Seu nome',
      type: 'text',
      placeholder: 'Guilherme Machado Borim',
    },
    {
      name: 'email',
      label: 'Seu email',
      type: 'email',
      placeholder: 'borimdev@gmail.com',
    },
    {
      name: 'password',
      label: 'Sua senha',
      type: 'password',
      placeholder: '******',
    },
    {
      name: 'confirmPassword',
      label: 'Confirme sua senha',
      type: 'password',
      placeholder: '******',
    },
  ]
  if (isSuccess) {
    return <Navigate to="/" />
  }

  const onRegister = async (data: RegisterInterface) => {
    const response = {
      data,
    }
    mutate(response.data, {
      onSuccess: (data) => {
        toast.success(data.msg)
      },
      onError: (error: any) => {
        const status = error.response.status
        const { msg } = error.response.data

        if (status === 422) {
          toast.error(msg)
        } else if (status === 400) {
          toast.error(msg)
        } else {
          toast.error('Erro inesperado, tente novamente mais tarde')
        }
      },
    })
  }
  return (
    <>
      {isPending ? (
        <h1>carregando</h1>
      ) : (
        <Card className="border-none rounded-none h-screen overflow-hidden flex flex-col justify-center">
          <CardHeader>
            <CardTitle className="text-28 text-primary-900 font-bold">
              Registre-se aqui
            </CardTitle>
            <CardDescription className="text-16 text-neutral-500 font-normal">
              Preencha todos os campos abaixo para criar sua conta
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onRegister)}>
              {registerFormFields.map((field) => (
                <div key={field.name} className="mb-4 flex flex-col">
                  <label
                    htmlFor={field.name}
                    className="text-neutral-900 text-14 font-medium pb-2"
                  >
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.name}
                    placeholder={field.placeholder}
                    {...register(field.name as TFormRegisterField)}
                    className="border-neutral-300 rounded-lg border py-3 pl-3 placeholder:text-neutral-400 text-14 text-neutral-900 font-normal outline-none"
                  />
                  {errors[field.name as TFormRegisterField] && (
                    <span className="text-warning-600 text-12 font-bold">
                      {errors[field.name as TFormRegisterField]?.message}
                    </span>
                  )}
                </div>
              ))}
              <input
                type="submit"
                value="Registre"
                className="bg-primary-900 text-white w-full text-center rounded-lg py-4 font-bol text-16"
              />
            </form>
            <div className="font-bold text-14 ">
              <p className="text-neutral-500 py-2 text-center">
                Já tem uma conta?{' '}
                <Link to="/" className="text-primary-900 ">
                  Faça login
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}

export default FormRegister
