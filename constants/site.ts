export const SITE_NAME = "Nexty Soft";

export const SITE_DESCRIPTION =
  "Catálogos digitales para emprendedores y negocios: muestra tus productos y recibe pedidos directo por WhatsApp. Planes desde S/ 199 + IGV.";

// En Vercel se usa el dominio de producción automáticamente; NEXT_PUBLIC_SITE_URL lo sobrescribe si hace falta.
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
