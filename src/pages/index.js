import * as React from 'react'
//Components
import Seo from '../components/Seo/Seo'
import Hero from "../components/Hero/Hero"
import SecondSection from '../components/Section2/SecondSection'
import ThirdSection from '../components/Section3/ThirdSection'
import FourthSection from "../components/Section4/FourthSection"


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