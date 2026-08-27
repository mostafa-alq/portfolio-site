"use client";
import styles from "./AboutSection.module.css";
import TypeWriter from "./TypeWriter";
import { Github, Linkedin } from "lucide-react";

function AboutSection() {
  return (
    <section className={styles.aboutSectionFat} id="about">
      <div className={styles.heroSection}>
        <h1 className={styles.headline}>Mostafa Alqadi</h1>
        <p className={styles.arabicName}>[مصطفى القاضي]</p>
      </div>

      <hr className="ornRule" />

      <div className={styles.aboutCopy}>
        <p className={styles.descriptionText}>
          Undergraduate Computer Science student and President of Coding Society
          at the University of Westminster. Outside of my studies, I&apos;m
          curious about fields like Machine Learning, Cybersecurity, and AI, and
          I&apos;m always looking for ways to improve my software development
          skills.
        </p>
        <p className={styles.subtitleText}>
          Passionate about <TypeWriter />
        </p>
      </div>

      <div className={styles.socialContainer}>
        <a
          href="https://github.com/mostafa-alq/portfolio-site"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className={styles.socialButton}
        >
          <Github size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/mostafa-alqadi-471843238/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={styles.socialButton}
        >
          <Linkedin size={20} />
        </a>
      </div>

    </section>
  );
}

export default AboutSection;
