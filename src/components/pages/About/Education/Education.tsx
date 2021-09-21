import React from "react";
import Item from "../../../global/Item/Item";
import styles from "./Education.module.css";

function Education() {
  const isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;
  return (
    <div className="global-wrapper">
        <h3 className="global-header" style={{padding: isMobile ? "0 0 40px 0" : ""}}>Education</h3>
        <div className={styles["education-space-between"]}>
          <Item emoji="" header="St. Michael's College" content="Year 8 - Year 12" footer="January 2005 - December 2010" />
          <Item emoji="" header="TAFE SA" content="Certificate IV Visual Arts" footer="January 2011 - December 2011" />
          <Item emoji="" header="UniSA" content="Bachelor of Design" footer="March 2012 - November 2014" />
        </div>
    </div>
  );
}

export default Education;
