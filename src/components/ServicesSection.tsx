import { useState } from "react";
import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  House,
  Building2,
  Wrench,
  Lightbulb,
  ShieldCheck,
  Cable,
  Zap,
  Network,
} from "lucide-react";
import { projectData } from "../projects";

const modules = import.meta.glob<string>("../assets/services/**/*.jpg", {
  eager: true,
  query: "?url",
  import: "default",
});
const groups: Record<string, string[]> = {};
Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .forEach(([path, url]) => {
    const folder = path.split("/").at(-2)!;
    (groups[folder] ??= []).push(url);
  });
const services = [
  {
    icon: House,
    title: "Instalações residenciais",
    text: "Uma instalação bem feita para viver com tranquilidade. Do quadro elétrico às tomadas.",
  },
  {
    icon: Building2,
    title: "Elétrica comercial",
    text: "Infraestrutura confiável para sua empresa funcionar com segurança e eficiência.",
  },
  {
    icon: Lightbulb,
    title: "Iluminação e LED",
    text: "Luz que transforma ambientes. Perfis de LED, lustres e projetos luminotécnicos.",
  },
  {
    icon: Wrench,
    title: "Manutenção e reformas",
    text: "Prevenção de falhas e modernização das instalações, com atenção a cada detalhe.",
  },
  {
    icon: ShieldCheck,
    title: "Proteção e SPDA",
    text: "Aterramento, dispositivos de proteção e sistemas contra descargas atmosféricas.",
  },
  {
    icon: Cable,
    title: "Infraestrutura elétrica",
    text: "Eletrodutos, eletrocalhas e distribuição organizada para obras de todos os tamanhos.",
  },
  {
    icon: Network,
    title: "Redes e segurança",
    text: "Cabeamento estruturado, montagem de racks e instalação de câmeras de monitoramento.",
  },
  {
    icon: Zap,
    title: "Emergências 24h",
    text: "Problemas elétricos não têm hora. Entre em contato para solicitar atendimento.",
  },
];

function ProjectCard({ folder }: { folder: string }) {
  const [index, setIndex] = useState(0);
  const images = groups[folder];
  const project = projectData[folder];
  return (
    <article className="project-card">
      <div className="project-image">
        <img
          src={images[index]}
          alt={`${project.title} — foto ${index + 1}`}
          loading="lazy"
          decoding="async"
          width="600"
          height="450"
        />
        <span className="project-tag">{project.badges[0]}</span>
        <div className="gallery-controls">
          <button
            type="button"
            aria-label={`Foto anterior: ${project.title}`}
            onClick={() =>
              setIndex((index - 1 + images.length) % images.length)
            }
          >
            <ArrowLeft size={17} />
          </button>
          <span aria-live="polite" aria-atomic="true">
            {index + 1} / {images.length}
          </span>
          <button
            type="button"
            aria-label={`Próxima foto: ${project.title}`}
            onClick={() => setIndex((index + 1) % images.length)}
          >
            <ArrowRight size={17} />
          </button>
        </div>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </article>
  );
}

export function ServicesSection() {
  const [expanded, setExpanded] = useState(false);
  const folders = Object.keys(projectData).filter(
    (folder) => groups[folder]?.length,
  );
  return (
    <>
      <section id="servicos" className="section services">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">01 / O QUE FAZEMOS</p>
              <h2>
                Soluções completas.
                <br />
                Cuidado em cada detalhe.
              </h2>
            </div>
            <p>
              Do pequeno reparo a uma nova instalação, a mesma dedicação para
              entregar um serviço bem feito.
            </p>
          </div>
          <div className="services-grid">
            {services.map((service, i) => (
              <article key={service.title} className="service-card">
                <div className="service-card-top">
                  <service.icon size={27} strokeWidth={1.5} />
                  <span>0{i + 1}</span>
                </div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="projetos" className="section projects">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow">02 / NA PRÁTICA</p>
              <h2>
                O resultado fala
                <br />
                por si.
              </h2>
            </div>
            <p>
              Projetos reais, executados com atenção, técnica e compromisso.
              Explore os detalhes de cada trabalho.
            </p>
          </div>
          <div className="projects-grid" id="project-gallery">
            {(expanded ? folders : folders.slice(0, 3)).map((folder) => (
              <ProjectCard key={folder} folder={folder} />
            ))}
          </div>
          <div className="projects-action">
            <button
              className="button button-outline"
              type="button"
              aria-expanded={expanded}
              aria-controls="project-gallery"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded
                ? "Mostrar menos projetos"
                : `Ver todos os ${folders.length} projetos`}{" "}
              <ArrowUpRight size={18} />
            </button>
            <span>Execução MEG Soluções Elétricas</span>
          </div>
        </div>
      </section>
    </>
  );
}
