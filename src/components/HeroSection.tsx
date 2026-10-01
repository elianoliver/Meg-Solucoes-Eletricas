import { ArrowDown, ArrowUpRight, Check, MapPin, Zap } from "lucide-react";
import portrait from "../assets/jair2.png";
import { contact } from "../contact";

export function HeroSection() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" /> ENERGIA. INOVAÇÃO. SEGURANÇA.
          </p>
          <h1>
            A energia do seu projeto.
            <br />
            <em>A segurança de estar em boas mãos.</em>
          </h1>
          <p className="hero-description">
            Da instalação ao último detalhe da iluminação. Soluções elétricas
            para sua casa ou empresa, com quem entende do assunto.
          </p>
          <div className="hero-actions">
            <a
              className="button"
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              Vamos conversar <ArrowUpRight size={19} />
            </a>
            <a className="text-link" href="#projetos">
              Conheça nossos trabalhos <ArrowDown size={17} />
            </a>
          </div>
          <div className="hero-assurances">
            <span>
              <Check size={16} /> Atendimento personalizado
            </span>
            <span>
              <Check size={16} /> Qualidade em cada conexão
            </span>
          </div>
        </div>
        <div className="hero-visual">
          <div className="photo-frame">
            <img
              src={portrait}
              width="1024"
              height="796"
              alt="Jair Souza, profissional da MEG Soluções Elétricas"
              fetchPriority="high"
            />
            <div className="photo-caption">
              <span>QUEM CUIDA DO SEU PROJETO</span>
              <strong>Jair Souza</strong>
            </div>
          </div>
          <div className="experience-stamp">
            <strong>
              18<span>+</span>
            </strong>
            <span>
              anos de
              <br />
              experiência
            </span>
          </div>
          <p className="photo-location">
            <MapPin size={14} /> Santa Catarina · Vale do Itajaí
          </p>
        </div>
      </div>
      <div className="expertise-strip">
        <div className="container">
          <span>Do planejamento à execução</span>
          <strong>Residencial</strong>
          <span className="strip-plus">+</span>
          <strong>Comercial</strong>
          <span className="strip-plus">+</span>
          <strong>Industrial</strong>
          <Zap size={20} />
        </div>
      </div>
    </section>
  );
}
