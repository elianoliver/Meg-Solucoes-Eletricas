import { useRef, useState } from "react";
import type { FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import emailjs from "@emailjs/browser";
import { contact } from "../contact";

export function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  async function sendEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!form.current || status === "sending") return;
    setStatus("sending");
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || "default_service",
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "template_402qxhd",
        form.current,
        {
          publicKey:
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "FiKaFZCR_ohrq32bd",
        },
      );
      form.current?.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }
  return (
    <form ref={form} onSubmit={sendEmail} aria-busy={status === "sending"}>
      <fieldset disabled={status === "sending"}>
        <div className="form-row">
          <div className="field">
            <label htmlFor="name">Seu nome</label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              placeholder="Como podemos chamar você?"
              required
              maxLength={120}
            />
          </div>
          <div className="field">
            <label htmlFor="phone">Telefone</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              placeholder="(47) 99999-9999"
              required
              maxLength={30}
            />
          </div>
        </div>
        <div className="field">
          <label htmlFor="email">E-mail</label>
          <input
            id="email"
            name="reply_to"
            type="email"
            autoComplete="email"
            placeholder="voce@exemplo.com"
            required
            maxLength={254}
          />
        </div>
        <div className="field">
          <label htmlFor="service">O que você precisa?</label>
          <select id="service" name="service_type" required defaultValue="">
            <option value="" disabled>
              Selecione o tipo de serviço
            </option>
            {[
              "Instalação residencial",
              "Instalação comercial",
              "Manutenção",
              "Emergência",
              "Automação",
              "Iluminação LED",
              "Reforma elétrica",
              "Proteção e SPDA",
              "Infraestrutura e redes",
              "Outro",
            ].map((service) => (
              <option key={service}>{service}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="message">Conte sobre seu projeto</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Descreva o serviço e informe sua cidade ou bairro…"
            required
            maxLength={5000}
          />
        </div>
        <button className="button submit-button" type="submit">
          {status === "sending"
            ? "Enviando solicitação…"
            : "Enviar solicitação"}
          <ArrowUpRight size={18} />
        </button>
      </fieldset>
      <p className="form-note">
        Seus dados serão usados para responder à sua solicitação.
      </p>
      <div role="status" aria-live="polite">
        {status === "success" && (
          <p className="form-success">
            Solicitação enviada! Em breve entraremos em contato.
          </p>
        )}
        {status === "error" && (
          <p className="form-error">
            Não foi possível enviar. Tente novamente ou{" "}
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              fale pelo WhatsApp
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
