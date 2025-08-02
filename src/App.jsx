import React from 'react'
import './App.css'
import Hero from './components/Hero'
import Services from './components/Services'
import Visabot from './components/Visabot'
import Footer from './components/footer'

function App() {
  return (
    <div className="app">
      <Hero />
      <Services />
      <Visabot />
      <Footer />
    </div>
  )
}

export default App
