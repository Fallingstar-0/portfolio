import React, { useState } from "react"
import styles from "./navbar.module.css"
import { getImageUrl } from "../../utils"

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [fix, setFix] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 113) {
      setFix(true)
    } else {
      setFix(false)
    }
  }

  window.addEventListener("scroll", changeBackground)

  return (
    <div className={styles.container}>
      <nav
        className={
          fix ? `${styles.navbar} ${styles.active}` : `${styles.navbar}`
        }
      >
        <a className={styles.title} href="/">
          TONY HOPKINS
        </a>
        <div className={styles.menu}>
          <img
            className={styles.menuBtn}
            src={
              menuOpen
                ? getImageUrl("nav/closeIcon.png")
                : getImageUrl("nav/menuIcon.png")
            }
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <ul
            className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}
          >
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
