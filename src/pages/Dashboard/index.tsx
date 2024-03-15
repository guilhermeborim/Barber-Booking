import Barber from '@/components/Barber'
import BarberRecommended from '@/components/BarberRecommended'
import ButtonSheet from '@/components/ExplorerBarbers'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SeparatorComponent from '@/components/Separator'

const DashboardPage = () => {
  return (
    <main className="relative min-h-full">
      <Header />
      <div className="pb-[48px]">
        <h2 className="pl-6 pb-4 font-bold text-18 text-neutral-900">
          Barberias Próximas
        </h2>
        <Barber displayCount={3}>
          <ButtonSheet />
        </Barber>
        <h2 className="pl-6 pb-4 font-bold text-18 text-neutral-900">
          Barbearia Recomendada
        </h2>
        <BarberRecommended />
        <SeparatorComponent />
        <Barber displayCount={3}>
          <ButtonSheet />
        </Barber>
      </div>
      <Footer />
    </main>
  )
}

export default DashboardPage
