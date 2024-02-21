import React from 'react'
import Nav from '../../components/Nav'
import Hero from '../../views/Hero'
import HighSeller from '../../views/HighSeller'
import About from '../../views/About'

const Home = () => {
  return (
    <div>
        <Nav />
        <Hero />
        <HighSeller />
        <About />
    </div>
  )
}

export default Home