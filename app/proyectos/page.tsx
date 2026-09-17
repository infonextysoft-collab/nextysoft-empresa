import type { Metadata } from "next";
import Image from "next/image";
import { SubpageShell, SubpageHero, CtaPanel } from "@/components/subpage/SubpageShell";
import Reveal from "@/components/subpage/Reveal";
import { PROYECTOS } from "@/constants/proyectos";
import { PLANES } from "@/constants/pricing";
import { waLink } from "@/constants/contact";
import { CheckIcon, ExternalIcon, WhatsAppIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Proyectos y demos",
  description:
    "Demos de catálogos digitales conectados a WhatsApp para tiendas de carteras, calzado, ropa y decoración de eventos. Ábrelas y pruébalas desde tu celular.",
  alternates: { canonical: "/proyectos" },
};

export default function ProyectosPage() {
  return (
    <SubpageShell>
      <SubpageHero
        eyebrow="Proyectos"
        title="Catálogos que puedes probar hoy"
        lead="Estas demos funcionan de verdad: ábrelas desde tu celular y úsalas como lo haría tu cliente. Cada una muestra un rubro distinto y el plan con el que se hizo."
      >
        {PROYECTOS.map((p) => (
          <a key={p.slug} href={`#${p.slug}`} className="sp-tag sp-tag-link">
            {p.rubro}
          </a>
        ))}
      </SubpageHero>

      <div className="sp-wrap">
        <Reveal>
          <div className="sp-note">
            <span>
              <strong>Transparencia ante todo:</strong> son demos creadas por Nexty Soft para mostrar lo que podemos hacer
              en cada rubro, no negocios de clientes. Preferimos enseñarte trabajo real antes que testimonios inventados.
            </span>
          </div>
        </Reveal>
      </div>

      <section className="sp-section sp-wrap" aria-label="Demos por rubro">
        <div className="sp-projects">
          {PROYECTOS.map((p) => (
            <Reveal key={p.slug}>
              <article id={p.slug} className="sp-card sp-project">
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sp-browser"
                  aria-label={`Abrir la demo de ${p.nombre} en una pestaña nueva`}
                >
                  <span className="sp-browser-bar" aria-hidden="true">
                    <i style={{ background: "#ff5f57" }} />
                    <i style={{ background: "#ffbd2e" }} />
                    <i style={{ background: "#28c840" }} />
                    <span className="sp-browser-url">{p.link.replace(/^https:\/\//, "").replace(/\/$/, "")}</span>
                  </span>
                  <Image
                    src={p.imagen}
                    alt={`Captura de la demo de ${p.nombre}`}
                    width={p.ancho}
                    height={p.alto}
                    sizes="(max-width: 900px) 100vw, 560px"
                  />
                </a>

                <div>
                  <div className="sp-project-tags">
                    <span className="sp-tag">{p.rubro}</span>
                    <span className={`sp-tag${p.plan === "pro" ? " sp-tag-pro" : ""}`}>Plan {PLANES[p.plan].nombre}</span>
                  </div>
                  <h2 className="sp-project-name">{p.nombre}</h2>
                  <p className="sp-p">{p.resumen}</p>

                  <p className="sp-label">Qué muestra la demo</p>
                  <ul className="sp-checklist">
                    {p.muestra.map((item) => (
                      <li key={item}>
                        <span className="sp-check-dot">
                          <CheckIcon size={13} />
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <p className="sp-label">Ideal para</p>
                  <p className="sp-p">{p.idealPara}</p>

                  <div className="sp-actions">
                    <a href={p.link} target="_blank" rel="noopener noreferrer" className="sp-btn sp-btn-primary">
                      Ver demo en vivo
                      <ExternalIcon size={16} />
                    </a>
                    <a
                      href={waLink(`Hola, vi la demo de ${p.nombre.toLowerCase()} y quiero un catálogo así para mi negocio`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sp-btn sp-btn-ghost"
                    >
                      <WhatsAppIcon size={18} />
                      Quiero uno así
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="sp-wrap">
        <Reveal>
          <CtaPanel
            title="¿No ves tu rubro?"
            text="Trabajamos con cualquier negocio que venda productos o servicios. Cuéntanos el tuyo y te mostramos cómo quedaría."
            mensaje="Hola, no vi mi rubro en las demos. Mi negocio es de: "
            secundario={{ href: "/planes", label: "Ver planes" }}
          />
        </Reveal>
      </div>
    </SubpageShell>
  );
}
