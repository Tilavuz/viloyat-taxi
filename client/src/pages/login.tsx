import { Button } from "@/components/ui/button";
import { LogIn, ChevronLeft, Loader } from "lucide-react";
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "@/components/ui/input-otp"
import { Link } from "react-router-dom";
import { FormEvent, useEffect, useRef, useState } from "react";
import axios from "axios";
const url = import.meta.env.VITE_APP_BACKEND_URL

export default function Login() {

  const codeRef = useRef<HTMLInputElement>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [token, setToken] = useState<string>('')
  const { toast } = useToast()

  useEffect(() => {
    if(token) {
      localStorage.setItem('token', token)
    }
  }, [token])

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if(codeRef.current) {
      
      const data = {
        loginCode: `${codeRef.current.value}`
      }

      try {
        setLoading(true)
        const res = await axios.post(url + '/login', data)
        if(res.data.token) {
          setToken(res.data.token)
        }else {
          toast({
            description: `${res.data.error} ❌`
          })
        }
      }catch (err) {
        console.log(err);
      }finally {
        setLoading(false)
      }
    }
  }

  return (
    <div className="yw-screen yh-screen ybg-black yflex yjustify-center yitems-center yp-4">
      <form onSubmit={(e) => handleSubmit(e)} className="ybg-white yrelative yp-4 yrounded-md yborder-2 ymax-w-[600px] yflex yitems-center yjustify-center yflex-col ygap-4 ypt-[55px]">
        <Link className="yabsolute ytop-4 yleft-4" to='/'>
            <ChevronLeft size={42}/>
        </Link>
        <div className="yflex yflex-col ygap-2 yitems-center">
            <h3 className="yfont-bold ytext-4xl">Viloya<span className="ytext-[#facc15]">Taxi</span></h3>
            <p className="ytext-center ytext-2xl"><Link className="yunderline ydecoration-[#25A2E0] ydecoration-2" to='https://t.me/viloyat_fast_taxi_bot' target="_blanck">Viloyat<span className="ytext-[#facc15]">Taxi</span></Link> telegram botiga kirib botni ishga tushuring va <span className="ytext-[#25A2E0]">/login</span> buyrug'i yordamida 6 xonali parolni oling!</p>
        </div>
        <InputOTP maxLength={6} ref={codeRef}>
          <div className="yflex yitems-center">
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
          </div>
        </InputOTP>
        <Button type="submit" variant='outline' disabled={loading}>
            <span className="yfont-bold ypr-2">Kirish</span>
            {
              loading ? <Loader className="yanimate-spin"/> : <LogIn />
            }
        </Button>
      </form>
      <Toaster />
    </div>
  );
}
