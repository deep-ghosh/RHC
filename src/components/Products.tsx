import React from 'react'

interface Product {
  id: number
  title: string
  category: 'Software' | 'Hardware'
  description: string
  features: string[]
  icon: string
}

const products: Product[] = [
  {
    id: 1,
    title: 'MindScan AI',
    category: 'Software',
    description: 'Advanced AI-powered early detection platform that analyzes behavioral patterns, speech, and biometric data to identify mental health concerns.',
    features: [
      'Real-time mood tracking',
      'Predictive analytics',
      'Multi-modal data analysis',
      'Secure cloud platform'
    ],
    icon: '🤖'
  },
  {
    id: 2,
    title: 'TherapyConnect',
    category: 'Software',
    description: 'Comprehensive digital therapy platform connecting patients with licensed professionals through secure video, chat, and voice sessions.',
    features: [
      'Licensed therapist network',
      'Secure messaging',
      'Progress tracking',
      'Treatment plans'
    ],
    icon: '💬'
  },
  {
    id: 3,
    title: 'NeuroWave Monitor',
    category: 'Hardware',
    description: 'Wearable EEG headband that monitors brain activity and stress levels, providing real-time feedback and early warning signs.',
    features: [
      'Continuous monitoring',
      'Stress detection',
      'Sleep analysis',
      'Mobile app integration'
    ],
    icon: '🎧'
  },
  {
    id: 4,
    title: 'BioPulse Band',
    category: 'Hardware',
    description: 'Advanced biometric wristband tracking heart rate variability, sleep patterns, and physiological stress markers.',
    features: [
      'HRV monitoring',
      'Sleep quality tracking',
      'Activity recognition',
      'Long battery life'
    ],
    icon: '⌚'
  }
]

const Products: React.FC = () => {
  return (
    <section id="products" className="products">
      <div className="container">
        <h2 className="section-title">Our Products</h2>
        <p className="section-subtitle">
          Innovative software and hardware solutions for comprehensive mental health care
        </p>
        
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-header">
                <div className="product-icon">{product.icon}</div>
                <span className={`product-badge ${product.category.toLowerCase()}`}>
                  {product.category}
                </span>
              </div>
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.description}</p>
              <ul className="product-features">
                {product.features.map((feature, index) => (
                  <li key={index}>
                    <span className="checkmark">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="btn btn-outline">Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
