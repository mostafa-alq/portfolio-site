"use client";
import { useState } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.utilityBar}>
        <span className={styles.utilityText}>
          COMPUTER SCIENCE · UNIVERSITY OF WESTMINSTER · LONDON
        </span>
      </div>
      <nav className={styles.mainNav}>
        <div className={styles.navInner}>
          <Link href="/" className={styles.logoLink}>
            MOSTAFA ALQADI
          </Link>
          <button
            className={styles.hamburger}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`${styles.navLinks} ${menuOpen ? styles.open : ""}`}>
            <li>
              <Link
                href="/#about"
                className={styles.navLink}
                onClick={() => setMenuOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/#projects"
                className={styles.navLink}
                onClick={() => setMenuOpen(false)}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/blog"
                className={styles.navLink}
                onClick={() => setMenuOpen(false)}
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
