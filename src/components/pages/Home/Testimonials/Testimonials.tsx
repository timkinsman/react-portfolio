import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
    const [currTestimonial, setCurrTestimonial] = useState(0)

    const isMobile = window.matchMedia("only screen and (max-width: 768px)").matches;

    const testimonials = [
        {
            id: 0,
            quote: "“I worked with Matt extensively through the discovery and design phases of our website builds. Throughout the project Matt proved himself to be a creative thinking, problem solving and customer focused UX professional.”",
            from: "Ben Sylvan",
            details: "Coordinator of Digital, City of Port Phillip"
        },
        {
            id: 1,
            quote: "“Matt functioned as part of the team, helping to crystalise our vision and delivering incredible results in a record time. Matt functioned as part of the team, helping to crystalise our vision and delivering incredible results in a record time.”",
            from: "Jane Smith",
            details: "Company name"
        },
        {
            id: 2,
            quote: "“I worked with Matt at Sweat, professionally he's smart, thoughtful, passionate and honest. He is well versed in UX encompassing a great mix of both left & right brain. I would hire him any day given the opportunity.”",
            from: "Edgar Anzaldua",
            details: "Head of Product Design, Sniip"
        },
        {
            id: 3,
            quote: "“We still talk about how glad we are that we settled on Matt to create our brand. He has been a major contributor to our early success and would work with him in the future and recommend to anyone looking for strategy and creative work.”",
            from: "Panayioti Koutlakis",
            details: "CEO, EatClub"
        },
        {
            id: 4,
            quote: "“Matt functioned as part of the team, helping to crystalise our vision and delivering incredible results in a record time. Matt functioned as part of the team, helping to crystalise our vision and delivering incredible results in a record time.”",
            from: "Jane Smith",
            details: "Company name"
        },

    ]

    useEffect(() => {
        const timer = setInterval(() => setCurrTestimonial((currTestimonial + 1) % testimonials.length), 5000)
        return () => clearInterval(timer)
    })
    
    const renderCarousel = () => {
        return testimonials.map((pobjTestimonial: any, intIndex) => {
            return (
                <React.Fragment>
                    <a
                        key={`renderCarousel-${intIndex}`}
                        style={{opacity: pobjTestimonial.id === currTestimonial ? "1" : "0.4"}}
                        className={styles["testimonials-icon"]}
                        onClick={() => setCurrTestimonial(pobjTestimonial.id)}
                    >
                        <FontAwesomeIcon icon={faCircle} />
                    </a>
                </React.Fragment>
            )
        })
    }

    const renderTestimonials = () => {        
        return testimonials.map((pobjTestimonial: any, intIndex: number) => {
            if(pobjTestimonial.id === currTestimonial){
                return (
                    <div key={`renderTestimonials-${intIndex}`} className={styles["testimonials-grid"]}>
                        <div className="global-fadein">
                            <div className={styles["testimonials-div"]}>
                                {isMobile ? <h4>{pobjTestimonial.quote}</h4> : <h2>{pobjTestimonial.quote}</h2>}
                                <h5 className={styles["testimonials-from"]}>{pobjTestimonial.from}<br />{pobjTestimonial.details}</h5>
                            </div>
                        </div>
                    </div>
                )
            }
        })
    }

    return (
        <div className="global-wrapper" style={{padding: isMobile ? "30px 0 60px 0" : ""}}>
            <div className={styles["testimonials-container"]}>
                <h3 className="global-header" style={{padding: 0}}>Testimonials</h3>
                <div className={styles["testimonials-carousel-container"]}>
                    {renderCarousel()}
                </div>
            </div>
            {renderTestimonials()}
        </div>
    )
}

export default Testimonials;