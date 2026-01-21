import React from 'react'

interface Feature {
  id: number
  title: string
  description: string
  icon: string
}

const features: Feature[] = [
  {
    id: 1,
    title: 'Early Detection',
    description: 'Identify mental health concerns before they escalate with our AI-powered predictive algorithms.',
    icon: '🔍'
  },
  {
    id: 2,
    title: 'Personalized Treatment',
    description: 'Tailored therapy plans and recommendations based on individual needs and patterns.',
    icon: '🎯'
  },
  {
    id: 3,
    title: 'Continuous Monitoring',
    description: '24/7 tracking and real-time alerts to ensure timely intervention when needed.',
    icon: '📡'
  },
  {
    id: 4,
    title: 'Data Privacy',
    description: 'HIPAA-compliant, end-to-end encrypted platform ensuring your data stays secure.',
    icon: '🔒'
  },
  {
    id: 5,
    title: 'Clinical Integration',
    description: 'Seamless integration with existing healthcare systems and electronic health records.',
    icon: '🏥'
  },
  {
    id: 6,
    title: 'Evidence-Based',
    description: 'All solutions backed by clinical research and validated by mental health professionals.',
    icon: '📚'
  }
]

const Features: React.FC = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <h2 className="section-title">Why Choose Reflya</h2>
        <p className="section-subtitle">
          Comprehensive features designed for better mental health outcomes
        </p>
        
        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
