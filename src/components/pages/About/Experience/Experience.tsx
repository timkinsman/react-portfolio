import React from "react";
import Item from "../../../global/Item/Item";
import styles from "./Experience.module.css";

function Experience() {
  const isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;
  return (
    <div className="global-wrapper">
      <h3 className="global-header" style={{padding: isMobile ? "0 0 40px 0" : ""}}>Experience</h3>
      <div className={styles["experience-grid"]}>
        <Item emoji="" header="Collect" content="Intern Graphic Designer" footer="March 2015 - May 2015" link="https://www.collectdesign.com.au/" />
        <Item emoji="" header="SWEAT" content="Graphic Designer" footer="July 2015 - January 2016" link="https://www.sweat.com/" />
        <Item emoji="" header="SWEAT" content="Senior Graphic Designer" footer="January 2016 - February 2018" link="https://www.sweat.com/"  />
        <Item emoji="" header="Homely" content="UX Designer" footer="March 2018 - August 2018" link="https://www.homely.com.au/" />
        <Item emoji="" header="EatClub" content="UI/UX Designer (Contract)" footer="March 2018 - September 2018" link="https://eatclub.com.au/" />
        <Item emoji="" header="AKQA" content="Senior Experience Designer (Contract)" footer="September 2018 - December 2018" link="https://www.akqa.com/" />
        <Item emoji="" header="(i.e.,)" content="Senior Experience Designer" footer="December 2018 - July 2019" link="https://www.ie.com.au/" />
        <Item emoji="" header="VERSA Agency" content="Senior Experience Designer" footer="August 2019 - July 2021" link="https://versa.agency/" />
        <Item emoji="" header="Mindset Health" content="Senior Product Designer" footer="July 2021 - Present" link="https://www.mindsethealth.com" />
      </div>
    </div>
  );
}

export default Experience;
