import { useEffect, useState } from "react";
import { trainer, navLinks } from "../config";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar--solid" : ""}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo" onClick={closeMenu}>
          <span className="navbar__name">{trainer.name}</span>
          <span className="navbar__sub">{trainer.tagline}</span>
        </a>

        <nav className={`navbar__links ${open ? "is-open" : ""}`}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a
            href={`tel:${trainer.phone.replace(/\s/g, "")}`}
            className="btn btn--primary navbar__cta"
            onClick={closeMenu}
          >
            {trainer.phone}
          </a>
        </nav>

        <button
          className={`navbar__toggle ${open ? "is-open" : ""}`}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}