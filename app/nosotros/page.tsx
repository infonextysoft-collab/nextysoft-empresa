import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SubpageShell, SubpageHero, SectionHeading, CtaPanel } from "@/components/subpage/SubpageShell";
import Reveal from "@/components/subpage/Reveal";
import { EQUIPO } from "@/constants/equipo";
import { PLANES } from "@/constants/pricing";
import { ArrowRightIcon, CheckIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "Quiénes están detrás de Nexty Soft, por qué creamos catálogos digitales conectados a WhatsApp y los compromisos que asumimos con cada negocio.",
  alternates: { canonical: "/nosotros" },
};

const PILARES = [
  {
    titulo: "Vender por WhatsApp no debería ser un caos",
    texto:
      "Mandar fotos una por una, repetir precios y perder pedidos entre mensajes. Un catálogo ordena todo en un solo link que tu cliente revisa a su ritmo.",
  },
  {
    titulo: "Sin sistemas complicados ni mensualidades",
    texto:
      "No tienes que aprender una plataforma ni pagar una suscripción cada mes. Nosotros armamos tu catálogo y tú sigues vendiendo como siempre: conversando.",
  },
  {
    titulo: "Pensado para quien recién da el salto",
    texto: `Precios publicados desde S/ ${PLANES.esencial.precioBase} + IGV y un proceso guiado, para que tener tu catálogo no sea un riesgo ni un dolor de cabeza.`,
  },
];

const COMPROMISOS: { titulo: string; texto: string; link?: { href: string; label: string } }[] = [
  {
    titulo: "Precios a la vista",
    texto: "Todos nuestros precios están publicados y puedes calcular tu total antes de escribirnos.",
    link: { href: "/calculadora", label: "Ir a la calculadora" },
  },
  {
    titulo: "Pagas en dos partes",
    texto: "50% para empezar y 50% contra entrega, antes de publicar. Nunca pagas todo por adelantado.",
  },
  {
    titulo: "Garantía de satisfacción",
    texto:
      "Si al terminar tus revisiones el catálogo no refleja lo que pediste, seguimos ajustando ese punto sin costo dentro de los 15 días posteriores a la entrega.",
  },
  {
    titulo: "Soporte después de publicar",
    texto: `${PLANES.esencial.soporteDias} días en el plan Esencial y ${PLANES.pro.soporteDias} en el Pro para cambios menores.`,
  },
  {
    titulo: "Trato directo",
    texto: "Hablas con nosotros por WhatsApp, sin formularios ni tickets de soporte.",
    link: { href: "/proceso", label: "Ver el proceso" },
  },
  {
    titulo: "Demos, no testimonios inventados",
    texto: "Estamos empezando: te mostramos demos por rubro. Cuando publiquemos catálogos de clientes, los verás aquí.",
    link: { href: "/proyectos", label: "Ver demos" },
  },
];

export default function NosotrosPage() {
  const mostrarRecordatorio = EQUIPO.length === 0 && process.env.NODE_ENV === "development";

  return (
    <SubpageShell>
      <SubpageHero
        eyebrow="Nosotros"
        title="Detrás de Nexty Soft"
        lead="Creamos catálogos digitales conectados a WhatsApp para emprendedores y negocios en Perú que ya venden por redes y quieren verse más profesionales, sin complicarse con tecnología."
      />

      {(EQUIPO.length > 0 || mostrarRecordatorio) && (
        <section id="equipo" className="sp-section sp-wrap">
          <Reveal>
            <SectionHeading title="Quién está detrás" />
          </Reveal>
          <div className="sp-grid-2">
            {EQUIPO.map((persona) => (
              <Reveal key={persona.nombre}>
                <div className="sp-card sp-person">
                  {persona.foto && <Image src={persona.foto} alt={persona.nombre} width={192} height={192} />}
                  <div>
                    <h3 className="sp-h3">{persona.nombre}</h3>
                    <p className="sp-label sp-label-flush">{persona.rol}</p>
                    <p className="sp-p">{persona.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
            {mostrarRecordatorio && (
              <div className="sp-card sp-placeholder">
                <h3 className="sp-h3">Solo visible en desarrollo</h3>
                <p className="sp-p">
                  Agrega tu nombre, rol, foto y una bio corta en <code>constants/equipo.ts</code> para mostrar esta
                  sección. Mientras esté vacía, no aparece en producción.
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      <section id="por-que" className="sp-section sp-wrap">
        <Reveal>
          <SectionHeading
            title="Por qué hacemos esto"
            sub="La mayoría de emprendedores ya vende por WhatsApp. Lo que falta es una vitrina ordenada que haga ese trabajo más fácil."
          />
        </Reveal>
        <div className="sp-grid-3">
          {PILARES.map((pilar, i) => (
            <Reveal key={pilar.titulo} delay={i * 60}>
              <div className="sp-card sp-fill">
                <h3 className="sp-h3">{pilar.titulo}</h3>
                <p className="sp-p">{pilar.texto}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="compromisos" className="sp-section sp-wrap">
        <Reveal>
          <SectionHeading
            title="Nuestros compromisos contigo"
            sub="Mientras construimos nuestro portafolio, la confianza se gana con reglas claras."
          />
        </Reveal>
        <div className="sp-grid-3">
          {COMPROMISOS.map((c, i) => (
            <Reveal key={c.titulo} delay={i * 40}>
              <div className="sp-card sp-fill sp-commitment">
                <span className="sp-check-dot">
                  <CheckIcon size={13} />
                </span>
                <h3 className="sp-h3">{c.titulo}</h3>
                <p className="sp-p">{c.texto}</p>
                {c.link && (
                  <Link href={c.link.href} className="sp-link">
                    {c.link.label} <ArrowRightIcon size={14} />
                  </Link>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <div className="sp-wrap">
        <Reveal>
          <CtaPanel
            title="Conversemos sobre tu negocio"
            text="Cuéntanos qué vendes y te recomendamos, sin compromiso, el catálogo que mejor te funciona."
            mensaje="Hola, conocí Nexty Soft por su web y quiero conversar sobre mi catálogo 👋"
            secundario={{ href: "/proyectos", label: "Ver demos" }}
          />
        </Reveal>
      </div>
    </SubpageShell>
  );
}
