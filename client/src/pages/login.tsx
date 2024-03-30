import { Button } from "@/components/ui/button";
import { LogIn, ChevronLeft } from "lucide-react";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSeparator,
    InputOTPSlot,
  } from "@/components/ui/input-otp"
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="yw-screen yh-screen ybg-black yflex yjustify-center yitems-center yp-4">
      <form className="ybg-white yrelative yp-4 yrounded-md yborder-2 ymax-w-[600px] yflex yitems-center yjustify-center yflex-col ygap-2 ypt-[55px]">
        <Link className="yabsolute ytop-4 yleft-4" to='/'>
            <ChevronLeft size={42}/>
        </Link>
        <div className="yflex yflex-col ygap-2 yitems-center">
            <h3 className="yfont-bold ytext-4xl">Viloya<span className="ytext-[#facc15]">Taxi</span></h3>
            <p className="ytext-center ytext-2xl"><Link className="yunderline ydecoration-[#25A2E0] ydecoration-2" to='https://t.me/viloyat_fast_taxi_bot'>Viloyat<span className="ytext-[#facc15]">Taxi</span></Link> telegram botiga kiring va <span className="ytext-[#25A2E0]">/login</span> buyrug'i yordamida 6 xonali parolni oling!</p>
        </div>
        <InputOTP maxLength={6}>
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
        <Button type="submit" variant='outline'>
            <span className="yfont-bold ypr-2">Kirish</span>
            <LogIn />
        </Button>
      </form>
    </div>
  );
}
