import { Home, CarTaxiFront, PersonStanding, TrendingUp } from "lucide-react"



export const menu = [
    {
        id: 1,
        link: '/',
        title: 'Bosh sahifa',
        icon: <Home size={16} />,
    },
    {
        id: 2,
        link: '/taxis',
        title: 'Taxi izlash',
        icon: <CarTaxiFront size={16}/>
    },
    {
        id: 3,
        link: '/passenger',
        title: 'Yo\'lovchi izlash',
        icon: <PersonStanding size={16}/>
    },
    {
        id: 4,
        link: '/about',
        title: 'Biz haqimizda',
        icon: <TrendingUp size={16}/>,
    }
]
