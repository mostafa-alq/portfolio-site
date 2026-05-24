import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";

function HomePage() {
  return (
    <>
      <div className="siteContainer">
        <AboutSection />
        <ProjectsSection />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
