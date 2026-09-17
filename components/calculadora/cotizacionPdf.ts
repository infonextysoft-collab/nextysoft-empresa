import { jsPDF } from "jspdf";
import { WA_DISPLAY } from "@/constants/contact";
import { formatearSoles, notaRecurrente, type Cotizacion } from "@/constants/pricing";

// Las fuentes estándar de PDF solo cubren Latin-1: tildes, ñ, °, × y · funcionan; evitar "•", "—" y emojis.

type RGB = [number, number, number];
const NAVY: RGB = [0, 81, 135];
const SKY: RGB = [132, 182, 244];
const PALE: RGB = [196, 218, 250];
const TINT: RGB = [243, 248, 255];
const TEXT: RGB = [39, 75, 109];
const MUTED: RGB = [98, 124, 150];
const WHITE: RGB = [252, 255, 255];

const pad = (n: number) => String(n).padStart(2, "0");

export async function descargarCotizacionPdf(cot: Cotizacion) {
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const W = doc.internal.pageSize.getWidth();
  const H = doc.internal.pageSize.getHeight();
  const M = 18;
  const derecha = W - M;

  const ahora = new Date();
  const codigo = `NS-${ahora.getFullYear()}${pad(ahora.getMonth() + 1)}${pad(ahora.getDate())}-${pad(ahora.getHours())}${pad(ahora.getMinutes())}`;
  const fecha = ahora.toLocaleDateString("es-PE", { day: "numeric", month: "long", year: "numeric" });

  const fuente = (estilo: "normal" | "bold", tamano: number, color: RGB) => {
    doc.setFont("helvetica", estilo);
    doc.setFontSize(tamano);
    doc.setTextColor(...color);
  };

  // ── Cabecera ──
  doc.setFillColor(...NAVY);
  doc.rect(0, 0, W, 40, "F");
  fuente("bold", 22, WHITE);
  doc.text("Nexty", M, 20);
  doc.setTextColor(...SKY);
  doc.text("Soft", M + doc.getTextWidth("Nexty "), 20);
  fuente("normal", 9.5, PALE);
  doc.text("Catálogos digitales conectados a WhatsApp", M, 28);

  fuente("bold", 9, PALE);
  doc.text("COTIZACIÓN REFERENCIAL", derecha, 17, { align: "right" });
  fuente("normal", 9.5, WHITE);
  doc.text(`N.° ${codigo}`, derecha, 24, { align: "right" });
  doc.text(fecha, derecha, 30, { align: "right" });

  // ── Datos principales ──
  let y = 52;
  const datos: [string, string][] = [
    ["Plan", cot.plan.nombre],
    ["Productos", String(cot.productos)],
    ["Entrega estimada", `${cot.diasEntrega} días hábiles`],
  ];
  const gap = 4;
  const ancho = (W - 2 * M - gap * 2) / 3;
  datos.forEach(([label, valor], i) => {
    const x = M + i * (ancho + gap);
    doc.setFillColor(...TINT);
    doc.roundedRect(x, y, ancho, 20, 2.5, 2.5, "F");
    fuente("normal", 8, MUTED);
    doc.text(label.toUpperCase(), x + 5, y + 7.5);
    fuente("bold", 12.5, NAVY);
    doc.text(valor, x + 5, y + 15);
  });
  y += 34;

  // ── Detalle ──
  fuente("bold", 8.5, MUTED);
  doc.text("CONCEPTO", M, y);
  doc.text("MONTO", derecha, y, { align: "right" });
  y += 3;
  doc.setDrawColor(...PALE);
  doc.setLineWidth(0.4);
  doc.line(M, y, derecha, y);
  y += 7;

  for (const linea of cot.lineas) {
    fuente("bold", 11, TEXT);
    doc.text(linea.concepto, M, y);
    doc.text(formatearSoles(linea.monto), derecha, y, { align: "right" });
    if (linea.detalle) {
      fuente("normal", 9, MUTED);
      doc.text(linea.detalle, M, y + 5);
      y += 5;
    }
    y += 5;
    doc.line(M, y, derecha, y);
    y += 7;
  }

  // ── Totales ──
  const colTotales = W - M - 80;
  y += 2;
  fuente("normal", 10.5, TEXT);
  doc.text("Subtotal", colTotales, y);
  doc.text(formatearSoles(cot.subtotal), derecha - 5, y, { align: "right" });
  y += 7;
  doc.text("IGV (18%)", colTotales, y);
  doc.text(formatearSoles(cot.igv), derecha - 5, y, { align: "right" });
  y += 5;
  doc.setFillColor(...NAVY);
  doc.roundedRect(colTotales - 5, y, 85, 14, 2.5, 2.5, "F");
  fuente("bold", 13, WHITE);
  doc.text("Total", colTotales, y + 9.3);
  doc.text(formatearSoles(cot.total), derecha - 5, y + 9.3, { align: "right" });
  y += 26;

  // ── Forma de pago ──
  doc.setFillColor(...TINT);
  doc.roundedRect(M, y, W - 2 * M, 36, 3, 3, "F");
  fuente("bold", 10.5, NAVY);
  doc.text("Forma de pago", M + 6, y + 9);
  fuente("normal", 10, TEXT);
  doc.text("50% de adelanto para iniciar el proyecto", M + 6, y + 17);
  doc.text(formatearSoles(cot.adelanto), derecha - 6, y + 17, { align: "right" });
  doc.text("50% contra entrega, antes de publicar", M + 6, y + 24);
  doc.text(formatearSoles(cot.saldo), derecha - 6, y + 24, { align: "right" });
  fuente("normal", 9, MUTED);
  doc.text("Medios: Yape, Plin, transferencia o depósito BCP / Interbank", M + 6, y + 31);
  y += 48;

  // ── Notas ──
  fuente("bold", 10, NAVY);
  doc.text("Notas", M, y);
  y += 6;
  fuente("normal", 9.5, TEXT);
  const notas = [
    notaRecurrente(cot),
    "Precios en soles. Cotización referencial generada en la web; el precio final se confirma por WhatsApp según el material de tu negocio.",
  ];
  for (const nota of notas) {
    const lineas = doc.splitTextToSize(`- ${nota}`, W - 2 * M);
    doc.text(lineas, M, y);
    y += lineas.length * 4.6 + 2;
  }

  // ── Pie ──
  doc.setDrawColor(...PALE);
  doc.line(M, H - 26, derecha, H - 26);
  fuente("bold", 10.5, NAVY);
  doc.text("¿Listo para empezar? Escríbenos por WhatsApp", M, H - 18);
  fuente("normal", 10, TEXT);
  doc.text(WA_DISPLAY, M, H - 12);
  fuente("normal", 9, MUTED);
  doc.text(window.location.host, derecha, H - 12, { align: "right" });

  doc.save(`cotizacion-nexty-soft-${cot.plan.id}-${cot.productos}-productos.pdf`);
}
