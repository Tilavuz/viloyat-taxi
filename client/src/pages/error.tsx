import { Button } from '@/components/ui/button'
import errorImg from '../assets/images/error-img.svg'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div className='yw-screen yh-screen yflex yflex-col yitems-center yjustify-center ygap-4'>
      <img src={errorImg} alt="error image" />
      <div className='yflex yitems-center yflex-col'>
        <p className='yfont-bold ytext-4xl'>Sahifa topilmadi</p>
        <Button variant='link' asChild><Link to='/'>Bosh sahifa</Link></Button>
      </div>
    </div>
  )
}
