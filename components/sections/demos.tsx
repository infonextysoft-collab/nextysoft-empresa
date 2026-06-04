"use client";
import { useState } from "react";

const WA_NUMBER = "51999999999";
const WA_MESSAGE = "Hola, quiero mi demo gratis 🚀";
const waLink = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_MESSAGE)}`;

const WhatsAppIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const proyectos = [
  {
    id: 1,
    nombre: "Carteras",
    categoria: "E-commerce",
    link: "https://demo-carteras.vercel.app/",
    imagen: "/demos/carteras.png",
  },
  {
    id: 2,
    nombre: "Zapatos",
    categoria: "E-commerce",
    link: "https://demo-zapatos.vercel.app/",
    imagen: "/demos/zapatos.png",
  },
  {
    id: 3,
    nombre: "Eventos",
    categoria: "Entretenimiento",
    link: "https://demo-eventos-navy.vercel.app/",
    imagen: "/demos/eventos.png",
  },
  {
    id: 4,
    nombre: "Ropa",
    categoria: "Moda",
    link: "https://demo-ropa.vercel.app/",
    imagen: "/demos/ropa.png",
  },
];

export default function ProjectDemos() {
  const [activo, setActivo] = useState<number | null>(null);
  const [tocado, setTocado] = useState<number | null>(null);

  // En móvil usamos tap en lugar de hover
  const handleTap = (id: number) => {
    setTocado((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <style>{`
        .pd-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 24px;
        }

        /* 2 columnas compactas en móvil */
        @media (max-width: 600px) {
          .pd-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 14px;
          }
          .pd-header-title {
            font-size: clamp(22px, 6vw, 32px) !important;
          }
          .pd-header-desc {
            font-size: 14px !important;
          }
          .pd-card-preview {
            height: 140px !important;
          }
          .pd-card-info {
            padding: 10px 12px 12px !important;
          }
          .pd-card-name {
            font-size: 13px !important;
          }
          .pd-cta-text {
            font-size: 13px !important;
          }
          .pd-cta-btn {
            font-size: 14px !important;
            padding: 12px 22px !important;
          }
          /* En móvil el overlay de "Ver demo" siempre visible cuando tocado */
        }

        @media (max-width: 360px) {
          .pd-grid {
            grid-template-columns: 1fr;
          }
        }

        .pd-card {
          border-radius: 14px;
          overflow: hidden;
          border: 2px solid transparent;
          box-shadow: 0 2px 16px rgba(0,0,0,0.08);
          cursor: pointer;
          transition: all 0.25s ease;
          background: #fff;
        }
        .pd-card.active {
          border-color: #1a56db;
          box-shadow: 0 12px 40px rgba(26,86,219,0.18);
          transform: translateY(-4px);
        }

        .pd-overlay {
          position: absolute;
          inset: 0;
          z-index: 3;
          background: rgba(26,86,219,0.12);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pd-overlay-btn {
          background: #1a56db;
          color: #fff;
          font-size: 13px;
          font-weight: 700;
          padding: 8px 18px;
          border-radius: 20px;
          text-decoration: none;
          box-shadow: 0 4px 14px rgba(26,86,219,0.4);
          white-space: nowrap;
        }

        @media (max-width: 600px) {
          .pd-overlay-btn {
            font-size: 11px;
            padding: 6px 12px;
          }
        }
      `}</style>

      <section
        id="proyectos"
        style={{
          background: "#ffffff",
          padding: "60px 20px",
          maxWidth: 1200,
          margin: "0 auto",
        }}
      >
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <span
            style={{
              display: "inline-block",
              background: "#e8f0fe",
              color: "#1a56db",
              fontSize: 13,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "6px 16px",
              borderRadius: 20,
              marginBottom: 16,
            }}
          >
            Proyectos reales
          </span>
          <h2
            className="pd-header-title"
            style={{
              fontSize: "clamp(26px, 4vw, 40px)",
              fontWeight: 700,
              color: "#0d1b4b",
              margin: "0 0 12px",
            }}
          >
            Mira lo que podemos crear
          </h2>
          <p
            className="pd-header-desc"
            style={{
              fontSize: 16,
              color: "#6b7280",
              maxWidth: 480,
              margin: "0 auto",
            }}
          >
            Cada diseño es 100% adaptable al celular y listo para vender.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="pd-grid">
          {proyectos.map((p) => {
            const isActive = activo === p.id || tocado === p.id;
            return (
              <div
                key={p.id}
                className={`pd-card ${isActive ? "active" : ""}`}
                onMouseEnter={() => setActivo(p.id)}
                onMouseLeave={() => setActivo(null)}
                onTouchStart={() => handleTap(p.id)}
              >
                {/* Preview */}
                <div
                  className="pd-card-preview"
                  style={{
                    height: 200,
                    overflow: "hidden",
                    position: "relative",
                    background: "#f3f4f6",
                  }}
                >
                  {/* Barra navegador falsa */}
                  <div
                    style={{
                      position: "absolute",
                      top: 0, left: 0, right: 0,
                      zIndex: 2,
                      background: "rgba(255,255,255,0.92)",
                      backdropFilter: "blur(4px)",
                      height: 22,
                      display: "flex",
                      alignItems: "center",
                      padding: "0 10px",
                      gap: 5,
                      borderBottom: "1px solid rgba(0,0,0,0.08)",
                    }}
                  >
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#ff5f57" }} />
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#ffbd2e" }} />
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#28c840" }} />
                    <div
                      style={{
                        flex: 1, marginLeft: 6, height: 12, borderRadius: 6,
                        background: "#e5e7eb", display: "flex", alignItems: "center", paddingLeft: 8,
                        overflow: "hidden",
                      }}
                    >
                      <span style={{ fontSize: 8, color: "#9ca3af", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                        {p.link}
                      </span>
                    </div>
                  </div>

                  {/* Screenshot */}
                  <img
                    src={p.imagen}
                    alt={p.nombre}
                    style={{
                      position: "absolute",
                      inset: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: "top",
                    }}
                  />

                  {/* Overlay al hacer hover / tap */}
                  {isActive && (
                    <div className="pd-overlay">
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="pd-overlay-btn"
                      >
                        Ver demo →
                      </a>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="pd-card-info" style={{ padding: "12px 16px 16px" }}>
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      color: "#1a56db",
                    }}
                  >
                    {p.categoria}
                  </span>
                  <p
                    className="pd-card-name"
                    style={{ margin: "4px 0 0", fontWeight: 700, fontSize: 15, color: "#0d1b4b" }}
                  >
                    {p.nombre}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 52 }}>
          <p
            className="pd-cta-text"
            style={{ color: "#6b7280", marginBottom: 16, fontSize: 15 }}
          >
            ¿No ves tu rubro? Trabajamos con cualquier tipo de negocio.
          </p>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            className="pd-cta-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#25D366",
              color: "#fff",
              fontWeight: 700,
              fontSize: 15,
              padding: "13px 30px",
              borderRadius: 50,
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(37,211,102,0.35)",
            }}
          >
            <WhatsAppIcon />
            Pídenos tu demo gratis
          </a>
        </div>
      </section>
    </>
  );
}