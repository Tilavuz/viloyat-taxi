import { User, Phone, MailPlus } from 'lucide-react'
import image4 from '../../assets/images/image4.svg'
import { Input } from '../ui/input'
import { Textarea } from "@/components/ui/textarea"

export default function HomeForm() {
  return (
    <section className='yflex ygap-16 yitems-center yjustify-center ybg-[#f5f5f4] ypy-16 yrounded-lg  yflex-wrap'>
        <div className='yflex yflex-col ygap-2'>
          <h2 className='yfont-bold ytext-4xl ytext-[#44403c] ytext-center'>Biz bilan bog'laning</h2>
          <form className='yflex yflex-col gap-2'>
            <label>
              <span className='yflex yitems-center ygap-1 yfont-bold'>
                <User size={16}/>
                Ism:
              </span>
              <Input type="text" placeholder='Valibek'/>
            </label>
            <label>
              <span className='yflex yitems-center ygap-1 yfont-bold'>
                <Phone size={16} />
                Telefon:
              </span>
              <Input type="text" placeholder='+998 90 123 4567'/>
            </label>
            <label>
              <span className='yflex yitems-center ygap-1 yfont-bold'>
                <MailPlus size={16} />
                Murojat:
              </span>
              <Textarea placeholder='Habaringizni yozing...'/>
            </label>
          </form>
        </div>
        <img className='ymax-w-[400px]' src={image4} alt="image" />
      </section>
  )
}
