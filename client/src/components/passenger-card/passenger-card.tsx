import { Card, CardContent } from "../ui/card"
import image9 from '../../assets/images/image9.svg'
import { Button } from "../ui/button"
import { CircleUser, DollarSign, Users, Clock, FilePenLine } from "lucide-react"


export default function PassengerCard() {
  return (
    <Card className="ymax-w-[350px] ypy-2">
        <CardContent className="">
            <ul className="yflex yflex-col ygap-2">
                <li className="yflex yjustify-between yitems-center">
                    <span className="yflex yitems-center yfont-bold ygap-1">
                        <DollarSign size={16}/>
                        <span>Yo'lkra:</span>
                    </span>
                    <span>200 ming</span>
                </li>
                <li className="yflex yjustify-between yitems-center">
                    <span className="yflex yitems-center yfont-bold ygap-1">
                        <Users size={16}/>
                        <span>Yo'lovchi:</span>
                    </span>
                    <span>3</span>
                </li>
                <li className="yflex yjustify-between yitems-center">
                    <span className="yflex yitems-center yfont-bold ygap-1">
                        <Clock size={16} />
                        <span>Ketish vaqti:</span>
                    </span>
                    <span>1 aprel 2024, 14:00</span>
                </li>
                <li className="yflex yjustify-between yitems-center">
                    <span className="yflex yitems-center yfont-bold ygap-1">
                        <FilePenLine size={16}/>
                        <span>Izoh:</span>
                    </span>
                    <span>Buxoro styankadan</span>
                </li>
                <li className="yflex yjustify-between yitems-center">
                    <span className="yflex yflex-col">
                        <span className="yfont-bold ycapitalize">Qashqadaryo</span>
                        <span className="ytext-sm ycapitalize">Muborak</span>
                    </span>
                    <span className="yflex yflex-col">
                        <span className="yfont-bold ycapitalize">Qashqadaryo</span>
                        <span className="ytext-sm ycapitalize">Qarshi</span>
                    </span>
                </li>
                <img src={image9} alt="image" />
                <ul className="yflex yitems-center yjustify-between">
                    <li className="yflex yitems-center ygap-2">
                        <CircleUser size={44}/>
                        <span className="yflex yflex-col">
                            <span className="yfont-bold ytext-sm">Shavqiddin</span>
                            <span className="ytext-sm">Yo'lovchi</span>
                        </span>
                    </li>
                    <li>
                        <Button variant='outline'>Olib ketish</Button>
                    </li>
                </ul>
            </ul>
        </CardContent>
    </Card>
  )
}
