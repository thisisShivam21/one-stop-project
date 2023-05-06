import React from 'react'
// import House from '../images/House.jpg'
import '../Home/ContactUs.css'

function ContactUs() {
  return (
    <section className="page-2 contact section" id="contact">
      <main>
        <div className='section-heading'>
          <h2 className="section-title">Contact Me</h2>
          <span className="section-subtitle">Get in touch</span>
        </div>

        <div className="contact-container container grid section-border">
          <div className="contact-content">
            <h3 className="contact-title">
              <i className="ri-chat-3-line"></i> Talk to me
            </h3>
            <div className="contact-info">
              <div className="contact-data">
                <span className="contact-data-title">Email</span>
                <span className="contact-data-info">shivambhardwaj8585@gmail.com</span>
              </div>
              <div className="contact-data">
                <span className="contact-data-title">WhatsApp</span>
                <span className="contact-data-info">+91 8585900013</span>
                <a className="contact-button">
                  Write me <i className="ri-arrow-right-line"></i>
                </a>
              </div>
              <div className="contact-data">
                <span className="contact-data-title">Instagram</span>
                <span className="contact-data-info">thisisShivam21</span>
                <a className="contact-button">
                  Write me <i className="ri-arrow-right-line"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="contact-content">
            <h3 className="contact-title">
              <i className="ri-send-plane-line"></i> Write me your project
            </h3>

            <form action="" className="contact-form" id="contact-form">
              <div className="contact-form-div">
                <label className="contact-form-tag">Names</label>
                <input type="text" name="user_name" required placeholder="Write your names" className="contact-form-input" id="contact-name" />
              </div>
              <div className="contact-form-div">
                <label className="contact-form-tag">Mail</label>
                <input type="email" name="user_email" required placeholder="Write your email" className="contact-form-input" id="contact-email" />
              </div>
              <div className="contact-form-div contact-form-area">
                <label className="contact-form-tag">Project</label>
                <textarea name="user_project" placeholder="Write your project" id="contact-project" className="contact-form-input"></textarea>
              </div>

              <p className="contact-message" id="contact-message"></p>

              <button type="submit" className="contact-button">
                Submit <i class="ri-arrow-right-up-line"></i>
              </button>
            </form>
          </div>
        </div>
      </main>
    </section>
    // <section>
    //   <div className='contact-container'>
    //     <h2 className='text-center'>Contact Us</h2>
    //     <form className='form-control'>
    //       <input type='text' placeholder='Name...' name='user_name' required />
    //       <input type='email' placeholder='Email...' name='user_email' required />
    //       <input type='text' placeholder='Subject...' name='Subject' required />
    //       <textarea name='message' cols={30} rows={10} ></textarea>
    //       <button type='submit' className='contact-btn' >Send Message</button>
    //     </form>
    //   </div>
    // </section>

  )
}

export default ContactUs
