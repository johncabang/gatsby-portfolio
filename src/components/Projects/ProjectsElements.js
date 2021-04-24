import styled from "styled-components"
import Img from "gatsby-image"

export const ProjectsContainer = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  width: 100%;
`
export const ProjectsWrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  flex-direction: column;
  width: 100%;
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
`
export const ProjectContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 80px 20px;

  @media screen and (max-width: 968px) {
    justify-content: center;
  }
`

export const ProjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Image = styled(Img)`
  border-radius: 10px;
  width: 300px;
  /* height: 200px; */
  padding-top: 2rem;
  object-fit: cover;
  top: 0;
`

export const ProjectTitle = styled.h3`
  padding: 1rem 0;
  color: #fff;
  font-size: 22px;
`

export const ProjectStackTitle = styled.p`
  color: #a8b2d1;
  font-size: 12px;

  @media screen and (max-width: 968px) {
    padding-bottom: 2rem;
  }
`
