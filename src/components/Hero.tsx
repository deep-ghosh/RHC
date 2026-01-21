import React, { useState, useEffect } from 'react'

const Hero: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <span className="logo-text">Reflya</span>
            </div>
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#features">Features</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Transforming Mental Health Through <span className="gradient-text">Innovation</span>
          </h1>
          <p className="hero-subtitle">
            Advanced early detection and treatment solutions combining cutting-edge software and hardware for comprehensive mental health care
          </p>
          <div className="hero-buttons">
            <a href="#products" className="btn btn-primary">Explore Products</a>
            <a href="#contact" className="btn btn-secondary">Get in Touch</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="card-icon">🧠</div>
            <p>AI-Powered Detection</p>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">📊</div>
            <p>Real-Time Analytics</p>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">💙</div>
            <p>Personalized Care</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
