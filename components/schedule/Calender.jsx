import React, { useState } from "react"
import styles from "../../styles/schedule/calender.module.css"
import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  isSameDay,
  subMonths,
  addMonths,
  isBefore,
} from "date-fns"
import SelectHour from "./SelectHour"

const Calender = ({ previesSlideHandler, nextSlideHandler }) => {
  const [activeDate, setActiveDate] = useState(new Date())
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)

  const handleDayClick = (date, isPastDay, isInThisMonth) => {
    if (!isPastDay && isInThisMonth && !isSameDay(date, selectedDate)) {
      setSelectedDate(date)
    } else {
      setSelectedDate(null)
    }
  }

  const navigateBackwardHandller = () => {
    setActiveDate(subMonths(activeDate, 1))
    setSelectedDate(null)
  }

  const navigatForwardHandller = () => {
    setActiveDate(addMonths(activeDate, 1))
    setSelectedDate(null)
  }

  const getHeader = () => {
    return (
      <div className={styles.header}>
        <span
          className={`${styles.navIcon}`}
          onClick={navigateBackwardHandller}
        >
          <div className={styles.leftArrow}></div>
        </span>

        <h2 className={styles.currentMonth}>
          {format(activeDate, "MMMM yyyy")}
        </h2>

        <span
          className={`${styles.navIcon} ${styles.rightArrowIcon}`}
          onClick={navigatForwardHandller}
        >
          <div className={styles.leftArrow}></div>
        </span>
      </div>
    )
  }

  const getWeekDaysNames = () => {
    const weekStartDate = startOfWeek(activeDate)
    const weekDays = []

    for (let day = 0; day < 7; day++) {
      weekDays.push(
        <div key={Math.random().toString()}>
          {format(addDays(weekStartDate, day), "E")}
        </div>
      )
    }
    return <div className={styles.weekContainer}>{weekDays}</div>
  }

  const generateDatesForCurrentWeek = (date, selectedDate, activeDate) => {
    let currentDate = date

    const week = []

    for (let day = 0; day < 7; day++) {
      const cloneDate = currentDate
      const isToday = isSameDay(currentDate, new Date())
      const isPastDay = isBefore(currentDate, new Date()) && !isToday
      const isInThisMonth = isSameMonth(currentDate, activeDate)

      week.push(
        <div
          key={Math.random().toString()}
          className={`${
            isSameDay(currentDate, selectedDate)
              ? styles.selectedStyle
              : isPastDay
              ? styles.inactiveDay
              : ""
          }
           ${isInThisMonth ? "" : styles.dayOfAnotheMonth}
           ${isInThisMonth && !isPastDay ? styles.activeDay : ""}`}
          onClick={() => handleDayClick(cloneDate, isPastDay, isInThisMonth)}
        >
          {isSameDay(currentDate, selectedDate) && (
            <span
              key={Math.random().toString()}
              className={styles.tickCircul}
            ></span>
          )}
          {format(currentDate, "d")}
        </div>
      )

      currentDate = addDays(currentDate, 1)
    }

    return week.map((item, index) => {
      return item
    })
  }

  const getDates = () => {
    const startOfTheSelectedMonth = startOfMonth(activeDate)
    const endOfTheSelectedMonth = endOfMonth(activeDate)
    const startDate = startOfWeek(startOfTheSelectedMonth)
    // const endDate = endOfWeek(endOfTheSelectedMonth) in that case that i dont want fixed week for every month i could use endDate

    let currentDate = startDate

    const allWeeks = []

    while (allWeeks.length < 6) {
      allWeeks.push(
        generateDatesForCurrentWeek(currentDate, selectedDate, activeDate)
      )
      currentDate = addDays(currentDate, 7)
    }

    return <div className={styles.dayContainer}>{allWeeks}</div>
  }

  const submitHandler = () => {
    if (selectedTime) {
      nextSlideHandler()
    }
  }

  return (
    <section className={styles.container}>
      {getHeader()}
      {getWeekDaysNames()}
      {getDates()}
      {selectedDate && (
        <SelectHour
          selectedDate={selectedDate}
          selectedTime={selectedTime}
          setSelectedTime={setSelectedTime}
        />
      )}

      <div className={styles.devider}></div>

      <div className={styles.buttonContainer}>
        <button onClick={previesSlideHandler}>Back</button>

        {selectedDate && (
          <button
            onClick={submitHandler}
            className={!selectedTime ? styles.unavailable__nextBtn : ""}
          >
            Next
          </button>
        )}
      </div>
    </section>
  )
}

export default Calender
