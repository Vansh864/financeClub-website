const HeroSection = () => (
  <section className="hero-section" aria-labelledby="hero-title">
    <div className="hero-section__content">
      <p className="eyebrow"><span aria-hidden="true">✳</span> Finance, made human</p>
      <h1 id="hero-title">
        Your money
        <br />
        story starts <span>here.</span>
      </h1>
      <p className="hero-section__description">
        A student-led space to make sense of money, explore investing, and
        build confidence for whatever comes next.
      </p>
      <div className="hero-section__actions">
        <a className="button button--primary" href="#about">
          Explore the club <span aria-hidden="true">↗</span>
        </a>
        <a className="button button--text" href="#mission">
          What we believe <span aria-hidden="true">↓</span>
        </a>
      </div>
      <div className="hero-section__notes" aria-label="Club focus areas">
        <span>Learn together</span>
        <span aria-hidden="true">·</span>
        <span>Think boldly</span>
        <span aria-hidden="true">·</span>
        <span>Grow steadily</span>
      </div>
    </div>

    <div
      className="hero-art"
      role="img"
      aria-label="Illustration of a growing investment chart"
    >
      <div className="hero-art__spark hero-art__spark--one" aria-hidden="true">✳</div>
      <div className="hero-art__spark hero-art__spark--two" aria-hidden="true">+</div>
      <div className="market-card">
        <div className="market-card__header">
          <div>
            <p className="market-card__eyebrow">THE BIG PICTURE</p>
            <p className="market-card__title">A little growth, every day.</p>
          </div>
          <span className="market-card__icon" aria-hidden="true">↗</span>
        </div>
        <div className="market-card__chart">
          <div className="market-card__grid" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <svg
            className="market-card__line"
            viewBox="0 0 360 150"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#c8f169" stopOpacity=".24" />
                <stop offset="100%" stopColor="#c8f169" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              className="market-card__area"
              d="M0 126 C30 118 36 94 70 103 S111 119 140 86 S180 101 207 67 S247 78 272 47 S320 57 360 12 V150 H0 Z"
            />
            <path
              className="market-card__path"
              d="M0 126 C30 118 36 94 70 103 S111 119 140 86 S180 101 207 67 S247 78 272 47 S320 57 360 12"
            />
            <circle className="market-card__point" cx="360" cy="12" r="5" />
          </svg>
          <div className="market-card__months" aria-hidden="true">
            <span>START</span>
            <span>LEARN</span>
            <span>GROW</span>
            <span>REPEAT</span>
          </div>
        </div>
        <div className="market-card__footer">
          <span><i aria-hidden="true" /> Progress over perfection</span>
          <span className="market-card__badge">YOUR PACE</span>
        </div>
      </div>
      <div className="hero-sticker" aria-hidden="true">
        <span>MAKE</span>
        <span>YOUR</span>
        <strong>MOVE</strong>
        <span className="hero-sticker__arrow">↗</span>
      </div>
    </div>
  </section>
);

export default HeroSection;
