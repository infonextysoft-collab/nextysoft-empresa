import { PLANES } from "./pricing";

export type PasoProceso = {
  numero: string;
  titulo: string;
  /** Versión corta para la sección de la home. */
  resumen: string;
  /** Versión completa para /proceso. */
  detalle: string;
  meta: string;
  opcional?: boolean;
};

const { esencial, pro } = PLANES;

export const PASOS: PasoProceso[] = [
  {
    numero: "01",
    titulo: "Cuéntanos qué necesitas",
    resumen: "Nos escribes por WhatsApp, nos cuentas tu rubro y te recomendamos un plan.",
    detalle:
      "Nos escribes por WhatsApp y nos cuentas a qué se dedica tu negocio y qué buscas. Resolvemos tus primeras dudas y te recomendamos el plan que mejor encaja.",
    meta: "Por WhatsApp",
  },
  {
    numero: "02",
    titulo: "Llamada rápida por Meet",
    resumen: "Si prefieres conversarlo, vemos demos de tu rubro en 15–20 minutos.",
    detalle:
      "Si prefieres más confianza antes de decidir, coordinamos una videollamada corta. Te mostramos demos reales de tu rubro y resolvemos tus dudas en vivo. Si ya estás decidido, te saltas este paso.",
    meta: "15–20 minutos por Google Meet",
    opcional: true,
  },
  {
    numero: "03",
    titulo: "Nos compartes tu información",
    resumen: "Te enviamos una carpeta de Drive con una guía de qué subir.",
    detalle:
      "Te enviamos una carpeta de Google Drive junto con una guía simple de qué subir: fotos, logo, colores y los datos de tus productos.",
    meta: "Carpeta de Drive + guía de materiales",
  },
  {
    numero: "04",
    titulo: "Diseñamos tu catálogo",
    resumen: "Armamos tu página según el plan elegido, con el material que nos enviaste.",
    detalle:
      "Armamos tu catálogo según el plan que elegiste, usando el material que nos compartiste. Tú no tienes que aprender ninguna herramienta.",
    meta: `${esencial.diasEntrega} días hábiles en Esencial · ${pro.diasEntrega} en Pro`,
  },
  {
    numero: "05",
    titulo: "Revisión y ajustes",
    resumen: "Te enviamos el resultado y ajustamos lo que haga falta.",
    detalle:
      "Te enviamos el catálogo para que lo revises con calma. Nos dices qué cambiar —textos, fotos, orden, colores— y lo ajustamos dentro de las rondas incluidas en tu plan.",
    meta: `${esencial.revisiones} ronda de ajustes en Esencial · ${pro.revisiones} en Pro`,
  },
  {
    numero: "06",
    titulo: "Publicación",
    resumen: "Publicamos y te entregamos el link listo para compartir.",
    detalle:
      "Subimos el catálogo definitivo y te entregamos el link listo para compartir en tu WhatsApp, Instagram, Facebook o TikTok.",
    meta: "Link listo para WhatsApp y redes",
  },
];
