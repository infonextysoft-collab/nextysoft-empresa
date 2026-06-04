"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Cuéntanos sobre tu negocio",
    desc: "Reunimos tus productos, colores, logo, redes y el número de WhatsApp donde quieres recibir pedidos.",
  },
  {
    number: "02",
    title: "Diseñamos tu página",
    desc: "Creamos una web clara, moderna y adaptable al celular, enfocada en mostrar lo que vendes sin complicar al cliente.",
  },
  {
    number: "03",
    title: "Revisas y ajustamos",
    desc: "Te enviamos una vista previa para validar textos, imágenes y secciones antes de dejarla lista para publicar.",
  },
  {
    number: "04",
    title: "Publicamos y conectamos WhatsApp",
    desc: "Dejamos tu página online con botones de contacto y pedidos directos para que puedas empezar a vender.",
  },
];

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}

export default function Processsection() {
  const { ref, visible } = useInView();

  return (
    <>
      <style>{`
        .process-root {
          background: #fcffff;
          padding: 84px 0 96px;
          font-family: 'Plus Jakarta Sans', Arial, sans-serif;
        }

        .process-wrap {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 32px;
        }

        .process-header {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 56px;
          align-items: end;
          margin-bottom: 44px;
        }

        .process-eyebrow {
          color: #4d82bc;
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.14em;
          margin: 0 0 14px;
          text-transform: uppercase;
        }

        .process-title {
          color: #005187;
          font-size: clamp(28px, 4vw, 46px);
          font-weight: 900;
          line-height: 1.12;
          margin: 0;
        }

        .process-intro {
          color: #4d82bc;
          font-size: 15px;
          line-height: 1.75;
          margin: 0;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .process-card {
          background: #f6faff;
          border: 1px solid rgba(196, 218, 250, 0.8);
          border-radius: 18px;
          min-height: 260px;
          padding: 26px 22px;
          opacity: 0;
          transform: translateY(18px);
          transition:
            border-color 0.22s ease,
            box-shadow 0.22s ease,
            transform 0.5s ease,
            opacity 0.5s ease;
        }

        .process-visible .process-card {
          opacity: 1;
          transform: translateY(0);
        }

        .process-card:hover {
          border-color: #84b6f4;
          box-shadow: 0 12px 34px rgba(0, 81, 135, 0.1);
        }

        .process-number {
          color: #84b6f4;
          display: block;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.12em;
          margin-bottom: 42px;
        }

        .process-card h3 {
          color: #005187;
          font-size: 17px;
          font-weight: 850;
          line-height: 1.3;
          margin: 0 0 12px;
        }

        .process-card p {
          color: #4d82bc;
          font-size: 13px;
          line-height: 1.65;
          margin: 0;
        }

        @media (max-width: 880px) {
          .process-header {
            grid-template-columns: 1fr;
            gap: 18px;
          }

          .process-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 560px) {
          .process-root {
            padding: 64px 0 72px;
          }

          .process-wrap {
            padding: 0 16px;
          }

          .process-grid {
            grid-template-columns: 1fr;
          }

          .process-card {
            min-height: auto;
          }

          .process-number {
            margin-bottom: 24px;
          }
        }
      `}</style>

      <section
        id="proceso"
        ref={ref}
        className={`process-root${visible ? " process-visible" : ""}`}
      >
        <div className="process-wrap">
          <div className="process-header">
            <div>
              <p className="process-eyebrow">Nuestro proceso</p>
              <h2 className="process-title">De idea a página online en pocos días</h2>
            </div>
            <p className="process-intro">
              Trabajamos con un flujo simple para que no tengas que aprender herramientas nuevas:
              tú nos das la información de tu negocio y nosotros convertimos eso en una web lista
              para recibir clientes.
            </p>
          </div>

          <div className="process-grid">
            {steps.map((step, index) => (
              <article
                key={step.number}
                className="process-card"
                style={{ transitionDelay: visible ? `${index * 90}ms` : "0ms" }}
              >
                <span className="process-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
