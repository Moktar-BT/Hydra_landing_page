import React from "react";
import styles from "../Footer/footer.module.css";
import hydra_logo from "../../assets/Frame.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import youtube from "../../assets/youtube.png";
import instagram from "../../assets/instagram.png";
import pinterest from "../../assets/pinterest.png";

function Footer() {
  return (
    <>
      <div className={styles.container00}>
        <section className={styles.container10}>
            <div className={styles.logo_border}>
            <img src={hydra_logo} alt="logo" className={styles.logo01} />
            </div>
          <span className={styles.text1}>
            <span className={styles.link1}>ABOUT</span> <span className={styles.link2}>SERVICES</span> <span className={styles.link3}>TECHNOLOGIES</span> <span className={styles.link4}>HOW TO</span> <span className={styles.link5}>JOIN HYDRA</span>
          </span>
          <span className={styles.text2}>
            <span className={styles.link10}>F.A.Q</span> <span className={styles.link20}>SITEMAP</span> <span className={styles.link30}>CONDITIONS</span> <span className={styles.link40}>LICENSES</span> 
          </span>
          <section className={styles.container11}>
            <span className={styles.text21}>SOCIALIZE WITH HYDRA</span>
            <div className={styles.logos}>
              <img src={pinterest} alt="logo" className={styles.logo} />
              <img src={instagram} alt="logo" className={styles.logo} />
              <img src={youtube} alt="logo" className={styles.logo} />
              <img src={linkedin} alt="logo" className={styles.logo} />
              <img src={twitter} alt="logo" className={styles.logo} />
              <img src={facebook} alt="logo" className={styles.logo} />
              <button className={styles.btn}>BUILD YOUR WORLD</button>
            </div>
          </section>
        </section>
        <section className={styles.container20}>
          <span className={styles.copyright}>
            2023 © HYDRA LANDING PAGE - BY ZINE. E. FALOUTI - ALL RIGHTS
            RESERVED{" "}
          </span>
        </section>
      </div>
    </>
  );
}

export default Footer;
