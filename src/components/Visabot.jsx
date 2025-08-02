import React from 'react'
import phoneImage from '../assets/phone.png'
import forwardImage from '../assets/Forward.png'

const Visabot = () => {
  return (
    <div className="visabot-container">
      <div className="visabot-phone-section">
        <img src={phoneImage} alt="Phone" className="visabot-phone-image" />
        
        
      </div>
      
      <div className="visabot-content-section">
        <h2 className="visabot-main-heading">Meet Visabot</h2>
        <p className="visabot-description">
          Our AI-powered assistant that helps you find and book visa appointments automatically. 
          No more endless refreshing or waiting in queues.
        </p>
        <button className="visabot-cta-button">
          TRY VISABOT
          <img src={forwardImage} alt="Forward" className="visabot-arrow-icon" />
        </button>
        
        <div className="visabot-stats-grid">
          <div className="visabot-stat-box">
            <span className="visabot-stat-number">1,500+</span>
            <span className="visabot-stat-label">Routes</span>
          </div>
          <div className="visabot-stat-box">
            <span className="visabot-stat-number">50+</span>
            <span className="visabot-stat-label">Cities</span>
          </div>
          <div className="visabot-stat-box">
            <span className="visabot-stat-number">50+</span>
            <span className="visabot-stat-label">Premium Airlines</span>
          </div>
          <div className="visabot-stat-box">
            <span className="visabot-stat-number">12k+</span>
            <span className="visabot-stat-label">Happy Customer</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Visabot
