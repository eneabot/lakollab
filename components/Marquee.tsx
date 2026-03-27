export default function Marquee() {
  const items = [
    "Street Culture", "·", "Sneakers", "·", "Manga", "·", "Pop Culture", "·",
    "Créateurs", "·", "Collabs", "·", "Drops", "·", "Digital", "·",
    "Street Culture", "·", "Sneakers", "·", "Manga", "·", "Pop Culture", "·",
    "Créateurs", "·", "Collabs", "·", "Drops", "·", "Digital", "·",
  ];

  return (
    <div style={{ background: "var(--yellow)", padding: "14px 0", overflow: "hidden", width: "100%" }}>
      <div className="marquee-track">
        {items.map((item, i) => (
          <span
            key={i}
            style={{
              margin: "0 16px",
              whiteSpace: "nowrap",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: item === "·" ? 400 : 700,
              fontSize: "0.82rem",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: item === "·" ? "rgba(29,29,29,0.35)" : "var(--black)",
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
