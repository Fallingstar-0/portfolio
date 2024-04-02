import React from "react"
import { getImageUrl } from "../../utils"
import styles from "./hero.module.css"

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Tony</h1>
        <p className={styles.description}>
          I'm a front-end developer. Reach out if you'd like to learn more!{" "}
        </p>
        <a href="mailto:syiehya50@gmail.com" className={styles.contactBtn}>
          Contact me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero Image of me"
        className={styles.heroImg}
      />
    </section>
  )
}

export default Hero
