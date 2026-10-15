// Conteúdo editável da página inicial.
// Para trocar um placeholder por uma foto real, coloque o arquivo em
// public/fotos/ e preencha `src` (ex.: "/fotos/gleicy-1.jpg").

export type Foto = {
  src?: string;
  alt: string;
};

export type Servico = {
  id: string;
  nome: string;
  descricao: string;
  icone: "pincel" | "penteado" | "mao" | "lua" | "livro";
  foto: Foto;
};

export type Profissional = {
  id: string;
  nome: string;
  especialidade: string;
  sobre: string;
  destaques: string[];
  foto: Foto;
  portfolio: Foto[];
};

export const marca = {
  nome: "Luminé",
  subtitulo: "Beauty Club",
  slogan: "Maquiagem, penteados, unhas e tattoo em um só espaço na Praia de Iracema.",
};

export const contato = {
  // TODO: substituir pelo número real (formato internacional, só dígitos)
  whatsapp: "5585900000000",
  // TODO: substituir pelo @ real
  instagram: "luminebeautyclub",
  endereco: "Praia de Iracema, Fortaleza – CE",
  horario: "Atendimento com hora marcada",
};

export const servicos: Servico[] = [
  {
    id: "makes",
    nome: "Makes",
    descricao: "Social, noivas, debutantes e eventos.",
    icone: "pincel",
    foto: { alt: "Maquiagem social" },
  },
  {
    id: "penteados",
    nome: "Penteados",
    descricao: "Do coque clássico às ondas soltas.",
    icone: "penteado",
    foto: { alt: "Penteado para evento" },
  },
  {
    id: "manicure",
    nome: "Manicure",
    descricao: "Unhas impecáveis para o dia a dia ou para a festa.",
    icone: "mao",
    foto: { alt: "Unhas decoradas" },
  },
  {
    id: "tattoo",
    nome: "Tattoo",
    descricao: "Traços finos e delicados, do seu jeito.",
    icone: "lua",
    foto: { alt: "Tatuagem fine line" },
  },
  {
    id: "cursos",
    nome: "Cursos",
    descricao: "Automaquiagem, maquiagem profissional e penteados.",
    icone: "livro",
    foto: { alt: "Turma de curso de maquiagem" },
  },
];

export const profissionais: Profissional[] = [
  {
    id: "gleicy",
    nome: "Gleicy Lima",
    especialidade: "Make & Penteado",
    sobre:
      "Maquiadora e educadora em Fortaleza, fundadora do Luminé. Atende noivas, debutantes e eventos e forma novas profissionais em seus cursos.",
    destaques: ["Noivas & debutantes", "Cursos de automaquiagem", "Maquiagem profissional"],
    foto: { alt: "Retrato de Gleicy Lima" },
    portfolio: [
      { alt: "Make de noiva" },
      { alt: "Penteado preso" },
      { alt: "Make social" },
      { alt: "Turma de curso" },
      { alt: "Make de debutante" },
      { alt: "Penteado com ondas" },
    ],
  },
  {
    id: "evelyne",
    nome: "Evelyne & assistente",
    especialidade: "Manicure",
    sobre:
      "Cuidado completo com as unhas, da manutenção à nail art para ocasiões especiais.",
    destaques: ["Esmaltação em gel", "Nail art", "Spa das mãos"],
    foto: { alt: "Retrato de Evelyne" },
    portfolio: [
      { alt: "Unhas nude" },
      { alt: "Nail art floral" },
      { alt: "Francesinha" },
      { alt: "Unhas vermelhas" },
      { alt: "Unhas em gel" },
    ],
  },
  {
    id: "ganshina",
    nome: "Ganshina",
    especialidade: "Tattoo",
    sobre:
      "Tatuagens delicadas em fine line, criadas a partir da sua ideia.",
    destaques: ["Fine line", "Projetos autorais", "Flash tattoos"],
    foto: { alt: "Retrato de Ganshina" },
    portfolio: [
      { alt: "Tattoo floral" },
      { alt: "Tattoo lua e estrelas" },
      { alt: "Lettering" },
      { alt: "Tattoo minimalista" },
      { alt: "Tattoo botânica" },
    ],
  },
];

export const navegacao = [
  { label: "Serviços", href: "#servicos" },
  { label: "Quem somos", href: "#profissionais" },
  { label: "Galeria", href: "#galeria" },
  { label: "Contato", href: "#contato" },
];
