"use client";
import { useState, useEffect } from "react";
import styles from "./TypeWriter.module.css";

export default function TypeWriter() {
  const words = [
    "Python",
    "JavaScript",
    "Web Development",
    "Java",
    "Data Science",
    "Machine Learning",
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let timeout;

    if (!isDeleting && currentText === currentWord) {
      // Pause at the end of the word before deleting
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && currentText === "") {
      // Move to next word when fully deleted
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    } else {
      // Type or delete character
      const nextText = isDeleting
        ? currentWord.substring(0, currentText.length - 1)
        : currentWord.substring(0, currentText.length + 1);

      timeout = setTimeout(
        () => setCurrentText(nextText),
        isDeleting ? 50 : 100,
      );
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className={styles.typewriterContainer}>
      <span className={styles.typewriterText}>{currentText}</span>
      <span className={styles.cursor}></span>
    </span>
  );
}
