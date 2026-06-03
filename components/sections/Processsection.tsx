"use client";

import React, { useEffect, useRef, useState } from "react";

// Brand palette
// #005187 – deep navy
// #4d82bc – mid blue
// #84b6f4 – sky blue
// #c4dafa – pale blue
// #fcffff – near white

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const steps = [
  {
    number: "01",
    icon: "💬",
    title: "Nos escribes por WhatsApp",
    desc: "Cuéntanos sobre tu negocio, tus productos y el estilo que buscas. En menos de 24 horas te respondemos con todos los detalles.",
    highlight: "Respuesta en menos de 24h",
    iconBg: "rgba(196,218,250,0.25)",
    accent: "#c4dafa",
  },
  {
    number: "02",
    icon: "📸",
    title: "Nos envías tus fotos y datos",
    desc: "Solo necesitamos las fotos de tus productos, precios y el nombre de tu negocio. Nosotros nos encargamos de todo el diseño.",
    highlight: "Sin conocimientos técnicos",
    iconBg: "rgba(132,182,244,0.20)",
    accent: "#84b6f4",
  },
  {
    number: "03",
    icon: "🎨",
    title: "Diseñamos tu página",
    desc: "Nuestro equipo crea tu página profesional adaptada a tu marca. Te mostramos un avance para que puedas revisar y pedir cambios.",
    highlight: "Vista previa antes de publicar",
    iconBg: "rgba(77,130,188,0.18)",
    accent: "#4d82bc",
  },
  {
    number: "04",
    icon: "🚀",
    title: "Tu página sale al aire",
    desc: "En 2 a 5 días hábiles tu página está publicada y lista para recibir clientes. Desde ese momento, cada botón lleva pedidos a tu WhatsApp.",
    highlight: "Lista en 2 a 5 días hábiles",
    iconBg: "rgba(0,81,135,0.15)",
    accent: "#005187",
  },
];

export default function ProcessSection() {
  const { ref, visible } = useInView();
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');

        .proc-root * { box-sizing: border-box; }
        .proc-root { font-family: 'Plus Jakarta Sans', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(26px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeLeft {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes shimmerOrb {
          0%,100% { opacity: 0.45; transform: scale(1); }
          50%      { opacity: 0.75; transform: scale(1.07); }
        }
        @keyframes lineGrow {
          from { height: 0; }
          to   { height: 100%; }
        }
        @keyframes dotPop {
          0%   { transform: scale(0.4); opacity: 0; }
          70%  { transform: scale(1.15); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes shimmerText {
          0%   { background-position: -200% center; }
          100% { background-position:  200% center; }
        }
        @keyframes floatBadge {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-5px); }
        }

        .proc-visible .hfu1 { animation: fadeUp 0.6s ease forwards; animation-delay: 0.05s; }
        .proc-visible .hfu2 { animation: fadeUp 0.6s ease forwards; animation-delay: 0.18s; }
        .proc-visible .hfu3 { animation: fadeUp 0.6s ease forwards; animation-delay: 0.30s; }
        .hfu1,.hfu2,.hfu3 { opacity: 0; }

        .proc-visible .step-card-0 { animation: fadeLeft 0.55s ease forwards; animation-delay: 0.30s; }
        .proc-visible .step-card-1 { animation: fadeLeft 0.55s ease forwards; animation-delay: 0.45s; }
        .proc-visible .step-card-2 { animation: fadeLeft 0.55s ease forwards; animation-delay: 0.60s; }
        .proc-visible .step-card-3 { animation: fadeLeft 0.55s ease forwards; animation-delay: 0.75s; }
        .step-card-0,.step-card-1,.step-card-2,.step-card-3 { opacity: 0; }

        .proc-visible .line-fill { animation: lineGrow 1.4s ease forwards; animation-delay: 0.5s; }
        .line-fill { height: 0; }

        .proc-visible .dot-pop-0 { animation: dotPop 0.4s ease forwards; animation-delay: 0.35s; }
        .proc-visible .dot-pop-1 { animation: dotPop 0.4s ease forwards; animation-delay: 0.50s; }
        .proc-visible .dot-pop-2 { animation: dotPop 0.4s ease forwards; animation-delay: 0.65s; }
        .proc-visible .dot-pop-3 { animation: dotPop 0.4s ease forwards; animation-delay: 0.80s; }
        .dot-pop-0,.dot-pop-1,.dot-pop-2,.dot-pop-3 { opacity: 0; }

        /* Step card */
        .step-card {
          display: flex;
          align-items: flex-start;
          gap: 24px;
          background: #f6faff;
          border: 1.5px solid rgba(196,218,250,0.7);
          border-radius: 22px;
          padding: 28px 30px;
          cursor: default;
          transition: all 0.26s ease;
          position: relative;
          overflow: hidden;
        }
        .step-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(196,218,250,0.12) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.26s ease;
          border-radius: 22px;
        }
        .step-card:hover {
          border-color: #84b6f4;
          background: #fcffff;
          box-shadow: 0 12px 36px rgba(0,81,135,0.11);
          transform: translateX(6px);
        }
        .step-card:hover::before { opacity: 1; }
        .step-card.active {
          border-color: #4d82bc;
          background: #fcffff;
          box-shadow: 0 16px 44px rgba(0,81,135,0.14);
          transform: translateX(6px);
        }

        /* Step number badge */
        .step-num {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #84b6f4;
          margin-bottom: 6px;
        }

        /* Highlight pill */
        .highlight-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(196,218,250,0.40);
          border: 1px solid rgba(132,182,244,0.35);
          color: #005187;
          font-size: 11px;
          font-weight: 700;
          padding: 4px 12px;
          border-radius: 100px;
          margin-top: 12px;
        }

        /* Right panel – visual summary */
        .summary-panel {
          background: linear-gradient(150deg, #005187 0%, #003d6e 55%, #002952 100%);
          border-radius: 28px;
          padding: 44px 40px;
          position: relative;
          overflow: hidden;
          height: 100%;
          min-height: 520px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .summary-panel::before {
          content: '';
          position: absolute;
          right: -60px; top: -60px;
          width: 280px; height: 280px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(132,182,244,0.20) 0%, transparent 70%);
          animation: shimmerOrb 7s ease-in-out infinite;
        }
        .summary-panel::after {
          content: '';
          position: absolute;
          left: -50px; bottom: -50px;
          width: 220px; height: 220px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(77,130,188,0.22) 0%, transparent 70%);
          animation: shimmerOrb 9s ease-in-out infinite reverse;
        }

        /* Summary step pills */
        .sum-step {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 16px 18px;
          border-radius: 16px;
          background: rgba(196,218,250,0.10);
          border: 1px solid rgba(132,182,244,0.18);
          transition: all 0.22s ease;
          margin-bottom: 10px;
          position: relative;
          z-index: 1;
        }
        .sum-step:last-child { margin-bottom: 0; }
        .sum-step.sum-active {
          background: rgba(196,218,250,0.20);
          border-color: rgba(132,182,244,0.40);
          box-shadow: 0 4px 16px rgba(0,0,0,0.10);
        }

        .sum-icon {
          width: 40px; height: 40px;
          border-radius: 12px;
          display: flex; align-items: center; justify-content: center;
          font-size: 19px; flex-shrink: 0;
        }

        /* Gradient heading text */
        .grad-head {
          background: linear-gradient(120deg, #005187, #4d82bc, #84b6f4);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmerText 4s linear infinite;
        }

        /* Timeline connector line */
        .timeline-wrap {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .timeline-line-track {
          position: absolute;
          left: 58px;
          top: 52px;
          bottom: 52px;
          width: 2px;
          background: rgba(196,218,250,0.35);
          border-radius: 2px;
          overflow: hidden;
        }
        .timeline-line-fill {
          width: 100%;
          background: linear-gradient(180deg, #c4dafa, #4d82bc, #005187);
          border-radius: 2px;
        }

        /* Float badge bottom-right of summary */
        .float-time-badge {
          position: relative; z-index: 1;
          display: inline-flex; align-items: center; gap: 10px;
          background: rgba(196,218,250,0.15);
          border: 1px solid rgba(132,182,244,0.28);
          border-radius: 14px;
          padding: 14px 18px;
          animation: floatBadge 4s ease-in-out infinite;
        }

        /* Dot grid */
        .dot-g { display:grid; grid-template-columns:repeat(5,1fr); gap:6px; opacity:0.20; }
        .dot-g div { width:5px; height:5px; border-radius:50%; background:#84b6f4; }
      `}</style>

      <div
        id="proceso"
        ref={ref}
        className={`proc-root${visible ? " proc-visible" : ""}`}
        style={{ background: "linear-gradient(180deg, #edf5ff 0%, #fcffff 100%)", padding: "88px 0 100px" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>

          {/* ── Header ── */}
          <div style={{ marginBottom: 56 }}>
            <p className="hfu1" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "#4d82bc", marginBottom: 14 }}>
              ¿Cómo funciona?
            </p>
            <h2 className="hfu2" style={{ fontSize: "clamp(28px,4vw,46px)", fontWeight: 900, color: "#005187", lineHeight: 1.15, margin: "0 0 16px", maxWidth: 520 }}>
              Tu página lista en<br />4 pasos simples
            </h2>
            <p className="hfu3" style={{ fontSize: 15, color: "#84b6f4", lineHeight: 1.7, maxWidth: 420, margin: 0, fontWeight: 500 }}>
              No necesitas saber de tecnología. Nosotros manejamos todo, tú solo nos das la información de tu negocio.
            </p>
          </div>

          {/* ── Main grid ── */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 420px", gap: 28, alignItems: "start" }}>

            {/* ── LEFT: Steps ── */}
            <div className="timeline-wrap">
              {/* Connector line */}
              <div className="timeline-line-track">
                <div className="timeline-line-fill line-fill" />
              </div>

              {steps.map((s, i) => (
                <div
                  key={s.number}
                  className={`step-card step-card-${i}${activeStep === i ? " active" : ""}`}
                  onMouseEnter={() => setActiveStep(i)}
                  onMouseLeave={() => setActiveStep(null)}
                >
                  {/* Left: number circle */}
                  <div style={{ flexShrink: 0, display: "flex", flexDirection: "column", alignItems: "center", paddingTop: 2 }}>
                    <div
                      className={`dot-pop-${i}`}
                      style={{
                        width: 44, height: 44, borderRadius: "50%",
                        background: activeStep === i
                          ? "linear-gradient(135deg, #4d82bc, #005187)"
                          : "rgba(196,218,250,0.50)",
                        border: `2px solid ${activeStep === i ? "#84b6f4" : "rgba(132,182,244,0.40)"}`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "all 0.24s ease",
                        boxShadow: activeStep === i ? "0 4px 16px rgba(0,81,135,0.22)" : "none",
                      }}
                    >
                      <span style={{
                        fontSize: 18,
                        filter: activeStep === i ? "none" : "grayscale(0.2)",
                      }}>{s.icon}</span>
                    </div>
                  </div>

                  {/* Right: content */}
                  <div style={{ flex: 1 }}>
                    <p className="step-num">{s.number}</p>
                    <h3 style={{ fontSize: 17, fontWeight: 800, color: "#005187", margin: "0 0 8px", lineHeight: 1.35 }}>
                      {s.title}
                    </h3>
                    <p style={{ fontSize: 13.5, color: "#4d82bc", lineHeight: 1.7, margin: 0, fontWeight: 400 }}>
                      {s.desc}
                    </p>
                    <div className="highlight-pill">
                      <svg width="10" height="10" fill="none" stroke="#005187" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {s.highlight}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* ── RIGHT: Summary dark panel ── */}
            <div className={`summary-panel hfu3`} style={{ animationDelay: "0.4s" }}>
              {/* Dot grid top-right */}
              <div className="dot-g" style={{ position: "absolute", right: 24, top: 24, zIndex: 1 }}>
                {Array.from({ length: 20 }).map((_, i) => <div key={i} />)}
              </div>

              {/* Title */}
              <div style={{ position: "relative", zIndex: 1 }}>
                <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(196,218,250,0.55)", margin: "0 0 10px" }}>
                  Resumen del proceso
                </p>
                <h3 style={{ fontSize: 20, fontWeight: 800, color: "#fcffff", margin: "0 0 28px", lineHeight: 1.3 }}>
                  Así de fácil es<br />tener tu página
                </h3>

                {/* Step pills */}
                {steps.map((s, i) => (
                  <div
                    key={s.number}
                    className={`sum-step${activeStep === i ? " sum-active" : ""}`}
                    onMouseEnter={() => setActiveStep(i)}
                    onMouseLeave={() => setActiveStep(null)}
                  >
                    <div className="sum-icon" style={{ background: s.iconBg }}>
                      <span>{s.icon}</span>
                    </div>
                    <div style={{ flex: 1 }}>
                      <p style={{ margin: 0, fontWeight: 700, fontSize: 13, color: "#fcffff", lineHeight: 1.2 }}>{s.title}</p>
                      <p style={{ margin: "3px 0 0", fontSize: 11, color: "rgba(196,218,250,0.55)", fontWeight: 500 }}>{s.highlight}</p>
                    </div>
                    <div style={{
                      width: 24, height: 24, borderRadius: "50%",
                      background: activeStep === i ? "rgba(196,218,250,0.25)" : "rgba(196,218,250,0.10)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      transition: "all 0.22s",
                      flexShrink: 0,
                    }}>
                      <svg width="10" height="10" fill="none" stroke="rgba(196,218,250,0.7)" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom: time badge */}
              <div style={{ position: "relative", zIndex: 1, marginTop: 28 }}>
                <div className="float-time-badge">
                  <div style={{ width: 38, height: 38, borderRadius: 10, background: "rgba(196,218,250,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 19 }}>
                    ⚡
                  </div>
                  <div>
                    <p style={{ margin: 0, fontWeight: 800, fontSize: 15, color: "#fcffff", lineHeight: 1 }}>2 – 5 días hábiles</p>
                    <p style={{ margin: "4px 0 0", fontSize: 11, color: "rgba(196,218,250,0.55)", fontWeight: 500 }}>Tiempo total del proceso</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}