import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import { menu } from './menu'
import { CircleUser } from "lucide-react"
import { useEffect, useState } from "react";

export default function Header() {

  const [token, setToken] = useState<string>('')

  useEffect(() => {
    const isToken = localStorage.getItem('token')
    if(isToken) {
      setToken(isToken)
    }
  }, [token])

  return (
    <header className="yfixed ybg-[#000] yw-[100vw] ypy-2 yz-10">
      <nav className="ycontainer yflex yjustify-between">
        <Button variant='link'>
          <Link className="ytext-2xl yfont-bold ytext-white" to='/'>Viloyat<span className="ytext-[#facc15]">Taxi</span></Link>
        </Button>
        <ul className="yflex yitems-center">
          {
            menu?.map(item => {
              return <li key={item.id}><Button variant='link'><Link className="ytext-white yflex ygap-[5px] yitems-center yfont-bold" to={item?.link}>{item?.icon}{item?.title}</Link></Button></li>
            })
          }
          {
            token ? (
              <Link className="yflex yitems-center ygap-1 ytext-white yrounded-full yfont-bold" to='/profile'>
                <CircleUser size={36}/>
              </Link>
            ) : (
              <Link className="yflex yitems-center ygap-1 ybg-white ypx-4 ypy-1 yrounded-md ytext-slate-500 yfont-bold" to='/login'>
                <CircleUser size={16}/>
                Kirish
              </Link>
            )
          }
        </ul>
      </nav>
    </header>
  )
}
