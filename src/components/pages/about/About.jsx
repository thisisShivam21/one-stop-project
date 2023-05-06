import React from 'react'
import "../about/about.css"
import House from "../../images/House.jpg";

export default function About() {
  return (
    <div className='about'>
      <div className="about-left">
        <h1 className="about-heading">
          About OneStop
        </h1>
        <p className="heading-desc">
          Welcome to OneStop, your go-to website for all your university needs. Our website provides a one-stop solution for university students seeking affordable and convenient accommodation, healthcare services, and food options on and around the campus.
        </p>
        <div className="about-content">
          <div className="about-box-1">
            <h2 className="box-title">
              Visions
            </h2>
            <p className="box-desc">
              Our vision is to be the leading one-stop solution provider for university students seeking affordable and convenient accommodation, healthcare, and food options on and around the campus.
            </p>
          </div>
          <div className="about-box-2">
            <h2 className="box-title">
              Mission
            </h2>
            <p className="box-desc">
              Our mission is to provide university students with access to quality and affordable accommodation, healthcare, and food options that cater to their unique needs, making their university experience comfortable and enjoyable.
            </p>
          </div>
          <div className="about-box-3">
            <h2 className="box-title">
              Goal
            </h2>
            <p className="box-desc">
              Our goal is to become the go-to website for university students seeking a one-stop solution for their needs on and around the campus. We aim to provide a comprehensive range of services and information that will enable students to make informed decisions about their accommodation, healthcare, and food options, and to create a community where students can connect and support each other throughout their university journey.
            </p>
          </div>
        </div>
      </div>
      <div className="about-right">
        <img src={House} alt="This is an house" className="main-img" />
      </div>
    </div>
  )
}
