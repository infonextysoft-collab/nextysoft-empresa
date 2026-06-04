"use client";

import React from "react";

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

        /* ── FOOTER LAYOUT ── */
        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .footer-tagline {
          font-size: 14px;
          color: rgba(196,218,250,0.45);
          font-weight: 500;
          margin: 0;
          text-align: center;
          flex: 1;
        }

        .footer-right {
          display: flex;
          align-items: center;
          gap: 24px;
          flex-shrink: 0;
        }

        .footer-copy {
          font-size: 13px;
          color: rgba(196,218,250,0.35);
          font-weight: 400;
          margin: 0;
          white-space: nowrap;
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 680px) {
          .footer-root footer {
            padding: 28px 20px !important;
          }

          .footer-inner {
            flex-direction: column;
            align-items: center;
            gap: 14px;
            text-align: center;
          }

          .footer-tagline {
            font-size: 13px;
          }

          .footer-right {
            flex-direction: column;
            gap: 10px;
            align-items: center;
          }

          .footer-copy {
            white-space: normal;
            text-align: center;
          }
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
        <div className="footer-inner">

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
          <p className="footer-tagline">
            Soluciones digitales para tu negocio
          </p>

          {/* Right: copyright */}
          <div className="footer-right">
            <p className="footer-copy">
              © 2025 Nexty Soft. Todos los derechos reservados.
            </p>
          </div>

        </div>
      </footer>
    </>
  );
}
