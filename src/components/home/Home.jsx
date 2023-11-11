import React from 'react'
import Hero from './hero/Hero'
import AboutCard from '../about/AboutCard'
import HAbout from './HAbout'
import Test from './testimonial/Test'
import Header from '../common/heading/Header'
import Faq from '../pricing/Faq'



const Home = () => {
  return (
    <>
    <Header/>
      <Hero/>
      <AboutCard />
      <HAbout/>
      <Test/>
      <Faq/>
  

    </>
  )
}

export default Home
