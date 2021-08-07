import React from "react"
import styles from "./SplashScreen.module.css"

const SplashScreen = () => {
    return (
        <div id="splash" className={styles["splashscreen-container"]}>
            <div className={styles["splashscreen-content"]}>
                <h3>Matthew Kinsman Portfolio</h3>
                <h4>© 2021, Melbourne, Australia</h4>
            </div>
        </div>
    )
}

export default SplashScreen