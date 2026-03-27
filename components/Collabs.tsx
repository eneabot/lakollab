"use client";

const projects = [
  {
    title: "Sneaker Summit 2024",
    category: "SNEAKERS",
    desc: "L'événement qui a réuni les plus grands collectionneurs de la scène française.",
    metric: "320K vues",
    tag: "EVENT",
    accent: "var(--blue)",
  },
  {
    title: "Street × Digital Campaign",
    category: "STREET",
    desc: "Content strategy pour une marque streetwear émergente. Résultat : +200% d'engagement.",
    metric: "180K reach",
    tag: "COLLAB",
    accent: "var(--red)",
  },
  {
    title: "La Kollab Zine Vol.1",
    category: "DIGITAL",
    desc: "Premier magazine digital consacré aux intersections culturelles street / manga.",
    metric: "90K téléchargements",
    tag: "CONTENT",
    accent: "var(--yellow)",
  },
];

export default function Collabs() {
  return (
    <section id="collabs" style={{ background: "var(--bg-dark)", padding: "96px 0", width: "100%" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-end", justifyContent: "space-between", gap: "24px", marginBottom: "48px" }}>
          <div>
            <span className="tag" style={{ marginBottom: "16px", display: "inline-flex" }}>COLLABS & PROJETS</span>
            <h2 style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "var(--text)",
              lineHeight: 1.15,
              marginTop: "8px",
            }}>
              Ce qu'on a <span style={{ color: "var(--red)" }}>créé ensemble</span>
            </h2>
            <div className="accent-bar-sm" style={{ marginTop: "16px" }} />
          </div>
          <p style={{ color: "var(--text-muted)", maxWidth: "280px", fontSize: "0.95rem", lineHeight: 1.6 }}>
            Des projets qui mélangent cultures, formats et communautés.
          </p>
        </div>

        {/* Featured video */}
        <div style={{ marginBottom: "32px", borderRadius: "12px", overflow: "hidden", position: "relative", boxShadow: "0 16px 48px rgba(0,0,0,0.12)" }}>
          <div style={{ position: "relative", paddingBottom: "56.25%", height: 0, background: "var(--section-blue)" }}>
            <iframe
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
              src="https://www.youtube.com/embed/w9DG4erw0tM?rel=0&modestbranding=1"
              title="La Kollab — Featured Collab"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div style={{ position: "absolute", top: "16px", left: "16px" }}>
            <span className="tag tag-red">▶ FEATURED</span>
          </div>
        </div>

        {/* Cards grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }} className="collabs-grid">
          {projects.map((p) => (
            <div
              key={p.title}
              className="card-hover"
              style={{
                background: "white",
                borderRadius: "10px",
                overflow: "hidden",
                border: "1px solid rgba(0,0,0,0.06)",
                cursor: "pointer",
              }}
            >
              <div style={{ height: "4px", background: p.accent }} />
              <div style={{ padding: "24px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
                  <span style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.7rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: p.accent === "var(--yellow)" ? "var(--text-muted)" : p.accent,
                  }}>
                    {p.category}
                  </span>
                  <span style={{
                    background: "var(--bg-dark)",
                    color: "var(--text-muted)",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.68rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    padding: "3px 8px",
                    borderRadius: "3px",
                  }}>
                    {p.tag}
                  </span>
                </div>
                <h3 style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "var(--text)",
                  marginBottom: "10px",
                  lineHeight: 1.35,
                }}>
                  {p.title}
                </h3>
                <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.65, marginBottom: "18px" }}>
                  {p.desc}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    color: "var(--blue)",
                  }}>
                    {p.metric}
                  </span>
                  <span style={{ fontSize: "0.82rem", color: "var(--red)", fontFamily: "'Poppins', sans-serif", fontWeight: 600 }}>
                    Voir →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .collabs-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 600px) {
          .collabs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
