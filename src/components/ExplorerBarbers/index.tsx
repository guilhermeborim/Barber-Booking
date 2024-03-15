import Barber from '../Barber'
import BarberRecommended from '../BarberRecommended'
import InputComponente from '../Input'
import SeparatorComponent from '../Separator'
import { Button } from '../ui/button'
import { ScrollArea } from '../ui/scroll-area'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'
import { ArrowUpRightSquareIcon } from 'lucide-react'
const ButtonSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <div className="flex justify-center">
          <Button className="py-3 px-6 gap-2 border-2 border-primary-900 mb-6 rounded-lg text-16 font-bold">
            <span className="text-primary-900">Ver mais</span>
            <ArrowUpRightSquareIcon size={24} color="#363062" />
          </Button>
        </div>
      </SheetTrigger>
      <SheetContent className="bg-white w-full flex flex-col px-0 gap-0 min-h-screen">
        <ScrollArea>
          <SheetHeader>
            <SheetTitle className="pl-6 text-start font-bold text-16 text-neutral-900 pb-[34px]">
              Explorar Barbearias
            </SheetTitle>
          </SheetHeader>
          <BarberRecommended />
          <SeparatorComponent />
          <div className="flex items-center gap-3 px-6 pb-4">
            <InputComponente />
          </div>
          <Barber />
        </ScrollArea>
      </SheetContent>
    </Sheet>
  )
}

export default ButtonSheet
