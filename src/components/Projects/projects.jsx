import React from "react"
import styles from "./projects.module.css"
import projects from "../../data/projects.json"
import ProjectCard from "./projectCard"

const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h1>Projects</h1>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return (
            <ul key={id}>
              <ProjectCard project={project} />
            </ul>
          )
        })}
      </div>
    </section>
  )
}

export default Projects
