import React from "react"
import skills from "../../data/skills.json"
import history from "../../data/history.json"
import { getImageUrl } from "../../utils"
import styles from "./experience.module.css"

const Experience = () => {
  return (
    <section id="experience" className={styles.container}>
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.image)} alt="" />
                </div>
                <p>{skill.title}</p>
              </div>
            )
          })}
        </div>
        <ul className={styles.history}>
          {history.map((item, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img src={getImageUrl(item.imageSrc)} alt={item.organisation} />
                <div className={styles.historyItemDetails}>
                  <h3>{`${item.role}, ${item.organisation}`}</h3>
                  <p>{`${item.startDate} - ${item.endDate}`}</p>
                  <h4>Duties:</h4>
                  <ul className={styles.dutiesList}>
                    {item.duties.map((duty, id) => {
                      return <li key={id}>{duty}</li>
                    })}
                  </ul>
                  <h4>Developed Skills:</h4>
                  <ul className={styles.skillsList}>
                    {item.skills.map((skill, id) => {
                      return <li key={id}>{skill}</li>
                    })}
                  </ul>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default Experience
