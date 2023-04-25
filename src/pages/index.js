import * as React from 'react'
//Components
import Seo from '../components/Seo/Seo'
import Hero from "../components/HomePage/Hero/Hero"
import SecondSection from '../components/HomePage/Section2/SecondSection'
import ThirdSection from '../components/HomePage/Section3/ThirdSection'
import FourthSection from "../components/HomePage/Section4/FourthSection"


const IndexPage = () => {
  return (
    <>
      <Hero />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage