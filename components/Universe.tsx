"use client";
const universes = [
  {
    id: "street",
    label: "Streetwear",
    emoji: "🧢",
    desc: "Mode urbaine, drops exclusifs, collab avec les marques qui font la culture de rue.",
    accent: "var(--red)",
    items: ["Hoodies", "Caps", "Tees", "Drops"],
    num: "01",
  },
  {
    id: "sneakers",
    label: "Sneakers",
    emoji: "👟",
    desc: "Chaque paire est une œuvre. Revues, collectes, collaborations et culture sneaker.",
    accent: "var(--blue)",
    items: ["Jordans", "Yeezys", "New Balance", "Customs"],
    num: "02",
  },
  {
    id: "manga",
    label: "Manga",
    emoji: "⛩️",
    desc: "L'univers manga fusionné avec la rue. Art, références, crossovers culturels inédits.",
    accent: "var(--yellow)",
    items: ["Dragon Ball", "One Piece", "Naruto", "Original"],
    num: "03",
  },
  {
    id: "digital",
    label: "Créateurs",
    emoji: "📲",
    desc: "YouTube Shorts, TikTok, Insta Reels — le contenu digital qui touche les communautés.",
    accent: "var(--blue-light)",
    items: ["YouTube", "TikTok", "Podcast", "Newsletter"],
    num: "04",
  },
];

export default function Universe() {
  return (
    <section id="universe" style={{ background: "var(--bg)", padding: "96px 0", width: "100%" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ marginBottom: "48px" }}>
          <span className="tag tag-blue" style={{ marginBottom: "16px", display: "inline-flex" }}>NOS UNIVERS</span>
          <h2 style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "var(--text)",
            lineHeight: 1.15,
            marginTop: "8px",
            marginBottom: "4px",
          }}>
            Le <span style={{ color: "var(--red)" }}>supermarché</span> des cultures
          </h2>
          <div className="accent-bar-sm" style={{ marginTop: "16px" }} />
        </div>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }} className="universe-grid">
          {universes.map((u) => (
            <div
              key={u.id}
              className="card-hover"
              style={{
                background: "white",
                borderRadius: "12px",
                padding: "32px 24px",
                border: "1px solid rgba(0,0,0,0.06)",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top accent */}
              <div style={{ height: "4px", background: u.accent, borderRadius: "2px", marginBottom: "24px" }} />

              {/* Number (bg) */}
              <div style={{
                position: "absolute",
                bottom: "-10px",
                right: "10px",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 900,
                fontSize: "5rem",
                color: "rgba(0,0,0,0.04)",
                lineHeight: 1,
                userSelect: "none",
              }}>
                {u.num}
              </div>

              {/* Emoji */}
              <div style={{ fontSize: "2.5rem", marginBottom: "16px" }}>{u.emoji}</div>

              {/* Label */}
              <h3 style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 700,
                fontSize: "1.15rem",
                color: "var(--text)",
                marginBottom: "10px",
              }}>
                {u.label}
              </h3>

              <p style={{ color: "var(--text-muted)", fontSize: "0.87rem", lineHeight: 1.65, marginBottom: "18px" }}>
                {u.desc}
              </p>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {u.items.map((item) => (
                  <span key={item} style={{
                    background: "var(--bg-dark)",
                    color: "var(--text-muted)",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 600,
                    fontSize: "0.65rem",
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    padding: "3px 8px",
                    borderRadius: "3px",
                  }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .universe-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          .universe-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
