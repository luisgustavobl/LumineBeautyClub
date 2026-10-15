"use client";

import { useEffect, useRef, useState } from "react";
import { marca, navegacao } from "@/content";

// Navbar fixa com o sublinhado deslizante do protótipo, sem login.
export default function Navbar() {
  const [aberto, setAberto] = useState(false);
  const [indicador, setIndicador] = useState({ left: 0, width: 0 });
  const itens = useRef<(HTMLLIElement | null)[]>([]);

  const moverPara = (el: HTMLLIElement | null) => {
    if (!el?.parentElement) return setIndicador({ left: 0, width: 0 });
    const r = el.getBoundingClientRect();
    const p = el.parentElement.getBoundingClientRect();
    setIndicador({ left: r.left - p.left, width: r.width });
  };

  useEffect(() => {
    const fechar = () => setAberto(false);
    window.addEventListener("resize", fechar);
    return () => window.removeEventListener("resize", fechar);
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <a href="#inicio" className="navbar-logo" onClick={() => setAberto(false)}>
          {marca.nome}
        </a>

        <nav aria-label="Principal">
          <ul
            className={`navbar-menu ${aberto ? "is-open" : ""}`}
            onMouseLeave={() => setIndicador({ left: 0, width: 0 })}
          >
            {navegacao.map((item, i) => (
              <li
                key={item.href}
                ref={(el) => { itens.current[i] = el; }}
                onMouseEnter={() => moverPara(itens.current[i])}
              >
                <a href={item.href} onClick={() => setAberto(false)}>
                  {item.label}
                </a>
              </li>
            ))}
            <span
              className="navbar-indicador"
              style={{ left: indicador.left, width: indicador.width, opacity: indicador.width ? 1 : 0 }}
              aria-hidden="true"
            />
          </ul>
        </nav>

        <button
          type="button"
          className="navbar-toggle"
          onClick={() => setAberto((v) => !v)}
          aria-expanded={aberto}
          aria-label={aberto ? "Fechar menu" : "Abrir menu"}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
