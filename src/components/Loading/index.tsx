import { Card, CardContent, CardFooter, CardHeader } from '../ui/card'
import { Skeleton } from '../ui/skeleton'

type LoadingProps = {
  loading: boolean
}

const Loading = ({ loading }: LoadingProps) => {
  return loading ? (
    <Card className="border-none rounded-none shadow-none">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px] bg-gray-300" />
            <Skeleton className="h-4 w-[200px] bg-gray-300" />
          </div>
          <Skeleton className="h-12 w-12 rounded-full bg-gray-300" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col">
          <Skeleton className="h-[125px] w-full rounded-xl bg-gray-300" />
          <div className="flex items-center gap-3 mt-[1.5rem]">
            <Skeleton className="h-[44px] w-[298px] bg-gray-300" />
            <Skeleton className="h-[44px] w-[44px] bg-gray-300 rounded-lg" />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between fixed w-full bottom-0 left-0">
        <Skeleton className="h-6 w-6 bg-gray-300" />
        <Skeleton className="h-6 w-6 bg-gray-300" />
        <Skeleton className="h-6 w-6 bg-gray-300" />
        <Skeleton className="h-6 w-6 bg-gray-300" />
      </CardFooter>
    </Card>
  ) : null
}

export default Loading
