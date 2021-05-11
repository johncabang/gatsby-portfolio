import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import {
  Image,
  ProjectsContainer,
  ProjectsWrapper,
  ProjectsTitle,
  ProjectContainer,
  ProjectTitle,
  ProjectStack,
  ProjectWrapper,
  ProjectImageWrapper,
  ProjectBodyWrapper,
  ProjectLink,
  ProjectDescription,
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
            previewLink
            thumb {
              childImageSharp {
                gatsbyImageData(layout: CONSTRAINED)
              }
            }
          }
          id
          html
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
                  scale: 1.2,
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
                {/* TODOS: UPDATE MARKDOWN PROJECT DESCRIPTIONS */}
                <ProjectDescription
                  dangerouslySetInnerHTML={{ __html: project.html }}
                />
                <ProjectStack>
                  Built with: {project.frontmatter.stack}
                </ProjectStack>
                {/* TODOS: FIX LINK TAG - BLOCK */}
                <ProjectLink
                  href={project.frontmatter.githubLink}
                  target="_blank"
                >
                  Github Link
                </ProjectLink>
                {project.frontmatter.previewLink ? (
                  <ProjectLink
                    href={project.frontmatter.previewLink}
                    target="_blank"
                  >
                    Live Preview
                  </ProjectLink>
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
