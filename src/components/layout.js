import * as React from "react"
import PropTypes from "prop-types"
import Navbar from "./Navbar"
import HeroSection from "./HeroSection"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
