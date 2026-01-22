"use client";
import { useState } from "react";
import styles from "./AboutSection.module.css";
import ContactSection from "./ContactSection";
import Touch from "./Touch";
import TypeWriter from "./TypeWriter";
import { CornerRightDown, Github, Linkedin } from "lucide-react";

function AboutSection() {
  const [isContactVisible, setIsContactVisible] = useState(false);

  const handleShowContact = () => {
    setIsContactVisible(true);
  };

  return (
    <section className={styles.aboutSectionFat}>
      <div id="about" className={styles.aboutSection}>
        <h1 className={styles.introText}>
          Mostafa Alqadi <span>[مصطفى القاضي]</span>
          <br />
        </h1>
      </div>

      <div>
        <p className={styles.descriptionText}>
          Undergraduate Computer Science student <span>and</span> President of
          Coding Society <span>at the</span> University of Westminster.
          <span> Outside of my studies, I'm curious about fields like </span>
          Machine Learning, Cybersecurity, <span>and</span> AI,
          <span> and I'm always looking for ways to improve my </span>
          software development skills.
        </p>

        <p className={styles.subtitleText}>
          Passionate about <TypeWriter />
        </p>
      </div>

      {/* social links */}
      <div className={styles.socialContainer}>
        <a
          href="https://github.com/mostafa-alq/portfolio-site"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className={styles.socialButton}
        >
          <div className={styles.iconWrapper}>
            <Github size={24} />
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/mostafa-alqadi-471843238/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className={styles.socialButton}
        >
          <div className={styles.iconWrapper}>
            <Linkedin size={24} />
          </div>
        </a>
      </div>

      <div className={styles.findOutMore}>
        <button onClick={handleShowContact} className={styles.findOutMore}>
          Find out more <CornerRightDown size={18} />
        </button>
      </div>

      <ContactSection visible={isContactVisible} />
    </section>
  );
}

export default AboutSection;
