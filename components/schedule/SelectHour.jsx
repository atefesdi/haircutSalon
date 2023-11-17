import React, { useState } from "react"
import { format } from "date-fns"
import styles from "../../styles/schedule/selectHour.module.css"
const initiateHoures = [
  { startTime: "09:00", endTime: "09:30", avalible: true },
  { startTime: "09:30", endTime: "10:00", avalible: true },
  { startTime: "10:00", endTime: "10:30", avalible: true },
  { startTime: "10:30", endTime: "11:00", avalible: true },
  { startTime: "11:00", endTime: "11:30", avalible: true },
  { startTime: "11:30", endTime: "12:00", avalible: true },
  { startTime: "12:00", endTime: "12:30", avalible: true },
  { startTime: "12:30", endTime: "13:00", avalible: true },
  { startTime: "13:00", endTime: "13:30", avalible: false },
  { startTime: "13:30", endTime: "14:00", avalible: false },
  { startTime: "14:00", endTime: "14:30", avalible: true },
  { startTime: "14:30", endTime: "15:00", avalible: true },
  { startTime: "15:00", endTime: "15:30", avalible: true },
  { startTime: "15:30", endTime: "16:00", avalible: true },
  { startTime: "16:00", endTime: "16:30", avalible: false },
  { startTime: "16:30", endTime: "17:00", avalible: true },
  { startTime: "17:00", endTime: "17:30", avalible: true },
  { startTime: "17:30", endTime: "18:00", avalible: true },
  { startTime: "18:00", endTime: "18:30", avalible: true },
  { startTime: "18:30", endTime: "19:00", avalible: true },
  { startTime: "19:00", endTime: "19:30", avalible: true },
  { startTime: "19:30", endTime: "20:00", avalible: true },
  { startTime: "20:00", endTime: "20:30", avalible: true },
  { startTime: "20:30", endTime: "21:00", avalible: true },
]

const SelectHour = ({ selectedDate, selectedTime, setSelectedTime }) => {
  const [allHours, setAllHours] = useState(initiateHoures)

  const onSelectTimeHandlet = (index, avalible) => {
    selectedTime !== index && avalible
      ? setSelectedTime(index)
      : setSelectedTime(null)
  }

  return (
    <>
      <div className={styles.header__style}>
        <span>
          Pick Appointment Time For
          <span className={styles.selectedDate__style}>
            {format(selectedDate, "MMMM dd")}
          </span>
        </span>
        <div></div>
      </div>
      <div className={styles.container}>
        {allHours.map((item, index) => (
          <div
            key={index}
            onClick={() => onSelectTimeHandlet(index, item.avalible)}
            className={`${index === selectedTime ? styles.selectedStyle : ""} ${
              item.avalible
                ? styles.avalableTime__style
                : styles.unavailableTime__style
            }`}
          >
            {index === selectedTime && (
              <span className={styles.tickCircul}></span>
            )}
            <span className={styles.startDate__style}>{item.startTime}</span>
            <span className={styles.endDate__style}>{item.endTime}</span>
          </div>
        ))}
      </div>
    </>
  )
}

export default SelectHour
