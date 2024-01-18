import React from "react";
import styles from "../formulaire/form.module.css";
function Form(props) {
  return (
    <>
      <div className={styles.container} ref={props.join_hydra}>
        <div className={styles.container1}>
        <span className={styles.span00}>JOIN HYDRA</span>
        <span className={styles.span01}>Let’s Build Your VR Experience</span>
        </div>
        <div className={styles.container2}>
            <form action="" className={styles.form_cont}>
            <input placeholder='First Name' type="text" className={styles.input1}></input>
            <input placeholder='Last Name' type="text"className={styles.input2}></input>
            <input placeholder='Email' type="email" className={styles.input3}></input>
            <input placeholder='Phone Number' type="phone"className={styles.input4}></input>
            <input placeholder='Subject' type="text" className={styles.input5}></input>
            <textarea placeholder='Tell Us Something ...'  className={styles.input6}></textarea>
            <button className={styles.btn}>SEND TO HYDRA</button>
            
          </form>
        </div>
        
      </div>
    </>
  );
}

export default Form;
