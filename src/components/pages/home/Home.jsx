import React from 'react'
import Intro from '../../intro/Intro'
import ServicesHome from '../../services/ServicesHome'
import Faqs from '../../faq/Faqs'
import Contact from '../../contacthome/Contact'
// import Footer from '../../footer/Footer'

import "../home/home.css"

export default function Home() {
  return ( 
    <div className='home'>
        <Intro />
        <ServicesHome />
        <Faqs />
        <Contact />
        {/* <Footer /> */}
    </div>
  )
}
