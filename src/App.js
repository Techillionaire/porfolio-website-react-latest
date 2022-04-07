import React from 'react'
import About from './components/About'
import Footer from './components/Footer'
// import Contact from './components/Contact'
import Hero from './components/Hero'
import Nav from './components/Nav'
// import Projects from './components/Projects'
import Testimonials from './components/Testimonials'

const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      {/* <Projects /> */}
      <Testimonials />
      {/* <Contact /> */}
      <Footer />
    </div>
  )
}

export default App