import React from "react"
import styles from "styles/schedule/serviceSelection.module.css"
import { seviceName } from "utills/services"

const ServiceSelection = ({ nextSlideHandler }) => {
  const selectServiceHandler = () => {
    nextSlideHandler()
  }

  return (
    <div className={styles.container}>
      <p>
        Please select a service for which you want to schedule an appointment
      </p>
      {seviceName.map((item, index) => (
        <div className={styles.cartContainer} onClick={selectServiceHandler}>
          <div>{item.name}</div>
          <div>{item.price}</div>
        </div>
      ))}
    </div>
  )
}

export default ServiceSelection
