import Link from "next/link";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <div className={styles.footerLinks}>
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
      </div>
    </footer>
  );
}

export default Footer;
