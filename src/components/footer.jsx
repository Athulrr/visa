import React from 'react'
import logoImage from '../assets/footerlogo.png'
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Company Info Section */}
          <div className="footer-section">
            <div className="footer-logo">
              <img src={logoImage} alt="Visaslots Logo" className="footer-logo-icon" />
              <span className="footer-logo-text">Visaslots</span>
            </div>
            <p className="footer-description">
              Travelo is Southeast Asia's travel and lifestyle app, we provide you with access to discover and purchase different type of travel needs.
            </p>
          </div>

          {/* Product Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Product</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Visaslots</a></li>
              <li><a href="#" className="footer-link">FAQ</a></li>
              <li><a href="#" className="footer-link">Blog</a></li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">About us</a></li>
              <li><a href="#" className="footer-link">Contact us</a></li>
              <li><a href="#" className="footer-link">For Visa Agencies</a></li>
            </ul>
          </div>

          {/* Resources Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Resources</h3>
            <ul className="footer-links">
              <li><a href="#" className="footer-link">Privacy Policy</a></li>
              <li><a href="#" className="footer-link">Terms and Conditions</a></li>
              <li><a href="#" className="footer-link">Cookie Settings</a></li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom Rectangle */}
      <div className="footer-bottom-rectangle">
        <div className="footer-bottom-content">
          <div className="footer-social">
            <a href="#" className="social-link" aria-label="Facebook">
              <FiFacebook />
            </a>
            <a href="#" className="social-link" aria-label="Instagram">
              <FiInstagram />
            </a>
            <a href="#" className="social-link" aria-label="Twitter">
              <FiTwitter />
            </a>
          </div>
          <p className="copyright">
            © 2025 Visaslots
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
