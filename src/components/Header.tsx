import { useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { contact } from "../contact";

export function Header() {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === "Escape") {
          setOpen(false);
          toggle.current?.focus();
        }
      }}
    >
      <div className="container header-inner">
        <a
          href="#inicio"
          className="brand"
          aria-label="MEG Soluções Elétricas — início"
          onClick={() => setOpen(false)}
        >
          <img src="/logo.svg" alt="" width="43" height="40" />
          <span>
            MEG<span className="brand-subtitle">SOLUÇÕES ELÉTRICAS</span>
          </span>
        </a>
        <button
          ref={toggle}
          className="menu-toggle"
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </button>
        <nav
          id="main-nav"
          className={`main-nav ${open ? "is-open" : ""}`}
          aria-label="Navegação principal"
        >
          {[
            ["servicos", "Serviços"],
            ["projetos", "Projetos"],
            ["sobre", "Sobre nós"],
            ["contato", "Contato"],
          ].map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="button button-small"
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            Solicitar orçamento <ArrowUpRight size={17} />
          </a>
        </nav>
      </div>
    </header>
  );
}
