import React from "react";
import {connect} from "react-redux";
import styles from "./Awards.module.css";
import {ReactComponent as AwardsApple} from '../../../images/Awards/awards-apple.svg';

const Awards = () => {
    return (
        <div className="global-wrapper">
            <h3 className="global-header">Awards & Recognition</h3>
            <div className={styles["awards-awards"]}>
                <div className={styles["awards-img-container"]}>
                    <AwardsApple height="140" fill="currentColor" />
                    <div>
                        <p>Apple Watch<br />App of the Year</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ( state: { portfolio: any; } ) => {
    return {
      portfolio: state.portfolio
    }
  }
  
  export default connect(mapStateToProps, null)(Awards);