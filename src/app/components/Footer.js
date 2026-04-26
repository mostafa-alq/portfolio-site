import Link from "next/link";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <span className={styles.name}>Mostafa Alqadi</span>
        <div className={styles.footerLinks}>
          <Link
            href="https://reactjs.org/"
            target="_blank"
            className={styles.footerLink}
          >
            React
          </Link>
          <span className={styles.sep}>·</span>
          <Link
            href="https://nextjs.org/"
            target="_blank"
            className={styles.footerLink}
          >
            Next.js
          </Link>
          <span className={styles.sep}>·</span>
          <Link
            href="https://github.com/mostafa-alq/portfolio-site"
            target="_blank"
            className={styles.footerLink}
          >
            GitHub
          </Link>
        </div>
        <p className={styles.copy}>
          © Mostafa Alqadi. All rights reserved. London, UK.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
