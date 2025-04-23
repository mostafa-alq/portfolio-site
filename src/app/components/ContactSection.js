import styles from "./ContactSection.module.css";
import Link from "next/link";

function ContactSection({ visible }) {
  return (
    <section
      id="contact"
      className={`${styles.contacts} ${visible ? styles.fadeIn : ""}`}
    >
      <div>
        <h2 className={styles.contactTitle}>LINKS</h2>
        <Link
          href="https://www.linkedin.com/in/mostafa-alqadi-471843238/"
          target="_blank"
        >
          LinkedIn ↗
        </Link>
        <Link href="https://github.com/mostafa-alq" target="_blank">
          Github ↗
        </Link>
        <Link href="https://www.instagram.com/uow.coding.soc/" target="_blank">
          Instagram ↗
        </Link>
      </div>
      <div>
        <h2 className={styles.contactTitle}>PROJECTS</h2>
        <Link href="https://github.com/mostafa-alq/raycaster" target="_blank">
          Raycaster Engine↗
        </Link>
        <Link
          href="https://github.com/mostafa-alq/prntsc_scraper"
          target="_blank"
        >
          Image Webscraper ↗
        </Link>
        <Link href="https://github.com/mostafa-alq/halal_lang" target="_blank">
          Stack-based Language ↗
        </Link>
      </div>
      <div>
        <h2 className={styles.contactTitle}>HACKATHONS</h2>
        <Link href="https://www.kcl.ac.uk/events/rivers-hackathon">
          Rivers @ KCL↗
        </Link>
        <Link
          href="https://github.com/mostafa-alq/prntsc_scraper"
          target="_blank"
        >
          EasyA x Polkadot ↗
        </Link>
      </div>
    </section>
  );
}

export default ContactSection;
