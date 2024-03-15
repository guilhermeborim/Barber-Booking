import Footer from '@/components/Footer'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { UserDataProfile } from '@/hooks/user/userProfile'
import Logo from '@/assets/Logo.png'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import {
  ChevronRightIcon,
  MailIcon,
  MapPinIcon,
  PencilIcon,
} from 'lucide-react'
import * as Switch from '@radix-ui/react-switch'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'
import { Navigate, useParams } from 'react-router-dom'
import twoLettersName from '@/hooks/user/userAvatar'
import { handleLogout } from '@/hooks/user/userLogout'
const ProfilePage = () => {
  const { id } = useParams() //  recuperando o id da url
  if (!id) return null
  const { data } = UserDataProfile(id) // retorna a chamada no endpoint do usuario
  if (!data) return null
  const avatarLetters = twoLettersName(data.name)
  if (id !== data._id) {
    return <Navigate to="/dashboard" />
  }

  return (
    <>
      <Card className="bg-[#363062] outline-none shadow-none border-none rounded-none">
        <CardHeader>
          <section className="font-semibold text-16 flex items-center justify-between text-white">
            <h4>Profile</h4>
            <div className="flex items-center gap-1">
              <img src={Logo} alt="" className="w-6 h-6" />
              <h4>Gobar</h4>
            </div>
          </section>
          <section>
            <div className="flex pt-8 justify-between">
              <div className="flex gap-3 items-center">
                <Avatar className="border-2 border-white bg-black text-white max-w-[64px] max-h-[64px]">
                  <AvatarFallback className="w-full h-full">
                    {avatarLetters}
                  </AvatarFallback>
                </Avatar>
                <div className="text-white">
                  <Badge className="bg-[#F99417] font-medium text-12 pt-0 mb-2">
                    Platinum
                  </Badge>
                  <h2 className="font-bold text-20">{data.name}</h2>
                </div>
              </div>
              <PencilIcon size={20} fill="white" />
            </div>
            <div className="font-normal text-16 text-white flex flex-col gap-3 pt-6">
              <div className="flex gap-2 items-center">
                <MailIcon size={20} />
                <h3>{data.email}</h3>
              </div>
              <div className="flex gap-2 items-center">
                <MapPinIcon size={20} />
                <h3>Sao Paulo</h3>
              </div>
            </div>
          </section>
        </CardHeader>
        <CardContent className="bg-white rounded-t-3xl pt-6">
          <section>
            <article className="flex justify-between">
              <p className="text-[#363062] font-semibold text-16">
                Notificacoes
              </p>
              <Switch.Root
                className="w-[42px] h-[25px] rounded-full relative shadow-[0_0_0_2px] bg-white outline-none cursor-default"
                id="airplane-mode"
              >
                <Switch.Thumb className="block w-[21px] h-[21px] bg-[#363062] rounded-full transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
              </Switch.Root>
            </article>
            <Separator className="bg-[#F4F4F5] my-4" />
            <article className="flex justify-between">
              <p className="text-[#363062] font-semibold text-16">Conta</p>
              <Button size="icon">
                <ChevronRightIcon color="#8683A1" />
              </Button>
            </article>
            <Separator className="bg-[#F4F4F5] my-4" />
            <article className="flex justify-between">
              <p className="text-[#363062] font-semibold text-16">Seguranca</p>
              <Button size="icon">
                <ChevronRightIcon color="#8683A1" />
              </Button>
            </article>
            <Separator className="bg-[#F4F4F5] my-4" />
            <article className="flex justify-between">
              <p className="text-[#363062] font-semibold text-16">Sobre</p>
              <Button size="icon">
                <ChevronRightIcon color="#8683A1" />
              </Button>
            </article>
          </section>
          <Button className="bg-[#363062] w-full mt-4" onClick={handleLogout}>
            <p className=" font-bold text-16 text-center text-white ">Sair</p>
          </Button>
        </CardContent>
        <Footer />
      </Card>
    </>
  )
}

export default ProfilePage
