import styled from "styled-components"

import { motion } from "framer-motion"

import { GrLinkedin, GrGithub } from "react-icons/gr"

export const HeroContainer = styled.div`
  display: flex;
  justify-content: center;
  height: calc(100vh - 80px);
  width: 100%;

  @media screen and (max-width: 960px) {
    transition: all 0.3s ease-in-out;

    justify-content: center;
  }
`

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1000px;
  padding: 0 9rem;

  @media screen and (max-width: 960px) {
    transition: all 0.8s ease-in-out;
    padding: 0 2rem;
  }
`

export const HeroTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
`

export const HeroName = styled(motion.div)`
  color: #ccd6f6;
  font-size: 75px;
  cursor: none;

  @media screen and (max-width: 960px) {
    transition: all 0.8s ease-in-out;

    font-size: 40px;
    width: auto;
    padding-bottom: 1rem;
  }

  &:hover {
    transition: all 0.3s ease;

    background: linear-gradient(to right, #dd5eb3, #9c136e, #bc027f);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
`

export const HeroTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #fff;
  font-size: 75px;
  font-weight: bold;
  width: 800px;

  @media screen and (max-width: 960px) {
    transition: all 0.3s ease-in-out;

    font-size: 50px;
    width: auto;
    padding-bottom: 1rem;
  }
`

export const HeroParagraphWrapper = styled.div`
  width: 500px;

  @media screen and (max-width: 960px) {
    transition: all 0.3s ease-in-out;
    width: 100%;
  }
`

export const HeroParagraph = styled.div`
  color: #8892b0;
  font-size: 14px;
  margin: 1rem 0;
  line-height: 1.5rem;
`

export const HeroButtonContainer = styled(motion.div)`
  display: flex;
  margin-top: 1rem;
`

// export const HeroButton = styled(motion.button)`
//   background-color: transparent;
//   color: #8892b0;
//   /* border: none; */
//   border-radius: 5rem;
//   cursor: pointer;
//   font-size: 1rem;
//   font-weight: 700;
//   /* outline: none; */
//   border: 1px solid black;
//   border-color: #8892b0;

//   padding: 10px 20px;
//   text-decoration: none;
//   white-space: nowrap;

//   &:hover {
//     transition: all 0.3s ease-in-out;
//     color: #bc027f;
//     border-color: #bc027f;
//   }
// `

export const LinkedinLink = styled(motion.a)`
  padding-right: 10px;
`

export const GithubLink = styled(motion.a)`
  padding-right: 10px;
`

export const LinkedinIcon = styled(GrLinkedin)`
  color: #0072b1;
  font-size: 2rem;
  /* padding: 0 1rem; */
`
export const GithubIcon = styled(GrGithub)`
  color: #fff;
  font-size: 2rem;
  /* padding: 0 1rem; */
`
