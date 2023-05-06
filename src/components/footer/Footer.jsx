import React from 'react'
import "../footer/footer.css"

export default function Footer() {
  return (
    <div className='footer'>
      <div className="footer-container section-padding">
        <div className="footer-links">

          <div className="f-div-links">
            <h4>For Students</h4>
            <a href="/">
              <p>Universities</p>
            </a>
            <a href="/">
              <p>Courses</p>
            </a>
            <a href="/">
              <p>Fun Places</p>
            </a>
          </div>

          <div className="f-div-links">
            <h4>Services</h4>
            <a href="/">
              <p>Accomodation</p>
            </a>
            <a href="/">
              <p>Eatries</p>
            </a>
            <a href="/">
              <p>Health Care</p>
            </a>
          </div>

          <div className="f-div-links">
            <h4>Partners</h4>
            <a href="/">
              <p>Three Musketeers</p>
            </a>
          </div>

          <div className="f-div-links">
            <h4>Company</h4>
            <a href="/">
              <p>About</p>
            </a>
            <a href="/">
              <p>Services</p>
            </a>
            <a href="/">
              <p>Career</p>
            </a>
            <a href="/">
              <p>Contact</p>
            </a>
          </div>

          <div className="f-div-links">
            <h4>Coming soon on</h4>
            <div className="footer-social">
              <a href="/">
                <i className="footer-icon fa-brands fa-square-facebook"></i>
              </a>
              <a href="/">
                <i className="footer-icon fa-brands fa-square-instagram"></i>
              </a>
              <a href="/">
                <i className="footer-icon fa-brands fa-square-twitter"></i>
              </a>
              <a href="/">
                <i className="footer-icon fa-brands fa-square-dribbble"></i>
              </a>
            </div>
          </div>
        </div>

        <hr />

        <div className="footer-down">
          <div className="footer-copyright">
            <p>
              @{new Date().getFullYear()} oneStop. All right reserved.
            </p>
          </div>
          <div className="footer-down-links">
            <a href="/"><div><p>Terms & Conditions</p></div></a>
            <a href="/"><div><p>Privacy</p></div></a>
            <a href="/"><div><p>Security</p></div></a>
            <a href="/"><div><p>Cookie Declaration</p></div></a>
          </div>
        </div>

      </div>
    </div>
  )
}
