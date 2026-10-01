import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
export function Footer() {
  const footer = useRef<HTMLElement>(null);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setShowBackToTop(entry.isIntersecting),
      { threshold: 0 },
    );
    if (footer.current) observer.observe(footer.current);
    return () => observer.disconnect();
  }, []);

  return (
    <footer ref={footer} className="footer">
      <div className="container">
        <div className="footer-top">
          <a className="brand" href="#inicio">
            <img src="/logo.svg" alt="" width="43" height="40" />
            <span>
              MEG<span className="brand-subtitle">SOLUÇÕES ELÉTRICAS</span>
            </span>
          </a>
          <p>
            Energia para transformar.
            <br />
            Segurança para confiar.
          </p>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} MEG Soluções Elétricas.</span>
          <span>
            Desenvolvido por{" "}
            <a
              href="https://www.elian.dev.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              elian.dev ↗
            </a>
          </span>
        </div>
      </div>
      {showBackToTop && (
        <a
          className="back-to-top"
          href="#inicio"
          aria-label="Voltar ao início"
          title="Voltar ao início"
          onClick={() =>
            document
              .querySelector<HTMLAnchorElement>(".site-header .brand")
              ?.focus({ preventScroll: true })
          }
        >
          <ArrowUp size={23} aria-hidden="true" />
        </a>
      )}
    </footer>
  );
}
