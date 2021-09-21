import React from "react";
import Footer from "../../global/Footer/Footer";
import Navbar from "../../global/Navbar/Navbar";
import Socials from "./Socials/Socials";
import images from "../../../images/Emojis";
import styles from "./Contact.module.css";

function Contact() {
  const isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;

  return (
    <div className="global-fadein">
      <div className="global-main-container">
        <Navbar selected="contact" />
        <div className="global-container">
          <p className="global-title" style={{padding: isMobile ? "20px 0 10px 0" : ""}}>Contact</p>
          <div className="global-wrapper">
            <h3 className="global-header" style={{paddingBottom: isMobile ? "40px" : ""}}>Get in touch</h3>
            <h4>If you have any questions or want to collaborate please don't hesitate to get in touch.</h4>
          </div>
          <div className="global-wrapper">
            <div className={styles["contact-grid"]}>
              <div>
                <img className={styles["contact-img"]} src={isMobile ? "" : images.enquiries} />
                <h3 style={{marginBottom: isMobile ? "40px" : "10px"}}>Enquiries</h3>
                <h4><a className="global-border-regular" href="https://www.google.com.au/forms/about/" target="_blank">Client brief form</a></h4>
              </div>
              <div>
                <img className={styles["contact-img"]} src={isMobile ? "" : images.phone} />
                <h3 style={{marginBottom: isMobile ? "40px" : "10px"}}>Phone</h3>
                <h4><a className="global-border-regular" href="tel:+61424792708" target="_blank">+61 424 792 708</a></h4>
              </div>
              <div>
                <img className={styles["contact-img"]} src={isMobile ? "" : images.email} />
                <h3 style={{marginBottom: isMobile ? "40px" : "10px"}}>Email</h3>
                <h4><a className="global-border-regular" href="mailto:hello@matthewkinsman.com" target="_blank">hello@matthewkinsman.com</a></h4>
              </div>
            </div>
          </div>
          <Socials />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Contact;
