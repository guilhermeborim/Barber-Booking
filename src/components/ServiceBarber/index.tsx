import { GetFullBarbers } from '@/types/types-database'

type AboutBarberProps = {
  fullbarber: GetFullBarbers | null
}
const ServiceBarber = ({ fullbarber }: AboutBarberProps) => {
  if (!fullbarber) return null
  return (
    <div className="pb-[18px]">
      <h4 className="font-bold text-16 text-[#111827] pb-3">Serviços</h4>
      <div>
        {fullbarber.services.map((service) => (
          <div className="flex items-center mb-3" key={service.id}>
            <div className="max-w-[50px]">
              <img src={service.image} alt="" className="w-full" />
            </div>
            <div className="pl-2">
              <h3 className="font-semibold text-18 text-[#111827]">
                {service.name}
              </h3>
              <p className="font-normal text-14 text-[#6B7280]">
                {service.description.length > 25
                  ? `${service.description.slice(0, 25)}...`
                  : service.description}
              </p>
            </div>
            <div className="right-0 absolute">
              <span className="font-medium text-16 text-[#111827]">
                {service.price}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServiceBarber
