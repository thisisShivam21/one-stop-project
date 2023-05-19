import React from 'react'
import "../faq/Faqs.css"
// import FaqsImage from "../images/FaqsImage.webp"
import FAQs from "../images/FAQs.jpg"


function Faqs() {
  return (
    <div className='page Faqs-container section-border'>
      <main>
        <div className='faq-heading'>
          <h1 className='section-title'>
            Frequently Asked Questions
          </h1>
        </div>
        <section className='faqs-section'>
          <div>
            <img src={FAQs} alt="This is an house" className='faq-image' />
          </div>
          <div className="con2">
            <div className="accordion">
              <div className="Item2" id="question1">
                <a href='#question1' className="link2" >
                  What services does the one-stop student website provide?
                  <i className="fa fa-hand-o-down" aria-hidden="true"></i>
                  <i className="fa fa-hand-o-up" aria-hidden="true"></i>
                </a>
                <div className="answer2">
                  <p>The website offers comprehensive information and resources related to accommodation options, eateries, and healthcare places near the campus. It helps students easily find and access these services in one centralized platform.</p>
                </div>
              </div>

              <div className="Item2" id="question2">
                <a href='#question2' className="link2" >
                  How can I search for accommodation near my campus?
                  <i className="fa fa-hand-o-down" aria-hidden="true"></i>
                  <i className="fa fa-hand-o-up" aria-hidden="true"></i>
                </a>
                <div className="answer2">
                  <p>The website provides a user-friendly search feature where you can enter your campus location and filter results based on preferences like budget, room type, and proximity. It offers a wide range of verified accommodation options to suit various needs.</p>
                </div>
              </div>

              <div className="Item2" id="question3">
                <a href='#question3' className="link2" >
                  Can I book accommodation or make reservations through the website?
                  <i className="fa fa-hand-o-down" aria-hidden="true"></i>
                  <i className="fa fa-hand-o-up" aria-hidden="true"></i>
                </a>
                <div className="answer2">
                  <p>The website may offer a booking or reservation feature for certain accommodation options or eateries, depending on the partnerships established with service providers. You can check the individual listings for availability and booking options.</p>
                </div>
              </div>

              <div className="Item2" id="question4">
                <a href='#question4' className="link2">
                  How can I provide feedback or report any issues with the website or its listings?
                  <i className="fa fa-hand-o-down" aria-hidden="true"></i>
                  <i className="fa fa-hand-o-up" aria-hidden="true"></i>
                </a>
                <div className="answer2">
                  <p>The website typically includes a feedback or contact form where you can submit any concerns, feedback, or suggestions. The team behind the website appreciates user input and strives to address any issues promptly.</p>
                </div>
              </div>

              <div className="Item2" id="question5">
                <a href='#question5' className="link2">
                  Is the website available for all campuses and universities?
                  <i className="fa fa-hand-o-down" aria-hidden="true"></i>
                  <i className="fa fa-hand-o-up" aria-hidden="true"></i>
                </a>
                <div className="answer2">
                  <p>The availability of the website's services may vary depending on the coverage area. It aims to expand its reach to cater to students across multiple campuses and universities. Check the website for information on supported locations.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Faqs
