import styles from "./SocialsSection.module.css";
import { Github, Linkedin, Mail } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/mostafa-alq",
    Icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mostafa-alqadi-471843238/",
    Icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:mostafaalqadi05@gmail.com",
    Icon: Mail,
  },
];

function SocialsSection() {
  return (
    <section className={styles.socials} id="socials">
      <h2 className="sectionTitle">Connect</h2>
      <hr className="ornRule" />
      <div className={styles.row}>
        {socials.map(({ label, href, Icon }) => {
          const external = href.startsWith("http");
          return (
            <a
              key={label}
              href={href}
              target={external ? "_blank" : undefined}
              rel={external ? "noopener noreferrer" : undefined}
              className={styles.link}
            >
              <Icon size={16} />
              <span>{label}</span>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default SocialsSection;
