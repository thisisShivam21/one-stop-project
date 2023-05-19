import React from 'react'
import { Link } from 'react-router-dom';
import '../services-main/servicesmain.css'

import AccommodationServices from "../../images/AccommodationServices.jpg";
import HealthcareServices from "../../images/HealthcareServices.jpg";
import EateriesServices from "../../images/EateriesServices.jpg";

export default function ServicesMain() {
    return (
        <div className='services-main'>
            <h1 className="services-heading">Services</h1>
            <p className="services-desc">
                From our website, we strive to offer a comprehensive range of services that cater to the unique needs of each student, making their university experience comfortable, enjoyable, and successful.
            </p>
            <div className="services-box-container">
                <div className="services-box-1">
                    <div className="left-box">
                        <h2 className="box-title">Accommodation</h2>
                        <p className="box-desc">
                            Range of services we provide to help university students find affordable and comfortable housing options on and around the campus. As a one-stop solution provider, we offer a range of accommodation options, including dorm rooms, apartments, and shared houses, both on-campus and off-campus.
                        </p>
                        <button className="services-btn"><Link to="/servicesMap">Learn More</Link></button>
                    </div>
                    <div className="right-box">
                        <img className="services-img" src={AccommodationServices} alt="this is house" />
                    </div>
                </div>
                <div className="services-box-2">
                    <div className="left-box">
                        <img className="services-img" src={HealthcareServices} alt="this is hospital" />
                    </div>
                    <div className="right-box">
                        <h2 className="box-title">HealthCare</h2>
                        <p className="box-desc">
                            Healthcare services provided by us aim to ensure that university students have access to quality healthcare facilities and resources on and around the campus
                        </p>
                        <button className="services-btn"><Link to="/servicesMap">Learn More</Link></button>
                    </div>
                </div>
                <div className="services-box-3">
                    <div className="left-box">
                        <h2 className="box-title">Eateries</h2>
                        <p className="box-desc">
                            Range of food and dining options we provide to ensure that university students have access to affordable and nutritious meals throughout their academic career.
                        </p>
                        <button className="services-btn"><Link to="/servicesMap">Learn More</Link></button>
                    </div>
                    <div className="right-box">
                        <img className="services-img" src={EateriesServices} alt="this is restro" />
                    </div>
                </div>
            </div>
        </div>
    )
}
