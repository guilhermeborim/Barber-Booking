import { userDataResponse } from '@/types/auth'
import { useState } from 'react'

// recuperar os dados do usuário logado que esta no localstorage
export default function useUserData() {
  const [userData, setUserData] = useState<userDataResponse | null>(() => {
    const user = localStorage.getItem('currentUser')
    if (user) {
      return JSON.parse(user)
    }
    return null
  })

  return { userData, setUserData }
}

export const handleLogout = () => {
  localStorage.clear()
  window.location.href = '/'
}
