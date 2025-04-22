import Link from "next/link";
import styles from "./Touch.module.css";

function Touch() {
  return (
    <section className={styles.touchSection}>
      <h2 className={styles.title}>Let's create something amazing together.</h2>
      <p className={styles.subtitle}>
        I'm open to new opportunities and collaborations. Feel free to reach
        out!
      </p>
      <Link href="mailto:example@example.com" className={styles.button}>
        <span>📧</span> Get in Touch
      </Link>
    </section>
  );
}

export default Touch;
