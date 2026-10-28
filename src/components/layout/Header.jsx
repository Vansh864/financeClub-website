import { Link } from "react-router-dom";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Gallery", href: "/gallery" },
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
  { label: "Team", href: "/team" },
];

const Header = () => (
  <header className="site-header" id="top">
    <Link className="site-brand" to="/" aria-label="Finance & Investment Club, NIT Silchar home">
      <span className="site-brand__mark" aria-hidden="true">F</span>
      <span className="site-brand__text">
        <span className="site-brand__name">Finance Club</span>
        <span className="site-brand__location">NIT Silchar</span>
      </span>
    </Link>
    <nav aria-label="Main navigation">
      <ul className="site-nav">
        {navigationLinks.map(({ label, href }) => (
          <li key={label}>
            <Link to={href}>{label}</Link>
          </li>
        ))}
        <li className="site-nav__cta">
          <Link to="/#about">Get to know us <span aria-hidden="true">↗</span></Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
