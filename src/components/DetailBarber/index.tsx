import {
  CalendarIcon,
  MapPinIcon,
  PodcastIcon,
  ScissorsIcon,
  StarIcon,
} from 'lucide-react'
import { Card, CardContent, CardHeader } from '../ui/card'
import Heart from '../../assets/Heart.svg'
import Share from '../../assets/Share.svg'
import Maps from '../../assets/logos_google-maps.svg'
import Chat from '../../assets/chat.svg'
import { useState } from 'react'
import { Button } from '../ui/button'
import AboutBarber from '../AboutBarber'
import ServiceBarber from '../ServiceBarber'
import LoadingBarber from '../Loading/LoadingBarber'
import ScheduleBarber from '../ScheduleBarber'
import { GetBarbersFullQuery } from '@/hooks/barbers/getFullBarbers'

type barberIdProps = {
  barberId: string
}

const DetailBarber = ({ barberId }: barberIdProps) => {
  const { data, isPending } = GetBarbersFullQuery(barberId)
  const [selected, setSelected] = useState('sobre')

  return (
    <main>
      {isPending ? (
        <LoadingBarber />
      ) : (
        <Card className="border-none outline-none shadow-none relative">
          {data && (
            <>
              <CardHeader className="p-0">
                <img
                  src={data?.image}
                  alt=""
                  className="w-full h-[216px] rounded-lg"
                />
                <div>
                  <h3 className="text-neutral-900 text-16 font-bold pb-2">
                    {data.name}
                  </h3>
                  <div className="flex flex-col gap-2 text-neutral-500 text-14 font-normal">
                    <p className="flex items-center gap-2">
                      <MapPinIcon size={16} />
                      {data?.location}
                    </p>
                    <p className="flex items-center gap-2">
                      <StarIcon size={16} />
                      4.8
                    </p>
                  </div>
                </div>
                <div className="flex justify-between items-center px-6 py-4">
                  <div className="flex flex-col justify-center items-center">
                    <img src={Maps} alt="" />
                    <span>Maps</span>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <img src={Chat} alt="" />
                    <span>Chat</span>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <img src={Share} alt="" />
                    <span>Share</span>
                  </div>
                  <div className="flex flex-col justify-center items-center">
                    <img src={Heart} alt="" />
                    <span>Save</span>
                  </div>
                </div>
              </CardHeader>
              <div className="bg-[#EDEFFB] relative top-0 bottom-0 -left-[24px] w-screen ">
                <div className="px-[24px] flex justify-between py-3 items-center">
                  <div
                    className={`flex items-center font-bold text-[16px] gap-1 rounded-lg px-3 py-1 group focus-within:border-2 focus-within:border-[#363062] ${selected === 'sobre' ? 'border-2 border-[#363062] text-[#363062]' : 'text-[#8683A1]'}`}
                    onClick={() => setSelected('sobre')}
                  >
                    <PodcastIcon size={20} />
                    Sobre
                  </div>
                  <div
                    className={`flex items-center font-bold text-[16px] gap-1 rounded-lg px-3 py-1 group focus-within:border-2 focus-within:border-[#363062] ${selected === 'servicos' ? 'border-2 border-[#363062] text-[#363062]' : 'text-[#8683A1]'}`}
                    onClick={() => setSelected('servicos')}
                  >
                    <ScissorsIcon size={20} />
                    Serviços
                  </div>
                  <div
                    className={`flex items-center font-bold text-[16px] gap-1 rounded-lg px-3 py-1 group focus-within:border-2 focus-within:border-[#363062] ${selected === 'agenda' ? 'border-2 border-[#363062] text-[#363062]' : 'text-[#8683A1]'}`}
                    onClick={() => setSelected('agenda')}
                  >
                    <CalendarIcon size={20} />
                    Agenda
                  </div>
                </div>
              </div>
              <CardContent className="px-0 pt-[18px] pb-0">
                {selected === 'sobre' && <AboutBarber fullbarber={data} />}
                {selected === 'servicos' && <ServiceBarber fullbarber={data} />}
                {selected === 'agenda' && <ScheduleBarber />}
                <Button className="bg-[#363062] font-semibold text-16 w-full text-white">
                  Reservar Agora
                </Button>
              </CardContent>
            </>
          )}
        </Card>
      )}
    </main>
  )
}

export default DetailBarber
