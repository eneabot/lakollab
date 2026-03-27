"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", type: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const inputStyle = {
    width: "100%",
    background: "var(--bg)",
    border: "1.5px solid rgba(0,0,0,0.1)",
    color: "var(--text)",
    padding: "12px 16px",
    borderRadius: "6px",
    fontFamily: "'Inter', sans-serif",
    fontSize: "0.9rem",
    outline: "none",
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    display: "block",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    fontSize: "0.78rem",
    textTransform: "uppercase" as const,
    letterSpacing: "0.06em",
    color: "var(--text-muted)",
    marginBottom: "8px",
  };

  return (
    <section id="contact" style={{ background: "var(--bg-dark)", padding: "96px 0", width: "100%" }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "start" }} className="contact-grid">

          {/* Left */}
          <div>
            <span className="tag tag-red" style={{ marginBottom: "20px", display: "inline-flex" }}>TRAVAILLER ENSEMBLE</span>
            <h2 style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "var(--text)",
              lineHeight: 1.15,
              marginTop: "12px",
              marginBottom: "16px",
            }}>
              Rejoins <span style={{ color: "var(--red)" }}>la Kollab</span>
            </h2>
            <div className="accent-bar-sm" style={{ marginBottom: "28px" }} />
            <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.75, marginBottom: "36px" }}>
              Tu es une marque, un créateur, un collectif ? On construit des projets qui durent, pas des posts qui s'oublient.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                { icon: "🎯", title: "Marques & Agences", desc: "Campagnes créatives, brand content, partnerships" },
                { icon: "🎨", title: "Créateurs indépendants", desc: "Collaborations, visibilité, monétisation" },
                { icon: "🔥", title: "Événements & Drops", desc: "Production, promotion, activation terrain" },
              ].map((item) => (
                <div key={item.title} style={{
                  display: "flex",
                  gap: "16px",
                  padding: "16px",
                  background: "white",
                  borderRadius: "8px",
                  border: "1px solid rgba(0,0,0,0.06)",
                  alignItems: "flex-start",
                }}>
                  <span style={{ fontSize: "1.5rem", flexShrink: 0 }}>{item.icon}</span>
                  <div>
                    <div style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                      color: "var(--text)",
                      marginBottom: "4px",
                    }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: form */}
          <div style={{
            background: "white",
            borderRadius: "12px",
            padding: "40px",
            boxShadow: "0 8px 32px rgba(0,0,0,0.08)",
            border: "1px solid rgba(0,0,0,0.06)",
          }}>
            {/* Top accent */}
            <div className="accent-bar" style={{ borderRadius: "4px 4px 0 0", marginBottom: "32px", marginLeft: "-40px", marginRight: "-40px", marginTop: "-40px" }} />

            {sent ? (
              <div style={{ textAlign: "center", padding: "48px 0" }}>
                <div style={{ fontSize: "3rem", marginBottom: "16px" }}>⚡</div>
                <h3 style={{
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 800,
                  fontSize: "1.5rem",
                  color: "var(--text)",
                  marginBottom: "8px",
                }}>
                  Message envoyé !
                </h3>
                <p style={{ color: "var(--text-muted)" }}>On revient vers toi dans les 48h.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div>
                  <label style={labelStyle}>Nom / Pseudo</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    style={inputStyle}
                    placeholder="Afro Roshi..."
                    onFocus={(e) => (e.target.style.borderColor = "var(--blue)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(0,0,0,0.1)")}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    style={inputStyle}
                    placeholder="collab@lakollab.fr"
                    onFocus={(e) => (e.target.style.borderColor = "var(--blue)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(0,0,0,0.1)")}
                  />
                </div>
                <div>
                  <label style={labelStyle}>Tu es...</label>
                  <select
                    value={form.type}
                    onChange={(e) => setForm({ ...form, type: e.target.value })}
                    style={{ ...inputStyle, appearance: "none" as const }}
                  >
                    <option value="">Sélectionner</option>
                    <option value="creator">Créateur de contenu</option>
                    <option value="brand">Marque / Agence</option>
                    <option value="event">Événementiel</option>
                    <option value="other">Autre</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Ton projet</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    style={{ ...inputStyle, resize: "none" as const }}
                    placeholder="Décris ton projet en quelques lignes..."
                    onFocus={(e) => (e.target.style.borderColor = "var(--blue)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(0,0,0,0.1)")}
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ justifyContent: "center", fontSize: "1rem" }}>
                  Envoyer ⚡
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 48px !important; }
        }
      `}</style>
    </section>
  );
}
