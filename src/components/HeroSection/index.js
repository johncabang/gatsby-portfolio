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
          <HeroName>John Cabang.</HeroName>
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
          <HeroButtonContainer>
            <HeroButton>Contact me!</HeroButton>
          </HeroButtonContainer>
        </HeroTextWrapper>
      </HeroWrapper>
    </HeroContainer>
  )
}

export default HeroSection
