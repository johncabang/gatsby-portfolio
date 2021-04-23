import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Projects from "../components/Projects"
import Seo from "../components/seo"
import HeroSection from "./../components/HeroSection"

const IndexPage = () => (
  <Layout>
    <Seo title="John Cabang" />
    <HeroSection />
    <Projects />
  </Layout>
)

export default IndexPage
