import type { PlanId } from "./pricing";

export type Proyecto = {
  slug: string;
  nombre: string;
  categoria: string;
  rubro: string;
  link: string;
  imagen: string;
  ancho: number;
  alto: number;
  plan: PlanId;
  resumen: string;
  muestra: string[];
  idealPara: string;
};

export const PROYECTOS: Proyecto[] = [
  {
    slug: "carteras",
    nombre: "Carteras",
    categoria: "E-commerce",
    rubro: "Accesorios y bolsos",
    link: "https://demo-carteras.vercel.app/",
    imagen: "/demos/carteras.png",
    ancho: 1665,
    alto: 869,
    plan: "esencial",
    resumen:
      "Catálogo para una tienda de carteras, bolsos, mochilas y billeteras. Cada producto muestra su precio, oferta, colores y material, con un botón para consultar por WhatsApp.",
    muestra: [
      "16 productos con precio normal y precio de oferta",
      "Colores, material y estilo en cada ficha",
      "Estado de stock: disponible o bajo pedido",
      "Botón \"Consultar\" por WhatsApp en cada producto",
    ],
    idealPara:
      "Tiendas de accesorios que hoy venden por Instagram o WhatsApp y quieren dejar de mandar fotos una por una.",
  },
  {
    slug: "zapatos",
    nombre: "Zapatos",
    categoria: "E-commerce",
    rubro: "Calzado",
    link: "https://demo-zapatos.vercel.app/",
    imagen: "/demos/zapatos.png",
    ancho: 1543,
    alto: 871,
    plan: "pro",
    resumen:
      "Tienda de calzado con el catálogo organizado por tipo de zapato. El cliente entra a su categoría, revisa las tallas disponibles y consulta el modelo por WhatsApp.",
    muestra: [
      "6 categorías: zapatillas, casuales, formales, sandalias, botines y niños",
      "Tallas disponibles en cada modelo",
      "Etiquetas de oferta con el precio anterior",
      "Botón \"Consultar modelo\" por WhatsApp",
    ],
    idealPara: "Negocios con muchos modelos y tallas, donde ordenar por categorías ahorra preguntas repetidas.",
  },
  {
    slug: "eventos",
    nombre: "Eventos",
    categoria: "Entretenimiento",
    rubro: "Decoración de eventos",
    link: "https://demo-eventos-navy.vercel.app/",
    imagen: "/demos/eventos.png",
    ancho: 1485,
    alto: 865,
    plan: "esencial",
    resumen:
      "Un catálogo de servicios, no de productos: decoración para cumpleaños, baby showers y aniversarios, con precios referenciales, paquetes y botón para cotizar por WhatsApp.",
    muestra: [
      "Servicios con precio \"desde\" y duración del montaje",
      "3 paquetes comparables: Básico, Especial y Premium",
      "Galería de trabajos y opiniones de clientes",
      "Botones \"Cotizar\" y \"Quiero algo similar\" por WhatsApp",
    ],
    idealPara: "Negocios de servicios que cotizan a medida: decoración, fotografía, catering o belleza.",
  },
  {
    slug: "ropa",
    nombre: "Ropa",
    categoria: "Moda",
    rubro: "Ropa urbana",
    link: "https://demo-ropa.vercel.app/",
    imagen: "/demos/ropa.png",
    ancho: 1750,
    alto: 859,
    plan: "pro",
    resumen:
      "Tienda de ropa urbana con prendas por categoría y una sección que le explica al cliente cómo comprar por WhatsApp en 3 pasos.",
    muestra: [
      "6 categorías: polos, camisas, jeans, casacas, zapatillas y accesorios",
      "Prendas destacadas con precio de oferta",
      "Sección \"Compra fácil por WhatsApp\" en 3 pasos",
      "Botón \"Quiero esta prenda\" en cada producto",
    ],
    idealPara: "Marcas de ropa que venden por redes y quieren que el cliente llegue al chat sabiendo qué prenda quiere.",
  },
];
