const AboutSection = () => (
  <section className="about-section reveal" id="about" aria-labelledby="about-title" data-reveal>
    <div className="section-heading">
      <p className="eyebrow"><span aria-hidden="true">01</span> A place to begin</p>
      <h2 id="about-title">Finance is for <span>everyone.</span></h2>
    </div>
    <div className="about-section__body">
      <p>
        The Finance &amp; Investment Club, NIT Silchar is a platform for
        students to explore and learn the world of finance and investment. We
        organize beginner-friendly sessions, workshops, and talks from
        industry experts and alumni, creating a collaborative environment for
        all finance enthusiasts, regardless of prior experience.
      </p>
      <p className="about-section__aside">
        No experience needed. Just curiosity.
        <span aria-hidden="true">✳</span>
      </p>
    </div>
  </section>
);

export default AboutSection;
