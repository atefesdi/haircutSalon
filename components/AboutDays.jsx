import React from "react"
import styles from "../styles/aboutDays.module.css"

const AboutDays = () => {
  return (
    <div className={styles.menu__container}>
      <div className={styles.container}>
        <div className={styles.description}>
          <div className={styles.devider}></div>
          <h3>openingstijden</h3>
          <p>
            We werken alleen op afspraak om ervoor te zorgen dat we onze klanten
            de best mogelijke service kunnen bieden. <br /> <br />
            Neem gerust contact met ons op om een afspraak te maken die past bij
            je schema. <br /> <br />
            Het is beter om een afspraak te boeken via dit website.
          </p>
        </div>

        <div className={styles.timing__container}>
          <p>Maandag: 09:00 tot 21:00</p>
          <p>Maandag: 09:00 tot 21:00</p>
          <p>Dinsdag: 09:00 tot 21:00</p>
          <p>Woensdag: 09:00 tot 21:00</p>
          <p>Donderdag: 09:00 tot 21:00</p>
          <p>Vrijdag: 09:00 tot 21:00</p>
          <p>Zaterdag: 09:00 tot 21:00</p>
          <p>Zondag: 12:00 tot 21:00</p>{" "}
        </div>
      </div>
    </div>
  )
}

export default AboutDays
