import { GetBarbers } from '../../types/types-database'
import { apiDatabase } from '../api'

export const BarbersRequest = async () => {
  const { data } = await apiDatabase.get<GetBarbers[]>('/barber')
  return data
}
