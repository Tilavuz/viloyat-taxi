import PassengerCard from "@/components/passenger-card/passenger-card"
import { Button } from "@/components/ui/button"
import { SlidersHorizontal } from "lucide-react"

export default function Passenger() {
  return (
    <div className="ypy-24">
      <div className="ycontainer yflex yflex-col ygap-4">
        <div className="yflex yjustify-between">
          <h4 className="yfont-bold ytext-4xl yborder-l-[18px] yborder-[#facc15] ypx-2">Yo'lovchilar</h4>
          <div>
              <Button variant='outline'>
                <span className="yfont-bold ypr-2">Saralash</span>
                <SlidersHorizontal size={24}/>
              </Button>
          </div>
        </div>
        <div>
          <PassengerCard />
        </div>
      </div>
    </div>
  )
}
