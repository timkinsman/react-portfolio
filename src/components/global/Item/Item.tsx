import React from "react";
import styles from "./Item.module.css";

function Item(props: any) {
    const renderImg = (pstrEmojiSrc: string) => {
        if(pstrEmojiSrc){
            return <img className={styles["item-img"]} src={pstrEmojiSrc} />
        }
    }

    const renderLink = (pstrRedirectUrl: string) => {
        if(pstrRedirectUrl){
            return <span><a href={pstrRedirectUrl} target="_blank" className="global-border-regular">View website →</a></span>
        }
    }

    return (
            <div className={styles["item-container"]}>
                {renderImg(props.emoji)}
                <h4>{props.header}</h4>
                <div className={styles["item-right"]}>
                    <p className={styles["item-content"]}>{props.content}<br />{props.footer}</p>
                    {renderLink(props.link)}
                </div>
            </div>
    );
}

export default Item;
