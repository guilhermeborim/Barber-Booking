import { Avatar, AvatarFallback } from '../ui/avatar'
import { Card, CardContent, CardHeader } from '../ui/card'
import HomeCard from '.././../assets/home-card-1.png'
import InputComponente from '../Input'
import { InfoUser } from '@/hooks/user/userData'

const Header = () => {
  const { data } = InfoUser()

  return data ? (
    <Card className="border-none rounded-none shadow-none">
      <CardHeader className="flex flex-row justify-between items-center">
        <section>
          <h3 className="text-neutral-500 text-14 font-normal">
            Sao Paulo, SP
          </h3>
          <h1 className="text-18 text-neutral-900 font-bold">{data?.user}</h1>
        </section>
        <Avatar className="border">
          <AvatarFallback>oi</AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div>
          <img src={HomeCard} alt="Home Card" />
        </div>
        <div className="flex items-center gap-3">
          <InputComponente />
        </div>
      </CardContent>
    </Card>
  ) : (
    <h1>erro</h1>
  )
}

export default Header
