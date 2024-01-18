import React from 'react'
import styles from '../contactbar/contactbar.module.css'
import log_loc from '../../assets/Location-Icon.png'
import log_call from '../../assets/phone-call.png'
import log_mail from '../../assets/mail.png'

function Contactbar() {
  return (
  <>
  <div className={styles.contact_container}>
    <section className={styles.location}>
    <img src={log_loc} alt="location_logo" className={styles.loca_logo} />
    <span className={styles.spanstyle1}>Pay Us a Visit</span>
    <p className={styles.p1}>Union St, Seattle, WA 98101, United States</p>

    </section>
    <section className={styles.call}>
    <img src={log_call} alt="call_logo" className={styles.call_logo} />
    <span className={styles.spanstyle2}>Give Us a Call<br/></span>
    <p className={styles.p2}>(110) 1111-1010</p>

    </section>
    <section className={styles.messages}>
    <img src={log_mail} alt="mail_logo" className={styles.mail_logo} />
    <span className={styles.spanstyle3}>Send Us a Message</span>
    <p className={styles.p3}>Contact@HydraVTech.com</p>
    </section>
  </div>
  </>
  )
}

export default Contactbar;