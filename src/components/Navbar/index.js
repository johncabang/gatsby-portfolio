import React from "react"
import { IconContext } from "react-icons/lib"
import { animateScroll as scroll } from "react-scroll"

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements"

const toggleHome = () => {
  scroll.scrollToTop()
}

const Navbar = () => {
  return (
    <IconContext.Provider value={{ color: "#141414" }}>
      <Nav>
        <NavbarContainer>
          <NavLogo
            onClick={toggleHome}
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.5 }}
            whileHover={{
              originX: 0,
              scale: 1.2,
              transition: { duration: 0.2 },
            }}
          >
            J.
          </NavLogo>
          <NavMenu>
            <NavItem
              initial={{ y: -250 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <NavLinks
                to="projects"
                activeClass="active"
                spy={true}
                smooth={true}
                offset={-50}
                duration={500}
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
