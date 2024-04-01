import React from "react"
import styles from "./contact.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Contact = () => {
  return (
    <section className={styles.container} id="contact">
      <div className={styles.contactText}>
        <h1>Contact</h1>
        <h3>Feel free to reach out!</h3>
      </div>
      <div className={styles.contactDetails}>
        <div>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          <a href="mailto:syiehya50@gmail.com">syiehya50@gmail.com</a>
        </div>
        <div>
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
          <a href="https://www.linkedin.com/in/shehab-zack/">
            linkedin.com/tony-hopkins
          </a>
        </div>
        <div>
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
          <a href="https://github.com/Fallingstar-0/">
            github.com/tony-hopkins
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
