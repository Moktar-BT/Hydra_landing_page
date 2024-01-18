import React from "react";
import styles from "../Why build/whybuild.module.css";
import arr from "../../assets/arr.png";
import mask1 from "../../assets/mask1.png";
import mask2 from "../../assets/mask2.png";
import mask3 from "../../assets/mask3.png";
import mask4 from "../../assets/mask4.png";

function Whybuild(props) {

  return (
    <>
      <div className={styles.container}>
        <section className={styles.topside}>
          <span className={styles.whybuild}>WHY BUILD</span>
          <span className={styles.with_hydra}>WITH HYDRA?</span>
          <img src={arr} alt="arrow" className={styles.arr} />
          <p className={styles.text0}>
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </section>
        <section className={styles.botside}>
          <div className={styles.card1} ref={props.services}>
            <img src={mask1} alt="image" className={styles.mask}/>
            <span className={styles.span}>SIMULATION</span>
            <p className={styles.par}>
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <button className={styles.btn1}>TRY IT NOW</button>
          </div>
          <div className={styles.card2}>
            <img src={mask2} alt="image" className={styles.mask} />
            <span className={styles.span}>EDUCATION</span>
            <p className={styles.par}>
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <button className={styles.btn2}>TRY IT NOW</button>
          </div>
          <div className={styles.card3}>
            <img src={mask3} alt="image" className={styles.mask} />
            <span className={styles.span}>SELF-CARE</span>
            <p className={styles.par}>
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <button className={styles.btn3}>TRY IT NOW</button>
          </div>
          <div className={styles.card4}>
            <img src={mask4} alt="image" className={styles.mask} />
            <span className={styles.span}>OUTDOOR</span>
            <p className={styles.par}>
              Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
              porttitor rhoncus libero justo laoreet sit amet vitae.
            </p>
            <button className={styles.btn4}>TRY IT NOW</button>
          </div>
        </section>
      </div>
    </>
  );
}

export default Whybuild;
