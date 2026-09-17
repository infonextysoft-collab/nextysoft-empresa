"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { PASOS } from "@/constants/proceso";

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
          font-family: var(--font-jakarta), Arial, sans-serif;
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
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .process-card {
          background: #f6faff;
          border: 1px solid rgba(196, 218, 250, 0.8);
          border-radius: 18px;
          min-height: 220px;
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

        .process-card-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 8px;
          margin-bottom: 32px;
        }

        .process-number {
          color: #84b6f4;
          font-size: 13px;
          font-weight: 900;
          letter-spacing: 0.12em;
        }

        .process-tag {
          font-size: 11px;
          font-weight: 700;
          color: #4d82bc;
          border: 1px dashed #4d82bc;
          border-radius: 100px;
          padding: 3px 10px;
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

        .process-footer {
          margin-top: 32px;
          text-align: center;
        }

        .process-link {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #005187;
          font-size: 15px;
          font-weight: 800;
          text-decoration: none;
          padding: 13px 26px;
          border-radius: 100px;
          border: 1.5px solid #c4dafa;
          background: #fff;
          transition: border-color 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
        }

        .process-link:hover {
          border-color: #4d82bc;
          box-shadow: 0 6px 20px rgba(77, 130, 188, 0.16);
          transform: translateY(-2px);
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

          .process-card-top {
            margin-bottom: 20px;
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
              Un flujo simple en 6 pasos para que no tengas que aprender herramientas nuevas: tú
              nos das la información de tu negocio y nosotros la convertimos en un catálogo listo
              para recibir clientes. La llamada por Meet es opcional.
            </p>
          </div>

          <div className="process-grid">
            {PASOS.map((paso, index) => (
              <article
                key={paso.numero}
                className="process-card"
                style={{ transitionDelay: visible ? `${index * 90}ms` : "0ms" }}
              >
                <div className="process-card-top">
                  <span className="process-number">{paso.numero}</span>
                  {paso.opcional && <span className="process-tag">Opcional</span>}
                </div>
                <h3>{paso.titulo}</h3>
                <p>{paso.resumen}</p>
              </article>
            ))}
          </div>

          <div className="process-footer">
            <Link href="/proceso" className="process-link">
              Ver el proceso completo y qué material necesitas →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
