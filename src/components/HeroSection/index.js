import React from "react"
import {
  HeroContainer,
  HeroName,
  HeroTitle,
  HeroParagraph,
  HeroParagraphWrapper,
  HeroButtonContainer,
  // HeroButton,
  HeroTextWrapper,
  HeroWrapper,
  LinkedinIcon,
  GithubIcon,
  LinkedinLink,
  GithubLink,
} from "./HeroSectionElements"

const HeroSection = () => {
  return (
    <HeroContainer>
      <HeroWrapper>
        <HeroTextWrapper>
          <HeroParagraph>Hello, my name is</HeroParagraph>
          <HeroName
            initial={{ y: `-100vh` }}
            animate={{ y: 0 }}
            transition={{ delay: 0.9, type: "spring", stiffness: 50 }}
            whileHover={{
              originX: 0,
              scale: 1.6,
              transition: { duration: 0.5 },
            }}
          >
            John Cabang
          </HeroName>
          <HeroTitle>Front End Developer.</HeroTitle>
          <HeroParagraphWrapper>
            <HeroParagraph>
              I am a creative, responsible and motivated Front End Developer
              seeking a full-time position. Having completed complex Lighthouse
              Labs coding projects on time in just 12 weeks is testament to my
              drive and levelheadedness under pressure. My ability to work well
              with others and desirable leadership qualities are evidenced by
              the 10 years I have spent as a team coach in a former role.
            </HeroParagraph>
          </HeroParagraphWrapper>
          <HeroButtonContainer
          // whileHover={{
          //   originX: 0,
          //   scale: 1.1,
          //   transition: { duration: 0.2 },
          // }}
          >
            {/* <HeroButton>Contact me</HeroButton> */}
            <LinkedinLink
              href="https://www.linkedin.com/in/john-cabang/"
              whileHover={{
                originX: 0,
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
            >
              <LinkedinIcon />
            </LinkedinLink>
            <GithubLink
              href="https://github.com/johncabang"
              whileHover={{
                originX: 0,
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
            >
              <GithubIcon />
            </GithubLink>
          </HeroButtonContainer>
        </HeroTextWrapper>
      </HeroWrapper>
    </HeroContainer>
  )
}

export default HeroSection
