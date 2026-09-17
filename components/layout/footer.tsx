import Link from "next/link";
import { NAV_LINKS } from "@/constants/links";
import { waLink } from "@/constants/contact";

export default function Footer() {
  const anio = new Date().getFullYear();

  return (
    <>
      <style>{`
        .footer-root * { box-sizing: border-box; }
        .footer-root {
          background: #0d1117;
          border-top: 1px solid rgba(196,218,250,0.08);
          padding: 44px 40px 28px;
          font-family: var(--font-jakarta), sans-serif;
        }

        /* ── FOOTER LAYOUT ── */
        .footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: 32px;
        }

        .footer-brand {
          font-size: 18px;
          font-weight: 900;
          letter-spacing: -0.3px;
          color: #fcffff;
          text-decoration: none;
        }
        .footer-brand span { color: #4d82bc; }

        .footer-tagline {
          font-size: 14px;
          line-height: 1.6;
          color: rgba(196,218,250,0.55);
          font-weight: 500;
          margin: 10px 0 0;
          max-width: 34ch;
        }

        .footer-title {
          font-size: 11px;
          font-weight: 800;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(196,218,250,0.45);
          margin: 0 0 14px;
        }

        .footer-links {
          list-style: none;
          margin: 0;
          padding: 0;
          display: grid;
          gap: 10px;
        }
        .footer-links a {
          font-size: 14px;
          color: rgba(252,255,255,0.75);
          text-decoration: none;
          transition: color 0.2s ease;
        }
        .footer-links a:hover { color: #fcffff; }

        .footer-copy {
          max-width: 1200px;
          margin: 36px auto 0;
          padding-top: 20px;
          border-top: 1px solid rgba(196,218,250,0.08);
          font-size: 13px;
          color: rgba(196,218,250,0.4);
        }

        /* ── RESPONSIVE ── */
        @media (max-width: 680px) {
          .footer-root { padding: 36px 20px 24px; }
          .footer-inner { grid-template-columns: 1fr 1fr; gap: 28px; }
          .footer-brand-col { grid-column: 1 / -1; }
        }
      `}</style>

      <footer className="footer-root">
        <div className="footer-inner">
          <div className="footer-brand-col">
            <Link href="/" className="footer-brand">
              Nexty<span>Soft</span>
            </Link>
            <p className="footer-tagline">
              Soluciones digitales para tu negocio: catálogos conectados a WhatsApp.
            </p>
          </div>

          <nav aria-label="Páginas del sitio">
            <p className="footer-title">Páginas</p>
            <ul className="footer-links">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="footer-title">Contacto</p>
            <ul className="footer-links">
              <li>
                <a href={waLink("Hola, quisiera más información 👋")} target="_blank" rel="noopener noreferrer">
                  Escríbenos por WhatsApp
                </a>
              </li>
              <li>
                <Link href="/calculadora">Cotiza tu catálogo</Link>
              </li>
              <li>
                <Link href="/proceso#llamada">Agenda una llamada</Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="footer-copy">© {anio} Nexty Soft. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}
