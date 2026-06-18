"use client";
import { useState, useEffect } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Lake Restoration", href: "#lake" },
  { label: "Products", href: "#products" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className="navbar"
      style={{
        background: scrolled
          ? "rgba(107, 79, 58, 0.98)"
          : "linear-gradient(135deg, rgba(107, 79, 58, 0.97) 0%, rgba(140, 106, 78, 0.95) 100%)",
      }}
    >
      <div className="nav-logo">
        <span className="nav-logo-name">Bhagwati Equipments</span>
        <span className="nav-logo-tag">& Services</span>
      </div>

      <ul className="nav-links">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className={l.label === "Contact" ? "nav-cta" : ""}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: "none",
          border: "none",
          color: "white",
          fontSize: "1.5rem",
          cursor: "pointer",
        }}
        className="mobile-menu-btn"
        aria-label="Toggle menu"
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {menuOpen && (
        <div
          style={{
            position: "fixed",
            top: "68px",
            left: 0,
            right: 0,
            background: "rgba(10,61,58,0.98)",
            padding: "1.5rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
            zIndex: 99,
          }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "var(--water-surface)",
                textDecoration: "none",
                fontSize: "0.9rem",
                fontWeight: 500,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
