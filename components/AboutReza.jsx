import React from "react"
import Image from "next/image"
import styles from "../styles/aboutReza.module.css"
import reza_img from "public/reza-kapper.jpg"

const AboutReza = () => {
  return (
    <div className={styles.menu__container}>
      <div className={styles.container}>
        <div className={styles.header__style}>
          <h3>Over Reza</h3>
        </div>
        <div className={styles.description__styles}>
          <p>
            Reza is een ervaren kapper bij Kapperbeurs en is geboren in Iran.
            Hij woont nu al ongeveer 10 jaar in Nederland en heeft veel ervaring
            in het kappersvak. Reza is iemand die zijn werk met veel passie en
            liefde doet en altijd streeft naar het beste resultaat voor zijn
            klanten.
          </p>
          <p>
            Als persoon is Reza zeer sociaal en betrokken bij zijn klanten. Hij
            vindt het belangrijk om een goede band op te bouwen met zijn klanten
            en hen op hun gemak te stellen tijdens hun bezoek aan de kapsalon.
            Naast het Nederlands, spreekt Reza ook Farsi. Dit betekent dat hij
            een breder publiek kan bedienen en klanten met verschillende
            achtergronden kan helpen.
          </p>
          <p>
            Reza is een echte vakman en heeft veel ervaring in het knippen,
            scheren en stylen van zowel mannen- als vrouwenhaar. Hij houdt zich
            altijd op de hoogte van de nieuwste trends en technieken in de
            kapperswereld en past deze toe in zijn werk. Reza’s uitgebreide
            kennis van het kappersvak en zijn aandacht voor detail maken hem een
            favoriet bij veel klanten van Kapperbeurs.
          </p>
        </div>
        <div>
          <Image src={reza_img} alt="image" className={styles.reza_img} />
        </div>
      </div>
    </div>
  )
}

export default AboutReza
