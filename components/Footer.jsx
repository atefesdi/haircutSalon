import React from "react"
import styles from "../styles/footer.module.css"
import Image from "next/image"
import location from "public/KAPPERBEURS2-2.png"

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.upside__styles}>
        <div>
          <h3>Waar we zijn</h3>
          <p>
            Metrostation Beurs, <br></br>Churchillplein,<br></br> 3012 AG
            Rotterdam
          </p>
        </div>
        <div>
          <h3>Email:</h3>
          <p>
            email:Info@kapperbeurs.nl<br></br> Contactnummer: 06 40835519
            <br></br>
            WhatsApp: 06 40835519
          </p>
        </div>

        <Image src={location} alt="location" className={styles.icon__style} />
      </div>

      <div className={styles.devider}></div>

      <div className={styles.downside__styles}>
        <div>
          <p>Privacy Verklaring</p>
        </div>
        <div>
          <p>© 2023 Alle rechten voorbehouden</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
