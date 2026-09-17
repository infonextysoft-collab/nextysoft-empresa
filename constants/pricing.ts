// Única fuente de verdad para precios. La usan /planes, /calculadora, /proceso y el PDF de cotización.

export type PlanId = "esencial" | "pro";

export type Plan = {
  id: PlanId;
  nombre: string;
  precioBase: number;
  limiteProductos: number;
  revisiones: number;
  diasEntrega: number;
  soporteDias: number;
};

export const PLANES: Record<PlanId, Plan> = {
  esencial: {
    id: "esencial",
    nombre: "Esencial",
    precioBase: 199,
    limiteProductos: 80,
    revisiones: 1,
    diasEntrega: 5,
    soporteDias: 15,
  },
  pro: {
    id: "pro",
    nombre: "Pro",
    precioBase: 499,
    limiteProductos: 250,
    revisiones: 3,
    diasEntrega: 7,
    soporteDias: 30,
  },
};

export const IGV = 0.18;
export const BLOQUE_PRODUCTOS = 25;
export const PRECIO_BLOQUE = 45;
export const RENOVACION_PRO = 199;
/** Catálogos grandes suman 1 día hábil de entrega por cada 100 productos sobre el límite. */
export const PRODUCTOS_POR_DIA_EXTRA = 100;

export type ExtraId = "revision" | "fotos" | "dominio";

export type Extra = {
  id: ExtraId;
  nombre: string;
  detalle: string;
  precio: number;
  periodo?: "año";
  planes: PlanId[];
};

export const EXTRAS: Extra[] = [
  {
    id: "revision",
    nombre: "Revisión de diseño adicional",
    detalle: "Una ronda más de ajustes, además de las incluidas en tu plan.",
    precio: 30,
    planes: ["esencial", "pro"],
  },
  {
    id: "fotos",
    nombre: "Organización de fotos",
    detalle: "Si tus fotos no vienen listas, las ordenamos y editamos por producto.",
    precio: 80,
    planes: ["esencial", "pro"],
  },
  {
    id: "dominio",
    nombre: "Dominio propio .com",
    detalle: "Tu catálogo en tunegocio.com en vez del enlace gratuito.",
    precio: 70,
    periodo: "año",
    planes: ["esencial"],
  },
];

export type LineaCotizacion = { concepto: string; detalle?: string; monto: number };

export type Cotizacion = {
  plan: Plan;
  productos: number;
  productosExtra: number;
  bloquesExtra: number;
  extras: Extra[];
  lineas: LineaCotizacion[];
  subtotal: number;
  igv: number;
  total: number;
  adelanto: number;
  saldo: number;
  diasEntrega: number;
};

const redondear = (n: number) => Math.round(n * 100) / 100;

export const extrasDisponibles = (plan: PlanId) => EXTRAS.filter((e) => e.planes.includes(plan));

export function calcularCotizacion(plan: PlanId, productos: number, extras: ExtraId[]): Cotizacion {
  const datos = PLANES[plan];
  const cantidad = Math.max(1, Math.round(productos));
  const productosExtra = Math.max(0, cantidad - datos.limiteProductos);
  const bloquesExtra = Math.ceil(productosExtra / BLOQUE_PRODUCTOS);
  const extrasAplicados = extrasDisponibles(plan).filter((e) => extras.includes(e.id));

  const lineas: LineaCotizacion[] = [
    { concepto: `Plan ${datos.nombre}`, detalle: `Incluye hasta ${datos.limiteProductos} productos`, monto: datos.precioBase },
  ];
  if (bloquesExtra > 0) {
    lineas.push({
      concepto: "Productos adicionales",
      detalle: `${bloquesExtra} ${bloquesExtra === 1 ? "bloque" : "bloques"} de ${BLOQUE_PRODUCTOS} × ${formatearSoles(PRECIO_BLOQUE)}`,
      monto: bloquesExtra * PRECIO_BLOQUE,
    });
  }
  for (const extra of extrasAplicados) {
    lineas.push({ concepto: extra.nombre, detalle: extra.periodo ? "Primer año" : undefined, monto: extra.precio });
  }

  const subtotal = redondear(lineas.reduce((acc, l) => acc + l.monto, 0));
  const igv = redondear(subtotal * IGV);
  const total = redondear(subtotal + igv);
  const adelanto = redondear(total / 2);

  return {
    plan: datos,
    productos: cantidad,
    productosExtra,
    bloquesExtra,
    extras: extrasAplicados,
    lineas,
    subtotal,
    igv,
    total,
    adelanto,
    saldo: redondear(total - adelanto),
    diasEntrega: datos.diasEntrega + Math.floor(productosExtra / PRODUCTOS_POR_DIA_EXTRA),
  };
}

/** Costos que se repiten después del primer pago, en una frase. */
export function notaRecurrente(cot: Cotizacion): string {
  if (cot.plan.id === "pro") {
    return `Desde el año 2: renovación de dominio .com + hosting por ${formatearSoles(RENOVACION_PRO)} + IGV al año.`;
  }
  const dominio = cot.extras.find((e) => e.id === "dominio");
  if (dominio) {
    return `Hosting gratis permanente. El dominio .com se renueva a ${formatearSoles(dominio.precio)} + IGV al año.`;
  }
  return "Hosting gratis permanente, sin renovaciones ni mensualidades.";
}

/** Formato fijo "S/ 1,234.50" (sin Intl, para que servidor, navegador y PDF coincidan). */
export function formatearSoles(monto: number): string {
  const [entero, decimales] = monto.toFixed(2).split(".");
  return `S/ ${entero.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.${decimales}`;
}
