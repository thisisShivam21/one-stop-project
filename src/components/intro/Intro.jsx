import React from 'react'
import { Link } from 'react-router-dom';

import House from "../images/House.jpg";

import "../intro/intro.css"


export default function Intro() {
    return (
        <div className='page-2 home-container section-border'>
            <div className="section-1">
                <div className="home-main-content">
                    <h1 className="main-title">
                        MOST COMMON STUDENT SERVICES AT ONE COMMON PLACE
                    </h1>
                    <p className="home-main-text">
                        Tune in for the opportunities offered by us...
                    </p>
                    <button className="home-btn" ><Link to="/services">Get Started</Link></button>
                </div>
                <div className="home-image-container">
                    <img src={House} alt="This is an house" className="main-img" />
                </div>
            </div>
        </div>
    )
}
