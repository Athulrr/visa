import React, { useState } from 'react'
import heroSectionImage from '../assets/Hero.png'
import Navbar from './Navbar'

const Hero = () => {
  const [isVisaDropdownOpen, setIsVisaDropdownOpen] = useState(false)
  const [selectedVisaType, setSelectedVisaType] = useState('Visa type')

  const visaTypes = [
    'Tourist Visa',
    'Business Visa', 
    'Student Visa',
    'Work Visa'
  ]

  const handleVisaTypeSelect = (visaType) => {
    setSelectedVisaType(visaType)
    setIsVisaDropdownOpen(false)
  }

  return (
    <div className="app">
      <Navbar />

      {/* Main Content */}
      <main className="main-content">
        {/* Image Section - Shown First on Mobile */}
        <div className="image-section">
          <img 
            src={heroSectionImage} 
            alt="Hero Section Visual" 
            className="hero-section-image"
          />
        </div>
        
        {/* Content Section - Shown Below Image on Mobile */}
        <div className="content-section">
          <div className="feature-tag">
            <span className="sparkle">✨</span>
            AI-Powered • Instant Results
          </div>
          
          <h1 className="main-heading">
            Book a Schengen Visa
            <br />
            Appointment in{' '}
            <span className="highlight">1 week</span>
          </h1>
          
          <p className="sub-heading">
            Your Trusted Visa Bot for Instant Notifications and Auto-Booking.
          </p>
          
          <div className="form-container">
            <div className="form-row">
              <input 
                type="text" 
                placeholder="Going to" 
                className="form-input"
              />
              <div className="form-input dropdown">
                <div 
                  className="dropdown-header"
                  onClick={() => setIsVisaDropdownOpen(!isVisaDropdownOpen)}
                >
                  <span>{selectedVisaType}</span>
                  <span className="dropdown-arrow"> ▼</span>
                </div>
                {isVisaDropdownOpen && (
                  <div className="dropdown-options">
                    {visaTypes.map((visaType, index) => (
                      <div 
                        key={index}
                        className="dropdown-option"
                        onClick={() => handleVisaTypeSelect(visaType)}
                      >
                        {visaType}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            <div className="form-row">
              <input 
                type="text" 
                placeholder="Select an application" 
                className="form-input"
              />
              <input 
                type="text" 
                placeholder="Select application city" 
                className="form-input"
              />
            </div>
            
            <button className="find-appointments-btn">
              Find Appointments
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Hero 