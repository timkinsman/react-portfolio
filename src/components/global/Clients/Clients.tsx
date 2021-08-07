import React from "react";
import images from "../../../images/Clients";
import styles from "./Clients.module.css";

const Clients = () => {
    const render = (images: Array<any>) => {
        return images.map((image: any, index: number) => {
            return (
                <div key={index} className={styles["clients-img-container"]}>
                    {image}
                </div>
            )
        })
    }

    return (
        <div className="global-wrapper">
            <h3 className="global-header">Selected Clients</h3>
            <div className={styles["clients-container"]}>
                <div className={styles["clients-clients"]}>
                    {render(images.slice(0, Math.ceil(images.length / 2)))}
                </div>
                <div className={styles["clients-clients-second"]}>
                    {render(images.slice(-Math.ceil(images.length / 2)))}
                </div>
            </div>
        </div>
    )
}
  
export default Clients;