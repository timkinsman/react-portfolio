import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Awards from "../../global/Awards/Awards";
import CardView from "../../global/CardView/CardView";
import Clients from "../../global/Clients/Clients";
import Footer from "../../global/Footer/Footer";
import Pagnation from "./Pagnation/Pagnation";
import Links from "./Links/Links";
import Navbar from "../../global/Navbar/Navbar";
import Testimonials from "./Testimonials/Testimonials";
import Panel from "./Panel/Panel";
import Spotify from "./Spotify/Spotify";
import studies from "../../../studies";
import $ from "jquery";
import styles from "./Home.module.css";
import { updateTheme } from "../../../actions";
import {connect} from "react-redux";
import video from "../../../videos/Memoji.webm";
import { DARK, LIGHT } from "../../../colors";
import { FiMoon, FiSun } from "react-icons/fi"
import { BsArrowDown } from "react-icons/bs"
import {ReactComponent as ThemeSun} from '../../../images/Theme/sun.svg';
import {ReactComponent as ThemeMoon} from '../../../images/Theme/moon.svg';


const Home = (props: any) => {
  useEffect(() => {
    document.addEventListener("scroll", onScroll, true);
    return () => { window.removeEventListener("scroll", onScroll) } 
  }, [])

  const getIndexByTitle = (pstrStudy: string) => {
    return studies.map(study => study.title).indexOf(pstrStudy);
  }
  
  const _objPanelOne = studies[getIndexByTitle("City of Port Phillip")]
  const _objPanelTwo = studies[getIndexByTitle("BankVic")]
  const _objPanelThree = studies[getIndexByTitle("Lumea")]
  const _objPanelFour = studies[getIndexByTitle("Bupa")]

  const handleOnClick = (pstrId: string) => {
    $('html,body').animate({scrollTop: $(pstrId).offset()?.top}, 'slow');
  }

  const handleOnMouseMove = (pobjEvent: any) => {
    const moiTwo = {width: $("#mouse-over-image-two").width(), height: $("#mouse-over-image-two").height()}
    const moiThree = {width: $("#mouse-over-image-three").width(), height: $("#mouse-over-image-three").height()}
    const moiFour = {width: $("#mouse-over-image-four").width(), height: $("#mouse-over-image-four").height()}
    const moiFive = {width: $("#mouse-over-image-five").width(), height: $("#mouse-over-image-five").height()}

    if(moiTwo.width && moiThree.width && moiFour.width && moiFive.width && moiTwo.height && moiThree.height && moiFour.height && moiFive.height){
      $("#mouse-over-image-two").css({left: pobjEvent.clientX - (moiTwo.width / 2), top: pobjEvent.clientY - (moiTwo.height / 2)});
      $("#mouse-over-image-three").css({left: pobjEvent.clientX - (moiThree.width / 2), top: pobjEvent.clientY - (moiTwo.height / 2)});
      $("#mouse-over-image-four").css({left: pobjEvent.clientX - (moiFour.width / 2), top: pobjEvent.clientY - (moiTwo.height / 2)});
      $("#mouse-over-image-five").css({left: pobjEvent.clientX - (moiFive.width / 2), top: pobjEvent.clientY - (moiTwo.height / 2)});
    }
  }

  const onScroll = () => {
    var background = "inherit"

    if(_scrollTop("#two", "#three")){
      background = _objPanelOne.color
    }else if(_scrollTop("#three", "#four")){
      background = _objPanelTwo.color
    }else if(_scrollTop("#four", "#five")){
      background = _objPanelThree.color
    }else if(_scrollTop("#five", "#six")){
      background = _objPanelFour.color
    }

    $("#home").css("background", background)
    $("#home").css("color", background === "inherit" ? "inherit" : isBright(background) ? "#000000" : "#FFFFFF")
  }

  const isBright = (pstrHex: string): Boolean => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(pstrHex);
    if(result){
      //0.2126 R + 0.7152 G + 0.0722 B
      //console.log((0.2126 * parseInt(result[1], 16)) + (0.7152 * parseInt(result[2], 16)) + (0.0722 * parseInt(result[3], 16)))
      return (0.2126 * parseInt(result[1], 16)) + (0.7152 * parseInt(result[2], 16)) + (0.0722 * parseInt(result[3], 16)) > 224 ? true : false
    }
    return true
  }

  const _scrollTop = (pstrId: string, pstrIdNext: string) => {
    const strDocTop = $(document).scrollTop();
    const idTop = $(pstrId).offset()?.top
    const idNextTop = $(pstrIdNext).offset()?.top
    const winHeight = $(window).height()

    if(strDocTop !== undefined && idTop !== undefined && idNextTop !== undefined && winHeight !== undefined){
      if(strDocTop >= (idTop - (winHeight / 2)) && strDocTop < (idNextTop - (winHeight / 2))){
        return true
      }
    }

    return false    
  }

  const fadeIn = (pobj: any) => {
      $(pobj.target).css('visibility','visible').hide().fadeIn(1000);
  }

  return (
    <div id="container" style={{background: props.portfolio.theme === "DARK" ? DARK : LIGHT, color: props.portfolio.theme === "DARK" ? "#FFFFFF" : "#000000" }}>
      <div id="home" style={{transition: "background 1s, color 1s"}} className="global-fadein" onMouseMove={handleOnMouseMove}>
        <div style={{opacity: 0, animationDelay : '2s'}} className={styles["home-visibility-hidden"]}>
          <Links />
          <Pagnation />
        </div>
        
        <div className={`${styles["home-banner"]} global-main-container`} id="one">
          <div className={styles["home-panel"]}>
            <Navbar selected="home" />

            <div style={{opacity: 0, animationDelay : '0.5s'}} className={`${styles["home-banner-content"]} ${styles["home-visibility-hidden"]}`}>
              <h1 className={styles["home-panel-text"]}>
                Hello, my name is <Link className="global-border-bold" to="/about">Matthew Kinsman</Link>,<br />
                I’m a senior product designer<br />
                currently living in Melbourne and<br />
                and working at <a className="global-border-bold" href="https://www.mindsethealth.com" rel="noreferrer" target="_blank">Mindset Health</a>.
              </h1>
              <div className={`${styles["video-container"]} global-isdesktop`}>
                <video className={styles["video"]} onCanPlayThrough={fadeIn} id="video" autoPlay loop muted src={video} />
              </div>
            </div>

            <div className={styles["home-panel-bottom"]}>
              <div style={{opacity: 0, animationDelay : '1s'}} className={styles["home-visibility-hidden"]}>
                <Spotify />
              </div>
              
              <div style={{opacity: 0, animationDelay : '1.5s'}} className={`${styles["home-arrow"]} ${styles["home-visibility-hidden"]}`}>
                {props.portfolio.theme === "DARK" ? <a onClick={() => props.updateTheme("LIGHT")}><ThemeSun height="52" fill="none" stroke="currentColor" /></a> :
                <a onClick={() => props.updateTheme("DARK")}><ThemeMoon height="52" fill="none" stroke="currentColor" /></a>}
                <a style={{marginLeft: "15px"}} onClick={() => handleOnClick("#two")}><BsArrowDown style={{fontSize: "50px"}} /></a>
              </div>
            </div>
          </div>
        </div>

        <Panel study={_objPanelOne} id="two" next="three" />
        <Panel study={_objPanelTwo} id="three" next="four" />
        <Panel study={_objPanelThree} id="four" next="five" />
        <Panel study={_objPanelFour} id="five" next="six" />

        <div className="global-container" style={{paddingTop: "240px"}}>
          <CardView filter="" id="six" />
          <Clients />
          <Awards />
          <Testimonials />
          <Footer />
        </div>
      
        <img className={styles["mouse-over-image"]} id="mouse-over-image-two" src={_objPanelOne.hover} alt={_objPanelOne.title} />
        <img className={styles["mouse-over-image"]} id="mouse-over-image-three" src={_objPanelTwo.hover} alt={_objPanelTwo.title} />
        <img className={styles["mouse-over-image"]} id="mouse-over-image-four" src={_objPanelThree.hover} alt={_objPanelThree.title} />
        <img className={styles["mouse-over-image"]} id="mouse-over-image-five" src={_objPanelFour.hover} alt={_objPanelFour.title} />
      </div>
    </div>
  );
}

const mapStateToProps = ( state: { portfolio: any; }, ownProps: any ) => {
  return {
    portfolio: state.portfolio
  }
}

export default connect(mapStateToProps, { 
  updateTheme
})(Home);
