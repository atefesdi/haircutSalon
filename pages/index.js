import styles from "styles/Home.module.css"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Menu from "@/components/Menu"
import AboutDays from "@/components/AboutDays"
import AboutReza from "@/components/AboutReza"
import { useState } from "react"
import Main from "@/components/schedule/Main"
import Footer from "@/components/Footer"

export default function Home() {
  const [openCalender, setOpenCalender] = useState(false)

  return (
    <>
      <Header />
      {openCalender && <Main setOpenCalender={setOpenCalender} />}
      <main className={styles.main__container}>
        <Hero openCalender={openCalender} setOpenCalender={setOpenCalender} />
        <Menu />
        <AboutDays />
        <AboutReza />
        <Footer />
      </main>
    </>
  )
}
