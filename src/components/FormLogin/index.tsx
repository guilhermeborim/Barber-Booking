import { Link } from 'react-router-dom'
import { signIn } from '@/services/api/auth'
import { LoginInterface, TFormLoginField } from '@/types/auth'
import { useLoginForm } from '../../hooks/forms/userLoginForm'
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
import axios from 'axios'

const FormLogin = () => {
  const [isLogged, setIsLogged] = useState(false)
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
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      axios.defaults.headers.common.Authorization = `Bearer ${token}`
      setIsLogged(true)
    }
  }, [])
  function navigateToDashboard(id: string) {
    window.location.href = `/dashboard/${id}`
  }
  const onRegister = async (data: LoginInterface): Promise<void> => {
    try {
      if (isLogged) {
        toast.error('Você já está logado')
        return
      }
      const {
        data: { msg, token, id },
        status,
      } = await signIn(data)

      if (status === 200) {
        toast.success(msg)
        localStorage.setItem('token', token)
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
        setIsLogged(true)
      }
      navigateToDashboard(id)
    } catch (error: any) {
      const status = error.response.status
      const { msg } = error.response.data

      if (status === 422) {
        toast.error(msg)
      } else if (status === 400) {
        toast.error(msg)
      } else {
        toast.error('Erro inesperado, tente novamente mais tarde')
      }
    }
  }
  return (
    <main>
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
          <form onSubmit={handleSubmit(onRegister)}>
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
    </main>
  )
}

export default FormLogin
