"use client";

import React, { useEffect, useRef, useState } from "react";

// Brand palette
// #005187 – deep navy
// #4d82bc – mid blue
// #84b6f4 – sky blue
// #c4dafa – pale blue
// #fcffff – near white

const WhatsAppIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const features = [
  {
    icon: "⚡",
    iconBg: "#fff3e0",
    iconColor: "#f57c00",
    title: "Lista en 2 a 5 días",
    desc: "Envíanos tus fotos y datos, es todo lo que necesitas hacer. Nosotros nos encargamos del resto.",
  },
  {
    icon: "✦",
    iconBg: "#fff8e1",
    iconColor: "#f9a825",
    title: "Diseño moderno y profesional",
    desc: "Tu página se ve tan bien como la de cualquier marca grande, pero hecha a medida para tu negocio.",
  },
  {
    icon: "📱",
    iconBg: "#e8f5e9",
    iconColor: "#2e7d32",
    title: "Optimizada para celular",
    desc: "El 90% de tus clientes te busca desde el celular. Tu página se verá perfecta en cualquier pantalla.",
  },
  {
    icon: "🔒",
    iconBg: "#ede7f6",
    iconColor: "#512da8",
    title: "Sin mensualidades",
    desc: "Pagas una vez y tu página es tuya. Sin suscripciones ocultas ni costos recurrentes sorpresa.",
  },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function FeaturesSection() {
  const { ref, visible } = useInView();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const end = 90;
    const duration = 1400;
    const step = Math.ceil(duration / end);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, step);
    return () => clearInterval(timer);
  }, [visible]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');

        .fs-root * { box-sizing: border-box; }
        .fs-root { font-family: 'Plus Jakarta Sans', sans-serif; }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes shimmerOrb {
          0%,100% { opacity: 0.5; transform: scale(1); }
          50%      { opacity: 0.75; transform: scale(1.06); }
        }
        @keyframes countUp {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .fs-visible .afu1 { animation: fadeUp 0.6s ease forwards; animation-delay: 0.05s; }
        .fs-visible .afu2 { animation: fadeUp 0.6s ease forwards; animation-delay: 0.15s; }
        .fs-visible .afu3 { animation: fadeUp 0.6s ease forwards; animation-delay: 0.25s; }
        .fs-visible .afu4 { animation: fadeUp 0.6s ease forwards; animation-delay: 0.30s; }
        .fs-visible .afu5 { animation: fadeUp 0.6s ease forwards; animation-delay: 0.42s; }
        .fs-visible .afi1 { animation: fadeIn 0.7s ease forwards; animation-delay: 0.10s; }
        .fs-visible .afi2 { animation: fadeIn 0.7s ease forwards; animation-delay: 0.35s; }
        .fs-visible .afi3 { animation: fadeIn 0.7s ease forwards; animation-delay: 0.50s; }

        .afu1,.afu2,.afu3,.afu4,.afu5 { opacity: 0; }
        .afi1,.afi2,.afi3 { opacity: 0; }

        /* Main card (dark) */
        .main-card {
          background: linear-gradient(145deg, #005187 0%, #003d6e 60%, #002952 100%);
          border-radius: 24px;
          padding: 44px 40px;
          position: relative;
          overflow: hidden;
          min-height: 420px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .main-card::before {
          content: '';
          position: absolute;
          right: -60px;
          top: -60px;
          width: 280px;
          height: 280px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(132,182,244,0.18) 0%, transparent 70%);
          animation: shimmerOrb 6s ease-in-out infinite;
        }
        .main-card::after {
          content: '';
          position: absolute;
          left: -40px;
          bottom: -40px;
          width: 200px;
          height: 200px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(77,130,188,0.20) 0%, transparent 70%);
          animation: shimmerOrb 8s ease-in-out infinite reverse;
        }

        /* Icon box on dark card */
        .main-icon-box {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          background: rgba(196,218,250,0.15);
          border: 1px solid rgba(132,182,244,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(8px);
          margin-bottom: 28px;
        }

        /* Feature mini-cards (right column) */
        .feat-card {
          background: #f6faff;
          border: 1px solid rgba(196,218,250,0.7);
          border-radius: 20px;
          padding: 28px 28px 28px 28px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          transition: all 0.25s ease;
          cursor: default;
        }
        .feat-card:hover {
          border-color: #84b6f4;
          background: #fcffff;
          box-shadow: 0 8px 28px rgba(0,81,135,0.10);
          transform: translateY(-3px);
        }

        .feat-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          flex-shrink: 0;
        }

        /* Stat number animate */
        .stat-num {
          font-size: 72px;
          font-weight: 900;
          color: #fcffff;
          line-height: 1;
          letter-spacing: -2px;
        }
        .stat-sym {
          font-size: 52px;
          font-weight: 900;
          color: rgba(196,218,250,0.7);
        }

        /* Dot grid */
        .dot-grid-sm {
          display: grid;
          grid-template-columns: repeat(5,1fr);
          gap: 5px;
          opacity: 0.35;
        }
        .dot-grid-sm div {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: #84b6f4;
        }

        /* Section label */
        .section-eyebrow {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #4d82bc;
        }
      `}</style>

      <section
        id="beneficios"
        ref={ref}
        className={`fs-root${visible ? " fs-visible" : ""}`}
        style={{ background: "#fcffff", padding: "80px 0 96px" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 32px" }}>
          {/* ── Header ── */}
          <div style={{ marginBottom: 52 }}>
            <p className="section-eyebrow afu1" style={{ marginBottom: 12 }}>
              ¿Por qué elegirnos?
            </p>
            <h2
              className="afu2"
              style={{
                fontSize: "clamp(30px,4vw,48px)",
                fontWeight: 900,
                color: "#005187",
                lineHeight: 1.15,
                maxWidth: 700,
                margin: "0 0 16px",
              }}
            >
              Todo lo que tu negocio
              <br />
              necesita para vender online
            </h2>
            <p
              className="afu3"
              style={{
                fontSize: 15,
                color: "#84b6f4",
                lineHeight: 1.7,
                maxWidth: 900,
                margin: 0,
                fontWeight: 500,
              }}
            >
              Sin sistemas complicados ni mensualidades. Enfocado en conseguirte
              más clientes desde el primer día.
            </p>
          </div>

          {/* ── Grid ── */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 20,
              alignItems: "start",
            }}
          >
            {/* ── LEFT: Main dark card ── */}
            <div className="main-card afu4">
              {/* Icon */}
              <div style={{ position: "relative", zIndex: 1 }}>
                <div className="main-icon-box">
                  <WhatsAppIcon size={24} />
                  <span style={{ display: "none" }} />
                </div>

                <h3
                  style={{
                    color: "#fcffff",
                    fontWeight: 800,
                    fontSize: 24,
                    margin: "0 0 16px",
                    lineHeight: 1.3,
                  }}
                >
                  Pedidos directo a tu WhatsApp
                </h3>
                <p
                  style={{
                    color: "rgba(196,218,250,0.80)",
                    fontSize: 15,
                    lineHeight: 1.75,
                    margin: 0,
                    maxWidth: 400,
                    fontWeight: 400,
                  }}
                >
                  Cada botón de tu página lleva a tus clientes directo a tu
                  WhatsApp. Sin carritos, sin plataformas de pago, sin
                  complicaciones. Tú cierras la venta como siempre lo has hecho.
                </p>
              </div>

              {/* Bottom stat */}
              <div style={{ position: "relative", zIndex: 1, marginTop: 36 }}>
                {/* dot grid accent */}
                <div
                  className="dot-grid-sm"
                  style={{ position: "absolute", right: 0, bottom: 0 }}
                >
                  {Array.from({ length: 25 }).map((_, i) => (
                    <div key={i} />
                  ))}
                </div>

                <div
                  style={{ display: "flex", alignItems: "flex-end", gap: 2 }}
                >
                  <span className="stat-num">{count}</span>
                  <span className="stat-sym">%</span>
                  <div style={{ marginBottom: 10, marginLeft: 4 }}>
                    {/* small grid icon */}
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(3,6px)",
                        gap: 2,
                      }}
                    >
                      {Array.from({ length: 9 }).map((_, i) => (
                        <div
                          key={i}
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: 2,
                            background: "rgba(196,218,250,0.45)",
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <p
                  style={{
                    color: "rgba(196,218,250,0.65)",
                    fontSize: 13,
                    fontWeight: 500,
                    margin: "4px 0 0",
                  }}
                >
                  de tus clientes te busca desde el celular
                </p>
              </div>
            </div>

            {/* ── RIGHT: 2×2 feature cards ── */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 16,
              }}
            >
              {features.map((f, i) => (
                <div
                  key={f.title}
                  className={`feat-card afi${Math.min(i + 1, 3)}`}
                  style={{ animationDelay: `${0.25 + i * 0.12}s` }}
                >
                  <div
                    className="feat-icon-box"
                    style={{ background: f.iconBg }}
                  >
                    <span style={{ fontSize: 22 }}>{f.icon}</span>
                  </div>
                  <div>
                    <h4
                      style={{
                        color: "#005187",
                        fontWeight: 800,
                        fontSize: 15,
                        margin: "0 0 8px",
                        lineHeight: 1.3,
                      }}
                    >
                      {f.title}
                    </h4>
                    <p
                      style={{
                        color: "#4d82bc",
                        fontSize: 13,
                        lineHeight: 1.65,
                        margin: 0,
                        fontWeight: 400,
                      }}
                    >
                      {f.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
