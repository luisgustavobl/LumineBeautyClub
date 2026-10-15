import Image from "next/image";
import type { Foto as FotoTipo } from "@/content";

// Mostra a foto real quando `src` existe; senão, um placeholder no tom da marca.
export default function Foto({
  foto,
  className = "",
  sizes = "(max-width: 768px) 80vw, 320px",
}: {
  foto: FotoTipo;
  className?: string;
  sizes?: string;
}) {
  return (
    <div className={`foto ${className}`}>
      {foto.src ? (
        <Image src={foto.src} alt={foto.alt} fill sizes={sizes} />
      ) : (
        <div className="foto-placeholder" role="img" aria-label={`${foto.alt} (foto em breve)`}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="4" width="18" height="16" rx="2" />
            <circle cx="16" cy="9" r="1.6" />
            <path d="M3 17l5-5 4 4 3-3 6 6" />
          </svg>
          <span>{foto.alt}</span>
        </div>
      )}
    </div>
  );
}
