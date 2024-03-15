import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'

const LoadingBarber = () => {
  return (
    <Card className="border-none outline-none shadow-none relative">
      <CardHeader className="p-0">
        <Skeleton className="w-full h-[216px] bg-gray-300 " />
        <div>
          <Skeleton className="text-neutral-900 text-16 font-bold pb-2 w-full h-4 bg-gray-300 mb-2" />
          <div className="flex flex-col gap-2 text-neutral-500 text-14 font-normal">
            <Skeleton className="w-4 h-4 bg-gray-300" />
            <Skeleton className="w-16 h-2 bg-gray-300" />
            <Skeleton className="w-4 h-4 bg-gray-300" />
            <Skeleton className="w-10 h-2 bg-gray-300" />
          </div>
        </div>
        <div className="flex justify-between items-center px-6 py-4">
          <div className="flex flex-col justify-center items-center">
            <Skeleton className="w-5 h-5 bg-gray-300" />
            <Skeleton className="w-8 h-2 bg-gray-300 mt-2" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <Skeleton className="w-5 h-5 bg-gray-300" />
            <Skeleton className="w-8 h-2 bg-gray-300 mt-2" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <Skeleton className="w-5 h-5 bg-gray-300" />
            <Skeleton className="w-8 h-2 bg-gray-300 mt-2" />
          </div>
          <div className="flex flex-col justify-center items-center">
            <Skeleton className="w-5 h-5 bg-gray-300" />
            <Skeleton className="w-8 h-2 bg-gray-300 mt-2" />
          </div>
        </div>
      </CardHeader>
      <div className="bg-[#EDEFFB] relative top-0 bottom-0 -left-[24px] w-screen ">
        <div className="px-[24px] flex justify-between py-3 items-center">
          <div className="flex items-center font-bold text-[16px] gap-1 rounded-lg px-3 py-1">
            <Skeleton className="w-4 h-4 bg-gray-300" />
            <Skeleton className="w-6 h-2 bg-gray-300" />
          </div>
          <div className="flex items-center font-bold text-[16px] gap-1 rounded-lg px-3 py-1">
            <Skeleton className="w-5 bg-gray-300" />
            <Skeleton className="w-4 h-4 bg-gray-300" />
            <Skeleton className="w-6 h-2 bg-gray-300" />
          </div>
          <div className="flex items-center font-bold text-[16px] gap-1 rounded-lg px-3 py-1">
            <Skeleton className="w-5 bg-gray-300" />
            <Skeleton className="w-4 h-4 bg-gray-300" />
            <Skeleton className="w-6 h-2 bg-gray-300" />
          </div>
        </div>
      </div>
      <CardContent>
        <div className="flex flex-col gap-2 pt-3">
          <Skeleton className="w-full h-2 bg-gray-300" />
          <Skeleton className="w-full h-2 bg-gray-300" />
          <Skeleton className="w-full h-2 bg-gray-300" />
        </div>
        <div className="pt-3">
          <Skeleton className="w-16 h-3 bg-gray-300 mb-3" />
          <div className="flex justify-between">
            <div className="font-normal text-14 text-[#6B7280] flex flex-col gap-2">
              <Skeleton className="w-[132px] h-2 bg-gray-300" />
              <Skeleton className="w-[132px] h-2 bg-gray-300" />
            </div>
            <div className="font-semibold text-14 text-[#111827] flex flex-col gap-2">
              <Skeleton className="w-[132px] h-2 bg-gray-300" />
              <Skeleton className="w-[132px] h-2 bg-gray-300" />
            </div>
          </div>
        </div>
        <div className="pt-[18px] pb-[16px]">
          <Skeleton className="w-16 h-3 bg-gray-300 mb-3" />
          <div>
            <div className="flex items-center mb-3">
              <div className="max-w-[50px]">
                <Skeleton className="w-[46px] h-[46px] bg-gray-300 rounded-full" />
              </div>
              <div className="pl-2  w-full">
                <Skeleton className="w-16 h-3 bg-gray-300 mb-3" />
                <Skeleton className="w-8 h-2 bg-gray-300" />
              </div>
              <div className="flex justify-end items-center gap-2">
                <Skeleton className="w-[16px] h-[16px] bg-gray-300" />
                <span className="font-normal text-14 text-[#6B7280]">
                  <Skeleton className="w-4 h-2 bg-gray-300" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default LoadingBarber
