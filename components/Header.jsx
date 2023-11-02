import Image from "next/image"
import styles from "../styles/header.module.css"

import location from "public/icons/location-arrow-solid.svg"
import time from "public/icons/business-time-solid.svg"
import phone from "public/icons/phone-solid.svg"
import logo from "public/logo.jpeg"

const Header = () => {
  return (
    <header className={styles.head__container}>
      <div className={styles.container}>
        <div className={styles.logo__container}>
          <Image src={logo} alt="logo" className={styles.logo__style} />
        </div>

        <ul className={styles.icon__container}>
          <li>
            <Image
              src={location}
              alt="location"
              className={styles.icon__style}
            />
            <div>
              <h3>
                <span>MetroStation Beurs </span>
              </h3>
              <p>3012 AG Rotterdam </p>
            </div>
          </li>
          <li>
            <Image src={phone} alt="phone" className={styles.icon__style} />
            <div>
              <h3>
                <span>06 40835519 </span>
              </h3>
              <p>WhatsApp & Bellen</p>
            </div>
          </li>
          <li>
            <Image src={time} alt="time" className={styles.icon__style} />
            <div>
              <h3>
                <span>9:00 - 21:00</span>
              </h3>
              <p>Zondag 12:00 tot 21:00</p>
            </div>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
