import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import {ReactComponent as Menu} from '../../../images/menu.svg';
import {ReactComponent as MenuRemove} from '../../../images/menu-remove.svg';
import $ from "jquery"

function Navbar(props: any) {
  const [menu, setMenu] = useState(false)

  const isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;

  const render = () => {
    if(menu === false){
      $("body").css({"overflow": "auto"})
      $("#navbar-menu").css({"visibility": "hidden", "opacity": "0"})
      return <a><Menu fill="none" stroke="currentColor" onClick={() => setMenu(true)} /></a>
    }else{
      $("body").css({"overflow": "hidden"})
      $("#navbar-menu").css({"visibility": "visible", "opacity": "1"})
      return <a style={{zIndex: 2}}><MenuRemove fill="none" stroke="currentColor" onClick={() => setMenu(false)} /></a>
    }
  }

  const renderHome = () => {
    if(isMobile) {
      return <h5 style={{zIndex: 2}}><Link className="global-border-regular" style={{opacity: props.selected === "home" ? "1" : "0.4"}} to="/">Matthew Kinsman</Link></h5>
    }else{
      return <h3 style={{zIndex: 2}}><Link className="global-border-regular" style={{opacity: props.selected === "home" ? "1" : "0.4"}} to="/">Matthew Kinsman</Link></h3>
    }
  }

  return (
    <div className={styles["navbar-container"]}>
        {renderHome()}

        <div className={`${styles["navbar-right"]} global-isdesktop`}>
          <h3><Link className="global-border-regular" style={{opacity: props.selected === "work" ? "1" : "0.4" }} to="/casestudies">Case studies</Link></h3>
          <h3><Link className="global-border-regular" style={{opacity: props.selected === "about" ? "1" : "0.4" }} to="/aboutme">About me</Link></h3>
          <h3><Link className="global-border-regular" style={{opacity: props.selected === "whatido" ? "1" : "0.4" }} to="/whatido">What I do</Link></h3>
          <h3><Link className="global-border-regular" style={{opacity: props.selected === "stuff" ? "1" : "0.4" }} to="/otherwork">Other work</Link></h3>
          <h3><Link className="global-border-regular" style={{opacity: props.selected === "contact" ? "1" : "0.4" }} to="/contact">Contact</Link></h3>
        </div>
        <div className={`${styles["navbar-hamburger"]} global-ismobile`}>
          {render()}
          <div id="navbar-menu" className={`${styles["navbar-menu-container"]}`} style={{background: $("body").css( "background-color" )}}>
              <div className={`${styles["navbar-menu-content"]} global-container`}>
                {isMobile ? <h1><Link className="global-border-regular" style={{opacity: props.selected === "work" ? "1" : "0.4" }} to="/casestudies">Case studies</Link></h1> : <h3><Link className="global-border-regular" style={{opacity: props.selected === "work" ? "1" : "0.4" }} to="/casestudies">Case studies</Link></h3>}
                {isMobile ? <h1><Link className="global-border-regular" style={{opacity: props.selected === "about" ? "1" : "0.4" }} to="/aboutme">About me</Link></h1> : <h3><Link className="global-border-regular" style={{opacity: props.selected === "about" ? "1" : "0.4" }} to="/aboutme">About me</Link></h3>}
                {isMobile ? <h1><Link className="global-border-regular" style={{opacity: props.selected === "whatido" ? "1" : "0.4" }} to="/whatido">What I do</Link></h1> : <h3><Link className="global-border-regular" style={{opacity: props.selected === "whatido" ? "1" : "0.4" }} to="/whatido">What I do</Link></h3>}
                {isMobile ? <h1><Link className="global-border-regular" style={{opacity: props.selected === "stuff" ? "1" : "0.4" }} to="/otherwork">Other work</Link></h1> : <h3><Link className="global-border-regular" style={{opacity: props.selected === "stuff" ? "1" : "0.4" }} to="/otherwork">Other work</Link></h3>}
                {isMobile ? <h1><Link className="global-border-regular" style={{opacity: props.selected === "contact" ? "1" : "0.4" }} to="/contact">Contact</Link></h1>  : <h3><Link className="global-border-regular" style={{opacity: props.selected === "contact" ? "1" : "0.4" }} to="/contact">Contact</Link></h3>}
              </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar;
