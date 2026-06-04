"use client";

import React, { useEffect, useState } from "react";

const WA_NUMBER = "5199999999"; 
const WA_MESSAGE_HERO = "Hola, quiero mi página web 🌐";
const WA_MESSAGE_FAB  = "Hola, quisiera más información 👋";
const WA_MESSAGE_SHOP = "Hola, quiero hacer un pedido 🛍️";

const waLink = (msg: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const products = [
  { emoji: "👗", bg: "#EBF4FF", accent: "#c4dafa", name: "Vestido floral primavera", price: "S/ 89.00", desc: "Tela liviana • Azul y rosa" },
  { emoji: "👠", bg: "#f0f6ff", accent: "#c4dafa", name: "Zapatos taco alto", price: "S/ 120.00", desc: "Cuero ecológico • T. 35–40" },
  { emoji: "👜", bg: "#e8f2fd", accent: "#c4dafa", name: "Cartera de cuero", price: "S/ 65.00", desc: "Marrón y negro • Varios colores" },
];

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');

        :root {
          --c-navy:  #005187;
          --c-mid:   #4d82bc;
          --c-sky:   #84b6f4;
          --c-pale:  #c4dafa;
          --c-white: #fcffff;
        }

        .hero-root * { box-sizing: border-box; }
        .hero-root { font-family: 'Plus Jakarta Sans', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes floatA {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-9px); }
        }
        @keyframes floatB {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-13px); }
        }
        @keyframes floatC {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-7px); }
        }
        @keyframes pulseDot {
          0%, 100% { opacity: 1; transform: scale(1); }
          50%       { opacity: 0.45; transform: scale(1.35); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes waBounce {
          0%, 100% { transform: translateY(0) scale(1); }
          30%       { transform: translateY(-5px) scale(1.04); }
          60%       { transform: translateY(-2px) scale(1.01); }
        }
        @keyframes orb1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          40%       { transform: translate(28px, -18px) scale(1.04); }
          70%       { transform: translate(-12px, 22px) scale(0.97); }
        }
        @keyframes orb2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          35%       { transform: translate(-18px, 26px) scale(1.03); }
          70%       { transform: translate(22px, -14px) scale(0.98); }
        }

        .afu1 { animation: fadeUp 0.65s ease forwards; opacity: 0; animation-delay: 0.08s; }
        .afu2 { animation: fadeUp 0.65s ease forwards; opacity: 0; animation-delay: 0.22s; }
        .afu3 { animation: fadeUp 0.65s ease forwards; opacity: 0; animation-delay: 0.36s; }
        .afu4 { animation: fadeUp 0.65s ease forwards; opacity: 0; animation-delay: 0.50s; }
        .afu5 { animation: fadeUp 0.65s ease forwards; opacity: 0; animation-delay: 0.64s; }
        .afi  { animation: fadeIn 0.9s ease forwards;  opacity: 0; animation-delay: 0.45s; }

        .fc-a { animation: floatA 4.2s ease-in-out infinite; }
        .fc-b { animation: floatB 5.8s ease-in-out infinite; }
        .fc-c { animation: floatC 3.9s ease-in-out infinite; animation-delay: 1s; }

        .orb-1 { animation: orb1 13s ease-in-out infinite; }
        .orb-2 { animation: orb2 16s ease-in-out infinite; }

        /* Primary button */
        .btn-primary {
          background: linear-gradient(135deg, var(--c-mid) 0%, var(--c-navy) 100%);
          color: var(--c-white);
          font-weight: 800;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 28px;
          border-radius: 16px;
          font-size: 14px;
          transition: all 0.25s ease;
          box-shadow: 0 8px 24px rgba(0,81,135,0.32);
          text-decoration: none;
          font-family: 'Plus Jakarta Sans', sans-serif;
          flex: 1;
          justify-content: center;
          min-width: 0;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 32px rgba(0,81,135,0.44);
        }

        /* Secondary button */
        .btn-secondary {
          background: var(--c-white);
          color: var(--c-navy);
          font-weight: 700;
          border: 1.5px solid var(--c-pale);
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 13px 28px;
          border-radius: 16px;
          font-size: 14px;
          transition: all 0.25s ease;
          text-decoration: none;
          font-family: 'Plus Jakarta Sans', sans-serif;
          flex: 1;
          justify-content: center;
          min-width: 0;
        }
        .btn-secondary:hover {
          border-color: var(--c-mid);
          background: #f0f6ff;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(77,130,188,0.16);
        }

        /* WhatsApp FAB */
        .wa-fab {
          animation: waBounce 3.2s ease-in-out infinite;
          background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
          box-shadow: 0 8px 24px rgba(37,211,102,0.40);
          color: white;
          font-weight: 800;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 22px;
          border-radius: 100px;
          font-size: 14px;
          font-family: 'Plus Jakarta Sans', sans-serif;
          transition: box-shadow 0.2s;
          text-decoration: none;
        }
        .wa-fab:hover { box-shadow: 0 12px 32px rgba(37,211,102,0.55); }

        /* Gradient text */
        .grad-text {
          background: linear-gradient(120deg, var(--c-navy) 0%, var(--c-mid) 50%, var(--c-sky) 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }

        /* Float cards */
        .fcard {
          background: rgba(252,255,255,0.92);
          backdrop-filter: blur(14px);
          border: 1px solid rgba(196,218,250,0.6);
          border-radius: 18px;
          box-shadow: 0 8px 28px rgba(0,81,135,0.12), 0 1px 0 rgba(255,255,255,0.9) inset;
        }

        /* Badge */
        .hero-badge {
          background: rgba(252,255,255,0.92);
          border: 1.5px solid rgba(132,182,244,0.35);
          box-shadow: 0 0 0 4px rgba(132,182,244,0.10);
          border-radius: 100px;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 8px 18px;
        }

        /* Trust pills */
        .trust-pill {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          color: var(--c-navy);
        }
        .trust-check {
          width: 20px; height: 20px;
          border-radius: 50%;
          background: var(--c-pale);
          color: var(--c-navy);
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }

        /* Product row hover */
        .prow { transition: background 0.18s; border-radius: 10px; }
        .prow:hover { background: rgba(196,218,250,0.18); }

        .pulse-dot { animation: pulseDot 2.2s ease-in-out infinite; }

        /* ── RESPONSIVE ─────────────────────────────────── */

        /* Layout principal */
        .hero-inner {
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: 64px;
          padding: 96px 64px;
        }

        /* CTA row */
        .cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 32px;
        }

        /* Trust row */
        .trust-row {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          margin-bottom: 36px;
        }

        /* Phone wrapper */
        .phone-wrapper {
          flex: 1;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 640px;
        }

        /* Floating cards — desktop defaults */
        .fc-left  { left: -28px; top: 18%; }
        .fc-right { right: -20px; top: 42%; }
        .fc-bot   { left: 8%; bottom: 9%; }

        /* FAB label */
        .wa-fab-label { display: inline; }

        @media (max-width: 1024px) {
          .hero-inner {
            flex-direction: column;
            padding: 80px 32px 48px;
            gap: 48px;
          }
          .phone-wrapper {
            min-height: 520px;
            width: 100%;
          }
        }

        @media (max-width: 768px) {
          .hero-inner {
            padding: 72px 20px 80px;
            gap: 40px;
          }

          /* Ocultamos el mockup del teléfono en móvil para evitar overflow */
          .phone-wrapper { display: none; }

          /* Buttons full width en móvil */
          .btn-primary,
          .btn-secondary {
            width: 100%;
            justify-content: center;
            padding: 15px 20px;
            font-size: 15px;
          }

          /* Trust pills — 2 columnas en móvil */
          .trust-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }

          /* FAB más pequeño: solo icono */
          .wa-fab {
            padding: 14px;
            border-radius: 50%;
            gap: 0;
          }
          .wa-fab-label { display: none; }

          /* Dot grid oculto en móvil (espacio) */
          .dot-grid { display: none; }
        }

        @media (max-width: 480px) {
          .hero-inner { padding: 64px 16px 80px; }

          /* Trust pills — 1 columna en pantallas muy pequeñas */
          .trust-row {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section
        className="hero-root relative min-h-screen overflow-hidden flex items-center"
        style={{ background: "linear-gradient(155deg, #fcffff 0%, #edf5ff 45%, #daeaff 100%)" }}
      >
        {/* Animated orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="orb-1 absolute right-[4%] top-[2%] w-[520px] h-[520px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(132,182,244,0.38) 0%, rgba(196,218,250,0.18) 55%, transparent 100%)" }} />
          <div className="orb-2 absolute right-[22%] top-[28%] w-[380px] h-[380px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(77,130,188,0.16) 0%, rgba(132,182,244,0.10) 55%, transparent 100%)" }} />
          <div className="absolute left-[-80px] bottom-[-60px] w-[420px] h-[420px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(196,218,250,0.35) 0%, transparent 70%)" }} />
        </div>

        {/* Dot grid bottom-left */}
        <div className="dot-grid absolute bottom-10 left-10 opacity-25 pointer-events-none"
          style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 8 }}>
          {Array.from({ length: 49 }).map((_, i) => (
            <div key={i} className="pulse-dot w-1.5 h-1.5 rounded-full"
              style={{ background: "#4d82bc", animationDelay: `${(i * 0.06) % 2.4}s` }} />
          ))}
        </div>

        {/* Geometric rings top-right */}
        <div className="absolute top-0 right-0 pointer-events-none" style={{ opacity: 0.15 }}>
          <svg width="360" height="360" viewBox="0 0 360 360" fill="none">
            <circle cx="320" cy="40" r="220" stroke="#4d82bc" strokeWidth="1.5" fill="none" />
            <circle cx="320" cy="40" r="155" stroke="#005187" strokeWidth="1" fill="none" />
            <circle cx="320" cy="40" r="90"  stroke="#84b6f4" strokeWidth="0.8" fill="none" />
          </svg>
        </div>

        {/* Content */}
        <div className="hero-inner relative z-10 w-full max-w-7xl mx-auto">

          {/* ── LEFT ── */}
          <div className="flex-1" style={{ maxWidth: 560, width: "100%" }}>

            {/* Badge */}
            <div className={`${mounted ? "afu1" : ""} hero-badge`} style={{ marginBottom: 24 }}>
              <span className="pulse-dot w-2 h-2 rounded-full block" style={{ background: "#25D366" }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "#005187" }}>
                Para Emprendedores y Negocios
              </span>
            </div>

            {/* Headline */}
            <h1 className={`${mounted ? "afu2" : ""}`}
              style={{ fontSize: "clamp(32px,5vw,58px)", fontWeight: 900, lineHeight: 1.1, color: "#005187", marginBottom: 20 }}>
              Tu negocio online,{" "}
              <span style={{ display: "block", marginTop: 4 }}>
                conectado a{" "}
                <span className="grad-text">WhatsApp</span>
              </span>
            </h1>

            {/* Subtext */}
            <p className={`${mounted ? "afu3" : ""}`}
              style={{ color: "#4d82bc", fontSize: "clamp(15px,2vw,17px)", lineHeight: 1.7, marginBottom: 32, maxWidth: 440 }}>
              Creamos páginas web simples y modernas donde puedes mostrar tus productos y recibir pedidos directamente por WhatsApp. Sin complicaciones, listo en días.
            </p>

            {/* CTAs */}
            <div className={`${mounted ? "afu4" : ""} cta-row`}>
              <a
                href={waLink(WA_MESSAGE_HERO)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <WhatsAppIcon className="w-5 h-5" />
                Quiero mi página web
              </a>
              <a href="#planes" className="btn-secondary">
                Ver planes
                <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

            {/* Trust pills */}
            <div className={`${mounted ? "afu5" : ""} trust-row`}>
              {["Entrega en 2–5 días", "100% adaptable al celular", "Sin mensualidades"].map((item) => (
                <div key={item} className="trust-pill">
                  <span className="trust-check"><CheckIcon /></span>
                  {item}
                </div>
              ))}
            </div>

          </div>

          {/* ── RIGHT: Phone mockup (oculto en móvil) ── */}
          <div className={`${mounted ? "afi" : ""} phone-wrapper`}>

            {/* Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div style={{
                width: 300, height: 580, borderRadius: 56,
                background: "radial-gradient(ellipse, rgba(77,130,188,0.22) 0%, transparent 70%)",
                filter: "blur(28px)",
              }} />
            </div>

            {/* Float card: ⚡ Entrega rápida */}
            <div className="fc-a fcard absolute z-20 fc-left"
              style={{ padding: "14px 18px", display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(196,218,250,0.5)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>⚡</div>
              <div>
                <p style={{ margin: 0, fontWeight: 900, fontSize: 17, color: "#005187", lineHeight: 1 }}>2–5 días</p>
                <p style={{ margin: "3px 0 0", fontSize: 11, color: "#84b6f4", fontWeight: 500 }}>Entrega rápida</p>
              </div>
            </div>

            {/* Float card: WhatsApp pedidos */}
            <div className="fc-b fcard absolute z-20 fc-right"
              style={{ padding: "12px 16px", display: "flex", alignItems: "center", gap: 12 }}>
              <div style={{ width: 40, height: 40, borderRadius: 12, background: "rgba(37,211,102,0.12)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <WhatsAppIcon className="w-5 h-5" />
              </div>
              <div>
                <p style={{ margin: 0, fontWeight: 800, fontSize: 13, color: "#005187", lineHeight: 1 }}>+pedidos</p>
                <p style={{ margin: "3px 0 0", fontSize: 11, color: "#84b6f4", fontWeight: 500 }}>Vía WhatsApp</p>
              </div>
            </div>

            {/* Float card: Nuevo pedido */}
            <div className="fc-c fcard absolute z-20 fc-bot"
              style={{ padding: "10px 14px", display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 34, height: 34, borderRadius: "50%", background: "rgba(196,218,250,0.5)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🛍️</div>
              <div>
                <p style={{ margin: 0, fontWeight: 700, fontSize: 12, color: "#005187" }}>¡Nuevo pedido!</p>
                <p style={{ margin: "2px 0 0", fontSize: 10, color: "#84b6f4", fontWeight: 500 }}>Hace 2 minutos</p>
              </div>
              <span className="pulse-dot" style={{ width: 8, height: 8, borderRadius: "50%", background: "#25D366", display: "block", marginLeft: 4 }} />
            </div>

            {/* Phone frame */}
            <div className="relative z-10" style={{
              width: 284,
              background: "linear-gradient(160deg, #00344f 0%, #001f35 100%)",
              borderRadius: 48,
              padding: 10,
              boxShadow: "0 40px 80px rgba(0,81,135,0.28), 0 0 0 1px rgba(132,182,244,0.12) inset",
            }}>
              {/* Dynamic island */}
              <div style={{
                position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)",
                background: "#001f35", borderRadius: 100, width: 100, height: 26, zIndex: 20,
                display: "flex", alignItems: "center", padding: "0 10px", gap: 6,
              }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#005187" }} />
                <div style={{ flex: 1 }} />
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#005187" }} />
              </div>

              {/* Screen */}
              <div style={{ background: "#f6faff", borderRadius: 40, overflow: "hidden" }}>

                {/* Header */}
                <div style={{ background: "linear-gradient(135deg, #005187 0%, #4d82bc 100%)", padding: "34px 16px 16px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(196,218,250,0.22)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>
                      ✦
                    </div>
                    <div>
                      <p style={{ color: "#fcffff", fontWeight: 800, fontSize: 14, margin: 0, lineHeight: 1.2 }}>Mi Tienda Online</p>
                      <p style={{ color: "rgba(196,218,250,0.75)", fontSize: 10, margin: 0, fontWeight: 500 }}>Powered by Nexty Soft</p>
                    </div>
                  </div>
                  <div style={{ marginTop: 12, background: "rgba(196,218,250,0.18)", borderRadius: 10, padding: "8px 12px", display: "flex", alignItems: "center", gap: 6 }}>
                    <svg width="12" height="12" fill="none" stroke="rgba(196,218,250,0.7)" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
                    </svg>
                    <span style={{ color: "rgba(196,218,250,0.55)", fontSize: 10, fontWeight: 500 }}>Buscar productos...</span>
                  </div>
                </div>

                {/* Products */}
                <div style={{ padding: "14px 12px" }}>
                  <p style={{ color: "#84b6f4", fontSize: 9, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", margin: "0 0 10px" }}>
                    Productos Destacados
                  </p>

                  <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                    {products.map((p) => (
                      <div key={p.name} className="prow" style={{ display: "flex", alignItems: "center", gap: 10, padding: "7px 6px" }}>
                        <div style={{
                          width: 44, height: 44, borderRadius: 12,
                          background: p.bg, border: `1.5px solid ${p.accent}`,
                          display: "flex", alignItems: "center", justifyContent: "center",
                          fontSize: 20, flexShrink: 0,
                        }}>{p.emoji}</div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <p style={{ color: "#005187", fontSize: 11, fontWeight: 700, margin: "0 0 2px", lineHeight: 1.3 }}>{p.name}</p>
                          <p style={{ color: "#4d82bc", fontSize: 11, fontWeight: 800, margin: "0 0 2px" }}>{p.price}</p>
                          <p style={{ color: "#84b6f4", fontSize: 9, margin: 0 }}>{p.desc}</p>
                        </div>
                        <div style={{
                          width: 26, height: 26, borderRadius: 8, background: "#c4dafa",
                          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                        }}>
                          <svg width="12" height="12" fill="none" stroke="#005187" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m-7-7h14" />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* WhatsApp CTA dentro del teléfono */}
                  <a
                    href={waLink(WA_MESSAGE_SHOP)}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex", width: "100%", marginTop: 12,
                      background: "linear-gradient(135deg, #25D366 0%, #128C7E 100%)",
                      color: "#fcffff", fontSize: 11, fontWeight: 800,
                      padding: "11px 0", borderRadius: 14, border: "none",
                      alignItems: "center", justifyContent: "center", gap: 6, cursor: "pointer",
                      boxShadow: "0 4px 14px rgba(37,211,102,0.35)",
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                      textDecoration: "none",
                    }}
                  >
                    <WhatsAppIcon className="w-3.5 h-3.5" />
                    Pedir por WhatsApp
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* WhatsApp FAB */}
        <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 50 }}>
          <a
            href={waLink(WA_MESSAGE_FAB)}
            target="_blank"
            rel="noopener noreferrer"
            className="wa-fab"
          >
            <WhatsAppIcon className="w-5 h-5" />
            <span className="wa-fab-label">Escríbenos</span>
          </a>
        </div>
      </section>
    </>
  );
}