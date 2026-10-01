import { Check, ArrowUpRight } from "lucide-react";
import portrait from "../assets/jair2.png";

export function AboutSection() {
  return (
    <section id="sobre" className="section about">
      <div className="container about-grid">
        <div className="about-image">
          <img
            src={portrait}
            alt="Jair Souza, eletricista responsável pela MEG Soluções Elétricas"
            width="1024"
            height="796"
            loading="lazy"
          />
          <div className="about-note">
            <strong>Precisão nas conexões.</strong>
            <span>Compromisso com você.</span>
          </div>
        </div>
        <div className="about-copy">
          <p className="eyebrow">03 / QUEM ESTÁ POR TRÁS</p>
          <h2>
            Experiência que faz
            <br />a diferença.
          </h2>
          <p>
            Sou Jair Souza, eletricista com mais de 18 anos de experiência. À
            frente da MEG, cuido de instalações residenciais, comerciais e
            industriais com a atenção que cada projeto merece.
          </p>
          <p>
            Acredito que um bom serviço começa na conversa e termina com tudo
            funcionando, organizado e seguro.
          </p>
          <ul className="check-list">
            {[
              "Atendimento direto com o profissional",
              "Planejamento para a necessidade do seu projeto",
              "Cuidado com a segurança e o acabamento",
              "Atuação no Vale do Itajaí e região",
            ].map((item) => (
              <li key={item}>
                <Check size={18} />
                {item}
              </li>
            ))}
          </ul>
          <a href="#contato" className="text-link">
            Conte comigo no seu próximo projeto <ArrowUpRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
