import React from "react";
import { Link } from "react-router-dom";
import $ from "jquery";
import styles from "./Panel.module.css";

function Panel(props: any) {
  const handleOnMouseOver = () => {
    $("#mouse-over-image-" + props.id).css({opacity: "1"})
    $('body').css('cursor', 'none');
  }

  const handleOnMouseOut = () => {
    $("#mouse-over-image-" + props.id).css({opacity: "0"});
    $('body').css('cursor', 'auto');
  }

  const isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;

  const renderTitle = () => {
    if(isMobile){
      return <h5>{props.study.title}</h5>
    }else{
      return <h3 style={{margin: "30px 0"}}>{props.study.title}</h3>
    }
  }

  const renderThumbnail = () => {
    if(isMobile){
      return <h3 style={{padding: "20px 0"}} className={styles["panel-left-slogan"]}>{props.study.thumbnail}</h3>
    }else{
      return <h1 className={styles["panel-left-slogan"]}>{props.study.thumbnail}</h1>
    }
  }

  const renderView = () => {
    if(isMobile){
      return <h5><Link className="global-border-regular" to={{pathname: "/study", state: { study: props.study }}}>View case study →</Link></h5>
    }else{
      return <h4 style={{margin: "36px 0 0 0"}}><Link className="global-border-regular" to={{pathname: "/study", state: { study: props.study }}}>View case study →</Link></h4>
    }
  }

  return (
      <div className={styles["panel-container"]} id={props.id}>
        <div style={{position: "relative"}} className={`${styles["panel-content"]} global-main-container`}>
          <div style={{position: "absolute", height: "100%", width: "-webkit-fill-available", margin: "0 48px"}} onMouseEnter={handleOnMouseOver} onMouseLeave={handleOnMouseOut} />
          <div onMouseEnter={handleOnMouseOut} style={{zIndex: 1}}>
              {renderTitle()}
              {renderThumbnail()}
              {renderView()}
          </div>
        </div>
      </div>
  );
}

export default Panel;