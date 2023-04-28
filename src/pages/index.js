import * as React from 'react'
//Components
import Seo from '../components/Seo/Seo'
import Hero from '../components/HomePage/Hero'
import SecondSection from '../components/HomePage/SecondSection'
import ThirdSection from '../components/HomePage/ThirdSection'
import FourthSection from "../components/HomePage/FourthSection"


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