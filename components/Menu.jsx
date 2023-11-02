import styles from "../styles/menu.module.css"

const Menu = () => {
  return (
    <div className={styles.menu__container}>
      <div className={styles.container}>
        <div className={styles.menu__list}>
          <h3 className={styles.header__menu}>Prijzen</h3>
          <div className={styles.divider__menu}></div>
          <ul className={styles.leaders}>
            <li>
              <span>Knippen, Föhnen en stylen</span>
              <span>22.50</span>
            </li>
            <li>
              <span>Knippen met baard styling (trimmen)</span>
              <span>25</span>
            </li>
            <li>
              <span>Kaal scheren</span>
              <span>20</span>
            </li>
            <li>
              <span>Kaal scheren en baard stylen</span>
              <span>25</span>
            </li>
            <li>
              <span>Haar wassen</span>
              <span>2.50</span>
            </li>
            <li>
              <span>Gezichtsbehandeling</span>
              <span>30</span>
            </li>
            <li>
              <span>Haarprothese en knippen</span>
              <span>350</span>
            </li>
          </ul>
        </div>

        <div className={styles.explenation__menu}>
          <p>
            Bij Kapperbeurs bieden we niet alleen geweldige kappersdiensten in
            onze salon, maar we bieden ook op maat gemaakte diensten aan die aan
            uw specifieke behoeften voldoen. Wist u dat we zelfs naar uw locatie
            kunnen komen voor uw kappersbehoeften? Of het nu gaat om een
            bruiloft, een fotoshoot of gewoon om het gemak van een kapper aan
            huis, onze professionele kappers staan voor u klaar.
          </p>
          <p>
            Onze op maat gemaakte diensten en op locatie kappersbezoeken worden
            echter tegen verschillende tarieven aangeboden. De kosten kunnen
            variëren afhankelijk van uw specifieke vereisten en de afstand die
            we moeten afleggen om u te bereiken. Maar we verzekeren u dat onze
            prijzen concurrerend en betaalbaar zijn voor de kwaliteit van onze
            dienstverlening. Neem gerust contact met ons op voor meer informatie
            over onze op maat gemaakte diensten en de tarieven voor onze op
            locatie kappersbezoeken.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Menu
