import React from 'react'
import "../services/serviceshome.css"

function ServicesHome() {
    return (
        <div className='page services-container section-border'>
            <h2 className='section-title'>Services</h2>
            <span className='section-subtitle'>What We Provide</span>

            <div className='card-container'>

                <div className='card'>
                    {/* <i className="fa-regular fa-house"></i> */}
                    <h2 className='services-title'>
                        Accomodation
                    </h2>
                    <p className='services-description'>
                        Service that provides the best quality and at
                        the request of the client, with professional
                        work and customer support.
                    </p>
                    <div className='services-border'></div>
                </div>

                <div className='card'>
                    {/* <i className="fa-regular fa-burger-soda"></i> */}
                    <h2 className='services-title'>
                        Eateries
                    </h2>
                    <p className='services-description'>
                        Service that provides the best quality and at
                        the request of the client, with professional
                        work and customer support.
                    </p>
                    <div className='services-border'></div>
                </div>

                <div className='card'>
                    {/* <i className="fa-thin fa-hospital"></i> */}
                    <h2 className='services-title'>
                        HealthCare
                    </h2>
                    <p className='services-description'>
                        Service that provides the best quality and at
                        the request of the client, with professional
                        work and customer support.
                    </p>
                    <div className='services-border'></div>
                </div>
            </div>
        </div>
    )
}

export default ServicesHome

