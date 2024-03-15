import Filter from '../../assets/Filter.png'
import { Input } from '../ui/input'

const InputComponente = () => {
  return (
    <>
      <Input
        className="bg-[#EBF0F5] border-none text-primary-500"
        placeholder="Procure pela sua barbearia..."
      />
      <img src={Filter} alt="" />
    </>
  )
}

export default InputComponente
