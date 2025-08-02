import React, { useState, useEffect } from 'react'
import logoImage from '../assets/LOGO.png'
import forwardImage from '../assets/Forward.png'
import { FiMenu } from "react-icons/fi"

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Close mobile menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    // Close mobile menu after clicking
    setIsMenuOpen(false)
  }

  // Scroll to Visabot section
  const scrollToVisabot = () => {
    const visabotSection = document.querySelector('.visabot-container')
    if (visabotSection) {
      visabotSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="logo">
        <img src={logoImage} alt="Visaslots Logo" className="logo-icon" />
        <span className="logo-text">Visaslots</span>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="navigation desktop-nav">
        <a 
          href="#services" 
          className="nav-link"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('services')
          }}
        >
          OUR SERVICES
        </a>
        <a 
          href="#visabot" 
          className="nav-link"
          onClick={(e) => {
            e.preventDefault()
            scrollToVisabot()
          }}
        >
          HOW TO START
        </a>
        <a 
          href="#reviews" 
          className="nav-link"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('reviews')
          }}
        >
          REVIEWS
        </a>
        <a 
          href="#documents" 
          className="nav-link"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('documents')
          }}
        >
          DOCUMENTS
        </a>
        <a 
          href="#faq" 
          className="nav-link"
          onClick={(e) => {
            e.preventDefault()
            scrollToSection('faq')
          }}
        >
          FAQ
        </a>
      </nav>
      
      <div className="header-right">
        <button 
          className="cta-button"
          onClick={scrollToVisabot}
        >
          TRY VISABOT
          <img src={forwardImage} alt="Forward" className="arrow" />
        </button>
        
        {/* Mobile Hamburger Menu */}
        <button 
          className="hamburger-menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FiMenu />
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="navigation mobile-nav">
          <a 
            href="#services" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('services')
            }}
          >
            OUR SERVICES
          </a>
          <a 
            href="#visabot" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault()
              scrollToVisabot()
            }}
          >
            HOW TO START
          </a>
          <a 
            href="#reviews" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('reviews')
            }}
          >
            REVIEWS
          </a>
          <a 
            href="#documents" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('documents')
            }}
          >
            DOCUMENTS
          </a>
          <a 
            href="#faq" 
            className="nav-link"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('faq')
            }}
          >
            FAQ
          </a>
        </nav>
      )}
    </header>
  )
}

export default Navbar 