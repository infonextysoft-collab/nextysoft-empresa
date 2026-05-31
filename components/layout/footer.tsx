"use client";

import React from "react";

const WhatsAppIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

export default function Footer() {
  return (
    <>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
        .footer-root * { box-sizing: border-box; }
        .footer-root { font-family: 'Plus Jakarta Sans', sans-serif; }

        @keyframes waPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(37,211,102,0.40); }
          50%      { box-shadow: 0 0 0 8px rgba(37,211,102,0); }
        }

        .wa-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          color: #fff;
          font-family: 'Plus Jakarta Sans', sans-serif;
          font-weight: 800;
          font-size: 15px;
          padding: 13px 24px;
          border-radius: 100px;
          border: none;
          cursor: pointer;
          white-space: nowrap;
          animation: waPulse 3s ease-in-out infinite;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .wa-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(37,211,102,0.50);
        }
      `}</style>

      <footer
        className="footer-root"
        style={{
          background: "#0d1117",
          borderTop: "1px solid rgba(196,218,250,0.08)",
          padding: "22px 40px",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 24,
          }}
        >

          {/* Logo */}

          <div style={{ flexShrink: 0 }}>
            <span style={{ fontSize: 18, fontWeight: 900, color: "#fcffff", letterSpacing: "-0.3px" }}>
              Nexty
            </span>
            <span style={{ fontSize: 18, fontWeight: 900, color: "#4d82bc", letterSpacing: "-0.3px" }}>
              Soft
            </span>
          </div>

          {/* Center tagline */}

          <p style={{
            fontSize: 14,
            color: "rgba(196,218,250,0.45)",
            fontWeight: 500,
            margin: 0,
            textAlign: "center",
            flex: 1,
          }}>
            Soluciones digitales para tu negocio
          </p>

          {/* Right: copyright + WA button */}


          <div style={{ display: "flex", alignItems: "center", gap: 24, flexShrink: 0 }}>
            <p style={{
              fontSize: 13,
              color: "rgba(196,218,250,0.35)",
              fontWeight: 400,
              margin: 0,
              whiteSpace: "nowrap",
            }}>
              © 2025 Nexty Soft. Todos los derechos reservados.
            </p>

           
          </div>
        </div>
      </footer>
    </>
  );
}