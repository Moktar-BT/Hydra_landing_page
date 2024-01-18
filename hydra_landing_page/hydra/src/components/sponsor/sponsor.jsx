import React from 'react'
import styles from '../sponsor/sponsor.module.css'
import spons_bg from '../../assets/spons_bg.png'
import logo1 from '../../assets/logo1.png'
import logo2  from '../../assets/logo2.png'
import logo3 from '../../assets/logo3.png'
import logo4 from '../../assets/logo4.png'
import down_arr from '../../assets/down_arr.png'



function Sponsor(props) {
  return (
    <>
    <div className={styles.container} ref={props.thec}>
        <section >
            <img src={spons_bg} alt="image"  className={styles.image0} />
            <span className={styles.span00}>TECHNOLOGIES & HARDWARE</span>
            <span className={styles.span01}>USED BY HYDRA VR.</span>
            <div className={styles.btn_bg}>
            <img src={down_arr} alt="button"  className={styles.btn}/>
            </div>
            
            <img src={logo1} alt="image"  className={styles.image1}/>
            <img src={logo2} alt="image"  className={styles.image2}/>
            <img src={logo3} alt="image"  className={styles.image3}/>
            <img src={logo4} alt="image"  className={styles.image4}/>
        </section>


    </div>

    
    
    
    
    </>
  )
}

export default Sponsor;