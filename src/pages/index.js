import * as React from 'react'
import Layout from '../Layout/Layout'
import { StaticImage } from 'gatsby-plugin-image'
import Seo from '../components/Seo/Seo'


const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle="Home Page">

        <StaticImage alt='image-test' src="../assets/images/archive_headerimage.png" />
      </Layout>

    </main>
  )
}

export const Head = () => <Seo title="Home Page" />

export default IndexPage