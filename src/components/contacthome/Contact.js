import React, { useRef } from 'react'
import '../contacthome/Contact.css';
import emailjs from '@emailjs/browser'

function Contact() {
        // const contactForm = document.getElementById('contact-form');
        const contactName = document.getElementById('contact-name');
        const contactEmail = document.getElementById('contact-email');
        const contactProject = document.getElementById('contact-project');
        const contactMessage = document.getElementById('contact-message');
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        contactMessage.textContent = ''
        if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
            // Add and Remove color class
            contactMessage.classList.remove('color-blue')
            contactMessage.classList.add('color-red')
            // Show Color
            contactMessage.textContent = 'Write all the input fields 📝'
        }
        else {
            emailjs.sendForm('service_p3xlf7v', 'template_b88o5qd', '#contact-form', 'vbrgQ9oekErTXoBpZ')
                .then(() => {
                    contactMessage.classList.add('color-blue')
                    contactMessage.textContent = 'Message sent ✅'

                    // Remove message after five seconds
                    setTimeout(() => {
                        contactMessage.textContent = ''
                        contactName.value = ''
                        contactEmail.value = ''
                        contactProject.value = ''
                    }, 5000)
                }, (error) => {
                    alert('OOPS! SOMETHING HAS FAILED...', error)
                })
        }
    };

    /*=============== EMAIL JS ===============*/

    // const contactForm = document.getElementById('contact-form'),
    //     contactName = document.getElementById('contact-name'),
    //     contactEmail = document.getElementById('contact-email'),
    //     contactProject = document.getElementById('contact-project'),
    //     contactMessage = document.getElementById('contact-message');

    // // const Btn = document.getElementById('hey-button');
    //     // console.log(contactEmail, contactForm, contactMessage, contactName, contactProject);

    // const sendEmail = (e) => {
    //     e.preventDefault();
    //     contactMessage.textContent = ''
    //     if (contactName.value === '' || contactEmail.value === '' || contactProject.value === '') {
    //         // Add and Remove color class
    //         contactMessage.classList.remove('color-blue')
    //         contactMessage.classList.add('color-red')
    //         // Show Color
    //         contactMessage.textContent = 'Write all the input fields 📝'
    //         console.log("Hellp")
    //     }
    //     else {
    //         // serviceID - templateID - #form - publicKey
    //         emailjs.sendForm('service_p3xlf7v', 'template_b88o5qd', '#contact-form', 'vbrgQ9oekErTXoBpZ')
    //             .then(() => {
    //                 contactMessage.classList.add('color-blue')
    //                 contactMessage.textContent = 'Message sent ✅'

    //                 // Remove message after five seconds
    //                 setTimeout(() => {
    //                     contactMessage.textContent = ''
    //                     contactName.value = ''
    //                     contactEmail.value = ''
    //                     contactProject.value = ''
    //                 }, 5000)
    //             }, (error) => {
    //                 alert('OOPS! SOMETHING HAS FAILED...', error)
    //             })
    //         // To clear the input field

    //     }
    // }
    // contactForm.addEventListener('submit', sendEmail);
    // // Btn.addEventListener('click', sendEmail);
    return (
        <section className='page contact-container' >
            <h2 className='section-title' >Contact Us</h2>
            <span className='section-subtitle'>Get in touch</span>
            <main className='contact-main'>
                <div className='contact-content'>
                    <h3 className='contact-title'>
                        <i className="ri-chat-3-line"></i>Talk to us
                    </h3>

                    <div className="contact-info">
                        <div className="contact-data">
                            <span className="contact-data-title">Email</span>
                            <span className="contact-data-info">oneStop1@gmail.com</span>
                        </div>
                        <div className="contact-data">
                            <span className="contact-data-title">WhatsApp</span>
                            <span className="contact-data-info">+91 9876556789</span>
                            <a href='/' className="contact-button">
                                Write us <i className="ri-arrow-right-line"></i>
                            </a>
                        </div>
                        <div className="contact-data">
                            <span className="contact-data-title">Instagram</span>
                            <span className="contact-data-info">oneStopAccess</span>
                            <a href='/' className="contact-button">
                                Write us <i className="ri-arrow-right-line"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className='contact-content'>
                    <h3 className="contact-title">
                        <i className="ri-send-plane-line"></i> Write us your Queries
                    </h3>

                    <form ref={form} onSubmit={sendEmail} className="contact-form" id="contact-form">
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

                        <button type="submit" value="send" className="contact-button" id="hey-button">
                            Submit <i className="ri-arrow-right-up-line"></i>
                        </button>
                    </form>
                </div>
            </main>
        </section>
    )
}

export default Contact
