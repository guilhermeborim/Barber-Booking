import { userData } from '@/services/api/auth'
import { userDataResponse } from '@/types/auth'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Header = () => {
  const { id } = useParams()
  const [user, setUser] = useState<userDataResponse>()
  useEffect(() => {
    const getUserData = async () => {
      const { user } = await userData(id as unknown as userDataResponse)
      setUser(user)
    }

    getUserData()
  }, [])
  return (
    <div>
      <p>Seja bem-vindo, {user?.name}</p>
    </div>
  )
}

export default Header
