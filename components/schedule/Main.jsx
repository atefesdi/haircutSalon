import React from "react"
import Calender from "./Calender"
import styles from "styles/schedule/main.module.css"
import { useState } from "react"
import ServiceSelection from "./ServiceSelection"
import OrderingForm from "./OrderingForm"

const Main = ({ setOpenCalender }) => {
  const [nameOfSlide, setNameOfSlide] = useState("Service Selection")
  const [counterSlide, setCounteSlide] = useState(1)

  const onClosePopupHandler = () => {
    setOpenCalender(false)
  }

  const nextSlideHandler = () => {
    if (counterSlide >= 1) {
      setCounteSlide(counterSlide + 1)
      window.scrollTo(0, 0)
    }
  }

  const previesSlideHandler = () => {
    if (counterSlide >= 1) {
      setCounteSlide(counterSlide - 1)
    }
  }

  return (
    <>
      <div
        onClick={onClosePopupHandler}
        className={styles.popUpContainer}
      ></div>

      <main className={styles.mainContainer}>
        <div className={styles.closePopup} onClick={onClosePopupHandler}>
          <div></div>
        </div>
        <header>
          <span className={styles.header__styles}>
            {counterSlide === 1 && "Service Selection"}
            {counterSlide === 2 && "Date Time Selection"}
            {counterSlide === 3 && "Customer Information"}
          </span>
          <div className={styles.circleCarts__container}>
            <span
              className={counterSlide === 1 ? styles.currentCircle : ""}
            ></span>
            <span
              className={counterSlide === 2 ? styles.currentCircle : ""}
            ></span>
            <span
              className={counterSlide === 3 ? styles.currentCircle : ""}
            ></span>
          </div>
        </header>

        {counterSlide === 1 && (
          <ServiceSelection nextSlideHandler={nextSlideHandler} />
        )}

        {counterSlide === 2 && (
          <Calender
            previesSlideHandler={previesSlideHandler}
            nextSlideHandler={nextSlideHandler}
          />
        )}

        {counterSlide === 3 && (
          <OrderingForm
            previesSlideHandler={previesSlideHandler}
            onClosePopupHandler={onClosePopupHandler}
          />
        )}
      </main>
    </>
  )
}

export default Main
