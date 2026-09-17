export type Integrante = {
  nombre: string;
  rol: string;
  bio: string;
  /** Ruta dentro de /public, por ejemplo "/equipo/tu-foto.jpg". */
  foto?: string;
};

// Completa esta lista para mostrar la sección "Quién está detrás" en /nosotros.
// Mientras esté vacía, en producción la sección no se muestra (en desarrollo verás un recordatorio).
export const EQUIPO: Integrante[] = [];
