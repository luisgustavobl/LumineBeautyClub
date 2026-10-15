"use client";

import { useEffect, useRef, useState } from "react";
import type { Foto as FotoTipo } from "@/content";
import Foto from "./Foto";

// Faixa horizontal de fotos: arrasta no celular, setas no desktop.
export default function Carrossel({ fotos, titulo }: { fotos: FotoTipo[]; titulo: string }) {
  const trilho = useRef<HTMLDivElement>(null);
  const [podeVoltar, setPodeVoltar] = useState(false);
  const [podeAvancar, setPodeAvancar] = useState(true);

  const atualizar = () => {
    const el = trilho.current;
    if (!el) return;
    setPodeVoltar(el.scrollLeft > 4);
    setPodeAvancar(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    atualizar();
    window.addEventListener("resize", atualizar);
    return () => window.removeEventListener("resize", atualizar);
  }, []);

  const passar = (direcao: 1 | -1) => {
    const el = trilho.current;
    if (!el) return;
    const item = el.querySelector<HTMLElement>(".carrossel-item");
    const passo = item ? item.offsetWidth + 16 : el.clientWidth * 0.8;
    el.scrollBy({ left: passo * direcao, behavior: "smooth" });
  };

  return (
    <div className="carrossel">
      <div
        ref={trilho}
        className="carrossel-trilho"
        onScroll={atualizar}
        tabIndex={0}
        aria-label={`Portfólio de ${titulo}`}
      >
        {fotos.map((foto, i) => (
          <Foto key={i} foto={foto} className="carrossel-item" />
        ))}
      </div>
      <button
        type="button"
        className="carrossel-seta carrossel-seta--voltar"
        onClick={() => passar(-1)}
        disabled={!podeVoltar}
        aria-label="Fotos anteriores"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 5l-7 7 7 7" /></svg>
      </button>
      <button
        type="button"
        className="carrossel-seta carrossel-seta--avancar"
        onClick={() => passar(1)}
        disabled={!podeAvancar}
        aria-label="Próximas fotos"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 5l7 7-7 7" /></svg>
      </button>
    </div>
  );
}
