import React from "react"
import {
  HeroContainer,
  HeroName,
  HeroTitle,
  HeroParagraph,
  HeroParagraphWrapper,
  HeroButtonContainer,
  HeroButton,
  HeroTextWrapper,
  HeroWrapper,
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
              color: "#bc027f",
              transition: { duration: 0.5 },
            }}
          >
            John Cabang.
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
            whileHover={{
              originX: 0,
              scale: 1.1,
              transition: { duration: 0.2 },
            }}
          >
            <HeroButton
            // whileHover={{
            //   scale: 1.1,
            //   transition: { duration: 0.2 },
            // }}
            >
              Contact me
            </HeroButton>
          </HeroButtonContainer>
        </HeroTextWrapper>
      </HeroWrapper>
    </HeroContainer>
  )
}

export default HeroSection
