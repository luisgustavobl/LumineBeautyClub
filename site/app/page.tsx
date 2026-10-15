import Navbar from "@/components/Navbar";
import Foto from "@/components/Foto";
import Icone from "@/components/Icone";
import Carrossel from "@/components/Carrossel";
import { contato, marca, profissionais, servicos } from "@/content";

const linkWhatsapp = `https://wa.me/${contato.whatsapp}?text=${encodeURIComponent(
  "Olá! Vim pelo site do Luminé e gostaria de agendar um horário."
)}`;

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        {/* LOGO / ABERTURA */}
        <section id="inicio" className="hero">
          <h1 className="hero-logo">
            {marca.nome}
            <span className="hero-sub">
              <span>Beauty</span>
              <svg viewBox="0 0 24 12" aria-hidden="true"><path d="M2 2l10 8 10-8" /></svg>
              <span>Club</span>
            </span>
          </h1>
          <p className="hero-slogan">{marca.slogan}</p>
          <a className="botao" href={linkWhatsapp} target="_blank" rel="noopener noreferrer">
            Agendar pelo WhatsApp
          </a>
        </section>

        <div className="faixa" aria-hidden="true" />

        {/* SERVIÇOS */}
        <section id="servicos" className="secao">
          <header className="secao-cabecalho">
            <p className="sobretitulo">O que fazemos</p>
            <h2>Serviços</h2>
          </header>
          <ul className="servicos">
            {servicos.map((s) => (
              <li key={s.id} className="servico">
                <Foto foto={s.foto} className="servico-foto" sizes="(max-width: 768px) 50vw, 220px" />
                <div className="servico-texto">
                  <Icone nome={s.icone} />
                  <h3>{s.nome}</h3>
                  <p>{s.descricao}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* PROFISSIONAIS + PORTFÓLIO */}
        <section id="profissionais" className="secao secao--clara">
          <header className="secao-cabecalho">
            <p className="sobretitulo">Quem somos</p>
            <h2>Profissionais</h2>
          </header>
          <div className="profissionais">
            {profissionais.map((p) => (
              <article key={p.id} className="profissional">
                <div className="profissional-info">
                  <Foto foto={p.foto} className="profissional-retrato" sizes="96px" />
                  <div>
                    <p className="sobretitulo">{p.especialidade}</p>
                    <h3>{p.nome}</h3>
                  </div>
                  <p className="profissional-sobre">{p.sobre}</p>
                  <ul className="etiquetas">
                    {p.destaques.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </div>
                <Carrossel fotos={p.portfolio} titulo={p.nome} />
              </article>
            ))}
          </div>
        </section>

        {/* GALERIA (em construção) */}
        <section id="galeria" className="secao">
          <header className="secao-cabecalho">
            <p className="sobretitulo">Em breve</p>
            <h2>Galeria</h2>
          </header>
          <div className="galeria">
            {Array.from({ length: 6 }, (_, i) => (
              <Foto key={i} foto={{ alt: `Foto ${i + 1} da galeria` }} className="galeria-item" />
            ))}
          </div>
        </section>

        {/* CONTATO */}
        <section id="contato" className="secao secao--clara">
          <header className="secao-cabecalho">
            <p className="sobretitulo">Vamos conversar</p>
            <h2>Contato</h2>
          </header>
          <div className="contato">
            <div className="contato-info">
              <p>
                <strong>Endereço</strong>
                {contato.endereco}
              </p>
              <p>
                <strong>Horário</strong>
                {contato.horario}
              </p>
              <p>
                <strong>Instagram</strong>
                <a href={`https://instagram.com/${contato.instagram}`} target="_blank" rel="noopener noreferrer">
                  @{contato.instagram}
                </a>
              </p>
              <a className="botao" href={linkWhatsapp} target="_blank" rel="noopener noreferrer">
                Chamar no WhatsApp
              </a>
            </div>
            <iframe
              className="contato-mapa"
              title="Mapa: Praia de Iracema, Fortaleza"
              src={`https://www.google.com/maps?q=${encodeURIComponent(contato.endereco)}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </main>

      {/* RODAPÉ */}
      <footer className="rodape">
        <p className="rodape-logo">
          {marca.nome} <span>{marca.subtitulo}</span>
        </p>
        <p>{contato.endereco}</p>
        <p className="rodape-copy">© {new Date().getFullYear()} Luminé Beauty Club · Gleicy Lima</p>
      </footer>
    </>
  );
}
