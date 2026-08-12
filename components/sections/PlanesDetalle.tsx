"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

// Brand palette
// #005187 – deep navy
// #4d82bc – mid blue
// #84b6f4 – sky blue
// #c4dafa – pale blue
// #fcffff – near white

const WA_NUMBER = "51999999999";
const waLink = (msg: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

const WhatsAppIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const CheckIcon = () => (
  <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const CrossIcon = () => (
  <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 6l12 12M18 6L6 18" />
  </svg>
);

const ChevronIcon = () => (
  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth={2.4} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
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
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

type Cell = { label: string; esencial: string | boolean; pro: string | boolean };

const comparativa: Cell[] = [
  { label: "Precio base", esencial: "S/199 + IGV", pro: "S/499 + IGV" },
  { label: "Productos incluidos", esencial: "Hasta 80", pro: "Hasta 250" },
  { label: "Botón de WhatsApp", esencial: "Personalizado por producto", pro: "Personalizado por producto" },
  { label: "Categorías de productos", esencial: false, pro: true },
  { label: "Estilo de diseño", esencial: "Plantilla adaptada a tu marca", pro: "Referencias a elegir + ajustes de estructura" },
  { label: "Revisiones de diseño incluidas", esencial: "1", pro: "3" },
  { label: "Dominio", esencial: "Enlace gratuito incluido", pro: "Dominio .com propio" },
  { label: "Hosting", esencial: "Gratis, permanente, sin renovación", pro: "Incluido el 1er año, renueva desde año 2" },
  { label: "Blog / novedades", esencial: false, pro: true },
  { label: "Tiempo de entrega", esencial: "5 días hábiles", pro: "7 días hábiles" },
  { label: "Soporte post-entrega", esencial: "15 días", pro: "30 días" },
];

const extras = [
  { label: "+25 productos sobre el límite del plan", aplica: "Ambos", costo: "+ S/50" },
  { label: "Revisión de diseño adicional", aplica: "Ambos", costo: "+ S/30 c/u" },
  { label: "Dominio .com propio en el plan Esencial (opcional)", aplica: "Esencial", costo: "+ S/70/año" },
  { label: "Organizar/editar fotos de productos que no vienen listas", aplica: "Ambos", costo: "+ S/80" },
];

const faqs = [
  {
    q: "¿Por qué el Pro cuesta más del doble que el Esencial?",
    a: "Incluye dominio propio .com, más opciones de personalización de diseño, el triple de revisiones y una sección de novedades. El Esencial usa una plantilla optimizada y hosting gratuito permanente, ideal si recién empiezas.",
  },
  {
    q: "¿Qué cuenta como \"revisión\"?",
    a: "Una revisión es una ronda de ajustes sobre lo ya acordado en tu brief: colores, textos, fotos, orden, distribución. Si durante las revisiones pides algo fuera del alcance original (nuevas secciones, funciones no contempladas), se cotiza aparte.",
  },
  {
    q: "¿Qué pasa si tengo más de 80 (Esencial) o 250 (Pro) productos?",
    a: "Se suma por bloques de 25 productos (+S/50 c/u), sin cambiar de plan. Catálogos mucho más grandes pueden requerir un día adicional de entrega por cada 100 productos extra.",
  },
  {
    q: "¿El hosting gratis del plan Esencial se puede caer o dejar de funcionar?",
    a: "No, es una plataforma estable y sin costo de mantenimiento para nosotros — por eso podemos ofrecerlo sin vencimiento.",
  },
  {
    q: "¿Qué pasa si no renuevo el dominio del plan Pro?",
    a: "El dominio queda registrado a tu nombre. Si no renuevas, entra en un periodo de gracia y luego se libera; tú decides. Si no renuevas el servicio en general, tu catálogo deja de estar activo en tu dominio, pero si nos avisas antes te entregamos una copia del contenido sin costo.",
  },
  {
    q: "¿Puedo pasar de Esencial a Pro después?",
    a: "Sí, se cobra la diferencia más el costo de migrar a dominio propio.",
  },
  {
    q: "¿Puedo agregar o editar productos yo mismo después de la entrega?",
    a: "El catálogo lo editamos nosotros para asegurar que todo quede bien hecho. Tienes soporte incluido (15 o 30 días según tu plan) para cambios menores; después, cada ajuste se cotiza por evento.",
  },
];

const subnav = [
  { href: "#comparativa", label: "Comparativa" },
  { href: "#calculo", label: "Tu precio" },
  { href: "#recurrentes", label: "Recurrentes" },
  { href: "#faq", label: "FAQ" },
  { href: "#pago", label: "Pago" },
];

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useInView();
  return (
    <div ref={ref} className={`pd2-reveal${visible ? " pd2-visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

function FaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <div className="pd2-faq-item">
      <button className="pd2-faq-q" onClick={() => setOpen((o) => !o)} aria-expanded={open}>
        <span>{q}</span>
        <span className={`pd2-faq-chev${open ? " open" : ""}`}><ChevronIcon /></span>
      </button>
      <div className={`pd2-faq-a-wrap${open ? " open" : ""}`}>
        <p className="pd2-faq-a">{a}</p>
      </div>
    </div>
  );
}

export default function PlanesDetalle() {
  const { ref: heroRef, visible: heroVisible } = useInView(0.05);

  return (
    <main className="pd2-root" style={{ background: "linear-gradient(180deg, #fcffff 0%, #edf5ff 100%)", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');

        .pd2-root * { box-sizing: border-box; }
        .pd2-root { font-family: 'Plus Jakarta Sans', sans-serif; }
        .pd2-wrap { max-width: 1040px; margin: 0 auto; padding: 0 28px; }

        @keyframes pd2FadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pd2Shimmer { 0%,100% { opacity: 0.5; transform: scale(1); } 50% { opacity: 0.8; transform: scale(1.08); } }
        @keyframes pd2Pulse { 0%,100% { box-shadow: 0 0 0 0 rgba(132,182,244,0.4); } 50% { box-shadow: 0 0 0 6px rgba(132,182,244,0); } }

        .pd2-reveal { opacity: 0; transform: translateY(22px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .pd2-visible { opacity: 1; transform: translateY(0); }

        /* ── Hero ── */
        .pd2-hero {
          position: relative;
          overflow: hidden;
          padding: 56px 0 40px;
        }
        .pd2-hero::before {
          content: '';
          position: absolute;
          right: -120px; top: -120px;
          width: 380px; height: 380px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(132,182,244,0.28) 0%, transparent 70%);
          animation: pd2Shimmer 8s ease-in-out infinite;
          pointer-events: none;
        }
        .pd2-back {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 700;
          color: #4d82bc;
          text-decoration: none;
          transition: gap 0.2s ease, color 0.2s ease;
        }
        .pd2-back:hover { gap: 10px; color: #005187; }

        .pd2-eyebrow {
          font-size: 11px; font-weight: 800; letter-spacing: 0.14em; text-transform: uppercase;
          color: #4d82bc; margin: 22px 0 12px;
        }

        /* ── Sticky sub-nav ── */
        .pd2-subnav-wrap {
          position: sticky;
          top: 0;
          z-index: 30;
          background: rgba(252,255,255,0.85);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(196,218,250,0.6);
        }
        .pd2-subnav {
          display: flex;
          gap: 6px;
          overflow-x: auto;
          padding: 12px 28px;
          max-width: 1040px;
          margin: 0 auto;
          scrollbar-width: none;
        }
        .pd2-subnav::-webkit-scrollbar { display: none; }
        .pd2-subnav a {
          flex-shrink: 0;
          font-size: 12.5px;
          font-weight: 700;
          color: #4d82bc;
          text-decoration: none;
          padding: 7px 14px;
          border-radius: 100px;
          border: 1px solid rgba(196,218,250,0.8);
          background: #fff;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        .pd2-subnav a:hover { border-color: #84b6f4; color: #005187; background: #f6faff; }

        /* ── Section heading ── */
        .pd2-section { padding: 56px 0 8px; scroll-margin-top: 66px; }
        .pd2-h2 {
          font-size: clamp(22px, 3vw, 28px);
          font-weight: 900;
          color: #005187;
          margin: 0 0 6px;
          letter-spacing: -0.3px;
        }
        .pd2-h2-sub { font-size: 13.5px; color: #84b6f4; font-weight: 500; margin: 0 0 22px; }

        /* ── Comparison table (desktop) ── */
        .pd2-table-card {
          border-radius: 20px;
          overflow: hidden;
          border: 1px solid rgba(196,218,250,0.7);
          box-shadow: 0 8px 32px rgba(0,81,135,0.06);
          background: #fff;
        }
        .pd2-table { width: 100%; border-collapse: collapse; font-size: 14px; }
        .pd2-table th {
          text-align: left; padding: 16px 18px; background: #f6faff;
          color: #005187; font-weight: 800; font-size: 11.5px; text-transform: uppercase; letter-spacing: 0.05em;
          border-bottom: 1px solid rgba(196,218,250,0.7);
        }
        .pd2-table th.pd2-th-pro { background: linear-gradient(135deg, #005187 0%, #003d6e 100%); color: #fcffff; position: relative; }
        .pd2-table th.pd2-th-pro span.pd2-badge {
          display: inline-block; margin-left: 8px; font-size: 9px; font-weight: 800; letter-spacing: 0.06em;
          background: rgba(196,218,250,0.22); color: #c4dafa; padding: 2px 8px; border-radius: 100px; text-transform: uppercase;
        }
        .pd2-table td { padding: 14px 18px; border-bottom: 1px solid rgba(196,218,250,0.45); color: #274b6d; vertical-align: middle; }
        .pd2-table td.pd2-td-pro { background: rgba(196,218,250,0.10); font-weight: 600; }
        .pd2-table tr:last-child td { border-bottom: none; }
        .pd2-table tr { transition: background 0.15s ease; }
        .pd2-table tbody tr:hover { background: rgba(196,218,250,0.12); }
        .pd2-table tbody tr:hover td.pd2-td-pro { background: rgba(196,218,250,0.22); }
        .pd2-feat-label { font-weight: 700; color: #005187; }
        .pd2-check { color: #1ea672; display: inline-flex; align-items: center; justify-content: center; width: 22px; height: 22px; border-radius: 50%; background: rgba(30,166,114,0.12); }
        .pd2-cross { color: #b3bdd1; display: inline-flex; align-items: center; justify-content: center; width: 22px; height: 22px; border-radius: 50%; background: rgba(179,189,209,0.15); }

        /* Mobile comparison cards */
        .pd2-plan-cards { display: none; }

        /* ── Generic cards ── */
        .pd2-card {
          background: #fff;
          border: 1px solid rgba(196,218,250,0.7);
          border-radius: 18px;
          padding: 22px 24px;
          transition: box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease;
        }
        .pd2-card:hover { box-shadow: 0 12px 32px rgba(0,81,135,0.08); border-color: #84b6f4; }

        /* ── Extras/recurring tables (simple list style) ── */
        .pd2-mini-table { width: 100%; border-collapse: collapse; font-size: 13.5px; }
        .pd2-mini-table th { text-align: left; padding: 12px 16px; background: #f6faff; color: #005187; font-weight: 800; font-size: 11px; text-transform: uppercase; letter-spacing: 0.04em; border-bottom: 1px solid rgba(196,218,250,0.7); }
        .pd2-mini-table td { padding: 12px 16px; border-bottom: 1px solid rgba(196,218,250,0.45); color: #274b6d; }
        .pd2-mini-table tr:last-child td { border-bottom: none; }
        .pd2-mini-table tbody tr { transition: background 0.15s ease; }
        .pd2-mini-table tbody tr:hover { background: rgba(196,218,250,0.12); }
        .pd2-cost { font-weight: 800; color: #005187; }

        /* ── Process steps ── */
        /* ── Guarantee banner ── */
        .pd2-guarantee {
          display: flex; align-items: flex-start; gap: 14px;
          background: rgba(196,218,250,0.22); border: 1px solid rgba(132,182,244,0.35);
          border-radius: 16px; padding: 20px 22px;
        }
        .pd2-guarantee-icon {
          width: 38px; height: 38px; border-radius: 50%; background: #005187; color: #fff;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
          animation: pd2Pulse 2.8s ease-in-out infinite;
        }

        /* ── FAQ ── */
        .pd2-faq-item { border-bottom: 1px solid rgba(196,218,250,0.6); }
        .pd2-faq-q {
          width: 100%; display: flex; align-items: center; justify-content: space-between; gap: 16px;
          background: none; border: none; text-align: left; cursor: pointer;
          padding: 18px 4px; font-size: 14.5px; font-weight: 700; color: #005187;
          font-family: 'Plus Jakarta Sans', sans-serif;
          transition: color 0.2s ease;
        }
        .pd2-faq-q:hover { color: #4d82bc; }
        .pd2-faq-chev { color: #84b6f4; flex-shrink: 0; display: flex; transition: transform 0.3s ease; }
        .pd2-faq-chev.open { transform: rotate(180deg); }
        .pd2-faq-a-wrap { display: grid; grid-template-rows: 0fr; overflow: hidden; transition: grid-template-rows 0.32s ease; }
        .pd2-faq-a-wrap.open { grid-template-rows: 1fr; }
        .pd2-faq-a-wrap > p { min-height: 0; overflow: hidden; }
        .pd2-faq-a { margin: 0 4px 18px; color: #4d82bc; font-size: 13.5px; line-height: 1.7; }

        /* ── Payment ── */
        .pd2-pay-list { margin: 0; padding: 0; list-style: none; display: flex; flex-direction: column; gap: 12px; }
        .pd2-pay-list li { display: flex; align-items: flex-start; gap: 10px; color: #274b6d; font-size: 14px; line-height: 1.6; }
        .pd2-pay-dot { width: 8px; height: 8px; border-radius: 50%; background: #4d82bc; margin-top: 7px; flex-shrink: 0; }

        .pd2-cta-panel {
          position: relative; overflow: hidden;
          background: linear-gradient(150deg, #005187 0%, #003d6e 55%, #002952 100%);
          border-radius: 24px; padding: 44px 36px; text-align: center;
        }
        .pd2-cta-panel::before {
          content: ''; position: absolute; right: -70px; top: -70px; width: 260px; height: 260px; border-radius: 50%;
          background: radial-gradient(circle, rgba(132,182,244,0.20) 0%, transparent 70%);
          animation: pd2Shimmer 7s ease-in-out infinite;
        }
        .pd2-wa-btn {
          position: relative; z-index: 1;
          display: inline-flex; align-items: center; gap: 10px;
          background: #25D366; color: #fff; font-weight: 800; font-size: 15px;
          padding: 15px 34px; border-radius: 100px; text-decoration: none;
          box-shadow: 0 8px 24px rgba(37,211,102,0.4);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .pd2-wa-btn:hover { transform: translateY(-3px); box-shadow: 0 14px 32px rgba(37,211,102,0.55); }

        .pd2-footnote { font-size: 13px; color: #274b6d; line-height: 1.75; margin: 0; }

        @media (max-width: 760px) {
          .pd2-hero { padding: 40px 0 28px; }
          .pd2-wrap { padding: 0 18px; }
          .pd2-subnav { padding: 10px 18px; }
          .pd2-section { padding: 44px 0 4px; }

          /* Swap table for stacked plan cards */
          .pd2-table-card { display: none; }
          .pd2-plan-cards { display: grid; gap: 16px; }
          .pd2-plan-card { background: #fff; border: 1px solid rgba(196,218,250,0.7); border-radius: 18px; padding: 20px; }
          .pd2-plan-card.pro { background: linear-gradient(150deg, #005187 0%, #003d6e 100%); border: none; }
          .pd2-plan-card-title { font-size: 15px; font-weight: 900; margin: 0 0 14px; color: #005187; }
          .pd2-plan-card.pro .pd2-plan-card-title { color: #fcffff; }
          .pd2-plan-row { display: flex; justify-content: space-between; gap: 12px; padding: 10px 0; border-bottom: 1px solid rgba(196,218,250,0.4); font-size: 13px; }
          .pd2-plan-card.pro .pd2-plan-row { border-bottom-color: rgba(196,218,250,0.18); }
          .pd2-plan-row:last-child { border-bottom: none; }
          .pd2-plan-row-label { color: #84b6f4; font-weight: 600; flex-shrink: 0; max-width: 42%; }
          .pd2-plan-card.pro .pd2-plan-row-label { color: rgba(196,218,250,0.75); }
          .pd2-plan-row-value { color: #005187; font-weight: 700; text-align: right; }
          .pd2-plan-card.pro .pd2-plan-row-value { color: #fcffff; }
        }
      `}</style>

      {/* ── Sticky sub-nav ── */}
      <div className="pd2-subnav-wrap">
        <nav className="pd2-subnav">
          {subnav.map((s) => (
            <a key={s.href} href={s.href}>{s.label}</a>
          ))}
        </nav>
      </div>

      {/* ── Hero ── */}
      <div ref={heroRef} className={`pd2-hero pd2-wrap pd2-reveal${heroVisible ? " pd2-visible" : ""}`}>
        <Link href="/#planes" className="pd2-back">← Volver a planes</Link>
        <p className="pd2-eyebrow">Esencial vs. Pro</p>
        <h1 style={{ fontSize: "clamp(30px,4.5vw,46px)", fontWeight: 900, color: "#005187", margin: "0 0 14px", lineHeight: 1.15, letterSpacing: "-0.5px" }}>
          Todo lo que incluye cada plan
        </h1>
        <p style={{ fontSize: 15, color: "#4d82bc", maxWidth: 600, lineHeight: 1.75, margin: 0, fontWeight: 500 }}>
          Comparación completa, cómo se calcula tu precio final y qué esperar del proceso de trabajo, de principio a fin.
        </p>
      </div>

      {/* ── 1. Tabla comparativa ── */}
      <section id="comparativa" className="pd2-section pd2-wrap">
        <Reveal>
          <h2 className="pd2-h2">Tabla comparativa</h2>
          <p className="pd2-h2-sub">Lado a lado, para que decidas rápido.</p>
        </Reveal>

        <Reveal>
          <div className="pd2-table-card">
            <table className="pd2-table">
              <thead>
                <tr>
                  <th style={{ width: "34%" }}>Característica</th>
                  <th id="esencial">Esencial</th>
                  <th className="pd2-th-pro" id="pro">Pro <span className="pd2-badge">Más popular</span></th>
                </tr>
              </thead>
              <tbody>
                {comparativa.map((row) => (
                  <tr key={row.label}>
                    <td className="pd2-feat-label">{row.label}</td>
                    <td>{typeof row.esencial === "boolean" ? (
                      row.esencial ? <span className="pd2-check"><CheckIcon /></span> : <span className="pd2-cross"><CrossIcon /></span>
                    ) : row.esencial}</td>
                    <td className="pd2-td-pro">{typeof row.pro === "boolean" ? (
                      row.pro ? <span className="pd2-check"><CheckIcon /></span> : <span className="pd2-cross"><CrossIcon /></span>
                    ) : row.pro}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile stacked cards */}
          <div className="pd2-plan-cards">
            <div className="pd2-plan-card">
              <p className="pd2-plan-card-title">Plan Esencial</p>
              {comparativa.map((row) => (
                <div className="pd2-plan-row" key={row.label}>
                  <span className="pd2-plan-row-label">{row.label}</span>
                  <span className="pd2-plan-row-value">
                    {typeof row.esencial === "boolean" ? (row.esencial ? "Sí" : "No") : row.esencial}
                  </span>
                </div>
              ))}
            </div>
            <div className="pd2-plan-card pro">
              <p className="pd2-plan-card-title">Plan Pro — Más popular</p>
              {comparativa.map((row) => (
                <div className="pd2-plan-row" key={row.label}>
                  <span className="pd2-plan-row-label">{row.label}</span>
                  <span className="pd2-plan-row-value">
                    {typeof row.pro === "boolean" ? (row.pro ? "Sí" : "No") : row.pro}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── 2. Cómo se calcula tu precio ── */}
      <section id="calculo" className="pd2-section pd2-wrap">
        <Reveal>
          <h2 className="pd2-h2">Cómo se calcula tu precio final</h2>
          <p className="pd2-h2-sub">El precio base cubre lo esencial; esto es lo que se suma según tu caso.</p>
        </Reveal>
        <Reveal>
          <div className="pd2-table-card" style={{ marginBottom: 16 }}>
            <table className="pd2-mini-table">
              <thead>
                <tr>
                  <th>Si necesitas...</th>
                  <th>Aplica a</th>
                  <th>Costo adicional</th>
                </tr>
              </thead>
              <tbody>
                {extras.map((row) => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    <td>{row.aplica}</td>
                    <td className="pd2-cost">{row.costo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="pd2-card">
            <p className="pd2-footnote">
              <strong style={{ color: "#005187" }}>¿Qué significa &quot;fotos listas&quot;?</strong>{" "}
              Mismo formato (jpg/png), tamaño uniforme, identificadas con el nombre del producto correspondiente. Si necesitas que las organicemos o mejoremos nosotros, aplica el extra.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── 3. Costos recurrentes ── */}
      <section id="recurrentes" className="pd2-section pd2-wrap">
        <Reveal>
          <h2 className="pd2-h2">Costos recurrentes</h2>
          <p className="pd2-h2-sub">Solo aplica al plan Pro.</p>
        </Reveal>
        <Reveal>
          <div className="pd2-table-card" style={{ marginBottom: 14 }}>
            <table className="pd2-mini-table">
              <thead>
                <tr>
                  <th>Concepto</th>
                  <th>Costo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Renovación anual de dominio .com + hosting</td>
                  <td className="pd2-cost">S/199 + IGV /año</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p style={{ fontSize: 13, color: "#84b6f4", fontStyle: "italic", margin: 0 }}>
            El Esencial no tiene este costo porque corre en hosting gratis permanente — sin sorpresas, sin renovación forzosa.
          </p>
        </Reveal>
      </section>

      {/* ── 4. Garantía ── */}
      <section className="pd2-section pd2-wrap">
        <Reveal>
          <div className="pd2-guarantee">
            <span className="pd2-guarantee-icon"><CheckIcon /></span>
            <p style={{ margin: 0, fontSize: 14, color: "#274b6d", lineHeight: 1.75 }}>
              <strong style={{ color: "#005187" }}>Garantía de satisfacción.</strong>{" "}
              Si al terminar tus revisiones incluidas el catálogo no refleja lo que pediste en tu brief inicial, seguimos ajustando ese punto sin costo — dentro de los 15 días posteriores a la entrega final. Pasado ese plazo, cualquier ajuste se cotiza como revisión adicional.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── 5. FAQ ── */}
      <section id="faq" className="pd2-section pd2-wrap">
        <Reveal>
          <h2 className="pd2-h2">Preguntas frecuentes</h2>
          <p className="pd2-h2-sub">Lo que casi todos preguntan antes de decidir.</p>
        </Reveal>
        <Reveal>
          <div className="pd2-card" style={{ padding: "6px 18px" }}>
            {faqs.map((f, i) => (
              <FaqItem key={f.q} q={f.q} a={f.a} index={i} />
            ))}
          </div>
        </Reveal>
      </section>

      {/* ── 6. Forma de pago + CTA ── */}
      <section id="pago" className="pd2-section pd2-wrap" style={{ paddingBottom: 64 }}>
        <Reveal>
          <h2 className="pd2-h2">Forma de pago</h2>
          <p className="pd2-h2-sub">Simple y directo, sin plataformas de terceros.</p>
        </Reveal>
        <Reveal>
          <div className="pd2-card" style={{ marginBottom: 28 }}>
            <ul className="pd2-pay-list">
              <li><span className="pd2-pay-dot" />50% de adelanto para iniciar el proyecto</li>
              <li><span className="pd2-pay-dot" />50% restante contra entrega, antes de publicar</li>
              <li><span className="pd2-pay-dot" />Medios: Yape, Plin, transferencia o depósito BCP/Interbank</li>
              <li><span className="pd2-pay-dot" />Renovación anual del Pro (año 2 en adelante): se cobra por el mismo medio, con recordatorio 15 días antes del vencimiento</li>
            </ul>
          </div>
        </Reveal>

        <Reveal>
          <div className="pd2-cta-panel">
            <h3 style={{ position: "relative", zIndex: 1, color: "#fcffff", fontSize: "clamp(20px,3vw,26px)", fontWeight: 900, margin: "0 0 12px" }}>
              ¿Listo para tu catálogo digital?
            </h3>
            <p style={{ position: "relative", zIndex: 1, color: "rgba(196,218,250,0.75)", fontSize: 14, margin: "0 0 24px", maxWidth: 440, marginLeft: "auto", marginRight: "auto", lineHeight: 1.7 }}>
              Cuéntanos de tu negocio y te ayudamos a elegir el plan ideal.
            </p>
            <a href={waLink("Hola, quiero mi catálogo digital 🚀")} target="_blank" rel="noreferrer" className="pd2-wa-btn">
              <WhatsAppIcon size={18} />
              Escríbenos por WhatsApp
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
