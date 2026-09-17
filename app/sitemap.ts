import type { MetadataRoute } from "next";
import { SITE_URL } from "@/constants/site";

const RUTAS: { path: string; priority: number }[] = [
  { path: "", priority: 1 },
  { path: "/planes", priority: 0.9 },
  { path: "/calculadora", priority: 0.8 },
  { path: "/proyectos", priority: 0.8 },
  { path: "/proceso", priority: 0.7 },
  { path: "/nosotros", priority: 0.6 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return RUTAS.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: "monthly",
    priority,
  }));
}
