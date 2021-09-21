import React from "react";
import styles from "./Item.module.css";

function Item(props: any) {
    const renderImg = (pstrEmojiSrc: string) => {
        if(pstrEmojiSrc && pstrEmojiSrc.length > 0){
            return <img className={styles["item-img"]} src={pstrEmojiSrc} />
        }
    }

    const renderLink = (pstrRedirectUrl: string) => {
        if(pstrRedirectUrl){
            return <span><a href={pstrRedirectUrl} target="_blank" className="global-border-regular">View website →</a></span>
        }
    }

    const isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;

    return (
            <div className={styles["item-container"]}>
                {renderImg(props.emoji)}
                {isMobile ? <h5>{props.header}</h5> : <h4>{props.header}</h4>}
                <div className={styles["item-right"]}>
                    {isMobile ? <h5 className={styles["item-content"]}>{props.content}<br />{props.footer}</h5> : <p className={styles["item-content"]}>{props.content}<br />{props.footer}</p>}
                    {renderLink(props.link)}
                </div>
            </div>
    );
}

export default Item;
