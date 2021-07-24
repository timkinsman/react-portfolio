import React, { useEffect, useState } from 'react'
import Card from '../../global/Card/Card'
import Footer from '../../global/Footer/Footer'
import Home from '../Home/Home'
import Image from "./Image/Image";
import Navbar from '../../global/Navbar/Navbar'
import Tagging from './Tagging/Tagging'
import studies from '../../../studies'
import arrow from '../../../images/arrow-down.svg'
import $ from 'jquery'
import styles from './Study.module.css'
import {connect} from "react-redux";
import { DARK, LIGHT } from '../../../colors';
import { HiOutlineArrowNarrowDown } from "react-icons/hi"
import Carousel from './Carousel/Carousel';
import { BsArrowDown } from "react-icons/bs"

//add/remove important class!

const Study = (props: any) => {
    const [limit, setLimit] = useState(2)
    const study = props.location.state.study

    useEffect(() => {
        document.addEventListener("scroll", onScroll);
        return () => { window.removeEventListener("scroll", onScroll) } 
    }, [])

    useEffect(() => { //reset
        console.log(props.location.state.study.color)
        $("#divMore").show()
        $("#divLess").hide()
        setLimit(2)
    }, [props.location.state])

    if(props.location.state === undefined){
        return <Home />
    }

    const getImages = (pstrTitle: string) => {
        switch(pstrTitle){
            case 'BankVic':
                return require.context('../../../images/Studies/BankVic', true, /\.png$/)
            case 'Beyond Blue':
                return require.context('../../../images/Studies/BeyondBlue', true, /\.png$/)
            case 'Bupa':
                return require.context('../../../images/Studies/Bupa', true, /\.png$/)
            case 'Children\'s Court':
                return require.context('../../../images/Studies/ChildrensCourt', true, /\.png$/)    
            case 'City of Darebin':
                return require.context('../../../images/Studies/CityofDarebin', true, /\.png$/)
            case 'City of Port Phillip':
                return require.context('../../../images/Studies/CityOfPortPhillip', true, /\.png$/)
            case 'Click Frenzy':
                return require.context('../../../images/Studies/ClickFrenzy', true, /\.png$/)
            case 'EatClub':
                return require.context('../../../images/Studies/EatClub', true, /\.png$/)
            case 'Frank Green':
                return require.context('../../../images/Studies/FrankGreen', true, /\.png$/)
            case 'Homely':
                return require.context('../../../images/Studies/Homely', true, /\.png$/)
            case 'Lumea':
                return require.context('../../../images/Studies/Lumea', true, /\.png$/)
            case 'Maternal & Child Health':
                return require.context('../../../images/Studies/MCH', true, /\.png$/)
            case 'NAB':
                return require.context('../../../images/Studies/NAB', true, /\.png$/)
            case 'OpenCourts':
                return require.context('../../../images/Studies/OpenCourts', true, /\.png$/)
            case 'OVIC':
                return require.context('../../../images/Studies/OVIC', true, /\.png$/)
            case 'Small Business Victoria':
                return require.context('../../../images/Studies/SmallBusinessVictoria', true, /\.png$/)
            case 'Stroke Foundation':
                return require.context('../../../images/Studies/StrokeFoundation', true, /\.png$/)
            case 'SWEAT':
                return require.context('../../../images/Studies/SWEAT', true, /\.png$/)
            //case 'Transgrid':
                //return require.context('../../../images/Studies/Transgrid', true, /\.png$/)
            case 'Victoria Police':
                return require.context('../../../images/Studies/VictoriaPolice', true, /\.png$/)
        }
    }

    const images = getImages(study.title)

    const handleOnClick = (pstrId: string) => {
        $('html,body').animate({
            scrollTop: $(pstrId).offset()?.top}, 'slow');
    }

    const renderContent = (pstrSection: string) => {
        if(study[pstrSection].length !== 0){
            return (
                <div className="global-wrapper" style={{width: "83.33%", marginLeft: "auto", marginRight: "auto", padding: "30px 0"}}>
                    <h3 className={`${styles["study-capitalize"]} global-header`}>{pstrSection}</h3>
                    {study[pstrSection].map((content: string) => {
                        return (
                            <h4 style={{opacity: "0.8"}}>{content}</h4>
                        )
                    })}
                </div>
            )
        }
    }

    const renderImages = () => {
        if(images){
            return images.keys().slice(1).map((image: string) => {
                return (
                    <div className="global-wrapper" style={{padding: '30px 0'}}>
                        <Image src={images(image).default} color={study.color} />
                    </div>
                )
            })
        }
    }

    const renderCarousel = () => {
        if(images){
            return <Carousel images={images} keys={images.keys().slice(0, 5)} color={study.color} />
        }
    }

    const renderLess = () => {
        $("#divMore").show()
        $("#divLess").hide()
        setLimit(2)
    }

    const renderMore = () => {
        $("#divMore").hide()
        $("#divLess").show()
        setLimit(studies.length)
    }

    const reorderStudyCards = (parranyStudies: Array<any>, pintIndex: number) => {
        return parranyStudies.slice(pintIndex).concat(parranyStudies.slice(0, pintIndex))
    };

    const onScroll = () => {
        if(_scrollTop("#hero", "#content")){
            $("#study").removeClass("global-inherit")
        }else{
            $("#study").addClass("global-inherit")
        }
    }

    const _scrollTop = (pstrId: string, pstrIdNext: string) => {
        const strDocTop = $(document).scrollTop();
        const idTop = $(pstrId).offset()?.top
        const idNextTop = $(pstrIdNext).offset()?.top
        const winHeight = $(window).height()

        if(strDocTop !== undefined && idTop !== undefined && idNextTop !== undefined && winHeight !== undefined){
            if(strDocTop >= (idTop - (winHeight / 2)) && strDocTop < (idNextTop - (winHeight / 2))){
            return true
            }
        }

        return false    
    }

    const isBright = (pstrHex: string): Boolean => {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(pstrHex);
        if(result){
          //0.2126 R + 0.7152 G + 0.0722 B
          //console.log((0.2126 * parseInt(result[1], 16)) + (0.7152 * parseInt(result[2], 16)) + (0.0722 * parseInt(result[3], 16)))
          return (0.2126 * parseInt(result[1], 16)) + (0.7152 * parseInt(result[2], 16)) + (0.0722 * parseInt(result[3], 16)) > 224 ? true : false
        }
        return true
      }

    return (
        <div key={props.location.state.study.redirect} id="sContainer" style={{background: props.portfolio.theme === "DARK" ? DARK : LIGHT, color: props.portfolio.theme === "DARK" ? "#FFFFFF" : "#000000" }}>
            <div id="study" style={{transition: "background 1s, color 1s", background:  study.color, color: isBright(study.color) ? "#000000" : "#FFFFFF"}} className="global-fadein">      
                <div id="hero" className={styles["study-container"]}>
                    <div className="global-main-container">
                        <Navbar />
                        <div className="global-container" style={{margin: 'auto'}}>
                            <div className={styles["study-content"]}>
                                <h2>{study.hero}</h2>
                            </div>
                        </div>
                        <div className={styles["study-arrow"]}>
                            <a onClick={() => handleOnClick('#content')}><BsArrowDown style={{fontSize: "50px"}} /></a>
                        </div>
                    </div>
                </div>
                <div id="content" className="global-container">
                    <p className="global-title">{study.title}</p>

                    <Tagging study={study} />

                    <div className="global-wrapper">
                        <Image src={images ? images(images.keys()[0]).default : ''} color={study.color} />
                    </div>

                    {renderContent("brief")}
                    {renderContent("challenge")}
                    {renderContent("objective")}
                    <div style={{padding: '30px 0'}}>
                        {/*renderCarousel()*/}
                        {renderImages()}
                    </div>
                    {renderContent("results")}
                    {renderContent("deliverables")}
                    {renderContent("credits")}
                    {renderContent("testimonials")}

                    <div className="global-wrapper" style={{paddingTop: "60px"}}>
                        <div className={styles["study-border"]} />
                        <div className={styles["study-card-view"]}>
                            {reorderStudyCards(studies, studies.findIndex(pstudy => pstudy == study) - 1).filter(pstudy => pstudy !== study).slice(0, limit).map((pstudy, intIndex: any) => {
                                return (
                                    <div className={styles["study-card"]} style={{opacity: 0, animationDelay : intIndex < 3 ? "0s" : 0.25 * (Math.floor(intIndex - 3 / 2)) + 's'}}>
                                        <Card study={pstudy} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div id="divMore" className="global-wrapper" style={{justifyContent: "center", display: "flex", paddingTop: '0'}}>
                        <h3 style={{margin: 0}}><a onClick={renderMore}>Show more</a></h3>
                    </div>

                    <div id="divLess" className="global-wrapper" style={{justifyContent: "center", display: "flex", paddingTop: '0'}}>
                        <h3 style={{margin: 0}}><a onClick={renderLess}>Show less</a></h3>
                    </div>

                    <Footer />
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = ( state: { portfolio: any; }, ownProps: any ) => {
    return {
        portfolio: state.portfolio
    }
}
  
export default connect(mapStateToProps, null)(Study);