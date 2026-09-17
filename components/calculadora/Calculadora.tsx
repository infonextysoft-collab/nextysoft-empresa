"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import {
  BLOQUE_PRODUCTOS,
  EXTRAS,
  PLANES,
  PRECIO_BLOQUE,
  calcularCotizacion,
  extrasDisponibles,
  formatearSoles,
  notaRecurrente,
  type Cotizacion,
  type ExtraId,
  type PlanId,
} from "@/constants/pricing";
import { waLink } from "@/constants/contact";
import { CheckIcon, DownloadIcon, WhatsAppIcon } from "@/components/ui/icons";
import "./calculadora.css";

const MIN_PRODUCTOS = 1;
const MAX_PRODUCTOS = 600;
const PRODUCTOS_INICIALES = 50;
const THUMB_PX = 24;

const limitar = (n: number) => Math.min(MAX_PRODUCTOS, Math.max(MIN_PRODUCTOS, Math.round(n)));
const porcentaje = (n: number) => ((n - MIN_PRODUCTOS) / (MAX_PRODUCTOS - MIN_PRODUCTOS)) * 100;
const esExtraId = (v: string): v is ExtraId => EXTRAS.some((e) => e.id === v);

function mensajeWhatsApp(cot: Cotizacion) {
  return [
    "Hola, hice mi cotización en la web 👋",
    "",
    `Plan ${cot.plan.nombre} · ${cot.productos} productos`,
    ...cot.lineas.map((l) => `• ${l.concepto}${l.detalle ? ` (${l.detalle})` : ""}: ${formatearSoles(l.monto)}`),
    "",
    `Subtotal: ${formatearSoles(cot.subtotal)}`,
    `IGV (18%): ${formatearSoles(cot.igv)}`,
    `Total: ${formatearSoles(cot.total)}`,
    "",
    "¿Me ayudan a empezar?",
  ].join("\n");
}

/** Sugiere el otro plan solo cuando de verdad le conviene al cliente. */
function sugerencia(cot: Cotizacion, extras: ExtraId[]): { plan: PlanId; texto: string } | null {
  if (cot.plan.id === "esencial") {
    const pro = calcularCotizacion("pro", cot.productos, extras);
    if (pro.subtotal > cot.subtotal) return null;
    const diferencia = cot.subtotal - pro.subtotal;
    return {
      plan: "pro",
      texto: `Con ${cot.productos} productos, el plan Pro te cuesta ${
        diferencia > 0 ? `${formatearSoles(diferencia)} menos` : "lo mismo"
      } y además incluye categorías, ${PLANES.pro.revisiones} revisiones y dominio .com el primer año.`,
    };
  }
  if (cot.productos > PLANES.esencial.limiteProductos) return null;
  const esencial = calcularCotizacion(
    "esencial",
    cot.productos,
    extras.filter((e) => e !== "dominio"),
  );
  return {
    plan: "esencial",
    texto: `Si no necesitas categorías ni dominio propio, el plan Esencial cubre tus ${cot.productos} productos por ${formatearSoles(esencial.subtotal)} + IGV.`,
  };
}

export default function Calculadora() {
  const params = useSearchParams();
  const [plan, setPlan] = useState<PlanId>(() => (params.get("plan") === "pro" ? "pro" : "esencial"));
  const [productos, setProductos] = useState(() => {
    const n = Number(params.get("productos"));
    return n > 0 ? limitar(n) : PRODUCTOS_INICIALES;
  });
  const [textoProductos, setTextoProductos] = useState(String(productos));
  const [extras, setExtras] = useState<ExtraId[]>(() => (params.get("extras") ?? "").split(",").filter(esExtraId));
  const [generandoPdf, setGenerandoPdf] = useState(false);

  const cot = useMemo(() => calcularCotizacion(plan, productos, extras), [plan, productos, extras]);
  const tip = useMemo(() => sugerencia(cot, extras), [cot, extras]);

  // La URL refleja la cotización para poder compartirla o volver a ella.
  useEffect(() => {
    const qs = new URLSearchParams({ plan: cot.plan.id, productos: String(cot.productos) });
    if (cot.extras.length) qs.set("extras", cot.extras.map((e) => e.id).join(","));
    window.history.replaceState(null, "", `?${qs}`);
  }, [cot]);

  const cambiarProductos = (n: number) => {
    const valor = limitar(n);
    setProductos(valor);
    setTextoProductos(String(valor));
  };

  const alternarExtra = (id: ExtraId) =>
    setExtras((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const descargarPdf = async () => {
    setGenerandoPdf(true);
    try {
      const { descargarCotizacionPdf } = await import("./cotizacionPdf");
      await descargarCotizacionPdf(cot);
    } finally {
      setGenerandoPdf(false);
    }
  };

  const limite = cot.plan.limiteProductos;
  const limitePct = porcentaje(limite);

  return (
    <div className="calc">
      <a href="#resumen" className="calc-mobile-bar">
        <span>Total con IGV</span>
        <strong>{formatearSoles(cot.total)}</strong>
        <span className="calc-mobile-link">Ver detalle ↓</span>
      </a>

      <div className="calc-form">
        {/* 1. Plan */}
        <fieldset className="calc-block">
          <legend className="calc-legend">
            <span className="calc-step">1</span>
            Elige tu plan
          </legend>
          <div className="calc-plans">
            {Object.values(PLANES).map((p) => (
              <label key={p.id} className={`calc-plan${plan === p.id ? " is-active" : ""}`}>
                <input type="radio" name="plan" value={p.id} checked={plan === p.id} onChange={() => setPlan(p.id)} />
                <span className="calc-plan-top">
                  <span className="calc-plan-name">
                    {p.nombre}
                    {p.id === "pro" && <span className="calc-badge">Más popular</span>}
                  </span>
                  <span className="calc-radio" aria-hidden="true" />
                </span>
                <span className="calc-plan-price">
                  S/ {p.precioBase} <small>+ IGV</small>
                </span>
                <span className="calc-plan-meta">
                  Hasta {p.limiteProductos} productos · {p.revisiones} {p.revisiones === 1 ? "revisión" : "revisiones"} ·{" "}
                  {p.diasEntrega} días hábiles
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        {/* 2. Productos */}
        <fieldset className="calc-block">
          <legend className="calc-legend">
            <span className="calc-step">2</span>
            ¿Cuántos productos quieres mostrar?
          </legend>
          <div className="calc-count">
            <div className="calc-range-wrap">
              <span
                className="calc-range-mark"
                style={{ left: `calc(${limitePct}% + ${(0.5 - limitePct / 100) * THUMB_PX}px)` }}
              >
                Incluidos: {limite}
              </span>
              <input
                type="range"
                className="calc-range"
                min={MIN_PRODUCTOS}
                max={MAX_PRODUCTOS}
                value={productos}
                onChange={(e) => cambiarProductos(Number(e.target.value))}
                aria-label="Número de productos"
                aria-valuetext={`${productos} productos`}
                style={{ "--pct": `${porcentaje(productos)}%` } as React.CSSProperties}
              />
              <div className="calc-range-scale" aria-hidden="true">
                <span>{MIN_PRODUCTOS}</span>
                <span>{MAX_PRODUCTOS}</span>
              </div>
            </div>
            <label className="calc-number">
              <input
                type="number"
                inputMode="numeric"
                min={MIN_PRODUCTOS}
                max={MAX_PRODUCTOS}
                value={textoProductos}
                onChange={(e) => {
                  setTextoProductos(e.target.value);
                  const n = Number(e.target.value);
                  if (e.target.value !== "" && n >= MIN_PRODUCTOS) setProductos(limitar(n));
                }}
                onBlur={() => setTextoProductos(String(productos))}
              />
              <span>productos</span>
            </label>
          </div>
          <p className={`calc-hint${cot.bloquesExtra ? " is-extra" : ""}`} aria-live="polite">
            {cot.bloquesExtra === 0
              ? `Incluido en el plan ${cot.plan.nombre}, que cubre hasta ${limite} productos.`
              : `${cot.productosExtra} productos sobre el límite del plan: ${cot.bloquesExtra} ${
                  cot.bloquesExtra === 1 ? "bloque" : "bloques"
                } de ${BLOQUE_PRODUCTOS} a ${formatearSoles(PRECIO_BLOQUE)} cada uno.`}
          </p>
        </fieldset>

        {/* 3. Extras */}
        <fieldset className="calc-block">
          <legend className="calc-legend">
            <span className="calc-step">3</span>
            Extras opcionales
          </legend>
          <div className="calc-extras">
            {extrasDisponibles(plan).map((e) => {
              const activo = extras.includes(e.id);
              return (
                <label key={e.id} className={`calc-extra${activo ? " is-active" : ""}`}>
                  <input type="checkbox" checked={activo} onChange={() => alternarExtra(e.id)} />
                  <span className="calc-box" aria-hidden="true">
                    <CheckIcon size={14} />
                  </span>
                  <span className="calc-extra-body">
                    <span className="calc-extra-name">{e.nombre}</span>
                    <span className="calc-extra-desc">{e.detalle}</span>
                  </span>
                  <span className="calc-extra-price">
                    + S/ {e.precio}
                    {e.periodo ? `/${e.periodo}` : ""}
                  </span>
                </label>
              );
            })}
            {plan === "pro" && (
              <div className="calc-extra is-included">
                <span className="calc-box" aria-hidden="true">
                  <CheckIcon size={14} />
                </span>
                <span className="calc-extra-body">
                  <span className="calc-extra-name">Dominio propio .com</span>
                  <span className="calc-extra-desc">Ya viene incluido en el plan Pro durante el primer año.</span>
                </span>
                <span className="calc-extra-price">Incluido</span>
              </div>
            )}
          </div>
        </fieldset>
      </div>

      {/* Resumen */}
      <aside className="calc-summary" id="resumen" aria-label="Resumen de tu cotización">
        <div className="calc-summary-card">
          <p className="calc-summary-eyebrow">Tu cotización</p>
          <ul className="calc-lines">
            {cot.lineas.map((l) => (
              <li key={l.concepto}>
                <span>
                  <span className="calc-line-name">{l.concepto}</span>
                  {l.detalle && <span className="calc-line-detail">{l.detalle}</span>}
                </span>
                <span className="calc-line-amount">{formatearSoles(l.monto)}</span>
              </li>
            ))}
          </ul>

          <dl className="calc-totals">
            <div>
              <dt>Subtotal</dt>
              <dd>{formatearSoles(cot.subtotal)}</dd>
            </div>
            <div>
              <dt>IGV (18%)</dt>
              <dd>{formatearSoles(cot.igv)}</dd>
            </div>
            <div className="calc-total">
              <dt>Total</dt>
              <dd aria-live="polite">{formatearSoles(cot.total)}</dd>
            </div>
          </dl>

          <div className="calc-pay">
            <p className="calc-pay-title">Forma de pago 50 / 50</p>
            <div className="calc-pay-row">
              <span>Adelanto para empezar</span>
              <strong>{formatearSoles(cot.adelanto)}</strong>
            </div>
            <div className="calc-pay-row">
              <span>Contra entrega, antes de publicar</span>
              <strong>{formatearSoles(cot.saldo)}</strong>
            </div>
          </div>

          <ul className="calc-facts">
            <li>
              Entrega estimada: <strong>{cot.diasEntrega} días hábiles</strong>
            </li>
            <li>{notaRecurrente(cot)}</li>
          </ul>

          {tip && (
            <div className="calc-tip">
              <p>{tip.texto}</p>
              <button type="button" onClick={() => setPlan(tip.plan)}>
                Ver con plan {PLANES[tip.plan].nombre}
              </button>
            </div>
          )}

          <div className="calc-cta">
            <a href={waLink(mensajeWhatsApp(cot))} target="_blank" rel="noopener noreferrer" className="sp-btn sp-btn-wa">
              <WhatsAppIcon size={18} />
              Enviar cotización por WhatsApp
            </a>
            <button type="button" className="sp-btn sp-btn-on-dark" onClick={descargarPdf} disabled={generandoPdf}>
              <DownloadIcon size={18} />
              {generandoPdf ? "Generando PDF…" : "Descargar cotización en PDF"}
            </button>
          </div>
          <p className="calc-fine">
            Cotización referencial en soles. El precio final se confirma por WhatsApp según el material de tu negocio.
          </p>
        </div>
      </aside>
    </div>
  );
}
