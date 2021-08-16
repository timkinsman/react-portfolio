import React from "react";
import {connect} from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = (props: any) => {
  return (
    <Link className={styles["card-container"]} to={{pathname: "/study", state: { study: props.study }}}>
      <div className={`${styles["card"]} ${props.portfolio.theme === "DARK" ? styles["card-dark"] : styles["card-light"]}`} style={{background: props.study.color}}>
        <div className={styles["card-inner"]}>
          <img className={styles["card-image"]} src={props.study.img} alt="img" />
          <div className={styles["card-content"]}>
            <h2 className={styles["card-study-title"]}>{props.study.title}</h2>
            <h4 className={styles["card-study-industry"]}>{props.study.industries.join(", ")}</h4>
            <p className={styles["card-study-summary"]}>{props.study.thumbnail}</p>
            <h4  className={styles["card-study-link"]}><span className={styles["card-view-case"]}>View case study →</span></h4>
          </div>
        </div>
      </div>
    </Link>
  );
}

const mapStateToProps = ( state: { portfolio: any; }, ownProps: any ) => {
  return {
    portfolio: state.portfolio
  }
}

export default connect(mapStateToProps, null)(Card);