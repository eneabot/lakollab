"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "À propos", href: "#about" },
    { label: "Collabs", href: "#collabs" },
    { label: "Créateurs", href: "#creators" },
    { label: "Univers", href: "#universe" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <>
      <div className="accent-bar fixed top-0 left-0 right-0 z-50" />
      <nav
        className="fixed top-[5px] left-0 right-0 z-40 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.95)",
          backdropFilter: "blur(12px)",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.08)" : "none",
        }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}
          className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group" style={{ textDecoration: "none" }}>
            <span style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 900,
              fontSize: "1.4rem",
              color: "var(--text)",
              letterSpacing: "-0.02em",
            }}>
              LA <span style={{ color: "var(--red)" }}>KOLLAB</span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.85rem",
                  color: "var(--text-muted)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--red)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary" style={{ padding: "10px 20px", fontSize: "0.82rem" }}>
              Rejoindre →
            </a>
          </div>

          {/* Mobile burger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-6 h-0.5 transition-all`} style={{ background: "var(--text)", transform: menuOpen ? "rotate(45deg) translate(4px, 4px)" : "" }} />
            <span className={`block w-6 h-0.5 transition-all`} style={{ background: "var(--text)", opacity: menuOpen ? 0 : 1 }} />
            <span className={`block w-6 h-0.5 transition-all`} style={{ background: "var(--text)", transform: menuOpen ? "rotate(-45deg) translate(4px, -4px)" : "" }} />
          </button>
        </div>

        {/* Mobile menu */}
        <div style={{ maxHeight: menuOpen ? "300px" : "0", overflow: "hidden", transition: "max-height 0.3s ease" }} className="md:hidden">
          <div style={{ background: "white", borderTop: "1px solid rgba(0,0,0,0.06)", padding: "16px 24px" }} className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  color: "var(--text)",
                  textDecoration: "none",
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(0,0,0,0.06)",
                }}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary" style={{ textAlign: "center", justifyContent: "center" }}>
              Rejoindre →
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}
