import styled from "styled-components"
import { Link } from "gatsby"

export const Nav = styled.nav`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  top: 0;
  /* position: sticky;
  z-index: 999; */

  @media screen and (max-width: 960px) {
    background: ${({ click }) => (click ? "#000" : "transparent")};
    transition: 0.8s all ease;
  }
`
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1400px;
`

export const NavLogo = styled(Link)`
  color: #64ffda;
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
`
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    color: white;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
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
    position: absolute;
    /* top: 80px; */
    top: ${({ click }) => (click ? "80px" : "-1000px")};
    opacity: 1;
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
  }
`

export const NavLinks = styled(Link)`
  color: #64ffda;
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
    padding: 2rem;
  }
  &:hover {
    color: #ff4040;
    transition: all 0.3s ease;
  }
`
