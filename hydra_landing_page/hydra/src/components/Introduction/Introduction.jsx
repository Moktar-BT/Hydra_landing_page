import React from "react";
import styles from "../Introduction/Introduction.module.css";
import arr from "../../assets/arr.png";
import mask_gr from "../../assets/mask-gr.png";


function Introduction(props) {

  return (
    <>
      <div className={styles.container}>
        <section className={styles.leftside}>
          <span className={styles.intro}>INTRODUCTION </span>
          <span className={styles.to_hydra}>TO HYDRA VR </span>
          <img src={arr} alt="arrow"  className={styles.arr}/>
          <img src={mask_gr} alt="img"  className={styles.mask_gr}/>
        </section>
        <section className={styles.rightside}>
          <p className={styles.text1}>Vitae sapien pellentesque habitant morbi tristique senectus et netus et. Feugiat 
nibh sed pulvinar proin gravida hendrerit lectus. Mi sit amet mauris commodo 
quis imperdiet massa tincidunt nunc. Viverra aliquet eget sit amet tellus. Ornare 
lectus sit amet est placerat in. Lectus magna fringilla urna porttitor rhoncus vitae.</p>
          <span className={styles.about} ref={props.aboutRef}  >ABOUT</span>
          <span className={styles.hydra_vr}>HYDRA VR</span>
          <p className={styles.text2}>Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus mattis rhoncus 
urna neque viverra justo. Vivamus at augue eget arcu dictum. Ultrices gravida 
dictum fusce ut placerat orci. Aenean et tortor at risus viverra adipiscing at in. 
Mattis aliquam faucibus purus in massa. Est placerat in egestas erat imperdiet 
sed. Consequat semper viverra nam libero justo laoreet sit amet. Aliquam 
etiam erat velit scelerisque in dictum non consectetur a. Laoreet sit amet 
cursus sit amet. Vel eros donec ac odio tempor orci dapibus. Sem nulla pha
retra diam sit amet nisl suscipit adipiscing bibendum. Leo a diam sollicitudi
n tempor.</p>
          <button className={styles.btn}>LET’S GET IN TOUCH</button>
        </section>
      </div>
    </>
  );
}

export default Introduction;
