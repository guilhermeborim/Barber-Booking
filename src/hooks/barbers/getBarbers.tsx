import { BarbersRequest } from '@/services/api/database'
import { useQuery } from '@tanstack/react-query'

export const GetBarbersQuery = () => {
  const query = useQuery({
    queryKey: ['barbers'],
    queryFn: BarbersRequest,
  })

  return query
}
