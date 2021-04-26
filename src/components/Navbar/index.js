import React from "react"
import { IconContext } from "react-icons/lib"

import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
} from "./NavbarElements"

const Navbar = () => {
  return (
    <IconContext.Provider value={{ color: "#141414" }}>
      <Nav>
        <NavbarContainer>
          <NavLogo
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
              <NavLinks to="/">Projects</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  )
}

export default Navbar
