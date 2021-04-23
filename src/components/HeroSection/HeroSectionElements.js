import styled from "styled-components"

export const HeroContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  margin-top: -80px;

  background: radial-gradient(
    at top left,
    rgb(32, 32, 32) 50%,
    rgba(43, 9, 107, 1) 100%
  );
  background-repeat: no-repeat;

  @media screen and (max-width: 960px) {
    justify-content: center;
  }
`

export const HeroWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 1400px;
  padding: 0 9rem;

  @media screen and (max-width: 960px) {
    padding: 0 2rem;
  }
`

export const HeroTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

export const HeroName = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #ccd6f6;
  font-size: 75px;
  width: 800px;

  @media screen and (max-width: 960px) {
    font-size: 40px;
    width: auto;
    padding-bottom: 1rem;
  }
`

export const HeroTitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: #fff;
  font-size: 80px;
  font-weight: bold;
  width: 800px;

  @media screen and (max-width: 960px) {
    font-size: 50px;
    width: auto;
    padding-bottom: 1rem;
  }
`

export const HeroParagraphWrapper = styled.div`
  width: 500px;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

export const HeroParagraph = styled.div`
  color: #8892b0;
  font-size: 16px;
  margin: 1rem 0;
  line-height: 1.5rem;
  /* width: 500px;

  @media screen and (max-width: 960px) {
    width: 400px;
  } */
`

export const HeroButtonContainer = styled.div`
  display: flex;
  margin-top: 2rem;
`

export const HeroButton = styled.button`
  background-color: #64ffda;
  color: #0a192f;
  border: none;
  border-radius: 0.3rem;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  outline: none;
  padding: 10px 20px;
  text-decoration: none;
  white-space: nowrap;

  &:hover {
    transition: all 0.2s ease-in-out;
    filter: brightness(1.2);
  }
`
