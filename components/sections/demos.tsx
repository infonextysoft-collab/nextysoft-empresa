"use client";
import { useState } from "react";

const proyectos = [
  {
    id: 1,
    nombre: "Carteras",
    categoria: "E-commerce",
    link: "https://demo-carteras.vercel.app/",
    imagen: "/demos/carteras.png",
  },
  {
    id: 2,
    nombre: "Zapatos",
    categoria: "E-commerce",
    link: "https://demo-zapatos.vercel.app/",
    imagen: "/demos/zapatos.png",
  },
  {
    id: 3,
    nombre: "Eventos",
    categoria: "Entretenimiento",
    link: "https://demo-eventos-navy.vercel.app/",
    imagen: "/demos/eventos.png",
  },
  {
    id: 4,
    nombre: "Ropa",
    categoria: "Moda",
    link: "https://demo-ropa.vercel.app/",
    imagen: "/demos/ropa.png",
  },
];

export default function ProjectDemos() {
  const [activo, setActivo] = useState<number | null>(null);

  return (
    <section
      id="proyectos"
      style={{
        background: "#ffffff", // ← esto
        padding: "60px 24px",
        maxWidth: 1200,
        margin: "0 auto",
      }}
    >
      {/* Header */}
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <span
          style={{
            display: "inline-block",
            background: "#e8f0fe",
            color: "#1a56db",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            padding: "6px 16px",
            borderRadius: 20,
            marginBottom: 16,
          }}
        >
          Proyectos reales
        </span>
        <h2
          style={{
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 700,
            color: "#0d1b4b",
            margin: "0 0 12px",
          }}
        >
          Mira lo que podemos crear
        </h2>
        <p
          style={{
            fontSize: 16,
            color: "#6b7280",
            maxWidth: 480,
            margin: "0 auto",
          }}
        >
          Cada diseño es 100% adaptable al celular y listo para vender.
        </p>
      </div>

      {/* Cards Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: 24,
        }}
      >
        {proyectos.map((p) => (
          <div
            key={p.id}
            onMouseEnter={() => setActivo(p.id)}
            onMouseLeave={() => setActivo(null)}
            style={{
              borderRadius: 14,
              overflow: "hidden",
              border:
                activo === p.id ? "2px solid #1a56db" : "2px solid transparent",
              boxShadow:
                activo === p.id
                  ? "0 12px 40px rgba(26,86,219,0.18)"
                  : "0 2px 16px rgba(0,0,0,0.08)",
              cursor: "pointer",
              transition: "all 0.25s ease",
              transform: activo === p.id ? "translateY(-4px)" : "translateY(0)",
              background: "#fff",
            }}
          >
            {/* Preview */}
            <div
              style={{
                height: 200,
                overflow: "hidden",
                position: "relative",
                background: "#f3f4f6",
              }}
            >
              {/* Barra navegador falsa */}
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  zIndex: 2,
                  background: "rgba(255,255,255,0.92)",
                  backdropFilter: "blur(4px)",
                  height: 22,
                  display: "flex",
                  alignItems: "center",
                  padding: "0 10px",
                  gap: 5,
                  borderBottom: "1px solid rgba(0,0,0,0.08)",
                }}
              >
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#ff5f57",
                  }}
                />
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#ffbd2e",
                  }}
                />
                <div
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#28c840",
                  }}
                />
                <div
                  style={{
                    flex: 1,
                    marginLeft: 6,
                    height: 12,
                    borderRadius: 6,
                    background: "#e5e7eb",
                    display: "flex",
                    alignItems: "center",
                    paddingLeft: 8,
                  }}
                >
                  <span style={{ fontSize: 8, color: "#9ca3af" }}>
                    {p.link}
                  </span>
                </div>
              </div>

              {/* Screenshot */}
              <img
                src={p.imagen}
                alt={p.nombre}
                style={{
                  position: "absolute",
                  inset: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />

              {/* Hover overlay */}
              {activo === p.id && (
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 3,
                    background: "rgba(26,86,219,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    style={{
                      background: "#1a56db",
                      color: "#fff",
                      fontSize: 13,
                      fontWeight: 700,
                      padding: "8px 18px",
                      borderRadius: 20,
                      textDecoration: "none",
                      boxShadow: "0 4px 14px rgba(26,86,219,0.4)",
                    }}
                  >
                    Ver demo →
                  </a>
                </div>
              )}
            </div>

            {/* Info */}
            <div style={{ padding: "12px 16px 16px" }}>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#1a56db",
                }}
              >
                {p.categoria}
              </span>
              <p
                style={{
                  margin: "4px 0 0",
                  fontWeight: 700,
                  fontSize: 15,
                  color: "#0d1b4b",
                }}
              >
                {p.nombre}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div style={{ textAlign: "center", marginTop: 52 }}>
        <p style={{ color: "#6b7280", marginBottom: 16, fontSize: 15 }}>
          ¿No ves tu rubro? Trabajamos con cualquier tipo de negocio.
        </p>
        <a
          href="https://wa.me/51999999999"
          target="_blank"
          rel="noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            background: "#25D366",
            color: "#fff",
            fontWeight: 700,
            fontSize: 15,
            padding: "13px 30px",
            borderRadius: 50,
            textDecoration: "none",
            boxShadow: "0 4px 20px rgba(37,211,102,0.35)",
          }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
          </svg>
          Pídenos tu demo gratis
        </a>
      </div>
    </section>
  );
}

// "use client";
// import { useState } from "react";

// const proyectos = [
//   {
//     id: 1,
//     nombre: "Carteras",
//     categoria: "E-commerce",
//     color: "#1a1a2e",
//     acento: "#e94560",
//     preview: (
//       <div style={{ background: "#1a1a2e", width: "100%", height: "100%", display: "flex", flexDirection: "column", padding: "12px", gap: "8px" }}>
//         <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//           <div style={{ display: "flex", gap: "6px" }}>
//             <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#ff5f57" }} />
//             <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#ffbd2e" }} />
//             <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#28c840" }} />
//           </div>
//           <div style={{ width: 40, height: 6, borderRadius: 3, background: "#e94560" }} />
//         </div>
//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px", flex: 1 }}>
//           {[1,2,3,4].map(i => (
//             <div key={i} style={{ background: "#16213e", borderRadius: 6, display: "flex", flexDirection: "column", padding: 6, gap: 4 }}>
//               <div style={{ flex: 1, background: "#0f3460", borderRadius: 4 }} />
//               <div style={{ width: "70%", height: 4, borderRadius: 2, background: "#e94560" }} />
//               <div style={{ width: "50%", height: 4, borderRadius: 2, background: "#444" }} />
//             </div>
//           ))}
//         </div>
//         <div style={{ height: 18, borderRadius: 4, background: "#e94560", display: "flex", alignItems: "center", justifyContent: "center" }}>
//           <div style={{ width: 40, height: 4, borderRadius: 2, background: "rgba(255,255,255,0.6)" }} />
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: 2,
//     nombre: "Restaurante",
//     categoria: "Carta Digital",
//     color: "#1b1500",
//     acento: "#f4a426",
//     preview: (
//       <div style={{ background: "#1b1500", width: "100%", height: "100%", display: "flex", flexDirection: "column", padding: "12px", gap: "8px" }}>
//         <div style={{ display: "flex", gap: "6px" }}>
//           <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#ff5f57" }} />
//           <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#ffbd2e" }} />
//           <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#28c840" }} />
//         </div>
//         <div style={{ display: "flex", gap: "6px" }}>
//           {["Entradas","Platos","Postres"].map(c => (
//             <div key={c} style={{ flex: 1, height: 14, borderRadius: 3, background: c === "Platos" ? "#f4a426" : "#2a1e00", display: "flex", alignItems: "center", justifyContent: "center" }}>
//               <div style={{ width: "60%", height: 4, borderRadius: 2, background: c === "Platos" ? "#1b1500" : "#444" }} />
//             </div>
//           ))}
//         </div>
//         {[1,2,3].map(i => (
//           <div key={i} style={{ display: "flex", gap: "8px", alignItems: "center", background: "#2a1e00", borderRadius: 6, padding: "6px" }}>
//             <div style={{ width: 30, height: 30, borderRadius: 4, background: "#3d2c00" }} />
//             <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 3 }}>
//               <div style={{ width: "80%", height: 4, borderRadius: 2, background: "#f4a426" }} />
//               <div style={{ width: "60%", height: 4, borderRadius: 2, background: "#555" }} />
//             </div>
//             <div style={{ width: 20, height: 14, borderRadius: 3, background: "#f4a426" }} />
//           </div>
//         ))}
//       </div>
//     ),
//   },
//   {
//     id: 3,
//     nombre: "Clínica",
//     categoria: "Servicios de Salud",
//     color: "#f0f7ff",
//     acento: "#2563eb",
//     preview: (
//       <div style={{ background: "#f0f7ff", width: "100%", height: "100%", display: "flex", flexDirection: "column", padding: "12px", gap: "8px" }}>
//         <div style={{ display: "flex", gap: "6px" }}>
//           <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#ff5f57" }} />
//           <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#ffbd2e" }} />
//           <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#28c840" }} />
//         </div>
//         <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//           <div style={{ width: 50, height: 8, borderRadius: 2, background: "#2563eb" }} />
//           <div style={{ width: 30, height: 12, borderRadius: 3, background: "#2563eb" }} />
//         </div>
//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 5 }}>
//           {["🩺","💊","🏥"].map((ic,i) => (
//             <div key={i} style={{ background: "#fff", borderRadius: 6, padding: 6, display: "flex", flexDirection: "column", gap: 4, alignItems: "center", border: "1px solid #dbeafe" }}>
//               <div style={{ fontSize: 14 }}>{ic}</div>
//               <div style={{ width: "80%", height: 4, borderRadius: 2, background: "#93c5fd" }} />
//             </div>
//           ))}
//         </div>
//         <div style={{ flex: 1, background: "#fff", borderRadius: 6, padding: 8, display: "flex", flexDirection: "column", gap: 5, border: "1px solid #dbeafe" }}>
//           {[1,2,3].map(i => (
//             <div key={i} style={{ display: "flex", gap: 6, alignItems: "center" }}>
//               <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#2563eb" }} />
//               <div style={{ flex: 1, height: 4, borderRadius: 2, background: "#e0edff" }} />
//             </div>
//           ))}
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: 4,
//     nombre: "Academia",
//     categoria: "Cursos Online",
//     color: "#0f0c29",
//     acento: "#a855f7",
//     preview: (
//       <div style={{ background: "linear-gradient(135deg, #0f0c29 0%, #302b63 100%)", width: "100%", height: "100%", display: "flex", flexDirection: "column", padding: "12px", gap: "8px" }}>
//         <div style={{ display: "flex", gap: "6px" }}>
//           <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#ff5f57" }} />
//           <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#ffbd2e" }} />
//           <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#28c840" }} />
//         </div>
//         <div style={{ display: "flex", gap: "6px" }}>
//           <div style={{ flex: 1, height: 12, borderRadius: 3, background: "rgba(168,85,247,0.3)", border: "1px solid #a855f7" }} />
//           <div style={{ width: 40, height: 12, borderRadius: 3, background: "#a855f7" }} />
//         </div>
//         <div style={{ background: "rgba(168,85,247,0.15)", borderRadius: 8, padding: 8, border: "1px solid rgba(168,85,247,0.3)" }}>
//           <div style={{ width: "70%", height: 5, borderRadius: 2, background: "#a855f7", marginBottom: 4 }} />
//           <div style={{ width: "50%", height: 4, borderRadius: 2, background: "#666" }} />
//         </div>
//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5 }}>
//           {[1,2,3,4].map(i => (
//             <div key={i} style={{ background: "rgba(255,255,255,0.05)", borderRadius: 5, padding: 6, border: "1px solid rgba(255,255,255,0.1)" }}>
//               <div style={{ width: "80%", height: 4, borderRadius: 2, background: "#a855f7", marginBottom: 3 }} />
//               <div style={{ width: "60%", height: 3, borderRadius: 2, background: "#555" }} />
//             </div>
//           ))}
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: 5,
//     nombre: "Inmobiliaria",
//     categoria: "Propiedades",
//     color: "#f8f5f0",
//     acento: "#2d5a3d",
//     preview: (
//       <div style={{ background: "#f8f5f0", width: "100%", height: "100%", display: "flex", flexDirection: "column", padding: "12px", gap: "8px" }}>
//         <div style={{ display: "flex", gap: "6px" }}>
//           <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#ff5f57" }} />
//           <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#ffbd2e" }} />
//           <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#28c840" }} />
//         </div>
//         <div style={{ background: "#2d5a3d", borderRadius: 6, height: 40, display: "flex", alignItems: "center", padding: "0 8px", gap: 6 }}>
//           <div style={{ flex: 1, background: "rgba(255,255,255,0.2)", borderRadius: 3, height: 10 }} />
//           <div style={{ width: 20, height: 10, borderRadius: 3, background: "rgba(255,255,255,0.8)" }} />
//         </div>
//         <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 5, flex: 1 }}>
//           {[1,2,3,4].map(i => (
//             <div key={i} style={{ background: "#fff", borderRadius: 6, overflow: "hidden", border: "1px solid #e5e0d8" }}>
//               <div style={{ height: 30, background: i % 2 === 0 ? "#c8d8c0" : "#d8cfc0" }} />
//               <div style={{ padding: "4px 5px", display: "flex", flexDirection: "column", gap: 3 }}>
//                 <div style={{ width: "80%", height: 4, borderRadius: 2, background: "#2d5a3d" }} />
//                 <div style={{ width: "50%", height: 4, borderRadius: 2, background: "#aaa" }} />
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     ),
//   },
// ];

// export default function ProjectDemos() {
// const [activo, setActivo] = useState<number | null>(null);

//   return (
//     <section style={{ padding: "60px 24px", maxWidth: 1200, margin: "0 auto" }}>
//       {/* Header */}
//       <div style={{ textAlign: "center", marginBottom: 48 }}>
//         <span style={{
//           display: "inline-block",
//           background: "#e8f0fe",
//           color: "#1a56db",
//           fontSize: 13,
//           fontWeight: 600,
//           letterSpacing: "0.08em",
//           textTransform: "uppercase",
//           padding: "6px 16px",
//           borderRadius: 20,
//           marginBottom: 16,
//         }}>
//           Proyectos reales
//         </span>
//         <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, color: "#0d1b4b", margin: "0 0 12px" }}>
//           Mira lo que podemos crear
//         </h2>
//         <p style={{ fontSize: 16, color: "#6b7280", maxWidth: 480, margin: "0 auto" }}>
//           Cada diseño es 100% adaptable al celular y listo para vender.
//         </p>
//       </div>

//       {/* Cards Grid */}
//       <div style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
//         gap: 20,
//       }}>
//         {proyectos.map((p) => (
//           <div
//             key={p.id}
//             onMouseEnter={() => setActivo(p.id)}
//             onMouseLeave={() => setActivo(null)}
//             style={{
//               borderRadius: 14,
//               overflow: "hidden",
//               border: activo === p.id ? "2px solid #1a56db" : "2px solid transparent",
//               boxShadow: activo === p.id
//                 ? "0 12px 40px rgba(26,86,219,0.18)"
//                 : "0 2px 16px rgba(0,0,0,0.08)",
//               cursor: "pointer",
//               transition: "all 0.25s ease",
//               transform: activo === p.id ? "translateY(-4px)" : "translateY(0)",
//               background: "#fff",
//             }}
//           >
//             {/* Preview window */}
//             <div style={{
//               height: 180,
//               overflow: "hidden",
//               position: "relative",
//               background: "#eee",
//             }}>
//               {/* Fake browser bar */}
//               <div style={{
//                 position: "absolute", top: 0, left: 0, right: 0, zIndex: 2,
//                 background: "rgba(255,255,255,0.85)",
//                 backdropFilter: "blur(4px)",
//                 height: 20,
//                 display: "flex",
//                 alignItems: "center",
//                 padding: "0 8px",
//                 gap: 4,
//                 borderBottom: "1px solid rgba(0,0,0,0.08)"
//               }}>
//                 <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#ff5f57" }} />
//                 <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#ffbd2e" }} />
//                 <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#28c840" }} />
//               </div>
//               <div style={{ position: "absolute", inset: 0, display: "flex" }}>
//                 {p.preview}
//               </div>
//               {/* Hover overlay */}
//               {activo === p.id && (
//                 <div style={{
//                   position: "absolute", inset: 0, zIndex: 3,
//                   background: "rgba(26,86,219,0.08)",
//                   display: "flex", alignItems: "center", justifyContent: "center",
//                 }}>
//                   <span style={{
//                     background: "#1a56db",
//                     color: "#fff",
//                     fontSize: 12,
//                     fontWeight: 600,
//                     padding: "6px 14px",
//                     borderRadius: 20,
//                   }}>
//                     Ver demo →
//                   </span>
//                 </div>
//               )}
//             </div>

//             {/* Info */}
//             <div style={{ padding: "12px 14px 14px" }}>
//               <span style={{
//                 fontSize: 11,
//                 fontWeight: 600,
//                 letterSpacing: "0.06em",
//                 textTransform: "uppercase",
//                 color: "#1a56db",
//               }}>
//                 {p.categoria}
//               </span>
//               <p style={{ margin: "4px 0 0", fontWeight: 600, fontSize: 14, color: "#0d1b4b" }}>
//                 {p.nombre}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* CTA */}
//       <div style={{ textAlign: "center", marginTop: 48 }}>
//         <p style={{ color: "#6b7280", marginBottom: 16, fontSize: 15 }}>
//           ¿No ves tu rubro? Trabajamos con cualquier tipo de negocio.
//         </p>
//         <a
//           href="https://wa.me/51999999999"
//           target="_blank"
//           rel="noreferrer"
//           style={{
//             display: "inline-flex",
//             alignItems: "center",
//             gap: 8,
//             background: "#25D366",
//             color: "#fff",
//             fontWeight: 700,
//             fontSize: 15,
//             padding: "12px 28px",
//             borderRadius: 50,
//             textDecoration: "none",
//             boxShadow: "0 4px 20px rgba(37,211,102,0.35)",
//           }}
//         >
//           <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
//             <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
//           </svg>
//           Pídenos tu demo gratis
//         </a>
//       </div>
//     </section>
//   );
// }
