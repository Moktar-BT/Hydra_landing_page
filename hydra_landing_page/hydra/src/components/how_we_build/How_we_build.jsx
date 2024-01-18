import React from "react";
import styles from "../how_we_build/how_we_build.module.css";
import arr from "../../assets/arr.png";
import sarr from "../../assets/sarr.png";

function How_we_build(props) {
  return (
    <>
      <div className={styles.container}>
        <section className={styles.topside}>
          <span className={styles.span01} ref={props.how_to}>HOW WE BUILD</span>
          <span className={styles.span02}>WITH HYDRA VR?</span>
          <img src={arr} alt="" className={styles.arr} />
          <p className={styles.par}>
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </section>
        <section className={styles.botside}> 
          <div className={styles.num}>01</div>
          <div className={styles.num}>02</div>
          <div className={styles.num}>03</div>
          <div className={styles.num}>04 </div>
        </section>
        <section>
          <span className={styles.span10}>3D Conception & Design</span>
          <img src={sarr} alt="arrow" className={styles.sarr01} />
          <span className={styles.span20}>Interaction Design</span>
          <img src={sarr} alt="arrow" className={styles.sarr02} />
          <span className={styles.span30}>VR World User Testing</span>
          <img src={sarr} alt="arrow" className={styles.sarr03} />
          <span className={styles.span40}>Hydra VR Deploy</span>
          <img src={sarr} alt="arrow" className={styles.sarr04} />
        </section>
      </div>
    </>
  );
}

export default How_we_build;
