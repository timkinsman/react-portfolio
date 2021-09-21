import React from "react";

const CurriculumVitae = () => {
    const isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;
    return (
        <div className="global-wrapper" style={{padding: isMobile ? "30px 0 60px 0" : ""}}>
            <h3 className="global-header" style={{padding: isMobile ? "0 0 40px 0" : ""}}>Curriculum Vitae</h3>
            <h4><a className="global-border-regular" href="mailto:mskinsm@gmail.com?subject=CV request" target="_blank">Request to view</a></h4>
        </div>
    )
}

export default CurriculumVitae