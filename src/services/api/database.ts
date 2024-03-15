import { GetBarbers, GetFullBarbers } from '../../types/types-database'
import { apiDatabase } from '../api'

export const BarbersRequest = async () => {
  const { data } = await apiDatabase.get<GetBarbers[]>('/barber')
  return data
}

export const BarbersFullRequest = async (barberId: string) => {
  const { data } = await apiDatabase.get<GetFullBarbers>(
    `/full-barber/${barberId}`,
  )
  return data
}
