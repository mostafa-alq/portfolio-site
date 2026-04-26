import AboutSection from "./components/AboutSection";
import Touch from "./components/Touch";
import Footer from "./components/Footer";

function HomePage() {
  return (
    <>
      <div className="siteContainer">
        <AboutSection />
        <Touch />
      </div>
      <Footer />
    </>
  );
}

export default HomePage;
