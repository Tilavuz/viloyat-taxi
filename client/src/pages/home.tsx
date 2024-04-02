import image8 from '../assets/images/image8.svg'
import image1 from '../assets/images/image1.svg'
import image3 from '../assets/images/image3.svg'

// Components
import HomeForm from '@/components/home-form/home-form';

import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="yflex yflex-col ycontainer ypy-36 ygap-36">
      <section className="yflex ygap-16 yitems-center yjustify-center yflex-wrap">
        <img className="yw-[460px]" src={image8} alt="image" />
        <div className="yflex yflex-col yitems-center ymax-w-[440px] ygap-4">
          <h2 className="yfont-bold ytext-6xl ytext-[#44403c]">Viloyat taxi</h2>
          <p className="ytext-2xl ytext-center">Ilovani yuklab oling va post joylang. Biz bilan tez va qulay hamroh toping!</p>
          <Link to='/' className="yfont-bold ytext-2xl yrounded-md ypx-12 ypy-4 ybg-black ytext-white">Yuklab Olish</Link>
        </div>
      </section>
      <section className='yflex ygap-16 yitems-center yjustify-center yflex-wrap-reverse'>
        <div className="yflex yflex-col yitems-center ymax-w-[440px] ygap-4">
            <h2 className="yfont-bold ytext-6xl ytext-[#44403c]">Viloyat taxi</h2>
            <p className="ytext-2xl ytext-center">Manzilingizga borish uchun biz bilan tez va qulay <span className='yfont-bold'>Taxi</span> toping!</p>
            <Link to='/taxis' className="yfont-bold ytext-2xl yrounded-md ypx-12 ypy-4 ybg-black ytext-white">Taxi izlash</Link>
        </div>
        <img className='ymax-w-[400px]' src={image1} alt="image" />
      </section>
      <section className='yflex ygap-16 yitems-center yjustify-center ybg-[#f5f5f4] ypy-16 yrounded-lg  yflex-wrap'>
        <img className="ymax-w-[460px]" src={image3} alt="image" />
        <div className="yflex yflex-col yitems-center ymax-w-[440px] ygap-4">
          <h2 className="yfont-bold ytext-6xl ytext-[#44403c] ytext-center">Biz haqidimizda</h2>
          <p className="ytext-2xl ytext-center">Bizning maqsadimiz sizga qulaylik yaratib berish. Biz bilan tez qulay hamroh toping.</p>
          <Link to='/about' className="yfont-bold ytext-2xl yrounded-md ypx-12 ypy-4 ybg-black ytext-white">Batafsil</Link>
        </div>
      </section>
      <HomeForm />
    </main>
  )
}
