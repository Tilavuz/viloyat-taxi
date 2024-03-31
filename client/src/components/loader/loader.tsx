import { Skeleton } from "@/components/ui/skeleton"

export default function Loader() {
  return (
    <div className="yw-screen yh-screen yz-0 ybg-black">
      <Skeleton className="yw-full yh-full" />
    </div>
  )
}
