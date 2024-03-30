import Footer from "@/components/footer/footer"
import Header from "@/components/header/header"
import { Outlet } from "react-router-dom"
export default function RootLayout() {
  return (
    <>
        <Header />
        <main className="ymin-h-screen">
          <Outlet />
        </main>
        <Footer />
    </>
  )
}
