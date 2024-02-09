import { Card, CardHeader } from '../ui/card'
import { MapPinIcon, StarIcon } from 'lucide-react'
import { BarbersRequest } from '@/services/api/database'
import { GetBarbers } from '@/types/types-database'
import { useEffect, useState } from 'react'
import ButtonSheet from '../Button'
import { useDispatch } from 'react-redux'
import { responseBarbers } from '@/redux/user/actions'
const Barber = () => {
  const [randomBarbers, setRandomBarbers] = useState<GetBarbers[]>([])
  const dispatch = useDispatch()
  const [getBarber, setGetBarber] = useState<GetBarbers[]>([])

  const getBarbers = async () => {
    const barbersResponse = await BarbersRequest()
    setGetBarber(barbersResponse)
    dispatch(responseBarbers(barbersResponse))
  }

  const chooseRandomBarbers = () => {
    const randomBarbers = getBarber.sort(() => Math.random() - 0.5)
    const selectedBarbers = randomBarbers.slice(0, 3)
    setRandomBarbers(selectedBarbers)
  }
  useEffect(() => {
    getBarbers()
  }, [])
  useEffect(() => {
    if (getBarber.length > 0) {
      chooseRandomBarbers()
    }
  }, [getBarber])
  return (
    <>
      {randomBarbers.slice(0, 3).map((barber) => (
        <Card className="border-none shadow-none mb-4" key={barber.id}>
          <CardHeader className="flex flex-row gap-3 px-6 py-0">
            <div>
              <img src={barber.image} alt="" className="rounded-lg" />
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
                  {barber.assessment}
                </p>
              </div>
            </div>
          </CardHeader>
        </Card>
      ))}
      <ButtonSheet />
    </>
  )
}

export default Barber
