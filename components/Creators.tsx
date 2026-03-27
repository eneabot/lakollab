"use client";

const creators = [
  {
    name: "Afro Roshi",
    handle: "@afroroshi",
    role: "Content Creator",
    punchline: "Dragon Ball meets Afrobeat — et ça percute.",
    tags: ["Manga", "Culture"],
    accent: "var(--red)",
    initials: "AR",
    stats: { followers: "85K", views: "2.1M", collabs: "12" },
  },
  {
    name: "Zoro le Frérot",
    handle: "@zorolefrerot",
    role: "Créateur Vidéo",
    punchline: "L'Anime dans nos rues. Le street dans nos écrans.",
    tags: ["Street", "Anime"],
    accent: "var(--blue)",
    initials: "ZF",
    stats: { followers: "42K", views: "890K", collabs: "8" },
  },
  {
    name: "Sneaker Saint",
    handle: "@sneakersaint",
    role: "Sneakerhead / Reviewer",
    punchline: "Chaque paire raconte une histoire. Je les traduis.",
    tags: ["Sneakers", "Review"],
    accent: "var(--yellow)",
    initials: "SS",
    stats: { followers: "31K", views: "560K", collabs: "6" },
  },
  {
    name: "Kana Drops",
    handle: "@kanadrops",
    role: "Designer / Illustrator",
    punchline: "Les kanji sur les hoodies. L'art dans le quotidien.",
    tags: ["Design", "Manga"],
    accent: "var(--blue-light)",
    initials: "KD",
    stats: { followers: "28K", views: "340K", collabs: "15" },
  },
];

export default function Creators() {
  return (
    <section id="creators" style={{ background: "var(--section-blue)", padding: "96px 0", width: "100%" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "56px" }}>
          <span className="tag tag-blue-light" style={{ marginBottom: "16px", display: "inline-flex" }}>LA TEAM</span>
          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "white",
            lineHeight: 1.15,
            marginTop: "12px",
            marginBottom: "16px",
          }}>
            Les <span style={{ color: "var(--yellow)" }}>créateurs</span>
          </h2>
          <div style={{ width: "48px", height: "4px", background: "var(--red)", borderRadius: "2px", margin: "0 auto" }} />
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }} className="creators-grid">
          {creators.map((c) => (
            <div
              key={c.name}
              className="card-hover"
              style={{
                background: "white",
                borderRadius: "12px",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              {/* Color avatar block */}
              <div style={{
                height: "140px",
                background: c.accent === "var(--yellow)" ? "#FFD166" : c.accent === "var(--blue-light)" ? "#A8DADC" : c.accent === "var(--blue)" ? "#457B9D" : "#E63946",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}>
                <span style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 900,
                  fontSize: "3.5rem",
                  color: c.accent === "var(--yellow)" || c.accent === "var(--blue-light)" ? "rgba(29,29,29,0.7)" : "rgba(255,255,255,0.85)",
                }}>
                  {c.initials}
                </span>
                <div style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "12px",
                  background: "rgba(0,0,0,0.35)",
                  color: "white",
                  padding: "2px 8px",
                  borderRadius: "3px",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: "0.68rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}>
                  {c.role}
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: "18px" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "8px" }}>
                  <h3 style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "var(--text)",
                  }}>
                    {c.name}
                  </h3>
                  <span style={{ fontSize: "0.75rem", color: "var(--text-muted)", fontFamily: "'Inter', sans-serif" }}>
                    {c.handle}
                  </span>
                </div>

                <p style={{
                  fontStyle: "italic",
                  color: "var(--text-muted)",
                  fontSize: "0.82rem",
                  lineHeight: 1.5,
                  marginBottom: "14px",
                }}>
                  "{c.punchline}"
                </p>

                {/* Tags */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "14px" }}>
                  {c.tags.map((t) => (
                    <span key={t} className="tag" style={{
                      background: "var(--bg-dark)",
                      color: "var(--text-muted)",
                      fontSize: "0.65rem",
                    }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: "8px",
                  paddingTop: "12px",
                  borderTop: "1px solid var(--bg-dark)",
                }}>
                  {[
                    { val: c.stats.followers, lbl: "Followers" },
                    { val: c.stats.views, lbl: "Vues" },
                    { val: c.stats.collabs, lbl: "Collabs" },
                  ].map((s) => (
                    <div key={s.lbl} style={{ textAlign: "center" }}>
                      <div style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontWeight: 700,
                        fontSize: "0.88rem",
                        color: "var(--blue)",
                      }}>
                        {s.val}
                      </div>
                      <div style={{ fontSize: "0.65rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                        {s.lbl}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: "48px" }}>
          <a href="#contact" style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            color: "rgba(255,255,255,0.6)",
            textDecoration: "none",
            fontSize: "0.9rem",
            transition: "color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
          >
            Tu es créateur ? Rejoins la Kollab →
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .creators-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .creators-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
