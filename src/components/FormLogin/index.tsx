import { Link, Navigate } from 'react-router-dom'
import { LoginInterface, TFormLoginField } from '@/types/auth'
import { PostUserMutate, useLoginForm } from '../../hooks/forms/userLoginForm'
import { toast } from 'sonner'
import ImgLogin from '../../assets/login.png'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card'
import { useEffect, useState } from 'react'
import Loading from '../Loading'
import Cookie from 'js-cookie'
const FormLogin = () => {
  const { mutate, isPending, isSuccess } = PostUserMutate()
  // Estado para checar se o usuario esta logado
  const [auth, setAuth] = useState(false)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useLoginForm()

  const loginFormFields = [
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
  ]

  // Verifica se existe o token nos cookies, se sim, seta o estado para true
  useEffect(() => {
    const token = Cookie.get('token')
    if (token) {
      setAuth(true)
    }
  }, [])

  if (isSuccess || auth) {
    return <Navigate to="/dashboard" />
  }
  // Função para fazer login
  const onLogin = (data: LoginInterface) => {
    const response = {
      data,
    }
    mutate(response.data, {
      onSuccess: (data) => {
        toast.success(data.data.msg)
        Cookie.set('token', data.data.token)
        Cookie.set(
          'currentUser',
          JSON.stringify({
            user: data.data.user,
            email: data.data.email,
            id: data.data.id,
          }),
        )
      },
      onError: (error: any) => {
        const status = error.response.status
        const { msg } = error.response.data

        if (status === 422) {
          toast.error(msg)
        } else if (status === 404) {
          toast.error(msg)
        } else {
          toast.error('Erro inesperado, tente novamente mais tarde')
        }
      },
    })
  }

  return (
    <main>
      {isPending ? (
        <Loading loading={isPending} />
      ) : (
        <>
          <section>
            <img src={ImgLogin} alt="" className="w-full" />
          </section>
          <Card className="border-none rounded-t-[28px] absolute top-60 bg-white">
            <CardHeader>
              <CardTitle className="text-28 text-primary-900 font-bold">
                Bem vindo de volta
              </CardTitle>
              <CardDescription className="text-16 text-neutral-500 font-normal">
                Preencha todos os campos abaixo para acessar a plataforma.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onLogin)}>
                {loginFormFields.map((field) => (
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
                      {...register(field.name as TFormLoginField)}
                      className="border-neutral-300 rounded-lg border py-3 pl-3 placeholder:text-neutral-400 text-14 text-neutral-900 font-normal outline-none"
                    />
                    {errors[field.name as TFormLoginField] && (
                      <span className="text-warning-600 text-12 font-bold">
                        {errors[field.name as TFormLoginField]?.message}
                      </span>
                    )}
                  </div>
                ))}
                <input
                  type="submit"
                  value="Login"
                  className="bg-primary-900 text-white w-full text-center rounded-lg py-4 font-bol text-16"
                />
              </form>
              <div className="font-bold text-14 ">
                <p className="text-neutral-500 py-2 text-center">
                  Não tem uma conta?{' '}
                  <Link to="/register" className="text-primary-900 ">
                    Registre-se
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </main>
  )
}

export default FormLogin
