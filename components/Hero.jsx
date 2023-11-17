import Image from "next/image"
import styles from "../styles/hero.module.css"
import { useState } from "react"

import beautyshop from "public/beautyShop.jpg"
import Main from "./schedule/Main"

const Hero = ({ openCalender, setOpenCalender }) => {
  const openCalenderHandler = () => {
    setOpenCalender(!openCalender)
    window.scrollTo(0, 0)
    console.log("object :>> ")
  }

  return (
    <div className={styles.hero__container}>
      <div className={styles.container}>
        <div className={styles.img__container}>
          <Image
            src={beautyshop}
            alt="beautyshop"
            className={styles.background__style}
          />
        </div>
        <div className={styles.description}>
          <h2>Welkom op de website van kapper Beurs</h2>
          <p>
            Wij kijken er naar vooruit om je van dichtbij te zien. Misschien is
            het wel handig om een afspraak te maken.
          </p>
          <button onClick={openCalenderHandler} className={styles.btn__styles}>
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero
