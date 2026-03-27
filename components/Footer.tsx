"use client";
export default function Footer() {
  const socials = [
    { label: "Instagram", href: "#", icon: "📸" },
    { label: "TikTok", href: "#", icon: "🎵" },
    { label: "YouTube", href: "#", icon: "▶" },
    { label: "Twitter/X", href: "#", icon: "✕" },
  ];

  return (
    <footer style={{ background: "var(--section-blue)", width: "100%" }}>
      <div className="accent-bar" />
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "60px 24px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "48px", marginBottom: "48px" }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 900,
              fontSize: "1.6rem",
              color: "white",
              marginBottom: "12px",
              letterSpacing: "-0.02em",
            }}>
              LA <span style={{ color: "var(--yellow)" }}>KOLLAB</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: "280px" }}>
              Hub créatif & média. Street culture, sneakers, manga, pop culture. Where cultures collide.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: "0.72rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              marginBottom: "16px",
            }}>
              Navigation
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "À propos", href: "#about" },
                { label: "Collabs", href: "#collabs" },
                { label: "Créateurs", href: "#creators" },
                { label: "Univers", href: "#universe" },
                { label: "Contact", href: "#contact" },
              ].map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    fontFamily: "'Inter', sans-serif",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <div style={{
              color: "rgba(255,255,255,0.4)",
              fontSize: "0.72rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              marginBottom: "16px",
            }}>
              Nous suivre
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "rgba(255,255,255,0.55)",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    fontFamily: "'Inter', sans-serif",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--yellow)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
                >
                  <span style={{ fontSize: "1rem" }}>{s.icon}</span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          paddingTop: "24px",
          borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "12px",
        }}>
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.82rem", fontFamily: "'Inter', sans-serif" }}>
            © {new Date().getFullYear()} La Kollab. Tous droits réservés.
          </p>
          <span style={{
            color: "rgba(255,255,255,0.25)",
            fontSize: "0.75rem",
            fontFamily: "'Poppins', sans-serif",
            textTransform: "uppercase",
            letterSpacing: "0.12em",
          }}>
            WHERE CULTURES COLLIDE
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
