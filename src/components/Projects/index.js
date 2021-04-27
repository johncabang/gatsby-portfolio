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
            thumb {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
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
    <ProjectsContainer id="projects">
      <ProjectsWrapper>
        <ProjectsTitle>FEATURED PROJECTS.</ProjectsTitle>
        <ProjectContainer>
          {projects.map(project => (
            <ProjectWrapper key={project.id}>
              {/* {console.log(project.frontmatter)} */}
              <ProjectImageWrapper
                whileHover={{
                  scale: 1.1,
                  transition: { duration: 0.2 },
                }}
              >
                <Image
                  image={
                    project.frontmatter.thumb.childImageSharp.gatsbyImageData
                  }
                  alt={project.frontmatter.title}
                />
              </ProjectImageWrapper>
              <ProjectBodyWrapper>
                <ProjectTitle>{project.frontmatter.title}</ProjectTitle>
                <ProjectStackTitle>
                  Built with: {project.frontmatter.stack}
                </ProjectStackTitle>
                <ProjectGithubLink
                  href={project.frontmatter.githubLink}
                  target="_blank"
                >
                  Github Link
                </ProjectGithubLink>
                {project.frontmatter.previewLink ? (
                  <ProjectGithubLink
                    href={project.frontmatter.previewLink}
                    target="_blank"
                  >
                    Live Preview
                  </ProjectGithubLink>
                ) : (
                  ""
                )}
              </ProjectBodyWrapper>
            </ProjectWrapper>
          ))}
        </ProjectContainer>
      </ProjectsWrapper>
    </ProjectsContainer>
  )
}

export default Projects
