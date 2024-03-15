import { BarbersFullRequest } from '@/services/api/database'
import { useQuery } from '@tanstack/react-query'

export const GetBarbersFullQuery = (barberId: string) => {
  const query = useQuery({
    queryKey: ['fullBarber', barberId],
    queryFn: ({ queryKey }) => BarbersFullRequest(queryKey[1]),
  })
  return query
}
