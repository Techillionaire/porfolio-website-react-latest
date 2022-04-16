import React from 'react'
import About from './components/About'
import Footer from './components/Footer'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Nav from './components/Nav'
import Testimonials from './components/Testimonials'
import './App.css'
import ProjectList from './components/ProjectList'

const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <ProjectList />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

export default App