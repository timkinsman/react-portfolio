import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBehance, faFacebook, faLinkedin, faSpotify } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import styles from "./Links.module.css";

function Links() {
  return (
    <div className={`${styles["links-container"]} global-isdesktop`}>       
        <a className={styles["links-icon"]} href="mailto:mskinsm@gmail.com" target="_blank"><FontAwesomeIcon icon={faAt} /></a>
        <a className={styles["links-icon"]} href="https://www.behance.net/matthewkinsman" target="_blank"><FontAwesomeIcon icon={faBehance} /></a>
        <a className={styles["links-icon"]} href="https://www.linkedin.com/in/matthew-kinsman/" target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a className={styles["links-icon"]} href="https://www.facebook.com/mskinsm/" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a>
        <a className={styles["links-icon"]} href="https://open.spotify.com/user/mskinsm" target="_blank"><FontAwesomeIcon icon={faSpotify} /></a>
    </div>
  );
}

export default Links;
