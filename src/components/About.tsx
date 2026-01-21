import React from 'react'

const About: React.FC = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">About Reflya</h2>
            <p className="section-subtitle">
              Leading the future of mental health technology
            </p>
            <p className="about-description">
              At Reflya, we believe that mental health care should be accessible, proactive, and personalized. 
              Our mission is to revolutionize mental health treatment through innovative technology that combines 
              artificial intelligence, data analytics, and cutting-edge hardware solutions.
            </p>
            <p className="about-description">
              We specialize in early detection systems that identify mental health concerns before they escalate, 
              empowering individuals and healthcare providers with the tools they need for timely intervention 
              and effective treatment.
            </p>
            <div className="stats">
              <div className="stat-item">
                <h3>500K+</h3>
                <p>Lives Impacted</p>
              </div>
              <div className="stat-item">
                <h3>95%</h3>
                <p>Detection Accuracy</p>
              </div>
              <div className="stat-item">
                <h3>24/7</h3>
                <p>Monitoring Support</p>
              </div>
            </div>
          </div>
          <div className="about-image">
            <div className="image-placeholder">
              <div className="pulse-circle"></div>
              <div className="brain-icon">🧠</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
