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

  return (
    <header className="header">
      <div className="logo">
        <img src={logoImage} alt="Visaslots Logo" className="logo-icon" />
        <span className="logo-text">Visaslots</span>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="navigation desktop-nav">
        <a href="#" className="nav-link">OUR SERVICES</a>
        <a href="#" className="nav-link">HOW TO START</a>
        <a href="#" className="nav-link">REVIEWS</a>
        <a href="#" className="nav-link">DOCUMENTS</a>
        <a href="#" className="nav-link">FAQ</a>
      </nav>
      
      <div className="header-right">
        <button className="cta-button">
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
          <a href="#" className="nav-link">OUR SERVICES</a>
          <a href="#" className="nav-link">HOW TO START</a>
          <a href="#" className="nav-link">REVIEWS</a>
          <a href="#" className="nav-link">DOCUMENTS</a>
          <a href="#" className="nav-link">FAQ</a>
        </nav>
      )}
    </header>
  )
}

export default Navbar 