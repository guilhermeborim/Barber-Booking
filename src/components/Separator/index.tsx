import { Separator } from '../ui/separator'

const SeparatorComponent = () => {
  const separatorsCount = 3
  const separators = []

  for (let i = 0; i < separatorsCount; i++) {
    separators.push(
      <Separator key={i} className="h-2 w-2 bg-[#E5E7EB] rounded-full" />,
    )
  }
  return (
    <div className="flex justify-end px-6 w-full gap-2 pb-4">
      {separators}
      <Separator className="h-2 w-7 bg-primary-900 rounded-3xl" />
    </div>
  )
}

export default SeparatorComponent
