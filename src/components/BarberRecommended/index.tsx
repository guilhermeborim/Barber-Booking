import { Card, CardContent, CardHeader } from '../ui/card'
import { MapPinIcon, StarIcon } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { GetBarbers } from '@/types/types-database'
const BarberRecommended = () => {
  const [recommendedBarber, setRecommendedBarber] = useState<GetBarbers>()
  const { barbers } = useSelector((state: any) => state.userReducer)

  const chooseBarberRandom = () => {
    const randomIndex = Math.floor(Math.random() * barbers.length)
    setRecommendedBarber(barbers[randomIndex])
  }

  useEffect(() => {
    if (barbers.length > 0) {
      chooseBarberRandom()
    }
    const interval = setInterval(() => {
      chooseBarberRandom()
    }, 50000)
    return () => clearInterval(interval)
  }, [barbers])

  if (!recommendedBarber) return null
  return (
    <Card className="border-none shadow-none py-0">
      <CardHeader className="py-0">
        <img
          src={recommendedBarber.image}
          alt=""
          className="w-full h-[216px]"
        />
      </CardHeader>
      <CardContent className="pb-4">
        <div className="pt-3">
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
              {recommendedBarber.assessment}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default BarberRecommended
