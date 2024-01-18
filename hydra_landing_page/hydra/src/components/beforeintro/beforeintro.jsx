import React from "react";
import styles from "../beforeintro/beforeintro.module.css";
import arrow from "../../assets/sarr.png";
import bii from "../../assets/beforeintro_img.png"
function Beforeintro() {
  return (
    <>
      <div>
        <div className={styles.span0}>
        <span className={styles.span1}>
          <span className={styles.pur}>Dive </span> Dive Into The Depths
        </span>
        <span className={styles.span2}>
          Of<span className={styles.pur1}>Virtual Reality</span>  
        </span>
        <p className={styles.para}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore nisl tincidunt eget.
          Lectus mauris eros in vitae .
        </p>
        </div>
  
        <button className={styles.butt}>BUILD YOUR WORLD </button>
        <img src={arrow} alt="arrow" className={styles.arr} />
        <div className={styles.shadow}>
        <img src={bii} alt="hydra_img" className={styles.bi} />
        </div>
        
      </div>
    </>
  );
}

export default Beforeintro;
