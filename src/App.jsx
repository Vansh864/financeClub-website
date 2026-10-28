import { useEffect } from "react";
import AboutSection from "./components/sections/AboutSection.jsx";
import HeroSection from "./components/sections/HeroSection.jsx";
import MissionSection from "./components/sections/MissionSection.jsx";
import SponsorsSection from "./components/sections/SponsorsSection.jsx";
import Footer from "./components/layout/Footer.jsx";
import Header from "./components/layout/Header.jsx";

const App = () => {
  useEffect(() => {
    const revealTargets = document.querySelectorAll("[data-reveal]");

    if (!("IntersectionObserver" in window)) {
      revealTargets.forEach((target) => target.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -32px 0px" },
    );

    revealTargets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <MissionSection />
        <SponsorsSection />
      </main>
      <Footer />
    </>
  );
};

export default App;
