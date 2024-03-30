import { Link } from "react-router-dom";
import { Home, CarTaxiFront, PersonStanding, TrendingUp, Phone, Mail, MapPin } from "lucide-react"



export default function Footer() {
  return (
    <footer className="ybg-black">
      <div className="yflex ypy-16 ycontainer yjustify-between">
        <div className="yflex yflex-col ygap-4">
          <p className="ytext-white yfont-bold ytext-2xl">Ijtimoiy tarmoqlar</p>
          <ul className="ytext-white">
            <li>
              <Link className="yflex ygap-1 yitems-center" to='https://t.me/Tilavuz' target="_blank">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-telegram" viewBox="0 0 16 16">
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906q-1.168.486-4.666 2.01-.567.225-.595.442c-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294q.39.01.868-.32 3.269-2.206 3.374-2.23c.05-.012.12-.026.166.016s.042.12.037.141c-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8 8 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629q.14.092.27.187c.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.4 1.4 0 0 0-.013-.315.34.34 0 0 0-.114-.217.53.53 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09"/>
                </svg>
                <span>Telegram</span>
              </Link>
            </li>
            <li>
              <Link to='/' className="yflex ygap-1 yitems-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                </svg>
                <span>Instagram</span>
              </Link>
            </li>
            <li>
              <Link to='/' className="yflex ygap-1 yitems-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                </svg>
                <span>Facebook</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="yflex yflex-col ygap-4">
          <p className="ytext-white yfont-bold ytext-2xl">Biz bilan bog'laning</p>
          <ul className="ytext-white">
            <li>
              <Link to='tel:+998908827251' className="yflex ygap-1 yitems-center">
                <Phone size={16}/>
                <span>+998 90 882 7251</span>
              </Link>
            </li>
            <Link to='mailto:shavqiddintilovov0@gmail.com' className="yflex ygap-1 yitems-center">
              <Mail size={16}/>
              <span>shavqiddintilovov0@gmail.com</span>
            </Link>
            <li className="yflex ygap-1 yitems-center">
              <MapPin size={16}/>
              <span>Qarshi shahar TUITKF</span>
            </li>
          </ul>
        </div>
        <div className="yflex yflex-col ygap-4">
          <p className="ytext-white yfont-bold ytext-2xl">Sayt xaritasi</p>
          <ul className="ytext-white">
            <li>
              <Link to='/' className="yflex ygap-1 yitems-center">
                <Home size={16}/>
                <span>Bosh sahifa</span>
              </Link>
            </li>
            <li>
              <Link to='/taxis' className="yflex ygap-1 yitems-center">
                <CarTaxiFront size={16}/>
                <span>Taxi izlash</span>
              </Link>
            </li>
            <li>
              <Link to='/passenger' className="yflex ygap-1 yitems-center">
                <PersonStanding size={16}/>
                <span>Taxi izlash</span>
              </Link>
            </li>
            <li>
              <Link to='/about' className="yflex ygap-1 yitems-center">
                <TrendingUp size={16}/>
                <span>Biz haqimizda</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="yflex yflex-col">
        <p className="ytext-white yfont-bold ytext-2xl">Mobil ilovalar</p>
        <ul className="ytext-white">
          <li>
            <Link to='/' className="yflex ygap-1 yitems-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-google-play" viewBox="0 0 16 16">
                <path d="M14.222 9.374c1.037-.61 1.037-2.137 0-2.748L11.528 5.04 8.32 8l3.207 2.96zm-3.595 2.116L7.583 8.68 1.03 14.73c.201 1.029 1.36 1.61 2.303 1.055zM1 13.396V2.603L6.846 8zM1.03 1.27l6.553 6.05 3.044-2.81L3.333.215C2.39-.341 1.231.24 1.03 1.27"/>
              </svg>
              <span>Android</span>
            </Link>
          </li>
          <li>
            <Link to='/' className="yflex ygap-1 yitems-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-apple" viewBox="0 0 16 16">
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
                <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
              </svg>
              <span>Apple</span>
            </Link>
          </li>
        </ul>
      </div>
      </div>
      <div className="ypy-4 ybg-slate-900">
        <p className="ytext-white yfont-bold ytext-2xl ytext-center">Viloyat<span className="ytext-[#facc15]">Taxi</span></p>
      </div>
    </footer>
  )
}
