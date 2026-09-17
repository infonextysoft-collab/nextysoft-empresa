import type { Metadata } from "next";
import Link from "next/link";
import { SubpageShell, SubpageHero, SectionHeading, CtaPanel } from "@/components/subpage/SubpageShell";
import Reveal from "@/components/subpage/Reveal";
import ChecklistMateriales from "@/components/proceso/ChecklistMateriales";
import { PASOS } from "@/constants/proceso";
import { EXTRAS } from "@/constants/pricing";
import { waLink } from "@/constants/contact";
import { ArrowRightIcon, CheckIcon, VideoIcon, WhatsAppIcon } from "@/components/ui/icons";

export const metadata: Metadata = {
  title: "Proceso de trabajo",
  description:
    "Así creamos tu catálogo digital en 6 pasos: del primer mensaje por WhatsApp a la publicación, con llamada opcional por Meet y una guía clara de qué material enviar.",
  alternates: { canonical: "/proceso" },
};

const PREGUNTAS = [
  "¿A qué se dedica tu negocio?",
  "¿Cuántos productos o servicios quieres mostrar, aproximadamente?",
  "¿Ya tienes fotos y logo listos, o necesitas apoyo con eso?",
  "¿Tienes un plazo de entrega en mente?",
];

const AGENDA = [
  {
    tiempo: "1–2 min",
    titulo: "Nos cuentas de tu negocio",
    texto: "Confirmamos cuánto tiempo tienes disponible y empezamos por lo importante: qué vendes y a quién.",
  },
  {
    tiempo: "5 min",
    titulo: "Resolvemos lo clave",
    texto: "Te hacemos unas pocas preguntas para entender qué necesita tu catálogo.",
  },
  {
    tiempo: "5 min",
    titulo: "Te mostramos demos de tu rubro",
    texto: "Compartimos pantalla con 1 o 2 demos parecidas a tu negocio y te explicamos, en simple, qué cambia entre Esencial y Pro.",
  },
  {
    tiempo: "5 min",
    titulo: "Precio y siguiente paso",
    texto: "Te recomendamos un plan según lo conversado y te explicamos la forma de pago: 50% de adelanto y 50% contra entrega.",
  },
  {
    tiempo: "Cierre",
    titulo: "Confirmamos plan y fecha",
    texto: "Acordamos tu plan y la fecha estimada de entrega. Apenas termina la llamada te enviamos el link de Drive y la guía de materiales.",
  },
];

const precioFotos = EXTRAS.find((e) => e.id === "fotos")?.precio;

export default function ProcesoPage() {
  return (
    <SubpageShell>
      <SubpageHero
        eyebrow="Proceso de trabajo"
        title="De tu primer mensaje a tu catálogo publicado"
        lead="Seis pasos claros. La llamada por Meet es opcional: si ya sabes lo que quieres, pasamos directo a armar tu catálogo."
      >
        <a
          href={waLink("Hola, quiero empezar mi catálogo digital 🚀")}
          target="_blank"
          rel="noopener noreferrer"
          className="sp-btn sp-btn-wa"
        >
          <WhatsAppIcon size={18} />
          Empezar por WhatsApp
        </a>
        <a href="#materiales" className="sp-btn sp-btn-ghost">
          Qué material necesito
        </a>
      </SubpageHero>

      {/* ── Pasos ── */}
      <section id="pasos" className="sp-section sp-wrap">
        <Reveal>
          <SectionHeading
            title="Los 6 pasos"
            sub="Tú nos das la información de tu negocio; nosotros nos encargamos del resto."
          />
        </Reveal>
        <ol className="sp-timeline">
          {PASOS.map((paso, i) => (
            <li key={paso.numero} className="sp-timeline-item">
              <span className={`sp-step-num${paso.opcional ? " is-optional" : ""}`} aria-hidden="true">
                {paso.numero}
              </span>
              <Reveal delay={i * 40}>
                <div className="sp-card">
                  <div className="sp-step-head">
                    <h3 className="sp-h3">{paso.titulo}</h3>
                    {paso.opcional && <span className="sp-tag sp-tag-outline">Opcional</span>}
                  </div>
                  <p className="sp-p">{paso.detalle}</p>
                  <p className="sp-meta">
                    <CheckIcon size={15} />
                    {paso.meta}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      {/* ── Llamada opcional ── */}
      <section id="llamada" className="sp-section sp-wrap">
        <Reveal>
          <SectionHeading
            title="¿Llamada o directo? Tú eliges"
            sub="No todos necesitan una videollamada. Si te da más confianza verlo en vivo, la agendamos; si no, avanzamos por WhatsApp."
          />
        </Reveal>

        <div className="sp-grid-2">
          <Reveal>
            <div className="sp-card sp-choice">
              <p className="sp-label sp-label-flush">Opción A</p>
              <h3 className="sp-h3">Ya sé lo que quiero</h3>
              <p className="sp-p">
                Te saltas la llamada: te enviamos la carpeta de Drive y la guía de materiales para empezar de inmediato.
              </p>
              <a
                href={waLink("Hola, ya elegí mi plan y quiero empezar mi catálogo 🚀")}
                target="_blank"
                rel="noopener noreferrer"
                className="sp-btn sp-btn-primary"
              >
                Quiero empezar ya
                <ArrowRightIcon size={16} />
              </a>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="sp-card sp-card-dark sp-choice">
              <p className="sp-label sp-label-flush">Opción B</p>
              <h3 className="sp-h3">Prefiero conversarlo primero</h3>
              <p className="sp-p">
                Agendamos 15 a 20 minutos por Google Meet para ver demos de tu rubro y resolver tus dudas en vivo. Sin
                compromiso.
              </p>
              <a
                href={waLink("Hola, me gustaría agendar una llamada rápida por Meet para ver demos de mi rubro 📅")}
                target="_blank"
                rel="noopener noreferrer"
                className="sp-btn sp-btn-wa"
              >
                <VideoIcon size={18} />
                Agendar llamada
              </a>
            </div>
          </Reveal>
        </div>

        <div className="sp-call">
          <Reveal>
            <div className="sp-card">
              <h3 className="sp-h3">Así es la llamada de 15–20 minutos</h3>
              <ol className="sp-agenda">
                {AGENDA.map((item) => (
                  <li key={item.titulo}>
                    <span className="sp-agenda-time">{item.tiempo}</span>
                    <div>
                      <p className="sp-agenda-title">{item.titulo}</p>
                      <p className="sp-p">{item.texto}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="sp-card sp-prep">
              <h3 className="sp-h3">Ten a la mano estas respuestas</h3>
              <p className="sp-p">Son las preguntas que te haremos. Si las piensas antes, la llamada es más corta y útil.</p>
              <ul className="sp-checklist">
                {PREGUNTAS.map((q) => (
                  <li key={q}>
                    <span className="sp-check-dot">
                      <CheckIcon size={13} />
                    </span>
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Guía de materiales (Drive) ── */}
      <section id="materiales" className="sp-section sp-wrap">
        <Reveal>
          <SectionHeading
            title="Guía para compartir tu información"
            sub="Te la enviamos junto con el link de tu carpeta de Google Drive, haya habido llamada o no. Ve marcando lo que ya tienes."
          />
        </Reveal>

        <div className="sp-materials-layout">
          <Reveal>
            <ChecklistMateriales />
          </Reveal>
          <Reveal delay={80}>
            <div className="sp-stack">
              <div className="sp-card">
                <h3 className="sp-h3">Cómo nombrar las fotos</h3>
                <p className="sp-p">Usa este formato para que cada foto llegue a su producto sin confusiones:</p>
                <pre className="sp-code">{"nombre-del-producto-1.jpg\nnombre-del-producto-2.jpg"}</pre>
                <ul className="sp-checklist sp-tips">
                  <li>
                    <span className="sp-check-dot">
                      <CheckIcon size={13} />
                    </span>
                    Todo en minúsculas y con guiones en vez de espacios.
                  </li>
                  <li>
                    <span className="sp-check-dot">
                      <CheckIcon size={13} />
                    </span>
                    Si un producto tiene varias fotos, numéralas: -1, -2, -3.
                  </li>
                </ul>
              </div>
              <div className="sp-note">
                <span>
                  <strong>Cuanto más ordenado llegue el material, más rápido se arma tu catálogo.</strong> ¿Dudas sobre qué
                  mandar? Pregúntanos directo por WhatsApp.
                </span>
              </div>
              <div className="sp-note">
                <span>
                  ¿No tienes tus fotos listas? Podemos organizarlas por <strong>S/ {precioFotos}</strong> como extra.{" "}
                  <Link href="/calculadora" className="sp-link">
                    Calcula tu precio <ArrowRightIcon size={14} />
                  </Link>
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="sp-wrap">
        <Reveal>
          <CtaPanel
            title="¿Empezamos con el paso 1?"
            text="Escríbenos, cuéntanos de tu negocio y te recomendamos el plan ideal. Si prefieres, coordinamos la llamada."
            mensaje="Hola, vi el proceso en la web y quiero empezar mi catálogo 🚀"
            secundario={{ href: "/calculadora", label: "Calcular mi precio" }}
          />
        </Reveal>
      </div>
    </SubpageShell>
  );
}
