import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Planes y precios — Nexty Soft",
  description:
    "Compara el plan Esencial y el plan Pro: qué incluye cada uno, cómo se calcula tu precio final, el proceso de trabajo y las preguntas frecuentes.",
};

const WA_NUMBER = "51999999999";
const waLink = (msg: string) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;

const comparativa: { label: string; esencial: string; pro: string }[] = [
  { label: "Precio base", esencial: "S/199 + IGV", pro: "S/499 + IGV" },
  { label: "Productos incluidos", esencial: "Hasta 80", pro: "Hasta 250" },
  { label: "Botón de WhatsApp", esencial: "Personalizado por producto", pro: "Personalizado por producto" },
  { label: "Categorías de productos", esencial: "No", pro: "Sí" },
  { label: "Estilo de diseño", esencial: "Plantilla adaptada a tu marca", pro: "Referencias de estilo a elegir + ajustes de estructura" },
  { label: "Revisiones de diseño incluidas", esencial: "1", pro: "3" },
  { label: "Dominio", esencial: "Enlace gratuito incluido", pro: "Dominio .com propio" },
  { label: "Hosting", esencial: "Gratis, permanente, sin renovación", pro: "Incluido el 1er año, renovación anual desde el año 2" },
  { label: "Blog / novedades", esencial: "No", pro: "Sí" },
  { label: "Tiempo de entrega", esencial: "5 días hábiles", pro: "7 días hábiles" },
  { label: "Soporte post-entrega", esencial: "15 días", pro: "30 días" },
];

const extras: { label: string; aplica: string; costo: string }[] = [
  { label: "+25 productos sobre el límite del plan", aplica: "Ambos", costo: "+ S/50" },
  { label: "Revisión de diseño adicional", aplica: "Ambos", costo: "+ S/30 c/u" },
  { label: "Dominio .com propio en el plan Esencial (opcional)", aplica: "Esencial", costo: "+ S/70/año" },
  { label: "Organizar/editar fotos de productos que no vienen listas", aplica: "Ambos", costo: "+ S/80" },
];

const pasos = [
  { n: "1", t: "Nos envías tu info", d: "Logo, colores y lista de productos (fotos + precios) por WhatsApp o formulario." },
  { n: "2", t: "Armamos el primer borrador", d: "En 5 o 7 días hábiles según el plan." },
  { n: "3", t: "Revisas y nos das tu feedback", d: "Dentro de las revisiones incluidas en tu plan." },
  { n: "4", t: "Ajustamos hasta que estés conforme", d: "Sobre lo definido en tu brief inicial." },
  { n: "5", t: "Publicamos tu catálogo", d: "Con dominio .com activo si es plan Pro." },
  { n: "6", t: "Capacitación rápida (15-20 min)", d: "Para que sepas cómo pedirnos cambios a futuro." },
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

export default function PlanesDetallePage() {
  return (
    <main
      style={{
        fontFamily: "'Plus Jakarta Sans', Arial, sans-serif",
        background: "linear-gradient(180deg, #fcffff 0%, #edf5ff 100%)",
        minHeight: "100vh",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');
        .pd-wrap { max-width: 980px; margin: 0 auto; padding: 0 24px; }
        .pd-table { width: 100%; border-collapse: collapse; font-size: 14px; }
        .pd-table th, .pd-table td { text-align: left; padding: 12px 14px; border-bottom: 1px solid rgba(196,218,250,0.6); vertical-align: top; }
        .pd-table th { background: #f6faff; color: #005187; font-weight: 800; font-size: 12px; text-transform: uppercase; letter-spacing: 0.04em; }
        .pd-table td { color: #274b6d; }
        .pd-table tr:last-child td { border-bottom: none; }
        .pd-table-wrap { overflow-x: auto; border: 1px solid rgba(196,218,250,0.7); border-radius: 16px; background: #fff; }
        .pd-card { background: #f6faff; border: 1px solid rgba(196,218,250,0.8); border-radius: 18px; padding: 22px 24px; }
        .pd-step { display: flex; gap: 14px; align-items: flex-start; }
        .pd-step-num { flex-shrink: 0; width: 32px; height: 32px; border-radius: 50%; background: #005187; color: #fff; font-weight: 800; font-size: 13px; display: flex; align-items: center; justify-content: center; }
        details.pd-faq { border-bottom: 1px solid rgba(196,218,250,0.7); padding: 16px 4px; }
        details.pd-faq summary { cursor: pointer; font-weight: 700; color: #005187; font-size: 14.5px; list-style: none; }
        details.pd-faq summary::-webkit-details-marker { display: none; }
        details.pd-faq p { margin: 10px 0 0; color: #4d82bc; font-size: 13.5px; line-height: 1.65; }
        @media (max-width: 640px) {
          .pd-table th, .pd-table td { padding: 10px; font-size: 12.5px; }
        }
      `}</style>

      {/* Hero / back link */}
      <div className="pd-wrap" style={{ paddingTop: 48, paddingBottom: 8 }}>
        <Link href="/#planes" style={{ fontSize: 13, fontWeight: 700, color: "#4d82bc", textDecoration: "none" }}>
          ← Volver a planes
        </Link>
        <h1 style={{ fontSize: "clamp(28px,4vw,42px)", fontWeight: 900, color: "#005187", margin: "18px 0 10px", lineHeight: 1.15 }}>
          Todo lo que incluye cada plan
        </h1>
        <p style={{ fontSize: 15, color: "#4d82bc", maxWidth: 620, lineHeight: 1.7, margin: 0 }}>
          Comparación completa entre el plan Esencial y el plan Pro, cómo se calcula tu precio final y qué esperar del proceso de trabajo.
        </p>
      </div>

      {/* 1. Tabla comparativa */}
      <section id="esencial" className="pd-wrap" style={{ padding: "36px 0 8px" }}>
        <div id="pro" />
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#005187", margin: "0 0 16px" }}>
          Tabla comparativa
        </h2>
        <div className="pd-table-wrap">
          <table className="pd-table">
            <thead>
              <tr>
                <th>Característica</th>
                <th>Esencial</th>
                <th>Pro</th>
              </tr>
            </thead>
            <tbody>
              {comparativa.map((row) => (
                <tr key={row.label}>
                  <td style={{ fontWeight: 700, color: "#005187" }}>{row.label}</td>
                  <td>{row.esencial}</td>
                  <td>{row.pro}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 2. Cómo se calcula tu precio */}
      <section id="calculo" className="pd-wrap" style={{ padding: "44px 0 8px" }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#005187", margin: "0 0 16px" }}>
          Cómo se calcula tu precio final
        </h2>
        <div className="pd-table-wrap" style={{ marginBottom: 16 }}>
          <table className="pd-table">
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
                  <td style={{ fontWeight: 700, color: "#005187" }}>{row.costo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="pd-card">
          <p style={{ margin: 0, fontSize: 14, color: "#274b6d", lineHeight: 1.7 }}>
            <strong style={{ color: "#005187" }}>¿Qué significa &quot;fotos listas&quot;?</strong>{" "}
            Mismo formato (jpg/png), tamaño uniforme, identificadas con el nombre del producto correspondiente. Si necesitas que las organicemos o mejoremos nosotros, aplica el extra.
          </p>
        </div>
      </section>

      {/* 3. Costos recurrentes (Pro) */}
      <section className="pd-wrap" style={{ padding: "44px 0 8px" }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#005187", margin: "0 0 16px" }}>
          Costos recurrentes (solo plan Pro)
        </h2>
        <div className="pd-table-wrap" style={{ marginBottom: 12 }}>
          <table className="pd-table">
            <thead>
              <tr>
                <th>Concepto</th>
                <th>Costo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Renovación anual de dominio .com + hosting</td>
                <td style={{ fontWeight: 700, color: "#005187" }}>S/199 + IGV /año</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p style={{ fontSize: 13, color: "#84b6f4", fontStyle: "italic", margin: 0 }}>
          El Esencial no tiene este costo porque corre en hosting gratis permanente — sin sorpresas, sin renovación forzosa.
        </p>
      </section>

      {/* 4. Proceso */}
      <section className="pd-wrap" style={{ padding: "44px 0 8px" }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#005187", margin: "0 0 20px" }}>
          Proceso de trabajo
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 18 }}>
          {pasos.map((p) => (
            <div key={p.n} className="pd-step">
              <span className="pd-step-num">{p.n}</span>
              <div>
                <p style={{ margin: "0 0 4px", fontWeight: 800, color: "#005187", fontSize: 14 }}>{p.t}</p>
                <p style={{ margin: 0, color: "#4d82bc", fontSize: 13, lineHeight: 1.6 }}>{p.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Garantía */}
      <section className="pd-wrap" style={{ padding: "44px 0 8px" }}>
        <div className="pd-card">
          <p style={{ margin: 0, fontSize: 14, color: "#274b6d", lineHeight: 1.75 }}>
            <strong style={{ color: "#005187" }}>🔒 Garantía de satisfacción.</strong>{" "}
            Si al terminar tus revisiones incluidas el catálogo no refleja lo que pediste en tu brief inicial, seguimos ajustando ese punto sin costo — dentro de los 15 días posteriores a la entrega final. Pasado ese plazo, cualquier ajuste se cotiza como revisión adicional.
          </p>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="pd-wrap" style={{ padding: "44px 0 8px" }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#005187", margin: "0 0 8px" }}>
          Preguntas frecuentes
        </h2>
        <div>
          {faqs.map((f) => (
            <details key={f.q} className="pd-faq">
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* 7. Forma de pago */}
      <section className="pd-wrap" style={{ padding: "44px 0 60px" }}>
        <h2 style={{ fontSize: 22, fontWeight: 800, color: "#005187", margin: "0 0 16px" }}>
          Forma de pago
        </h2>
        <div className="pd-card" style={{ marginBottom: 28 }}>
          <ul style={{ margin: 0, paddingLeft: 18, color: "#274b6d", fontSize: 14, lineHeight: 1.9 }}>
            <li>50% de adelanto para iniciar el proyecto</li>
            <li>50% restante contra entrega, antes de publicar</li>
            <li>Medios: Yape, Plin, transferencia o depósito BCP/Interbank</li>
            <li>Renovación anual del Pro (año 2 en adelante): se cobra por el mismo medio, con recordatorio 15 días antes del vencimiento</li>
          </ul>
        </div>

        <div style={{ textAlign: "center" }}>
          <a
            href={waLink("Hola, quiero mi catálogo digital 🚀")}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#25D366",
              color: "#fff",
              fontWeight: 800,
              fontSize: 15,
              padding: "14px 32px",
              borderRadius: 50,
              textDecoration: "none",
              boxShadow: "0 4px 20px rgba(37,211,102,0.35)",
            }}
          >
            Escríbenos por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
