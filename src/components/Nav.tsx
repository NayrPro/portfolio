"use client";
import styles from "./Nav.module.css";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <a href="#" className={styles.logo}>
        Triton Org
      </a>
      <ul className={styles.links}>
        <li><a href="#projets">projets</a></li>
        <li><a href="#services">services</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
      <div className={styles.badge}>
        <span className={styles.dot} />
        disponible
      </div>
    </nav>
  );
}
