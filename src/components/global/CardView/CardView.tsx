import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import Card from "../Card/Card";
import studies from "../../../studies";
import { arrCapabilities } from "../../../tagging/capabilities";
import { arrIndustries } from "../../../tagging/industries";
import { arrOutput } from "../../../tagging/output";
import { arrResearchMethods } from "../../../tagging/researchMethods";
import styles from "./CardView.module.css";
import $ from "jquery";

function CardView(props: any) {
  const [filter, setFilter] = useState<Array<string>>([])
  const [filterApply, setFilterApply] = useState<Array<string>>([])

  const [showCapability, setShowCapability] = useState(false)
  const [showClient, setShowClient] = useState(false)
  const [showIndustry, setShowIndustry] = useState(false)
  const [showOutput, setShowOutput] = useState(false)
  const [showResearchMethod, setShowResearchMethod] = useState(false)

  useEffect(() => { //set pre-filter
    if(props.filter !== ""){
      setFilterApply([props.filter])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleOnApply = () => {
    setShowCapability(false)
    setShowClient(false)
    setShowIndustry(false)
    setShowOutput(false)
    setShowResearchMethod(false)
    setFilterApply(filter)
    setFilter([])
  }

  const handleOnChange = (pstrSelectedFilter: string, pEvent: any) => {
    if(pEvent.target.checked){
      setFilter([...filter, pstrSelectedFilter])
    }else{
      setFilter(filter.filter(strExistingFilter => strExistingFilter !== pstrSelectedFilter))
    }
  }

  const handleOnClear = () => {
    setFilter([])
  }

  const handleOnClick = (pstrCategory: string) => {
    setFilterApply([])
    switch(pstrCategory){
      case "capability":
        setShowCapability(!showCapability)
        setShowClient(false)
        setShowIndustry(false)
        setShowOutput(false)
        setShowResearchMethod(false)
        break;
      case "client":
        setShowCapability(false)
        setShowClient(!showClient)
        setShowIndustry(false)
        setShowOutput(false)
        setShowResearchMethod(false)
        break;
      case "industry":
        setShowCapability(false)
        setShowClient(false)
        setShowIndustry(!showIndustry)
        setShowOutput(false)
        setShowResearchMethod(false)
        break;
      case "output":
        setShowCapability(false)
        setShowClient(false)
        setShowIndustry(false)
        setShowOutput(!showOutput)
        setShowResearchMethod(false)
        break;
      case "method":
        setShowCapability(false)
        setShowClient(false)
        setShowIndustry(false)
        setShowOutput(false)
        setShowResearchMethod(!showResearchMethod)
        break;
    }
  }

  const render = () => {
    if(showCapability === true){
      return renderMap("capabilities", arrCapabilities)
    }
    if(showIndustry === true){
      return renderMap("industries", arrIndustries)
    }
    if(showOutput === true){
      return renderMap("output", arrOutput)
    }
    if(showResearchMethod === true){
      return renderMap("researchMethods", arrResearchMethods.filter((pstrMethod) => pstrMethod != "Roadmapping"))
    }
    if(showClient === true){
      const arrStudyClients = studies.map((objStudy) => {
        return objStudy.title;
      });

      return renderMap("clients", arrStudyClients)
    }
  }

  const renderChip = () => {
    if(filterApply.length > 0){
      return (
        <div className={styles["card-view-chip"]}>
            {filterApply.map((strSelectedFilter: string, intIndex: number) => {
              return (
                <div
                  id={`renderChip-${intIndex}`}
                  className={styles["card-view-chip-div"]}
                  key={`renderChip-${intIndex}`}
                  onClick={() => setFilterApply(filterApply.filter(strExistingFilter => strExistingFilter !== strSelectedFilter))}
                >
                  <p className={styles["card-view-filter-p"]}>{strSelectedFilter} <span className={styles["card-view-filter-x"]}>✕</span></p>
                </div>
              )
            })}
        </div>
      )
    }
  }

  const renderMap = (pstrCategory: string, parrCategoryFilters: Array<string>) => {
    console.log($("#cards").position())
    return (
      <div key={pstrCategory} className={styles["card-view-filter"]}>
        {parrCategoryFilters.map((strFilter: any, intIndex: number) => {
          return (
            <div key={`renderMap-${intIndex}`} style={{opacity: 0, animationDelay : 0.25 * (Math.floor(intIndex / 4)) + 's'}}>
              <input className={props.portfolio.theme === "DARK" ? styles["card-view-chkbox"] : styles["card-view-chkbox-light"]} type="checkbox" onChange={(e) => handleOnChange(strFilter, e)} checked={filter.includes(strFilter)} id={strFilter} />
              <label className={styles["card-view-label"]} htmlFor={strFilter}>{strFilter}</label>
            </div>
          )
        })}
      </div>
    )
  }

  const renderOptions = () => {
    return (
      <div className={styles["card-view-options"]} style={{opacity: filter.length > 0 ? 1 : 0, pointerEvents: filter.length > 0 ? "auto" : "none"}}>
        <h4 style={{ margin: "0 0 0 auto" }}><a onClick={handleOnClear}>Clear ✕</a></h4>
        <h4><a onClick={handleOnApply}>Apply ✓</a></h4>
      </div>
    )
  }

  const renderStudies = (pobjStudy: any, pintIndex: number) => {
    if(filterApply.length > 0){
      let arrFilters = [...pobjStudy.capabilites, ...pobjStudy.industries, ...pobjStudy.output, ...pobjStudy.researchMethods, pobjStudy.title]
      if(arrFilters.some((strFilter: string) => filterApply.includes(strFilter))){
        return <div key={`renderStudies-${pintIndex}`} className={styles["study-card"]} style={{opacity: 0, animationDelay : 0.25 * (Math.floor(pintIndex / 2)) + 's'}}><Card study={pobjStudy} /></div>
      }
    }else{
      return <div key={`renderStudies-${pintIndex}`}><Card study={pobjStudy} /></div>
    }
  }

  const renderFilterHeaderFade = (pstrfilter: string, pboolfilter: boolean) => {
    return (
      <h4>
        <a onClick={() => handleOnClick(pstrfilter)} style={{opacity: pboolfilter === true ? 1 : 0.4}}>
          <span style={{textTransform: 'capitalize', paddingRight: '5px'}}>{pstrfilter}</span> <span className={styles["card-view-filter-arrow"]} style={{ opacity: pboolfilter === true ? 0 : 1, position: 'absolute'}}>↑</span><span className={styles["card-view-filter-arrow"]} style={{ opacity: pboolfilter === true ? 1 : 0, position: 'absolute'}}>↓</span>
        </a>
      </h4>
    )
  }

  /*const renderFilterHeaderRotate = (pstrfilter: string, pboolfilter: boolean) => {
    return (
      <h4>
        <a onClick={() => handleOnClick(pstrfilter)} style={{opacity: pboolfilter === true ? 1 : 0.4}}>
          <span style={{textTransform: 'capitalize'}}>{pstrfilter}</span> <span className={styles["card-view-filter-arrow"]} style={{display: "inline-block", transform: pboolfilter === true ? "rotate(180deg)" : "rotate(0deg)"}}>↑</span>
        </a>
      </h4>
    )
  }*/

  const isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;

  return (
    <div className="global-wrapper" id={props.id}>
        <div className={styles["card-view-filter-by"]} style={{padding: isMobile ? "0" : ""}}>
          {isMobile ? <h5>Filter by ↓</h5> : <h4>Filter by</h4>}
          {isMobile ? <React.Fragment /> :
            <React.Fragment>
              <h4 className="global-isdesktop">/</h4>
              <div className="global-isdesktop" style={{display: "flex", gap: "40px"}}>
                {renderFilterHeaderFade("capability", showCapability)}
                {renderFilterHeaderFade("industry", showIndustry)}
                {renderFilterHeaderFade("client", showClient)}
                {renderFilterHeaderFade("method", showResearchMethod)}
                {renderFilterHeaderFade("output", showOutput)}
              </div>
              {renderOptions()}
            </React.Fragment>
          }
        </div>
        {render()}
        {renderChip()}
        <div id="cards" className={styles["card-view"]}>
          {studies.map((pobjStudy: any, pintIndex: number) => {
            return renderStudies(pobjStudy, pintIndex)
          })}
        </div>
    </div>
  );
}

const mapStateToProps = ( state: { portfolio: any; }, ownProps: any ) => {
  return {
      portfolio: state.portfolio
  }
}

export default connect(mapStateToProps, null)(CardView);
