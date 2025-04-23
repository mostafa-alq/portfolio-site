import Link from "next/link";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© Mostafa Alqadi. All rights reserved.</p>
      <p>
        Built with<Link href="https://reactjs.org/">React</Link>and
        <Link href="https://aceternity.com/">NextJS.</Link>Source available on
        <Link href="https://github.com/mostafa-alq/portfolio-site">GitHub</Link>
      </p>
      <p>📍 London, UK</p>
    </footer>
  );
}

export default Footer;
