import { userData } from '@/services/api/auth'
import { useQuery } from '@tanstack/react-query'

export const UserDataProfile = (userId: string) => {
  const query = useQuery({
    queryKey: ['profileUser', userId],
    queryFn: ({ queryKey }) => userData(queryKey[1]),
  })
  return query
}
