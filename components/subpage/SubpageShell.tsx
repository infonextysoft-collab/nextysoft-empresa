import Link from "next/link";
import "./subpage.css";
import { waLink } from "@/constants/contact";
import { WhatsAppIcon } from "@/components/ui/icons";

export function SubpageShell({ children }: { children: React.ReactNode }) {
  return <main className="sp-root">{children}</main>;
}

export function SubpageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead: React.ReactNode;
  children?: React.ReactNode;
}) {
  return (
    <header className="sp-hero">
      <div className="sp-wrap">
        <p className="sp-eyebrow">{eyebrow}</p>
        <h1 className="sp-h1">{title}</h1>
        <p className="sp-lead">{lead}</p>
        {children && <div className="sp-actions">{children}</div>}
      </div>
    </header>
  );
}

export function SectionHeading({ title, sub, id }: { title: string; sub?: React.ReactNode; id?: string }) {
  return (
    <div className="sp-heading">
      <h2 className="sp-h2" id={id}>
        {title}
      </h2>
      {sub && <p className="sp-sub">{sub}</p>}
    </div>
  );
}

export function CtaPanel({
  title,
  text,
  mensaje,
  boton = "Escríbenos por WhatsApp",
  secundario,
}: {
  title: string;
  text: string;
  mensaje: string;
  boton?: string;
  secundario?: { href: string; label: string };
}) {
  return (
    <div className="sp-cta">
      <h2 className="sp-cta-title">{title}</h2>
      <p className="sp-cta-text">{text}</p>
      <div className="sp-actions sp-actions-center">
        <a href={waLink(mensaje)} target="_blank" rel="noopener noreferrer" className="sp-btn sp-btn-wa">
          <WhatsAppIcon size={18} />
          {boton}
        </a>
        {secundario && (
          <Link href={secundario.href} className="sp-btn sp-btn-on-dark">
            {secundario.label}
          </Link>
        )}
      </div>
    </div>
  );
}
