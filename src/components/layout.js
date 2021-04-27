import * as React from "react"
import PropTypes from "prop-types"
import ParticleBackground from "./ParticleBackground"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <ParticleBackground />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
