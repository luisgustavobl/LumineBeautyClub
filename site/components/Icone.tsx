import type { Servico } from "@/content";

// Ícones de traço fino, no espírito dos desenhos do conceito.
const caminhos: Record<Servico["icone"], React.ReactNode> = {
  pincel: (
    <>
      <path d="M14 3l7 7-6 2-3-3 2-6z" />
      <path d="M12 9l-8 8a2 2 0 003 3l8-8" />
    </>
  ),
  penteado: (
    <>
      <circle cx="12" cy="9" r="5" />
      <path d="M7 9c0 6 2 9 5 12M17 9c0 6-2 9-5 12" />
      <circle cx="12" cy="3" r="1.5" />
    </>
  ),
  mao: (
    <>
      <path d="M8 13V5a1.5 1.5 0 013 0v6" />
      <path d="M11 11V3.5a1.5 1.5 0 013 0V11" />
      <path d="M14 11V5a1.5 1.5 0 013 0v8" />
      <path d="M8 13l-1.5-2a1.6 1.6 0 00-2.6 1.8L8 19a4 4 0 003.3 2H14a4 4 0 004-4v-4" />
    </>
  ),
  lua: (
    <>
      <path d="M15 4a8 8 0 100 16 7 7 0 010-16z" />
      <path d="M19 4l.8 1.7 1.7.8-1.7.8L19 9l-.8-1.7-1.7-.8 1.7-.8z" />
    </>
  ),
  livro: (
    <>
      <path d="M3 5c3-1 6-1 9 1 3-2 6-2 9-1v14c-3-1-6-1-9 1-3-2-6-2-9-1z" />
      <path d="M12 6v14" />
    </>
  ),
};

export default function Icone({ nome }: { nome: Servico["icone"] }) {
  return (
    <svg className="icone" viewBox="0 0 24 24" aria-hidden="true">
      {caminhos[nome]}
    </svg>
  );
}
