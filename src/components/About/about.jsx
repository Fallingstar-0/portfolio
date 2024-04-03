import React from "react"
import { getImageUrl } from "../../utils"
import styles from "./about.module.css"

const About = () => {
  return (
    <section className={styles.container} id="about">
      <h1 className={styles.title}>ABOUT</h1>
      <div className={styles.content}>
        <div className={styles.aboutImageContainer}>
          <img
            src={getImageUrl("about/aboutImage.png")}
            alt="About Image"
            className={styles.aboutImage}
          />
        </div>
        <div className={styles.aboutItems}>
          <div className={styles.aboutItem}>
            <img src={getImageUrl("about/web-dev.png")} alt="Cursor Icon" />
            <div className={styles.aboutItemText}>
              <h2>Frontend Developer</h2>
              <p>
                I'm a front-end developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </div>
          <div className={styles.aboutItem}>
            <img
              src={getImageUrl("about/customer-care.png")}
              alt="Server Icon"
            />
            <div className={styles.aboutItemText}>
              <h2>Customer Service</h2>
              <p>
                I have 6 years of experience in handling clients' queries and
                maintaining long-lasting partnerships with clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
