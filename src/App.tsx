import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Products from './components/Products'
import Features from './components/Features'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Hero />
      <About />
      <Products />
      <Features />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
