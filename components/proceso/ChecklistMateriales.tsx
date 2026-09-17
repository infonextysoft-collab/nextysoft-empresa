"use client";

import { useState } from "react";
import { waLink } from "@/constants/contact";
import { CameraIcon, CheckIcon, PaletteIcon, PhoneIcon, SparkIcon, TextIcon, WhatsAppIcon } from "@/components/ui/icons";

const MATERIALES = [
  {
    id: "fotos",
    Icon: CameraIcon,
    titulo: "Fotos de cada producto",
    desc: "Con buena luz y, de preferencia, el mismo fondo o estilo entre todas.",
  },
  {
    id: "logo",
    Icon: SparkIcon,
    titulo: "Logo en alta resolución",
    desc: "En formato PNG o SVG. Evita capturas de pantalla o versiones borrosas.",
  },
  {
    id: "colores",
    Icon: PaletteIcon,
    titulo: "Colores de marca",
    desc: "Si ya los tienes definidos: el código de color o una imagen de ejemplo.",
    opcional: true,
  },
  {
    id: "whatsapp",
    Icon: PhoneIcon,
    titulo: "Número de WhatsApp",
    desc: "El que irá en los botones de contacto de tu catálogo.",
  },
  {
    id: "textos",
    Icon: TextIcon,
    titulo: "Nombres y descripciones cortas",
    desc: "Si no las tienes listas, las redactamos con la información que nos compartas.",
    opcional: true,
  },
];

export default function ChecklistMateriales() {
  const [listos, setListos] = useState<string[]>([]);

  const alternar = (id: string) =>
    setListos((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const obligatoriosListos = MATERIALES.every((m) => m.opcional || listos.includes(m.id));

  return (
    <div className="sp-card">
      <div className="sp-check-head">
        <h3 className="sp-h3">Checklist de materiales</h3>
        <span className="sp-tag" aria-live="polite">
          {listos.length} de {MATERIALES.length} listos
        </span>
      </div>
      <div className="sp-progress" aria-hidden="true">
        <div className="sp-progress-bar" style={{ transform: `scaleX(${listos.length / MATERIALES.length})` }} />
      </div>

      <div className="sp-materials">
        {MATERIALES.map(({ id, Icon, titulo, desc, opcional }) => {
          const hecho = listos.includes(id);
          return (
            <label key={id} className={`sp-material${hecho ? " is-done" : ""}`}>
              <input type="checkbox" checked={hecho} onChange={() => alternar(id)} />
              <span className="sp-box" aria-hidden="true">
                <CheckIcon size={14} />
              </span>
              <span className="sp-material-icon" aria-hidden="true">
                <Icon size={20} />
              </span>
              <span>
                <span className="sp-material-title">
                  {titulo}
                  {opcional && <span className="sp-tag sp-tag-outline">Si lo tienes</span>}
                </span>
                <span className="sp-material-desc">{desc}</span>
              </span>
            </label>
          );
        })}
      </div>

      <a
        href={waLink(
          obligatoriosListos
            ? "Hola, ya subí mi material a la carpeta de Drive ✅"
            : "Hola, tengo una duda sobre qué material enviar para mi catálogo",
        )}
        target="_blank"
        rel="noopener noreferrer"
        className={`sp-btn ${obligatoriosListos ? "sp-btn-wa" : "sp-btn-ghost"} sp-check-cta`}
      >
        <WhatsAppIcon size={18} />
        {obligatoriosListos ? "Avisar que ya subí mi material" : "Tengo una duda sobre el material"}
      </a>
    </div>
  );
}
