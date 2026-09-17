import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { SubpageShell, SubpageHero, SectionHeading, CtaPanel } from "@/components/subpage/SubpageShell";
import Reveal from "@/components/subpage/Reveal";
import Calculadora from "@/components/calculadora/Calculadora";
import {
  BLOQUE_PRODUCTOS,
  EXTRAS,
  IGV,
  PLANES,
  PRECIO_BLOQUE,
  PRODUCTOS_POR_DIA_EXTRA,
} from "@/constants/pricing";
import { ArrowRightIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Calculadora de precio",
  description:
    "Calcula cuánto cuesta tu catálogo digital: elige el plan Esencial o Pro, la cantidad de productos y los extras. Total con IGV y cotización descargable en PDF.",
  alternates: { canonical: "/calculadora" },
};

export default function CalculadoraPage() {
  const { esencial, pro } = PLANES;

  return (
    <SubpageShell>
      <SubpageHero
        eyebrow="Calculadora"
        title="Calcula el precio de tu catálogo"
        lead="Elige tu plan, indica cuántos productos quieres mostrar y marca los extras. El total se actualiza al instante con IGV, y puedes descargar tu cotización en PDF."
      />

      <div className="sp-wrap">
        <Suspense fallback={<div className="calc-skeleton" aria-hidden="true" />}>
          <Calculadora />
        </Suspense>
      </div>

      <section id="como-se-calcula" className="sp-section sp-wrap">
        <Reveal>
          <SectionHeading
            title="Cómo se calcula"
            sub="Sin letra chica: esta es exactamente la fórmula que usa la calculadora."
          />
        </Reveal>
        <Reveal>
          <div className="sp-grid-2">
            <div className="sp-card">
              <h3 className="sp-h3">1. Precio base del plan</h3>
              <ul className="sp-rules">
                <li>
                  <span>Esencial · hasta {esencial.limiteProductos} productos</span>
                  <strong>S/ {esencial.precioBase}</strong>
                </li>
                <li>
                  <span>Pro · hasta {pro.limiteProductos} productos</span>
                  <strong>S/ {pro.precioBase}</strong>
                </li>
              </ul>
            </div>
            <div className="sp-card">
              <h3 className="sp-h3">2. Productos adicionales</h3>
              <p className="sp-p">
                Lo que supere el límite de tu plan se cobra en bloques de {BLOQUE_PRODUCTOS} productos a{" "}
                <strong>S/ {PRECIO_BLOQUE}</strong> cada bloque, sin cambiar de plan. Catálogos grandes suman 1 día hábil de
                entrega por cada {PRODUCTOS_POR_DIA_EXTRA} productos extra.
              </p>
            </div>
            <div className="sp-card">
              <h3 className="sp-h3">3. Extras opcionales</h3>
              <ul className="sp-rules">
                {EXTRAS.map((e) => (
                  <li key={e.id}>
                    <span>
                      {e.nombre}
                      {e.planes.length === 1 && ` (solo ${PLANES[e.planes[0]].nombre})`}
                    </span>
                    <strong>
                      + S/ {e.precio}
                      {e.periodo ? `/${e.periodo}` : ""}
                    </strong>
                  </li>
                ))}
              </ul>
            </div>
            <div className="sp-card">
              <h3 className="sp-h3">4. IGV y forma de pago</h3>
              <p className="sp-p">
                Al subtotal se le suma el IGV de {IGV * 100}%. Pagas <strong>50% para empezar</strong> y{" "}
                <strong>50% contra entrega</strong>, antes de publicar.
              </p>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <p className="sp-fine">
            ¿Quieres comparar todo lo que incluye cada plan?{" "}
            <Link href="/planes" className="sp-link">
              Ver planes en detalle <ArrowRightIcon size={14} />
            </Link>
          </p>
        </Reveal>
      </section>

      <div className="sp-wrap">
        <Reveal>
          <CtaPanel
            title="¿Tu cotización encaja con tu negocio?"
            text="Envíanosla por WhatsApp y te confirmamos el precio final y la fecha de entrega."
            mensaje="Hola, usé la calculadora de la web y quiero confirmar mi cotización"
            secundario={{ href: "/proceso", label: "Ver cómo trabajamos" }}
          />
        </Reveal>
      </div>
    </SubpageShell>
  );
}
