import { useQuery } from '@tanstack/react-query'
import Cookie from 'js-cookie'

type infoUserType = {
  user: string
  id: string
}
function getUserData() {
  const user = Cookie.get('currentUser')
  if (user) {
    return JSON.parse(user)
  }
  return null
}
export const InfoUser = () => {
  const query = useQuery<infoUserType>({
    queryKey: ['infoUser'],
    queryFn: () => getUserData(),
  })
  return query
}
