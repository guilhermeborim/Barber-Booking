import {
  HomeIcon,
  CalendarIcon,
  MessageCircleMoreIcon,
  UserIcon,
} from 'lucide-react'
import { Card, CardFooter } from '../ui/card'

const Footer = () => {
  return (
    <Card className="fixed bottom-0 left-0 w-full border-t rounded-none ">
      <CardFooter className="flex items-center justify-between py-3 ">
        <HomeIcon className="text-primary-500" />
        <CalendarIcon className="text-neutral-500" />
        <MessageCircleMoreIcon className="text-neutral-500" />
        <UserIcon className="text-neutral-500" />
      </CardFooter>
    </Card>
  )
}

export default Footer
