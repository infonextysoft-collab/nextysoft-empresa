// Número de WhatsApp en formato internacional, sin "+" ni espacios (51 = Perú).
// TODO: reemplazar por el número real antes de publicar. Es el único lugar donde está.
export const WA_NUMBER = "51999999999";

export const waLink = (mensaje?: string) =>
  mensaje
    ? `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(mensaje)}`
    : `https://wa.me/${WA_NUMBER}`;

/** "+51 999 999 999" para mostrar en pantalla o en el PDF. */
export const WA_DISPLAY = `+${WA_NUMBER.slice(0, 2)} ${WA_NUMBER.slice(2, 5)} ${WA_NUMBER.slice(5, 8)} ${WA_NUMBER.slice(8)}`;
