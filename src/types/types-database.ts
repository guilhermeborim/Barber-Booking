export type GetBarbers = {
  id: string
  name: string
  image?: string
  description: string
  location: string
  rating: number
}
export type OpeningHour = {
  id: string
  opening: string
  closure: string
}

export type Barber = {
  id: string
  name: string
  image: string
  specialty: string
  rating: number
}

export type Service = {
  id: string
  name: string
  description: string
  price: string
  image: string
}
export type GetFullBarbers = {
  id: string
  name: string
  image?: string
  description: string
  location: string
  rating: number
  barbers: Barber[]
  services: Service[]
  openingHours: OpeningHour[]
}
