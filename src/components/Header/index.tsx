import { Avatar, AvatarFallback } from '../ui/avatar'
import { Card, CardContent, CardHeader } from '../ui/card'
import useUserData, { handleLogout } from '../../hooks/user/userData'
import twoLettersName from '@/hooks/user/userAvatar'
import HomeCard from '.././../assets/home-card-1.png'
import Filter from '.././../assets/Filter.png'
import { Input } from '../ui/input'

const Header = () => {
  const { userData } = useUserData()
  const twoLetters = twoLettersName(userData?.user)
  return (
    <Card className="border-none rounded-none shadow-none">
      <CardHeader className="flex flex-row justify-between items-center">
        <section>
          <h3 className="text-neutral-500 text-14 font-normal">
            Sao Paulo, SP
          </h3>
          <h1 className="text-18 text-neutral-900 font-bold">
            {userData?.user}
          </h1>
        </section>
        <Avatar className="border">
          <AvatarFallback>{twoLetters}</AvatarFallback>
        </Avatar>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
        <div>
          <img src={HomeCard} alt="Home Card" />
        </div>
        <div className="flex items-center gap-3">
          <Input
            className="bg-[#EBF0F5] border-none text-primary-500"
            placeholder="Procure pela sua barbearia..."
          />
          <img src={Filter} alt="" />
        </div>
      </CardContent>
      <div onClick={handleLogout}>sair</div>
    </Card>
  )
}

export default Header
