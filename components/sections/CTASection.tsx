
"use client";

import { useState } from "react";

export default function CTASection() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f0f4f8",
        fontFamily: "'Segoe UI', sans-serif",
        padding: "2rem",
      }}
    >
      <div
        style={{
          position: "relative",
          background: "linear-gradient(135deg, #1a5f8a 0%, #1e6fa0 50%, #1a5f8a 100%)",
          borderRadius: "20px",
          padding: "60px 40px",
          maxWidth: "900px",
          width: "100%",
          textAlign: "center",
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(26, 95, 138, 0.35)",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: "-60px",
            left: "-60px",
            width: "220px",
            height: "220px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.07)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-80px",
            right: "-50px",
            width: "260px",
            height: "260px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.07)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "30px",
            left: "30px",
            width: "120px",
            height: "120px",
            borderRadius: "50%",
            background: "rgba(255,255,255,0.05)",
            pointerEvents: "none",
          }}
        />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2
            style={{
              color: "#ffffff",
              fontSize: "clamp(1.8rem, 4vw, 2.6rem)",
              fontWeight: 700,
              lineHeight: 1.2,
              margin: "0 0 20px",
            }}
          >
            ¿Listo para conseguir
            <br />
            más clientes?
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.85)",
              fontSize: "1rem",
              lineHeight: 1.7,
              margin: "0 auto 36px",
              maxWidth: "440px",
            }}
          >
            Tu negocio merece estar online. Escríbenos hoy y en pocos días
            tendrás una página web profesional que convierte visitas en clientes.
          </p>

          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: hovered ? "#22c55e" : "#25d366",
              color: "#ffffff",
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              padding: "14px 32px",
              borderRadius: "50px",
              transition: "background 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease",
              transform: hovered ? "scale(1.04)" : "scale(1)",
              boxShadow: hovered
                ? "0 8px 24px rgba(37, 211, 102, 0.45)"
                : "0 4px 12px rgba(37, 211, 102, 0.3)",
            }}
          >
            {/* WhatsApp icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="white"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Escríbenos y empieza hoy
          </a>

          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "0.85rem",
              margin: "16px 0 0",
              letterSpacing: "0.02em",
            }}
          >
            Nexty Soft — Soluciones digitales para tu negocio
          </p>
        </div>
      </div>
    </div>
  );
}