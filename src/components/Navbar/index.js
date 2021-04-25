import React, { useState, useEffect } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { IconContext } from "react-icons/lib"

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements"

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [scroll, setScroll] = useState(false)

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true)
    } else {
      setScroll(false)
    }
  }

  const handleClick = () => setClick(!click)

  useEffect(() => {
    changeNav()
    window.addEventListener("scroll", changeNav)
  }, [])

  return (
    <IconContext.Provider value={{ color: "#141414" }}>
      <Nav active={{ scroll }} click={click}>
        <NavbarContainer>
          <NavLogo
            to="/"
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5 }}
          >
            J.
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {click ? <FaTimes color="#ccd6f6" /> : <FaBars color="#ccd6f6" />}
          </MobileIcon>
          <NavMenu onClick={handleClick} click={click}>
            {/* <NavItem>
              <NavLinks to="/about">About</NavLinks>
            </NavItem> */}
            <NavItem>
              <NavLinks
                to="/projects"
                initial={{ y: -250 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.5 }}
              >
                Projects
              </NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  )
}

export default Navbar
