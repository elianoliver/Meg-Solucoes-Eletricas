# MEG Soluções Elétricas

Landing page em React, TypeScript e Vite, com CSS responsivo e ícones Lucide. Não utiliza Next.js, roteador ou aliases de paths: a navegação ocorre por âncoras da própria página.

## Desenvolvimento

Use Node.js 20.19+ ou 22.12+ e npm.

```sh
npm ci
npm run dev
```

```sh
npm run lint
npm run build    # Verifica TypeScript e gera dist/
npm run preview
```

## Organização

- `src/components/`: cabeçalho, apresentação, serviços, projetos, sobre, contato e rodapé.
- `src/contact.ts`: telefone, e-mail e link de WhatsApp.
- `src/projects.ts`: textos e categorias dos projetos.
- `src/assets/services/`: fotos agrupadas por projeto. O nome da pasta deve corresponder à chave em `projects.ts`.
- `src/index.css`: cores, tipografia, componentes e ajustes de layout.
- `index.html`: SEO, compartilhamento e dados estruturados da página.
- `public/`: logo, favicon, imagem de compartilhamento, sitemap e verificação do Google.

A galeria mostra inicialmente três projetos. O botão expande todos os projetos; as setas trocam a foto de cada um. Somente a foto selecionada de cada projeto é montada e as imagens abaixo da abertura usam carregamento adiado. As fotos originais foram preservadas.

## Formulário

O formulário usa EmailJS e mantém os identificadores públicos já utilizados pelo site. Para mudar de conta ou template, copie `.env.example` para `.env.local` e ajuste os valores `VITE_EMAILJS_*`. O template deve aceitar `name`, `phone`, `reply_to`, `service_type` e `message`.

Variáveis `VITE_*` são públicas no navegador; nunca use segredos privados nelas. Configure as origens permitidas no painel do EmailJS. O formulário apresenta estados de envio, sucesso e falha, além de alternativa pelo WhatsApp. A validação local não comprova entrega: confira o envio na conta EmailJS em um teste autorizado.

## Layout e acessibilidade

Layout fluido com ajustes em 1100, 760 e 390 pixels; menu móvel com estado acessível e fechamento por Escape; campos com labels; foco visível; link para pular ao conteúdo; respeito à preferência por movimento reduzido. Links de telefone, e-mail e WhatsApp usam os protocolos nativos.

## Publicação

O workflow existente em `.github/workflows/deploy.yml` publica `dist/` na Hostinger quando há push em `main`. Execute lint e build antes de publicar. Revise informações comerciais e dados estruturados em `index.html` ao atualizar os dados da empresa.
