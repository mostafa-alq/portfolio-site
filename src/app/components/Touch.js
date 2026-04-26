import Link from "next/link";
import styles from "./Touch.module.css";

function Touch() {
  return (
    <section id="touch" className={styles.touchSection}>
      <span className={styles.kicker}>GET IN TOUCH</span>
      <h2 className={styles.title}>
        Let&apos;s create something amazing together.
      </h2>
      <p className={styles.subtitle}>
        I&apos;m open to new opportunities and collaborations. Feel free to
        reach out!
      </p>
      <Link href="mailto:mostafaalqadi05@gmail.com" className={styles.button}>
        Get in Touch
      </Link>
    </section>
  );
}

export default Touch;
