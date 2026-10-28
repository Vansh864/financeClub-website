import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AboutSection from "./components/sections/AboutSection.jsx";
import HeroSection from "./components/sections/HeroSection.jsx";
import MissionSection from "./components/sections/MissionSection.jsx";
import SponsorsSection from "./components/sections/SponsorsSection.jsx";
import Footer from "./components/layout/Footer.jsx";
import Header from "./components/layout/Header.jsx";
import TeamPage from "./components/pages/TeamPage.jsx";

const HomePage = () => (
  <>
    <HeroSection />
    <AboutSection />
    <MissionSection />
    <SponsorsSection />
  </>
);

const PlaceholderPage = ({ title }) => (
  <section className="placeholder-page" aria-labelledby="placeholder-title">
    <p className="eyebrow">Finance Club · NIT Silchar</p>
    <h1 id="placeholder-title">{title}</h1>
    <p>Content coming soon.</p>
  </section>
);

const App = () => {
  const { hash, pathname } = useLocation();

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
  }, [pathname]);

  useEffect(() => {
    if (hash) {
      document.getElementById(hash.slice(1))?.scrollIntoView();
    }
  }, [hash, pathname]);

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/gallery" element={<PlaceholderPage title="Gallery" />} />
          <Route path="/events" element={<PlaceholderPage title="Events" />} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="*" element={<PlaceholderPage title="Page not found" />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
