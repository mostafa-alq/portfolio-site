import styles from "./home.module.css";
import AboutSection from "./components/AboutSection";
import SocialsSection from "./components/SocialsSection";
import ProjectsSection from "./components/ProjectsSection";
import LatestPost from "./components/LatestPost";
import Footer from "./components/Footer";

function HomePage() {
  return (
    <div className={styles.viewport}>
      <div className={styles.columns}>
        <div className={styles.sidebar}>
          <AboutSection />
          <LatestPost />
          <SocialsSection />
        </div>
        <div className={styles.main}>
          <ProjectsSection />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
