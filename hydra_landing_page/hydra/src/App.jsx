import React, { useRef } from "react";
import Navbar from "./components/navbar/navbar";
import Beforeintro from "./components/beforeintro/beforeintro";
import Background_color from "./App.module.css";
import Contactbar from "./components/contactbar/contactbar";
import Introduction from "./components/Introduction/Introduction";
import Whybuild from "./components/Why build/whybuild";
import Sponsor from "./components/sponsor/sponsor";
import How_we_build from "./components/how_we_build/How_we_build";
import Form from "./components/formulaire/form";
import Footer from "./components/Footer/Footer";


function App() {

  const aboutRef = useRef(null);
  const services = useRef(null);
  const thec = useRef(null);
  const how_to = useRef(null);
  const join_hydra = useRef(null);
  return (
    <>
      <div className={Background_color.backgr}>

        <Navbar aboutRef= {aboutRef} services ={services} thec ={thec} how_to = {how_to} join_hydra={join_hydra} />
        <Beforeintro />
        <Contactbar />
        <Introduction aboutRef= {aboutRef}  />
        <Whybuild  services ={services}/>
        <Sponsor thec={thec}/>
        <How_we_build how_to = {how_to}/>
        <Form join_hydra={join_hydra} />
        <Footer />
      </div>
    </>
  );
}
export default App;
