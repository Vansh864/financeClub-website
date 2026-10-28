const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/Gallery" },
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
  { label: "Team", href: "/team" },
];

const Header = () => (
  <header className="site-header" id="top">
    <a className="site-brand" href="/" aria-label="Finance & Investment Club, NIT Silchar home">
      <span className="site-brand__mark" aria-hidden="true">F</span>
      <span className="site-brand__text">
        <span className="site-brand__name">Finance Club</span>
        <span className="site-brand__location">NIT Silchar</span>
      </span>
    </a>
    <nav aria-label="Main navigation">
      <ul className="site-nav">
        {navigationLinks.map(({ label, href }) => (
          <li key={label}>
            <a href={href}>{label}</a>
          </li>
        ))}
        <li className="site-nav__cta">
          <a href="#about">Get to know us <span aria-hidden="true">↗</span></a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
