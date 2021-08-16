import React from "react";
import { Link } from "react-router-dom";
import styles from "./Tagging.module.css";

const Tagging = (props: any) => {
    const renderArrFilters = (parrstrArray: Array<string>) => {
        if(parrstrArray.length !== 0){
            return parrstrArray.map((pstrTag: string, pintIndex: number) => {
                return (
                    <span>
                        <Link className="global-border-regular" to={{pathname: "/casestudies", state: { filter: pstrTag }}}>{pstrTag}</Link>
                        <span style={{opacity: 0.4}}>{pintIndex !== parrstrArray.length - 1 ? ', ' : ''}</span>
                    </span>
                )
            })
        }
    }

    const renderFunction = () => {
        if(props.study.function){
            return (
                <div>
                    <h3 className="global-header">Function</h3>
                    <h4><a target="_blank" className="global-border-regular" href={props.study.function.link}>{props.study.function.text}</a></h4>
                </div>
            )
        }
    }

    const renderLink = () => {
        if(props.study.link){
            return (
                <div>
                    <h3 className="global-header">Visit</h3>
                    <h4><a target="_blank" className="global-border-regular" href={props.study.link}>{props.study.link.replace("http://www.", "").replace("https://www.", "").replace("https://", "")}</a></h4>
                </div>
            )
        }
    }

    return (
        <div style={{paddingBottom: "20px"}}>
            <div className={styles["tagging-grid"]} style={{paddingBottom: '60px'}}>
                {renderLink()}
                {renderFunction()}
                <div>
                    <h3 className="global-header">Output</h3>
                    <h4>{renderArrFilters(props.study.output)}</h4>
                </div>
            </div>

            <div className={styles["tagging-grid"]}>
                <div>
                    <h3 className="global-header">Industry</h3>
                    <h4>{renderArrFilters(props.study.industries)}</h4>
                </div>
                <div>
                    <h3 className="global-header">Capability</h3>
                    <h4>{renderArrFilters(props.study.capabilites)}</h4>
                </div>
                <div>
                    <h3 className="global-header">Method</h3>
                    <h4>{renderArrFilters(props.study.researchMethods)}</h4>
                </div>
            </div>
        </div>
    )
}

export default Tagging;