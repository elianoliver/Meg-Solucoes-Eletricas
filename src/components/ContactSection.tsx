import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { contact } from "../contact";

export function ContactSection() {
  return (
    <section id="contato" className="section contact">
      <div className="container contact-grid">
        <div className="contact-copy">
          <p className="eyebrow">04 / VAMOS CONVERSAR</p>
          <h2>
            Seu projeto começa
            <br />
            com uma boa
            <br />
            <em>conversa.</em>
          </h2>
          <p>
            Conte o que você precisa. Vamos encontrar a melhor solução elétrica
            para o seu espaço.
          </p>
          <a
            className="button"
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            Conversar pelo WhatsApp <ArrowUpRight size={18} />
          </a>
          <div className="contact-details">
            <a href={contact.telephone}>
              <Phone size={19} />
              <span>
                <small>LIGUE PARA A MEG</small>
                {contact.phone}
              </span>
            </a>
            <a href={`mailto:${contact.email}`}>
              <Mail size={19} />
              <span>
                <small>PREFERE E-MAIL?</small>
                {contact.email}
              </span>
            </a>
            <div>
              <MapPin size={19} />
              <span>
                <small>ONDE ATENDEMOS</small>Vale do Itajaí, Santa Catarina
                <small className="contact-footnote">
                  Outras regiões: consulte a disponibilidade.
                </small>
              </span>
            </div>
          </div>
        </div>
        <div className="form-panel">
          <h3>Solicite seu orçamento</h3>
          <p>Preencha os dados e conte um pouco sobre o serviço.</p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
