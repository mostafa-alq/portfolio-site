import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import Touch from "./components/Touch";
import Footer from "./components/Footer";

function HomePage() {
  return (
    <div className="siteContainer">
      <AboutSection />
      <Touch />
      <Footer />
    </div>
  );
}

export default HomePage;
