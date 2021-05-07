import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

import { motion } from "framer-motion"

// import { Link } from "gatsby"

export const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  width: 100%;
  height: 100%;

  padding-top: 5rem;
  /* @media screen and (max-width: 375px) {
  } */
`

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1000px;
  padding: 0 9rem;

  @media screen and (max-width: 968px) {
    justify-content: center;
    text-align: center;
    padding: 0 1rem;
  }
`

export const ProjectsTitle = styled.h2`
  font-size: 32px;
  font-weight: bold;
  color: #ccd6f6;
  width: 100%;
  padding: 3rem 0;
  margin-bottom: 2rem;

  @media screen and (max-width: 375px) {
    font-size: 30px;
  }
`

export const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  flex-wrap: wrap;

  @media screen and (max-width: 968px) {
    justify-content: center;
    margin: 0;
  }
`

export const ProjectWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 5rem;

  @media screen and (max-width: 960px) {
    margin: 0;
    padding: 0;
    flex-direction: column;
  }
`

export const ProjectImageWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  width: 100%;

  @media screen and (max-width: 960px) {
    height: 100%;
  }
`

export const Image = styled(GatsbyImage)`
  border-radius: 10px;
  width: 400px;
  padding-top: 2rem;
  top: 0;

  @media screen and (max-width: 968px) {
    margin: 0 2rem;
  }

  @media screen and (max-width: 375px) {
    margin: 0 2rem;
    width: 300px;
  }
`
export const ProjectBodyWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  width: 100%;
  margin: 0 2rem;
  padding: 0 1.5rem;

  @media screen and (max-width: 960px) {
    margin: 0;
    padding: 2rem 0 2rem 0;
  }
`

export const ProjectTitle = styled.h3`
  padding: 1rem 0;
  color: #fff;
  font-size: 22px;
`

export const ProjectDescription = styled.div`
  color: #a8b2d1;
  font-size: 12px;
  padding-bottom: 0.5rem;

  @media screen and (max-width: 968px) {
    padding: 0 1.5rem 0.5rem 1.5rem;
  }
`

export const ProjectStack = styled.p`
  color: #5f667b;
  font-size: 12px;

  @media screen and (max-width: 968px) {
    padding: 0 1.5rem 0.5rem 1.5rem;
  }
`

// TODOS: FIX LINK TAG - BLOCK

export const ProjectLink = styled.a`
  font-size: 12px;
  color: #5f667b;
  padding-top: 0.5rem;
  text-decoration: none;

  &:hover {
    color: #bc027f;
    transition: all 0.5s ease;
  }
`
