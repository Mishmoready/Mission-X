import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
        <footer className="footer">
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Partners</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Courses</h4>
            <ul>
              <li>Register</li>
              <li>Login</li>
              <li>Projects</li>
              <li>Teachers</li>
              <li>Parents</li>
              <li>Resources</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Support</h4>
            <ul>
              <li>FAQs</li>
              <li>Helpdesk</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Legal</h4>
            <ul>
              <li>Terms &amp; Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-section">
            <h5>LevelUp Works</h5>
            <p>LevelUp Works is an Auckland-based<br></br> enterprise dedicated to developing game-<br/>based learning software to help teachers in<br/> response to the New Zealand Digital<br/> Technologies & Hangarau Matihiko.</p>
            <p>alan@levelupworks.com</p>
            <p>(021) 668 185</p>
          </div>
        </footer>
      );
    }
    

export default Footer