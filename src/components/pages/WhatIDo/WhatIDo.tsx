import React from "react";
import Footer from "../../global/Footer/Footer";
import Item from "../../global/Item/Item";
import Navbar from "../../global/Navbar/Navbar";
import Tools from "./Tools/Tools";
import { arrResearchMethods } from "../../../tagging/researchMethods";
import images from "../../../images/Emojis"
import styles from "./WhatIDo.module.css";

function WhatIDo() {
  const isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;
  
  const renderResearchMethods = (parrstrResearchMethods: Array<string>) => {
    return parrstrResearchMethods.map((pstrResearchMethod) => {
      return <h4 style={{margin: isMobile ? "9px 0" : ""}}>{pstrResearchMethod}</h4>
    })
  }

  return (
    <div className="global-fadein">
      <div className="global-main-container">
        <Navbar selected="whatido" />
        <div className="global-container">
          <p className="global-title">What I do</p>
          
          <div className="global-wrapper" style={{padding: isMobile ? "20px 0 30px 0" : ""}}>
            <div className={styles["whatido-grid-two"]} style={{gap: isMobile ? "40px" : ""}}>
              <div>
                {isMobile ? "" : <img style={{height: "40px", margin: "16px 0"}} src={images.whatitry} />}
                <h3 className="global-header" style={{paddingBottom: isMobile ? "40px" : ""}}>What I try to do</h3>
                <p>Listen, have at least showered before my first zoom call, solve complex problems, have fun, question everything, create transformative and memorable experiences, enable meaningful conversations between a brand and their audience, tell a story, dissolve ego, communicate clearly, consider everyone for accessibility, make a positive impact.</p>
              </div>
              <div>
                {isMobile ? "" : <img style={{height: "40px", margin: "16px 0"}} src={images.whatidonttry} />}
                <h3 className="global-header" style={{paddingBottom: isMobile ? "40px" : ""}}>What I <i>don't</i> try to do</h3>
                <p>Make assumptions, ask leading questions, use too many buzzwords, go over budget, abbreviate things, bite off more than I can chew, worry about success, let my perfectionism seep in, take a ‘waterfall’ approach, take the easier path, make arbitrary decisions, add to the world’s noise.</p>
              </div>
            </div>
          </div>

          <div className="global-wrapper">
            <h3 className="global-header" style={{paddingBottom: isMobile ? "40px" : ""}}>Process</h3>
            <div className={styles["whatido-grid-three"]}>
              <Item emoji={images.strategy} header="1. Strategise" content="Planning sounds rigid and what you have the luxury of doing when you’re in control. In this line of work, things change and they change quickly and often. You need to be able to adapt. A strategy is more like a vision of what you hope to achieve as opposed to the precise steps on how to get there." footer=""/>
              <Item emoji={images.research} header="2. Research" content="Understanding your target audience is the key to knowing how to best communicate with them. Reading, observing and listening are your superpowers here, use them. Absorb the critical information detailing what their needs, perceptions and behaviours are and where their pain points lie." footer=""/>
              <Item emoji={images.analyse} header="3. Analyse" content="By this point you should have the lie of the land. You’ll then need to synthesise and distil the information so it can be easier managed and interpreted into insights, themes and opportunity areas. One or more problems should be defined and framed so that you can formulate a prioritized approach." footer=""/>
              <Item emoji={images.ideation} header="4. Ideate" content="Things will begin to take shape. You and your team using a divergent mindset will brainstorm concepts and potential solutions. This is where you will see utilising different perspectives thrives. The end-user is kept front of mind or may join in collaboration to ensure a level of confidence that output is desirable." footer=""/>
              <Item emoji={images.launch} header="5. Materialise" content="After arriving at a point democratically whereby a solution has been amalgamated together and agreed upon. The concept becomes more tangible and realised. It’s higher fidelity and can be understood functionally as if it were a precursor for the final solution. Its feasibility and viability is assessed." footer=""/>
              <Item emoji={images.measure} header="6. Test" content="It’s ready to be released into the wild, preferably before it can fend for itself. By working in an agile manner you and your team work quickly to identify faults by getting it in front of relevant users. Incrementally working towards something that is airtight and ideally infallible. By working this way you reduce risk." footer=""/>
            </div>
          </div>

          <div className="global-wrapper">
            <h3 className="global-header" style={{paddingBottom: isMobile ? "40px" : ""}}>Principles</h3>
            <div className={styles["whatido-grid-three"]}>
              <Item emoji={images.curious} header="Be curious" content="Ask lots of questions and then ask some more. At times it can be annoying, at times it might be the wrong ones to ask. But you don’t get the knowledge you are in search of without first being eager to obtain it." footer=""/>
              <Item emoji={images.proactive} header="First proactive, then reative" content="It’s always important to zoom out and not just focus on fixing problems caused by decisions that have already been made. This presents you with huge, often challenging constraints to work under. Dig deeper and establish context." footer=""/>
              <Item emoji={images.systemsthinking} header="Systems thinking" content="Get out there and form a deep, holistic understanding for who you’re endeavouring to help. But go further, understand the ecosystem, the environment, the inter-relatedness of the person's situation and their problem." footer=""/>
              <Item emoji={images.unlock} header="Unlock real value" content="Not all solutions are good and not all good solutions earn genuine value. It will require more effort but in the long term it will be much more rewarding for not only who you’re advocating for but also yourself." footer=""/>
              <Item emoji={images.collaboration} header="Co-Design" content="You can’t do it alone and if you think you can, you’re wrong, no matter how empathetic or worldly your view is. It’s proven time and time again that when people work cohesively together they achieve better results." footer=""/>
              <Item emoji={images.validation} header="Validation is essential" content="Design is a step not the process. The following and more important step is validation and doing it properly. Put your ego aside and gather relevant feedback. 99.9% of the time it’s not what you want but what someone else needs." footer=""/>
            </div>
          </div>

          <div className="global-wrapper">
            <h3 className="global-header" style={{paddingBottom: isMobile ? "40px" : ""}}>Research Methods</h3>
            <div className={styles["whatido-grid-three-no-row-gap"]}>
              {renderResearchMethods(arrResearchMethods)}
            </div>
          </div>

          <Tools />

          <Footer />
        </div>
      </div>
    </div>
  );
}

export default WhatIDo;
