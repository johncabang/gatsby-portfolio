import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  Image,
  ProjectsContainer,
  ProjectsWrapper,
  ProjectsTitle,
  ProjectContainer,
  ProjectTitle,
  ProjectStackTitle,
  ProjectWrapper,
} from "./ProjectsElements"

// import Img from "gatsby-image"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query ProjectPage {
      projects: allMarkdownRemark(
        sort: { fields: frontmatter___date, order: ASC }
      ) {
        nodes {
          frontmatter {
            stack
            title
            thumb {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          id
        }
      }
    }
  `)

  // console.log(data.projects.nodes)

  const projects = data.projects.nodes

  console.log(projects)

  return (
    <ProjectsContainer>
      <ProjectsWrapper>
        <ProjectsTitle>FEATURED PROJECTS</ProjectsTitle>
        <ProjectContainer>
          {projects.map(project => (
            <ProjectWrapper key={project.id}>
              <Image fluid={project.frontmatter.thumb.childImageSharp.fluid} />
              <ProjectTitle>{project.frontmatter.title}</ProjectTitle>
              <ProjectStackTitle>{project.frontmatter.stack}</ProjectStackTitle>
            </ProjectWrapper>
          ))}
        </ProjectContainer>
      </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects
