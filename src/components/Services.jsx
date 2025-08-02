import React from 'react'
import { FiCreditCard, FiCalendar, FiUsers, FiClock, FiBell, FiMoon, FiSmile, FiUserPlus } from "react-icons/fi"
import { FiStar } from "react-icons/fi"
import { FaQuoteLeft } from "react-icons/fa"
import { SiTrustpilot } from "react-icons/si"
import forwardImage from '../assets/Forward.png'

const Services = () => {
  return (
    <div className="services-container">
      <div className="services-content">
        {/* Left Section - Our Services & Testimonials */}
        <div className="services-left">
          <div className="services-header-section">
            <h2 className="services-heading">Our Services</h2>
            
            <div className="testimonial-1">
              <p>"It is really hard to find a slot on VFS global. With VisaBot I have found the slot in 2 days. Thank you so much for such a good job!!!"</p>
            </div>
          </div>

          {/* Desktop Testimonial Review Section */}
          <div className="testimonial-review">
            <div className="quote-icon-large">
              <FaQuoteLeft />
            </div>
            <h3 className="review-title">Best on the market</h3>
            <div className="star-rating">
              <div className="star-container">
                <SiTrustpilot className="star-icon" />
              </div>
              <div className="star-container">
                <SiTrustpilot className="star-icon" />
              </div>
              <div className="star-container">
                <SiTrustpilot className="star-icon" />
              </div>
              <div className="star-container">
                <SiTrustpilot className="star-icon" />
              </div>
              <div className="star-container">
                <SiTrustpilot className="star-icon" />
              </div>
              <span className="review-date">2 days ago</span>
            </div>
            <p className="review-text">"It is really hard to find a slot on VFS global. With VisaBot I have found the slot in 2 days. Thank you so much for such a good job"</p>
            <div className="separator-line"></div>
            <div className="reviewer-name">Christy</div>
          </div>
        </div>

        {/* Testimonial Review Section - Separate for mobile ordering */}
        <div className="testimonial-review-container">
          <div className="testimonial-review">
            <div className="quote-icon-large">
              <FaQuoteLeft />
            </div>
            <h3 className="review-title">Best on the market</h3>
            <div className="star-rating">
              <div className="star-container">
                <SiTrustpilot className="star-icon" />
              </div>
              <div className="star-container">
                <SiTrustpilot className="star-icon" />
              </div>
              <div className="star-container">
                <SiTrustpilot className="star-icon" />
              </div>
              <div className="star-container">
                <SiTrustpilot className="star-icon" />
              </div>
              <div className="star-container">
                <SiTrustpilot className="star-icon" />
              </div>
              <span className="review-date">2 days ago</span>
            </div>
            <p className="review-text">"It is really hard to find a slot on VFS global. With VisaBot I have found the slot in 2 days. Thank you so much for such a good job"</p>
            <div className="separator-line"></div>
            <div className="reviewer-name">Christy</div>
          </div>
        </div>

        {/* Right Section - Pricing Cards */}
        <div className="services-right">
          {/* Notifications Card */}
          <div className="pricing-card notifications-card">
            <h3 className="card-title">Notifications</h3>
            <div className="price">
              <span className="price-amount">$99</span>
              <span className="price-period">/monthly</span>
            </div>
            <p className="card-description">Best for families and travelers on a budget</p>
            
            <ul className="features-list">
              <li>
                <div className="feature-icon-circle green">
                  <FiCreditCard className="feature-icon" />
                </div>
                <span>3-4 times cheaper than Schengen Visa agencies</span>
              </li>
              <li>
                <div className="feature-icon-circle green">
                  <FiCalendar className="feature-icon" />
                </div>
                <span>You can book an appointment on the next week</span>
              </li>
              <li>
                <div className="feature-icon-circle green">
                  <FiUsers className="feature-icon" />
                </div>
                <span>1 subscription for all travellers</span>
              </li>
              <li>
                <div className="feature-icon-circle green">
                  <FiClock className="feature-icon" />
                </div>
                <span>1 week - average time for booking an appointment</span>
              </li>
            </ul>
            
            <button className="card-button">
              GET APPOINTMENT ALERTS
              <div className="button-icon-circle">
                <img src={forwardImage} alt="Forward" className="button-arrow" />
              </div>
            </button>
          </div>

          {/* Auto Booking Card */}
          <div className="pricing-card auto-booking-card">
            <h3 className="card-title">Auto Booking</h3>
            <div className="price">
              <span className="price-amount">$100</span>
              <span className="price-period">/per applicant</span>
            </div>
            <p className="card-description">Best for families and travelers on a budget</p>
            
            <ul className="features-list">
              <li>
                <div className="feature-icon-circle orange">
                  <FiBell className="feature-icon" />
                </div>
                <span>Suitable if you can't respond right away to notifications</span>
              </li>
              <li>
                <div className="feature-icon-circle orange">
                  <FiMoon className="feature-icon" />
                </div>
                <span>We book a slot for you, even when you sleep</span>
              </li>
              <li>
                <div className="feature-icon-circle orange">
                  <FiSmile className="feature-icon" />
                </div>
                <span>You won't have to think about booking, we'll do everything for you</span>
              </li>
              <li>
                <div className="feature-icon-circle orange">
                  <FiUserPlus className="feature-icon" />
                </div>
                <span>Can Book a slot even for the next day</span>
              </li>
            </ul>
            
            <button className="card-button">
              TRY AUTO BOOKING
              <div className="button-icon-circle">
                <img src={forwardImage} alt="Forward" className="button-arrow" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services 