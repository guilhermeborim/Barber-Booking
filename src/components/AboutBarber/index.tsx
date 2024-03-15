import { GetFullBarbers } from '@/types/types-database'
import { StarIcon } from 'lucide-react'

type AboutBarberProps = {
  fullbarber: GetFullBarbers | null
}

const AboutBarber = ({ fullbarber }: AboutBarberProps) => {
  if (!fullbarber) return null
  return (
    <>
      <div>
        <p className="text-[#111827] text-16 font-normal">
          {fullbarber?.description}
        </p>
      </div>
      <div>
        <h4 className="text-[#111827] font-bold text-16 pb-3 pt-[18px]">
          Horario de Funcionamento
        </h4>
        <div className="flex justify-between">
          <div className="font-normal text-14 text-[#6B7280] flex flex-col gap-2">
            <p>Segunda - Sexta</p>
            <p>Sabado - Domingo</p>
          </div>
          {fullbarber.openingHours.map((openingHour) => (
            <div
              className="font-semibold text-14 text-[#111827] flex flex-col gap-2"
              key={openingHour.id}
            >
              <p>
                {openingHour.opening} am - {openingHour.closure} pm
              </p>
              <p>
                {openingHour.opening} am - {openingHour.closure} pm
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="pt-[18px] pb-[16px]">
        <h4 className="font-bold text-16 text-[#111827] pb-3">Barbeiros</h4>
        <div>
          {fullbarber.barbers.map((barber) => (
            <div className="flex items-center mb-3" key={barber.id}>
              <div className="max-w-[50px]">
                <img src={barber.image} alt="" className="w-full" />
              </div>
              <div className="pl-2  w-full">
                <h3 className="font-semibold text-18 text-[#111827]">
                  {barber.name}
                </h3>
                <p className="font-normal text-14 text-[#6B7280]">
                  {barber.specialty}
                </p>
              </div>
              <div className="flex justify-end items-center gap-2">
                <StarIcon size={16} color="#8683A1" fill="#8683A1" />
                <span className="font-normal text-14 text-[#6B7280]">
                  {barber.rating}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default AboutBarber
