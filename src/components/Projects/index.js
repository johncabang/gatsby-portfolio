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
  ProjectImageWrapper,
  ProjectBodyWrapper,
  ProjectGithubLink,
} from "./ProjectsElements"

// import Img from "gatsby-image"

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
            githubLink
            previewLink
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

  // console.log(projects)

  return (
    <ProjectsContainer>
      <ProjectsWrapper>
        <ProjectsTitle>FEATURED PROJECTS.</ProjectsTitle>
        <ProjectContainer>
          {projects.map(project => (
            <ProjectWrapper key={project.id}>
              <ProjectImageWrapper
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
              >
                <Image
                  fluid={project.frontmatter.thumb.childImageSharp.fluid}
                />
              </ProjectImageWrapper>
              <ProjectBodyWrapper>
                <ProjectTitle>{project.frontmatter.title}</ProjectTitle>
                <ProjectStackTitle>
                  Built with: {project.frontmatter.stack}
                </ProjectStackTitle>
                <ProjectGithubLink href={project.frontmatter.githubLink}>
                  Github Link
                </ProjectGithubLink>
                <ProjectGithubLink href={project.frontmatter.previewLink}>
                  Live Preview
                </ProjectGithubLink>
              </ProjectBodyWrapper>
            </ProjectWrapper>
          ))}
        </ProjectContainer>
      </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects
