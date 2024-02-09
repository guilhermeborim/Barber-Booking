import Barber from '@/components/Barber'
import BarberRecommended from '@/components/BarberRecommended'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Separator } from '@/components/ui/separator'

const DashboardPage = () => {
  const separatorsCount = 3
  const separators = []

  for (let i = 0; i < separatorsCount; i++) {
    separators.push(
      <Separator key={i} className="h-2 w-2 bg-[#E5E7EB] rounded-full" />,
    )
  }
  return (
    <main className="relative min-h-full">
      <Header />
      <div className="pb-[48px]">
        <h2 className="pl-6 pb-4 font-bold text-18 text-neutral-900">
          Melhores Barbearias
        </h2>
        <Barber />
        <h2 className="pl-6 pb-4 font-bold text-18 text-neutral-900">
          Barbearia Recomendada
        </h2>
        <BarberRecommended />
        <div className="flex justify-end px-6 w-full gap-2 pb-4">
          {separators}
          <Separator className="h-2 w-7 bg-primary-900 rounded-3xl" />
        </div>
        <Barber />
      </div>
      <Footer />
    </main>
  )
}

export default DashboardPage
