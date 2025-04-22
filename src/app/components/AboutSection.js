"use client";
import { useState } from "react";
import styles from "./AboutSection.module.css";
import Link from "next/link";

function AboutSection() {
  const [hovered, sethovered] = useState(false);

  return (
    <section className={styles.aboutSectionFat}>
      <div id="about" className={styles.aboutSection}>
        <h1 className={styles.introText}>
          Mostafa Alqadi <span>[مصطفى القاضي]</span>
          <br></br>
        </h1>
      </div>
      <p className={styles.descriptionText}>
        Undergraduate Computer Science student <span>and</span> President of
        Coding Society <span>at the</span> University of Westminster.
        <span> Outside of my studies, Im curious about fields like </span>
        Machine Learning, Cybersecurity, <span>and</span> AI,
        <span> and Im always looking for ways to improve my </span>
        software development skills.
      </p>
      <div className={styles.findOutMore}>
        <Link
          href=""
          onMouseOver={() => sethovered(true)}
          onMouseLeave={() => sethovered(false)}
        >
          Find out more.
        </Link>
      </div>
      {hovered && (
        <style>{".descriptionText{color: rgb(0, 0, 0) !important}"}</style>
      )}
    </section>
  );
}

export default AboutSection;
