import styles from "./ProjectsSection.module.css";
import Link from "next/link";

function ProjectsSection() {
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
  return (
    <section id="projects" className={styles.projects}>
      <div className={styles.projectsInner}>
        <div className={styles.projectsHead}>
          <h2 className={styles.projectsHeading}>My Projects</h2>
        </div>
        <hr className="ornRule" />
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
              <div className={styles.tileContent}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
