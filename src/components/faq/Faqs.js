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
                <a href='/' className="link2" >
                  Why Should You Adopt a Dog or Cat?
                  <i className="fa fa-hand-o-down" aria-hidden="true"></i>
                  <i className="fa fa-hand-o-up" aria-hidden="true"></i>
                </a>
                <div className="answer2">
                  <p>Born and raised in New Delhi, Kohli trained at the West Delhi Cricket Academy and started his youth career with the Delhi Under-15 team. He made his international debut in 2008 and quickly became a key player in the ODI team and later made his Test debut in 2011.</p>
                </div>
              </div>

              <div className="Item2" id="question2">
                <a href='/' className="link2" >
                  What is the fee to adopt a pet?
                  <i className="fa fa-hand-o-down" aria-hidden="true"></i>
                  <i className="fa fa-hand-o-up" aria-hidden="true"></i>
                </a>
                <div className="answer2">
                  <p>No. There is no fee for pet adoption. However, if you adopt from a different city
                    pet owner/ rescuer can ask for travel charges. In case you find someone asking
                    for charges you can write to us at.</p>
                </div>
              </div>

              <div className="Item2" id="question3">
                <a href='/' className="link2" >
                  Why is a pet important?
                  <i className="fa fa-hand-o-down" aria-hidden="true"></i>
                  <i className="fa fa-hand-o-up" aria-hidden="true"></i>
                </a>
                <div className="answer2">
                  <p>They can increase opportunities to exercise, get outside, and socialise. Regular
                    walking or playing with pets can decrease blood pressure, cholesterol levels,
                    and triglyceride levels. Pets can help manage loneliness and depression by
                    giving us companionship. Most households in the United States have at least
                    one pet.</p>
                </div>
              </div>

              <div className="Item2" id="question4">
                <a href='/' className="link2">
                  How do pets benefit kids?
                  <i className="fa fa-hand-o-down" aria-hidden="true"></i>
                  <i className="fa fa-hand-o-up" aria-hidden="true"></i>
                </a>
                <div className="answer2">
                  <p>Developing positive feelings about pets can contribute to a child's self- esteem
                    and self-confidence. Positive relationships with pets can aid in the development
                    of trusting relationships with others. A good relationship with a pet can also
                    help in developing non- verbal communication, compassion, and empathy.</p>
                </div>
              </div>

              <div className="Item2" id="question5">
                <a href='/' className="link2">
                  Can you return an adopted pet?
                  <i className="fa fa-hand-o-down" aria-hidden="true"></i>
                  <i className="fa fa-hand-o-up" aria-hidden="true"></i>
                </a>
                <div className="answer2">
                  <p>We understand it can be hard to get an adjusted pet in the new home and vice
                    versa, as long as your reason for returning is reasonable, you'll be welcome
                    to put it up for adoption again.</p>
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
