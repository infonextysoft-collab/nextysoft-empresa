import type { Metadata } from "next";
import PlanesDetalle from "@/components/sections/PlanesDetalle";

export const metadata: Metadata = {
  title: "Planes y precios — Nexty Soft",
  description:
    "Compara el plan Esencial y el plan Pro: qué incluye cada uno, cómo se calcula tu precio final, el proceso de trabajo y las preguntas frecuentes.",
};

export default function PlanesDetallePage() {
  return <PlanesDetalle />;
}
