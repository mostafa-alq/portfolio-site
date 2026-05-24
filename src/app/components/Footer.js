import Link from "next/link";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <span className={styles.name}>Mostafa Alqadi</span>
        <div className={styles.footerLinks}>
          <Link
            href="mailto:mostafaalqadi05@gmail.com"
            className={styles.footerLink}
          >
            Email
          </Link>
          <span className={styles.sep}>·</span>
          <Link
            href="https://github.com/mostafa-alq"
            target="_blank"
            className={styles.footerLink}
          >
            GitHub
          </Link>
          <span className={styles.sep}>·</span>
          <Link
            href="https://github.com/mostafa-alq/portfolio-site"
            target="_blank"
            className={styles.footerLink}
          >
            Source
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
