import React from "react"

import { FooterContainer, FooterText, FooterWrapper } from "./FooterElements"

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterText>
          {new Date().getFullYear()} &#169; John Cabang. All Rights Reserved.
        </FooterText>
      </FooterWrapper>
    </FooterContainer>
  )
}

export default Footer
