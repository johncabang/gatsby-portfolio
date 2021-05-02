import styled from "styled-components"
import { Link as LinkS } from "react-scroll"

import { motion } from "framer-motion"

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  top: 0;
  position: sticky;
  z-index: 999;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    background-color: #000;
    height: 40px;
  }
`
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  z-index: 1;
  width: 100%;
  max-width: 1000px;
`

export const NavLogo = styled(motion.div)`
  color: #bc027f;
  display: flex;
  font-size: 4rem;
  justify-self: flex-start;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  padding-left: 2rem;

  &:hover {
    color: #8892b0;
    transition: all 0.5s ease;
  }

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    font-size: 2rem;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
`

export const NavItem = styled(motion.li)`
  display: flex;
  height: 80px;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: auto;
    padding: 2rem;
  }

  @media screen and (max-width: 375px) {
    padding: 2rem 0;
  }
`

export const NavLinks = styled(LinkS)`
  color: #bc027f;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease;
    color: #8892b0;
  }
`
