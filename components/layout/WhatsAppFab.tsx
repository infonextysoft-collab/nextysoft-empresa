import { waLink } from "@/constants/contact";
import { WhatsAppIcon } from "@/components/ui/icons";

export default function WhatsAppFab() {
  return (
    <a
      href={waLink("Hola, quisiera más información 👋")}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-fab"
      aria-label="Escríbenos por WhatsApp"
    >
      <WhatsAppIcon size={20} />
      <span className="wa-fab-label">Escríbenos</span>
    </a>
  );
}
