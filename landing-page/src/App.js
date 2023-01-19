import React from 'react'
// impoirt animate on scroll
import Aos from 'aos'
import 'aos/dist/aos.css'
// components Imports
import Hero from './components/header/Hero'
import About from './components/main/About'
import Features from './components/features/Features'
import Footer from './components/footer/Footer'
import Gallery from './components/gallery/Gallery'

function App() {
  // aos initilization

  Aos.init({
    duration: 1800,
    offset: 0
  })
  return (
    <div className='overflow-hidden'>
      <Hero />
      <About />
      <Features />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
