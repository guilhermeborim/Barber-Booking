import {
  HomeIcon,
  CalendarIcon,
  MessageCircleMoreIcon,
  UserIcon,
} from 'lucide-react'
import { Card, CardFooter } from '../ui/card'
import { Link } from 'react-router-dom'
import { InfoUser } from '@/hooks/user/userData'

const Footer = () => {
  const { data } = InfoUser()
  const id = data?.id
  return (
    <Card className="absolute bottom-0 left-0 w-full border-t rounded-none">
      <CardFooter className="flex items-center justify-between py-3">
        <Link to="/dashboard">
          <HomeIcon className="text-primary-500" />
        </Link>
        <CalendarIcon className="text-neutral-500" />
        <MessageCircleMoreIcon className="text-neutral-500" />
        <Link to={`/dashboard/profile/${id}`}>
          <UserIcon className="text-neutral-500" />
        </Link>
      </CardFooter>
    </Card>
  )
}

export default Footer
