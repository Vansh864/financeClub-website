import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Gallery", href: "/gallery" },
  { label: "Events", href: "/events" },
  { label: "Team", href: "/team" },
];

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com" },
  { label: "Instagram", href: "https://instagram.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

const Footer = () => (
  <footer className="site-footer">
    <div className="site-footer__main">
      <section aria-labelledby="footer-contact">
        <h2 id="footer-contact">Keep the conversation going.</h2>
        <a className="site-footer__email" href="mailto:financeclubnits@gmail.com">
          financeclubnits@gmail.com <span aria-hidden="true">↗</span>
        </a>
        <p>Phone: +91 82106 84165</p>
      </section>
      <nav aria-label="Quick links">
        <h3>Explore</h3>
        <ul>
          {quickLinks.map(({ label, href }) => (
            <li key={label}>
              <Link to={href}>{label}</Link>
            </li>
          ))}
        </ul>
      </nav>
      <nav aria-label="Social links">
        <h3>Find us around</h3>
        <ul>
          {socialLinks.map(({ label, href }) => (
            <li key={label}>
              <a href={href}>{label} <span aria-hidden="true">↗</span></a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
    <div className="site-footer__bottom">
      <Link className="site-footer__brand" to="/">Finance Club <span>· NIT Silchar</span></Link>
      <p>© 2026 Finance &amp; Investment Club, NITS. All rights reserved.</p>
      <a className="site-footer__top" href="#top">Back to top ↑</a>
    </div>
  </footer>
);

export default Footer;
