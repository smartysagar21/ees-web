import React, { useContext } from 'react'
import Layout from '../components/Layout'
import HeroSection from '../components/HeroSection'
import About from '../components/About'

const Home = () => {

  return (
    <Layout>
      <HeroSection/>
      <About/>
    </Layout>
  )
}

export default Home
