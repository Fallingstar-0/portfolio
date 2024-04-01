import React from "react"
import styles from "./projects.module.css"
import { getImageUrl } from "../../utils"

const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <li className={styles.project}>
      <img src={getImageUrl(imageSrc)} alt={title} className={styles.img} />
      <h2>{title}</h2>
      <p>{description}</p>
      <div className={styles.skills}>
        {skills.map((skill, id) => {
          return <p>{skill}</p>
        })}
      </div>
      <div className={styles.links}>
        <a href={demo}>Demo</a>
        <a href={source}>Source</a>
      </div>
    </li>
  )
}

export default ProjectCard
