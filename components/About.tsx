"use client";
export default function About() {
  return (
    <section id="about" style={{ background: "var(--bg)", padding: "96px 0", width: "100%" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}
          className="about-grid">
          {/* Left */}
          <div>
            <span className="tag tag-blue" style={{ marginBottom: "20px", display: "inline-flex" }}>À PROPOS</span>
            <h2 style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "var(--text)",
              lineHeight: 1.15,
              marginBottom: "16px",
              marginTop: "12px",
            }}>
              Pas une agence.<br />
              <span style={{ color: "var(--red)" }}>Un mouvement.</span>
            </h2>
            <div className="accent-bar-sm" style={{ marginBottom: "28px" }} />
            <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, marginBottom: "20px" }}>
              La Kollab est née d'une conviction : les meilleures créations émergent quand des cultures différentes se rencontrent, se frottent, s'hybrident.
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, marginBottom: "36px" }}>
              On connecte les créateurs de contenu, les marques streetwear, les passionnés de manga et les fans de sneakers autour de projets qui ont du sens — et du style.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { icon: "⚡", text: "Connexions créateurs × marques" },
                { icon: "🎯", text: "Production de contenu culturel" },
                { icon: "🔥", text: "Drops & collaborations exclusives" },
                { icon: "📲", text: "Distribution multi-plateforme" },
              ].map((item) => (
                <div key={item.text} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontSize: "1.25rem" }}>{item.icon}</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, color: "var(--text)" }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: visual */}
          <div style={{ position: "relative" }}>
            {/* Main block */}
            <div style={{
              background: "var(--section-blue)",
              borderRadius: "12px",
              padding: "48px",
              position: "relative",
              overflow: "hidden",
            }}>
              {/* Accent corner */}
              <div style={{
                position: "absolute",
                top: 0, left: 0, right: 0,
                height: "5px",
                background: "linear-gradient(90deg, var(--red) 33%, var(--yellow) 33% 66%, var(--blue-light) 66%)",
              }} />
              <div style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 900,
                fontSize: "4rem",
                color: "white",
                lineHeight: 1,
                marginBottom: "16px",
              }}>
                LA<br /><span style={{ color: "var(--yellow)" }}>KOLLAB</span>
              </div>
              <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "0.9rem", fontFamily: "'Inter', sans-serif" }}>
                Hub Créatif & Média<br />Paris · Digital · Global
              </p>

              {/* BG decoration */}
              <div style={{
                position: "absolute",
                bottom: "-20px",
                right: "-20px",
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                background: "rgba(255,209,102,0.15)",
              }} />
            </div>

            {/* Offset cards */}
            <div style={{
              position: "absolute",
              bottom: "-20px",
              right: "-20px",
              background: "var(--yellow)",
              borderRadius: "8px",
              padding: "12px 18px",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: "0.8rem",
              color: "var(--black)",
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
              transform: "rotate(3deg)",
            }}>
              EST. 2024
            </div>
            <div style={{
              position: "absolute",
              top: "-16px",
              left: "-16px",
              background: "var(--red)",
              borderRadius: "8px",
              padding: "10px 14px",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: "0.75rem",
              color: "white",
              boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
              transform: "rotate(-4deg)",
            }}>
              100% INDÉ
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
