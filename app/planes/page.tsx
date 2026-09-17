import type { Metadata } from "next";
import PlanesDetalle from "@/components/sections/PlanesDetalle";

export const metadata: Metadata = {
  title: "Planes y precios",
  description:
    "Compara el plan Esencial y el plan Pro: qué incluye cada uno, cómo se calcula tu precio final, costos recurrentes, preguntas frecuentes y forma de pago.",
  alternates: { canonical: "/planes" },
};

export default function PlanesDetallePage() {
  return <PlanesDetalle />;
}
