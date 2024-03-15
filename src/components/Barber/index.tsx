import { Card, CardHeader } from '../ui/card'
import { MapPinIcon, StarIcon } from 'lucide-react'
import { GetBarbers } from '@/types/types-database'
import { useEffect, useState } from 'react'
import { GetBarbersQuery } from '@/hooks/barbers/getBarbers'
import { queryClient } from '@/lib/react-query'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import DetailBarber from '../DetailBarber'

type BarberProps = {
  displayCount?: number
  children?: React.ReactNode
}
const Barber = ({ displayCount, children }: BarberProps) => {
  const { data } = GetBarbersQuery()
  queryClient.setQueryData(['barbers'], data)
  const [randomBarbers, setRandomBarbers] = useState<GetBarbers[]>([])
  const [selectedBarber, setSelectedBarber] = useState<GetBarbers | null>(null)
  const chooseRandomBarbers = () => {
    if (data === undefined) return
    const randomBarbers = data.sort(() => Math.random() - 0.5)
    const selectedBarbers = randomBarbers.slice(0, displayCount)
    setRandomBarbers(selectedBarbers)
  }

  const handleBarberClick = (barber: GetBarbers) => {
    setSelectedBarber(barber)
  }

  useEffect(() => {
    if (data === undefined) return
    if (data.length > 0) chooseRandomBarbers()
  }, [data, displayCount])

  return (
    <Sheet>
      <SheetTrigger asChild>
        <div>
          {randomBarbers.map((barber) => (
            <Card
              className="border-none shadow-none mb-4"
              key={barber.id}
              onClick={() => handleBarberClick(barber)}
            >
              <CardHeader className="flex flex-row gap-3 py-0">
                <div className="max-w-[100px] max-h-[100px]">
                  <img
                    src={barber.image}
                    alt=""
                    className="rounded-lg w-full h-full"
                  />
                </div>
                <div>
                  <h3 className="text-neutral-900 text-16 font-bold pb-2">
                    {barber.name}
                  </h3>
                  <div className="flex flex-col gap-2 text-neutral-500 text-14 font-normal">
                    <p className="flex items-center gap-2">
                      <MapPinIcon size={16} />
                      {barber.location}
                    </p>
                    <p className="flex items-center gap-2">
                      <StarIcon size={16} />
                      {barber.rating}
                    </p>
                  </div>
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </SheetTrigger>
      {children}
      <SheetContent className="w-full bg-white overflow-y-auto">
        <SheetHeader>
          <SheetTitle className="text-start font-bold text-16 text-neutral-900 pb-[34px]">
            Detalhes da Barbearia
          </SheetTitle>
        </SheetHeader>
        {selectedBarber && <DetailBarber barberId={selectedBarber.id} />}
      </SheetContent>
    </Sheet>
  )
}

export default Barber
