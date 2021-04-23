import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  ProjectsContainer,
  ProjectsWrapper,
  ProjectsTitle,
} from "./ProjectsElements"

import Img from "gatsby-image"

const Projects = () => {
  const data = useStaticQuery(graphql`
    query ProjectPage {
      projects: allMarkdownRemark(
        sort: { fields: frontmatter___date, order: DESC }
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
        <ProjectsTitle>Projects</ProjectsTitle>
        {projects.map(project => (
          <div key={project.id}>
            <Img fluid={project.frontmatter.thumb.childImageSharp.fluid} />
            <h3>{project.frontmatter.title}</h3>
            <p>{project.frontmatter.stack}</p>
          </div>
        ))}
      </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects
