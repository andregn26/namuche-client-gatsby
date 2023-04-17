import * as React from 'react'
// import { StaticImage } from 'gatsby-plugin-image'
//Components
import Seo from '../components/Seo/Seo'
import Layout from '../Layout/Layout'
import Hero from "../components/Hero/Hero"
import SecondSection from '../components/Section2/SecondSection'
import ThirdSection from '../components/Section3/ThirdSection'
import FourthSection from "../components/Section4/FourthSection"


const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">
        <Hero />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        {/* <StaticImage alt='image-test' src="../assets/images/archive_headerimage.png" /> */}
      </Layout>

    </main>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage