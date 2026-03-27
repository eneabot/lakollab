"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    const t = setTimeout(() => {
      el.style.transition = "opacity 0.7s ease, transform 0.7s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      style={{
        background: "var(--section-blue)",
        paddingTop: "120px",
        paddingBottom: "80px",
        width: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* BG decoration */}
      <div style={{
        position: "absolute",
        top: 0, right: 0,
        width: "40%",
        height: "100%",
        background: "linear-gradient(135deg, rgba(168,218,220,0.15) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute",
        bottom: 0, left: 0,
        width: "30%",
        height: "50%",
        background: "linear-gradient(45deg, rgba(255,209,102,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Floating tags */}
      <div style={{ position: "absolute", top: "120px", right: "80px", transform: "rotate(8deg)" }}>
        <span className="tag tag-red">NEW</span>
      </div>
      <div style={{ position: "absolute", bottom: "100px", left: "40px", transform: "rotate(-5deg)" }}>
        <span className="tag">COLLAB</span>
      </div>

      <div ref={heroRef} style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ maxWidth: "780px" }}>
          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "24px" }}>
            <span className="tag tag-blue-light">HUB CRÉATIF & MÉDIA</span>
          </div>

          {/* Headline */}
          <h1 style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 900,
            fontSize: "clamp(3rem, 7vw, 6.5rem)",
            lineHeight: 1.05,
            color: "var(--white)",
            marginBottom: "24px",
            letterSpacing: "-0.02em",
          }}>
            Where <span style={{ color: "var(--yellow)" }}>Cultures</span><br />
            Collide.
          </h1>

          {/* Accent bar */}
          <div className="accent-bar" style={{ width: "80px", height: "4px", marginBottom: "28px", borderRadius: "2px" }} />

          {/* Subtitle */}
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "1.15rem",
            color: "rgba(255,255,255,0.72)",
            lineHeight: 1.7,
            maxWidth: "540px",
            marginBottom: "40px",
          }}>
            Street culture. Sneakers. Manga. Pop culture.<br />
            <strong style={{ color: "white" }}>La Kollab</strong> connecte les talents, amplifie les univers, crée les collabs qui comptent.
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", marginBottom: "60px" }}>
            <a href="#collabs" className="btn-primary">Découvrir ↓</a>
            <a href="#contact" style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "transparent",
              color: "white",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 600,
              fontSize: "0.9rem",
              padding: "13px 28px",
              borderRadius: "4px",
              border: "2px solid rgba(255,255,255,0.4)",
              transition: "all 0.2s",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "white"; e.currentTarget.style.background = "rgba(255,255,255,0.1)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; e.currentTarget.style.background = "transparent"; }}
            >
              Collaborer avec nous →
            </a>
          </div>

          {/* Stats */}
          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
            paddingTop: "32px",
            borderTop: "1px solid rgba(255,255,255,0.12)",
          }}>
            {[
              { num: "50+", label: "Créateurs" },
              { num: "200+", label: "Collabs" },
              { num: "2M+", label: "Vues cumulées" },
              { num: "∞", label: "Cultures" },
            ].map((s) => (
              <div key={s.label}>
                <div style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 800,
                  fontSize: "2rem",
                  color: "var(--yellow)",
                  lineHeight: 1,
                }}>
                  {s.num}
                </div>
                <div style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "0.78rem",
                  color: "rgba(255,255,255,0.5)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginTop: "4px",
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
