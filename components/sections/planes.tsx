"use client";

import React, { useEffect, useRef, useState } from "react";
  
// Brand palette
// #005187 – deep navy
// #4d82bc – mid blue
// #84b6f4 – sky blue
// #c4dafa – pale blue
// #fcffff – near white

const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const CheckIcon = () => (
  <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);


function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function PricingSection() {
  const { ref, visible } = useInView();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');

        .ps-root * { box-sizing: border-box; }
        .ps-root { font-family: 'Plus Jakarta Sans', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmerOrb {
          0%,100% { opacity: 0.55; transform: scale(1); }
          50%      { opacity: 0.80; transform: scale(1.08); }
        }
        @keyframes badgePulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(132,182,244,0.45); }
          50%      { box-shadow: 0 0 0 6px rgba(132,182,244,0); }
        }
        @keyframes shimmerText {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }

        .ps-visible .afu1 { animation: fadeUp 0.60s ease forwards; animation-delay: 0.05s; }
        .ps-visible .afu2 { animation: fadeUp 0.60s ease forwards; animation-delay: 0.18s; }
        .ps-visible .afu3 { animation: fadeUp 0.60s ease forwards; animation-delay: 0.30s; }
        .ps-visible .card-left  { animation: fadeIn 0.65s ease forwards; animation-delay: 0.35s; }
        .ps-visible .card-right { animation: fadeIn 0.65s ease forwards; animation-delay: 0.50s; }

        .afu1,.afu2,.afu3 { opacity: 0; }
        .card-left, .card-right { opacity: 0; }

        /* ── Light plan card ── */
        .plan-light {
          background: #f6faff;
          border: 1.5px solid rgba(196,218,250,0.8);
          border-radius: 28px;
          padding: 40px 36px;
          display: flex;
          flex-direction: column;
          gap: 0;
          transition: all 0.28s ease;
          position: relative;
          overflow: hidden;
        }
        .plan-light:hover {
          border-color: #84b6f4;
          background: #fcffff;
          box-shadow: 0 16px 48px rgba(0,81,135,0.11);
          transform: translateY(-4px);
        }

        /* ── Dark (highlight) plan card ── */
        .plan-dark {
          background: linear-gradient(150deg, #005187 0%, #003d6e 55%, #002952 100%);
          border-radius: 28px;
          padding: 40px 36px;
          display: flex;
          flex-direction: column;
          gap: 0;
          transition: all 0.28s ease;
          position: relative;
          overflow: hidden;
          box-shadow: 0 24px 60px rgba(0,81,135,0.32);
        }
        .plan-dark::before {
          content: '';
          position: absolute;
          right: -70px; top: -70px;
          width: 260px; height: 260px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(132,182,244,0.20) 0%, transparent 70%);
          animation: shimmerOrb 7s ease-in-out infinite;
        }
        .plan-dark::after {
          content: '';
          position: absolute;
          left: -50px; bottom: -50px;
          width: 200px; height: 200px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(77,130,188,0.22) 0%, transparent 70%);
          animation: shimmerOrb 9s ease-in-out infinite reverse;
        }
        .plan-dark:hover {
          transform: translateY(-4px);
          box-shadow: 0 32px 72px rgba(0,81,135,0.42);
        }

        /* Popular badge */
        .popular-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(196,218,250,0.18);
          border: 1px solid rgba(132,182,244,0.35);
          color: #c4dafa;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 6px 14px;
          border-radius: 100px;
          animation: badgePulse 3s ease-in-out infinite;
        }

        /* Price */
        .price-big {
          font-size: 56px;
          font-weight: 900;
          line-height: 1;
          letter-spacing: -2px;
        }

        /* Feature list item */
        .feat-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
          line-height: 1.5;
          padding: 6px 0;
        }
        .feat-check-light {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(196,218,250,0.55);
          color: #005187;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; margin-top: 1px;
        }
        .feat-check-dark {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(196,218,250,0.18);
          color: #c4dafa;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; margin-top: 1px;
        }
        .feat-cross {
          width: 22px; height: 22px; border-radius: 50%;
          background: rgba(0,0,0,0.04);
          color: #c4dafa;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0; margin-top: 1px;
        }

        /* Divider */
        .plan-divider-light { border: none; border-top: 1px solid rgba(196,218,250,0.7); margin: 28px 0; }
        .plan-divider-dark  { border: none; border-top: 1px solid rgba(196,218,250,0.15); margin: 28px 0; }

        /* CTA buttons */
        .btn-light {
          width: 100%;
          background: #005187;
          color: #fcffff;
          font-weight: 800;
          font-size: 15px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          border: none;
          padding: 16px 0;
          border-radius: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          transition: all 0.24s ease;
          box-shadow: 0 6px 20px rgba(0,81,135,0.22);
        }
        .btn-light:hover {
          background: #003d6e;
          box-shadow: 0 10px 28px rgba(0,81,135,0.34);
          transform: translateY(-2px);
        }
        .btn-dark {
          width: 100%;
          background: #fcffff;
          color: #005187;
          font-weight: 800;
          font-size: 15px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          border: none;
          padding: 16px 0;
          border-radius: 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 9px;
          transition: all 0.24s ease;
          box-shadow: 0 6px 20px rgba(0,0,0,0.14);
          position: relative;
          z-index: 1;
        }
        .btn-dark:hover {
          background: #edf5ff;
          box-shadow: 0 10px 28px rgba(0,0,0,0.20);
          transform: translateY(-2px);
        }

        /* Gradient text for eyebrow */
        .grad-text-ps {
          background: linear-gradient(120deg, #005187, #4d82bc, #84b6f4);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmerText 4s linear infinite;
        }

        /* Guarantee strip */
        .guarantee-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: rgba(196,218,250,0.22);
          border: 1px solid rgba(132,182,244,0.30);
          border-radius: 14px;
          padding: 14px 24px;
          font-size: 13px;
          color: #4d82bc;
          font-weight: 600;
        }

        /* Section bg */
        .ps-root section {
          background: linear-gradient(180deg, #fcffff 0%, #edf5ff 100%);
        }

        /* Dot grid */
        .dot-g { display:grid; grid-template-columns:repeat(6,1fr); gap:7px; opacity:0.18; }
        .dot-g div { width:5px;height:5px;border-radius:50%;background:#4d82bc; }

        .plans-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 24px;
          align-items: start;
        }

        @media (max-width: 760px) {
          .ps-root section {
            padding: 64px 0 76px !important;
          }

          .ps-root section > div {
            padding: 0 16px !important;
          }

          .plans-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .plan-light,
          .plan-dark {
            border-radius: 22px;
            padding: 30px 22px;
          }

          .card-right {
            order: -1;
          }

          .price-big {
            font-size: 48px;
            letter-spacing: -1px;
          }

          .feat-item {
            font-size: 13px;
          }

          .guarantee-strip {
            align-items: flex-start;
            text-align: left;
          }
        }

        @media (max-width: 380px) {
          .plan-light,
          .plan-dark {
            padding: 26px 18px;
          }

          .price-big {
            font-size: 42px;
          }
        }
      `}</style>

      <div
        ref={ref}
        className={`ps-root${visible ? " ps-visible" : ""}`}
      >
        <section id="planes" style={{ padding: "88px 0 100px" }}>
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 32px" }}>

            {/* ── Header ── */}
            <div style={{ textAlign: "center", marginBottom: 60 }}>
              <p className="afu1" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#4d82bc", marginBottom: 14 }}>
                Nuestros Planes
              </p>
              <h2 className="afu2" style={{ fontSize: "clamp(28px,4vw,46px)", fontWeight: 900, color: "#005187", lineHeight: 1.15, margin: "0 0 16px" }}>
                Elige el plan ideal<br />para tu negocio
              </h2>
              <p className="afu3" style={{ fontSize: 15, color: "#84b6f4", lineHeight: 1.7, maxWidth: 420, margin: "0 auto", fontWeight: 500 }}>
                Sin mensualidades ni sorpresas. Pagas una sola vez y tu página trabaja para ti todos los días.
              </p>
            </div>

            {/* ── Cards grid ── */}
            <div className="plans-grid">

              {/* ── Plan Esencial (light) ── */}
              <div className="plan-light card-left">
                {/* Dot grid accent */}
                <div className="dot-g" style={{ position: "absolute", right: 28, bottom: 28 }}>
                  {Array.from({ length: 24 }).map((_, i) => <div key={i} />)}
                </div>

                {/* Plan name */}
                <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#84b6f4", margin: "0 0 10px" }}>
                  Plan Esencial
                </p>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: "#005187", margin: "0 0 8px", lineHeight: 1.3 }}>
                  Para empezar a vender
                </h3>
                <p style={{ fontSize: 13, color: "#84b6f4", fontWeight: 500, margin: "0 0 28px", lineHeight: 1.6 }}>
                  Ideal si recién lanzas tu negocio o quieres tu primera página web.
                </p>

                {/* Price */}
                <div style={{ display: "flex", alignItems: "flex-end", gap: 8, marginBottom: 6 }}>
                  <span className="price-big" style={{ color: "#005187" }}>$ 49</span>
                  <span style={{ fontSize: 13, color: "#84b6f4", fontWeight: 600, marginBottom: 10 }}>pago único</span>
                </div>
                <p style={{ fontSize: 12, color: "#c4dafa", fontWeight: 500, margin: "0 0 28px" }}>Sin mensualidades · Sin renovaciones</p>

                <hr className="plan-divider-light" />

                {/* Features */}
                <div style={{ display: "flex", flexDirection: "column", marginBottom: 28 }}>
                  {[
                    "Botón de WhatsApp en cada producto",
                    "Diseño moderno adaptado a tu marca",
                    "100% optimizada para celular",
                    "Hasta 100 productos",
                    "Secciones básicas: inicio, catálogo, contacto",
                    "Redes Sociales",
                    "Hosting y Dominio Gratis",
                    "1 revisión de diseño incluida",
                  ].map((f) => (
                    <div key={f} className="feat-item">
                      <span className="feat-check-light"><CheckIcon /></span>
                      <span style={{ color: "#005187", fontWeight: 500 }}>{f}</span>
                    </div>
                  ))}

                </div>

                <button className="btn-light">
                  <WhatsAppIcon size={18} />
                  Empezar con Esencial
                </button>
              </div>

              {/* ── Plan Pro (dark) ── */}
              <div className="plan-dark card-right">
                {/* Popular badge */}
                <div style={{ marginBottom: 20, position: "relative", zIndex: 1 }}>
                  <span className="popular-badge">
                    <span style={{ fontSize: 14 }}>✦</span>
                    Más popular
                  </span>
                </div>

                {/* Plan name */}
                <p style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(196,218,250,0.65)", margin: "0 0 10px", position: "relative", zIndex: 1 }}>
                  Plan Pro
                </p>
                <h3 style={{ fontSize: 22, fontWeight: 800, color: "#fcffff", margin: "0 0 8px", lineHeight: 1.3, position: "relative", zIndex: 1 }}>
                  Para negocios que quieren destacar
                </h3>
                <p style={{ fontSize: 13, color: "rgba(196,218,250,0.70)", fontWeight: 500, margin: "0 0 28px", lineHeight: 1.6, position: "relative", zIndex: 1 }}>
                  Más productos, más revisiones y soporte prioritario por 30 días.
                </p>

                {/* Price */}
                <div style={{ display: "flex", alignItems: "flex-end", gap: 8, marginBottom: 6, position: "relative", zIndex: 1 }}>
                  <span className="price-big" style={{ color: "#fcffff" }}>$ 99</span>
                  <span style={{ fontSize: 13, color: "rgba(196,218,250,0.65)", fontWeight: 600, marginBottom: 10 }}>pago único</span>
                </div>
                <p style={{ fontSize: 12, color: "rgba(196,218,250,0.40)", fontWeight: 500, margin: "0 0 28px", position: "relative", zIndex: 1 }}>Sin mensualidades · Sin renovaciones</p>

                <hr className="plan-divider-dark" style={{ position: "relative", zIndex: 1 }} />

                {/* Features */}
                <div style={{ display: "flex", flexDirection: "column", marginBottom: 28, position: "relative", zIndex: 1 }}>
                  {[
                    "Hasta 250 0 300 productos",
                    "Categorías de productos",
                    "Botón de WhatsApp personalizado",
                    "100% optimizada para celular",
                    "Diseño más profesional",
                    "2 o 3 revisiones de diseño incluidas",
                    "Blog o sección de novedades",
                    "Integración con redes sociales",
                  ].map((f) => (
                    <div key={f} className="feat-item">
                      <span className="feat-check-dark"><CheckIcon /></span>
                      <span style={{ color: "rgba(252,255,255,0.88)", fontWeight: 500 }}>{f}</span>
                    </div>
                  ))}
                </div>

                <button className="btn-dark" style={{ position: "relative", zIndex: 1 }}>
                  <WhatsAppIcon size={18} />
                  Empezar con Pro
                </button>
              </div>

            </div>

            {/* ── Guarantee strip ── */}
            <div style={{ marginTop: 36 }}>
              <div className="guarantee-strip afu3">
                <span style={{ fontSize: 20 }}>🔒</span>
                <span>
                  <strong style={{ color: "#005187" }}>Garantía de satisfacción:</strong>{" "}
                  Si no quedas conforme con el diseño, te hacemos los cambios hasta que estés feliz.
                </span>
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
}
