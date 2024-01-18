import React, { useRef } from "react";
import styles from "../navbar/navbar.module.css";
import logo from "../../assets/LOGO.png";
import hydra from "../../assets/HYDRA.png";
import Hamburger_Button from "../../assets/Hamburger_Button.png"


const Navbar = ({thec,aboutRef,join_hydra,services,how_to}) => {
  const scrollfunction3 = () => thec.current.scrollIntoView({ behavior: 'smooth' });
  const scrollfunction1 = () => aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  const scrollfunction5 = () => join_hydra.current.scrollIntoView({ behavior: 'smooth' });
  const scrollfunction2 = () => services.current.scrollIntoView({ behavior: 'smooth' });
  const scrollfunction4 = () => how_to.current.scrollIntoView({ behavior: 'smooth' });


  return (
    <div className={styles.global_nav_bar}>
      <div>
        <img src={logo} alt="logo" className={styles.logo} />
        <img src={hydra} alt="hydra" className={styles.hydra} />
      </div>
      <div className={styles.links}>
        <span className={styles.links_item} onClick={scrollfunction1}>about</span>
        <span className={styles.links_item} onClick={scrollfunction2}>services</span>
        <span className={styles.links_item} onClick={scrollfunction3}>thechnologies</span>
        <span className={styles.links_item} onClick={scrollfunction4}>how to</span>
      </div>
      <div className={styles.btn}>
        <button className={styles.btn1}>CONTACT US</button>
        <button className={styles.btn2} onClick={scrollfunction5}>JOIN HYDRA</button>
      </div>   
      {/* <button className={styles.btn_Hamburger_Button}><img src={Hamburger_Button} /></button> */}

    </div>
  );
};
export default Navbar;
