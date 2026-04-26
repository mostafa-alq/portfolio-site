import styles from "./ContactSection.module.css";
import Link from "next/link";

function ContactSection({ visible }) {
  const projects = [
    {
      title: "Raycaster Engine",
      link: "https://github.com/mostafa-alq/raycaster",
      image: "/raycaster.png",
      description:
        "A custom-built pseudo-3D rendering engine developed in Python using the Raycasting algorithm (similar to Doom and Wolfenstein 3D) all rendered on 2D grid logic.",
    },
    {
      title: "Algorithm Visualiser",
      link: "https://dsa-visualiser-mocha.vercel.app/",
      image: "/dsa.png",
      description:
        "An interactive web application designed to help the user to visualise and understand the step-by-step execution of various sorting algorithms, with adjustable speed and size.",
    },
    {
      title: "Liminal Shift",
      link: "https://youtu.be/bShjGBbExBw",
      image: "/liminalshift.png",
      description:
        "A first-person puzzle game built in Unreal Engine featuring a core 'Dimension Swap' mechanic allowing players to manipulate the environment to solve spatial puzzles.",
    },
    {
      title: "JAXRS Server",
      link: "https://github.com/mostafa-alq/JAXRS-server",
      image: "/jaxrs.svg",
      description:
        "A RESTful API built with JAX-RS and Grizzly to manage campus rooms and sensors. Features sub-resource locators, HATEOAS links, custom exception mapping, and request logging via container filters.",
    },
  ];
  const hackathons = [
    {
      title: "Rivers @ KCL",
      link: "https://www.kcl.ac.uk/events/rivers-hackathon",
      description:
        "Collaborated directly with environmental conservationists to conduct a supply chain analysis and impact audit of various firms, leveraging open-source data to identify high-risk corporations and their effect on the ecosystem.",
    },
    {
      title: "EasyA x Polkadot",
      link: "https://www.easya.io/events/easya-x-polkadot-london-hackathon-2",
      description:
        "As Coding Society President, I spearheaded our participation in the EasyA x Polkadot Hackathon, bridging the gap between student talent and Web3 industry leaders and giving students a chance to familiarise themselves with the Web3 ecosystem.",
    },
  ];

  return (
    <section id="contact" className={styles.contacts}>
      <div>
        <div className={styles.sectionRibbon}>Projects</div>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} className={styles.projectTile}>
              <div className={styles.imageWrapper}>
                <img
                  src={project.image}
                  alt={project.title}
                  className={styles.projectImage}
                  loading="lazy"
                />
              </div>
              <span className={styles.tileKicker}>Project</span>
              <Link
                href={project.link}
                target="_blank"
                className={styles.tileTitle}
              >
                {project.title}
              </Link>
              <p className={styles.tileDescription}>{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.hackathonSection}>
        <div className={styles.sectionRibbon}>Hackathons</div>
        <div className={styles.hackathonList}>
          {hackathons.map((hackathon, index) => (
            <div key={index} className={styles.hackathonItem}>
              <span className={styles.tileKicker}>Hackathon</span>
              <Link
                href={hackathon.link}
                target="_blank"
                className={styles.hackathonTitle}
              >
                {hackathon.title}
              </Link>
              <p className={styles.tileDescription}>{hackathon.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
