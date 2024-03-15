import { Card, CardContent, CardHeader } from '../ui/card'
import { MapPinIcon, StarIcon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { GetBarbers } from '@/types/types-database'
import { GetBarbersQuery } from '@/hooks/barbers/getBarbers'
const BarberRecommended = () => {
  const { data } = GetBarbersQuery()
  const [recommendedBarber, setRecommendedBarber] = useState<GetBarbers>()

  useEffect(() => {
    // Verifica se data é undefined antes de tentar acessar suas propriedades
    if (data && data.length > 0) {
      chooseBarberRandom()
    }
    const interval = setInterval(() => {
      chooseBarberRandom()
    }, 50000)
    return () => clearInterval(interval)
  }, [data])

  const chooseBarberRandom = () => {
    if (!data || !data.length) return // Verifica se data está definido e se tem algum item
    const randomIndex = Math.floor(Math.random() * data.length)
    setRecommendedBarber(data[randomIndex])
  }
  if (!recommendedBarber) return null
  return (
    <Card className="border-none shadow-none py-0">
      <CardHeader className="px-6 pb-3 pt-0">
        <img
          src={recommendedBarber.image}
          alt=""
          className="w-full h-[216px] rounded-lg"
        />
      </CardHeader>
      <CardContent className="pb-4">
        <div>
          <h3 className="text-neutral-900 text-16 font-bold pb-2">
            {recommendedBarber.name}
          </h3>
          <div className="flex flex-col gap-2 text-neutral-500 text-14 font-normal">
            <p className="flex items-center gap-2">
              <MapPinIcon size={16} />
              {recommendedBarber.location}
            </p>
            <p className="flex items-center gap-2">
              <StarIcon size={16} />
              {recommendedBarber.rating}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default BarberRecommended
