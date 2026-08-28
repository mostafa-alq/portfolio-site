import styles from "./AboutSection.module.css";

function AboutSection() {
  return (
    <section className={styles.aboutSectionFat} id="about">
      <div className={styles.heroSection}>
        <h1 className={styles.headline}>
          Mostafa <span className={styles.arabicName}>[مصطفى]</span>
        </h1>
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
      </div>
    </section>
  );
}

export default AboutSection;
