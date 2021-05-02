import * as React from "react"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Navbar from "../components/Navbar"
import HeroSection from "../components/HeroSection"
import Projects from "../components/Projects"
import Footer from "../components/Footer"
import ContactForm from "../components/ContactForm"

const IndexPage = () => (
  <Layout>
    <Seo title="John Cabang" />
    <Navbar />
    <HeroSection />
    <Projects />
    <ContactForm />
    <Footer />
  </Layout>
)

export default IndexPage
