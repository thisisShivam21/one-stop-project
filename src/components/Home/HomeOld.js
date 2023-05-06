import React from "react";
// import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import House from "../images/House.jpg";
import "../Home/Home.css";
// var data = require("../Home/Temp_Data.json");


const Home = () => {

    return ( 
        <div className="home-container  ">
            <Navbar />
            <div className=" page section-1 section-border ">
                <div className="home-main-content">
                    <h1 className="main-title">
                        MOST COMMON STUDENT SERVICES AT ONE COMMON PLACE
                    </h1>
                    <p className="home-main-text">
                        Tune in for the opportunities offered by us...
                    </p>
                    <button className="home-btn" >Get Started</button>
                </div>
                <div className="home-image-container">
                    <img src={House} alt="This is an house" className="main-img" />
                </div>
            </div>
        </div>
    )
}

export default Home