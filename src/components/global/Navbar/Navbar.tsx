import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar(props: any) {
  return (
    <div className={styles["navbar-container"]}>
        <h3><Link className="global-border-regular" style={{opacity: props.selected === "home" ? "1" : "0.4" }} to="/">Matthew Kinsman</Link></h3>

        <div className={`${styles["navbar-right"]} global-isdesktop`}>
          <h3><Link className="global-border-regular" style={{opacity: props.selected === "work" ? "1" : "0.4" }} to="/casestudies">Case studies</Link></h3>
          <h3><Link className="global-border-regular" style={{opacity: props.selected === "about" ? "1" : "0.4" }} to="/aboutme">About me</Link></h3>
          <h3><Link className="global-border-regular" style={{opacity: props.selected === "whatido" ? "1" : "0.4" }} to="/whatido">What I do</Link></h3>
          <h3><Link className="global-border-regular" style={{opacity: props.selected === "stuff" ? "1" : "0.4" }} to="/otherwork">Other work</Link></h3>
          <h3><Link className="global-border-regular" style={{opacity: props.selected === "contact" ? "1" : "0.4" }} to="/contact">Contact</Link></h3>
        </div>
        <div className={`${styles["navbar-hamburger"]} global-ismobile`}>
          <h3>HAM</h3>
        </div>
    </div>
  )
}

export default Navbar;
