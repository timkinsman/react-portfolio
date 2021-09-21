import React from "react";
import Awards from "../../global/Awards/Awards";
import Clients from "../../global/Clients/Clients";
import Experience from "./Experience/Experience";
import Footer from "../../global/Footer/Footer";
import Navbar from "../../global/Navbar/Navbar";
import Bio from "./Bio/Bio";
import CurriculumVitae from "./CurriculumVitae/CurriculumVitae";
import Education from "./Education/Education";
import styles from "./About.module.css";

function About() {
  const isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;

  return (
    <div className="global-fadein">
      <div className="global-main-container">
        <Navbar selected="about" />
        <div className="global-container">
          <p className="global-title">About me</p>
          <div className={`${styles["about-quote"]} global-wrapper`} style={{padding: isMobile ? "32px 0" : ""}}>
            {isMobile ?
              <h3>In design, “intuitive” is a synonym for “matches the user’s mental model.” The closer an interface fits that image, the easier it will be to learn, use and navigate. This is a concept with a lot of practical value.” – Erika Hall</h3> :
              <h2>In design, “intuitive” is a synonym for “matches the user’s mental model.” The closer an interface fits that image, the easier it will be to learn, use and navigate. This is a concept with a lot of practical value.” – Erika Hall</h2>
            }
          </div>
          <Bio />
          <Education />
          <Experience />
          <Clients />
          <Awards />
          <CurriculumVitae />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default About;
