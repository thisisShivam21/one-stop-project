import React from 'react'
// import {
//     faBed,
//     faCalendarDays,
//     faCar,
//     faPerson,
//     faPlane,
//     faTaxi,
// } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { DateRange } from "react-date-range";
// import { useState } from "react";
// import 'react-date-range/dist/styles.css'; // main style file
// import 'react-date-range/dist/theme/default.css'; // theme css file
// import { format } from "date-fns";
// import { useNavigate } from "react-router-dom";

import House from "../images/House.jpg";

import "../intro/intro.css"


export default function Intro() {
    // const [destination, setDestination] = useState("");
    // const [openDate, setOpenDate] = useState(false);
    // const [date, setDate] = useState([
    //     {
    //         startDate: new Date(),
    //         endDate: new Date(),
    //         key: "selection",
    //     },
    // ]);
    // const [openOptions, setOpenOptions] = useState(false);
    // const [options, setOptions] = useState({
    //     adult: 1,
    //     children: 0,
    //     room: 1,
    // });

    // const navigate = useNavigate();

    // const handleOption = (name, operation) => {
    //     setOptions((prev) => {
    //         return {
    //             ...prev,
    //             [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
    //         };
    //     });
    // };

    // const handleSearch = () => {
    //     navigate("/hotels", { state: { destination, date, options } });
    // };

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
                    <button className="home-btn" >Get Started</button>
                    {/* <div className="headerSearchItem">
                        <button className="headerBtn" onClick={handleSearch}>
                            Search
                        </button>
                    </div> */}

                </div>
                <div className="home-image-container">
                    <img src={House} alt="This is an house" className="main-img" />
                </div>
            </div>
        </div>
    )
}
