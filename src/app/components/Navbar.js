import Link from "next/link";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <header className={styles.header}>
      <nav className={styles.mainNav}>
        <ul className={styles.navLinks}>
          <li>
            <Link href="/#about" className={styles.navLink}>
              About
            </Link>
          </li>
          <li>
            <Link href="/#projects" className={styles.navLink}>
              Projects
            </Link>
          </li>
          <li>
            <Link href="/blog" className={styles.navLink}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
