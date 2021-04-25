import styled from "styled-components"
import { Link } from "gatsby"

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
    background: ${({ click }) => (click ? "#000" : "#000")};
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

export const NavLogo = styled(motion.Link)`
  color: #bc027f;
  display: flex;
  font-size: 4rem;
  justify-self: flex-start;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  padding-left: 2rem;

  &:hover {
    color: #ff4040;
    transition: all 0.5s ease;
  }

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    font-size: 2rem;
  }
`
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    color: #fff;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 25%);
    font-size: 1.5rem;
    cursor: pointer;
    height: 100%;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: fixed;
    top: ${({ click }) => (click ? "40px" : "-1000px")};
    transition: all 0.8s ease;

    background: radial-gradient(
      at top left,
      rgb(32, 32, 32) 50%,
      rgba(43, 9, 107, 1) 100%
    );
    background-repeat: no-repeat;
  }
`

export const NavItem = styled.li`
  height: 80px;

  @media screen and (max-width: 960px) {
    width: 100%;
    height: auto;
    padding: 2rem;
  }
`

export const NavLinks = styled(motion.Link)`
  color: #bc027f;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  font-family: "SF Mono", "Fira Code", "Fira Mono", "Roboto Mono", monospace;

  @media screen and (max-width: 960px) {
    display: table;
    text-align: center;
    width: 100%;
    padding: 0;
  }
  &:hover {
    color: #ff4040;
    transition: all 0.3s ease;
  }
`
