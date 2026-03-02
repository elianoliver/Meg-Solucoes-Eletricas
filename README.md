# MEG Soluções Elétricas

Website profissional e responsivo para empresa especializada em soluções elétricas. Desenvolvido com foco em experiência do usuário, performance e conversão de leads.

**Live Demo:** [megsolucoeseletricas.com.br](https://megsolucoeseletricas.com.br)

---

## 📋 Sobre o Projeto

A **MEG Soluções Elétricas** é uma empresa especializada em serviços de instalações elétricas residenciais e prediais. Este website foi desenvolvido para:

- ✅ Apresentar os serviços oferecidos de forma clara e profissional
- ✅ Exibir portfólio dos projetos realizados com qualidade visual
- ✅ Facilitar o contato e geração de leads
- ✅ Melhorar visibilidade online e SEO da empresa
- ✅ Oferecer experiência móvel otimizada

---

## 🎯 Serviços Apresentados

| Serviço | Descrição |
|---------|-----------|
| **Instalações Residenciais** | Infraestrutura elétrica completa para residências, reforma e modernização |
| **Iluminação LED** | Sistemas de iluminação profissional, perfis LED e luminárias |
| **Instalações Prediais** | Projetos elétricos e infraestrutura para edifícios comerciais |
| **Infraestrutura de Segurança** | Sistemas de câmeras, monitoramento e segurança eletrônica |
| **Tubulação e Derivação** | Infraestrutura especializada para redes elétricas |

---

## 🛠️ Stack Tecnológico

| Categoria | Tecnologia |
|-----------|-----------|
| **Framework** | [React 19](https://react.dev/) |
| **Linguagem** | [TypeScript](https://www.typescriptlang.org/) |
| **Build Tool** | [Vite](https://vitejs.dev/) |
| **Styling** | [Tailwind CSS](https://tailwindcss.com/) |
| **UI Components** | [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/) |
| **Ícones** | [Lucide React](https://lucide.dev/) |
| **Performance** | Otimizado para SEO e Core Web Vitals |

---

## ✨ Características

### Frontend
- 📱 **Design Responsivo** - Funciona perfeitamente em todos os dispositivos
- 🎨 **UI/UX Profissional** - Design moderno e intuitivo
- ⚡ **Performance Otimizada** - Carregamento rápido e eficiente
- 🔍 **SEO Friendly** - Estrutura HTML semântica para melhor indexação
- ♿ **Acessibilidade** - Componentes acessíveis com Radix UI
- 🎬 **Animações Suaves** - Transições fluidas e micro-interações

### Estrutura
- 📸 **Galeria de Projetos** - Showcase visual dos trabalhos realizados
- 📝 **Formulário de Contato** - Interface intuitiva para solicitações
- 🧭 **Navegação Intuitiva** - Menu responsivo e fácil acesso
- 📞 **Informações de Contato** - Múltiplos canais de comunicação
- 🏢 **Seção Sobre** - Apresentação da empresa e experiência

---

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── Header.tsx              # Cabeçalho e navegação principal
│   ├── HeroSection.tsx         # Seção principal com CTA
│   ├── AboutSection.tsx        # Sobre a empresa
│   ├── ServicesSection.tsx     # Apresentação dos serviços
│   ├── PortfolioSection.tsx    # Galeria de projetos
│   ├── ContactSection.tsx      # Formulário de contato
│   ├── Footer.tsx              # Rodapé com links
│   ├── ui/                     # Componentes reutilizáveis
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Form.tsx
│   │   └── ...
│   └── figma/                  # Componentes especializados
├── assets/
│   ├── images/                 # Imagens gerais
│   └── services/               # Galeria de projetos
├── styles/
│   ├── globals.css             # Estilos globais
│   └── animations.css          # Animações customizadas
├── App.tsx                     # Componente principal
├── main.tsx                    # Ponto de entrada
└── index.html                  # HTML base
```

---

## 🚀 Instalação e Configuração

### Pré-requisitos

Certifique-se de ter instalado:
- [Node.js](https://nodejs.org/) v18 ou superior
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/elianoliver/Meg-Solucoes-Eletricas.git
   cd Meg-Solucoes-Eletricas
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

   O site estará disponível em `http://localhost:5173`

### Build para Produção

```bash
# Gera a build otimizada
npm run build

# Visualiza a build localmente (produção)
npm run preview

# Verifica código com ESLint
npm run lint
```

---

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Compila para produção
npm run preview  # Visualiza build em produção local
npm run lint     # Análise estática com ESLint
```

---

## 📊 Otimizações Implementadas

### Performance
- ✅ Code Splitting automático com Vite
- ✅ Lazy loading de imagens
- ✅ Minificação de assets
- ✅ Otimização de CSS
- ✅ Compressão de imagens

### SEO
- ✅ Meta tags dinâmicas
- ✅ Sitemap XML
- ✅ Schema.org markup
- ✅ Open Graph tags
- ✅ Robots.txt configurado

### Segurança
- ✅ CORS configurado
- ✅ Helmet para headers de segurança
- ✅ Validação de formulários
- ✅ Proteção contra XSS
- ✅ Environment variables protegidas

---

## 🎨 Customização

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
VITE_API_URL=https://api.megsolucoeseletricas.com.br
VITE_FORM_ENDPOINT=https://seu-servico-formulario.com
```

### Tema e Cores

Edite `tailwind.config.ts` para customizar paleta de cores:

```ts
theme: {
  colors: {
    primary: '#your-color',
    secondary: '#your-color',
  }
}
```

---

## 📱 Responsividade

O site foi otimizado para todos os breakpoints:

| Dispositivo | Width |
|-------------|-------|
| Mobile | 320px - 768px |
| Tablet | 769px - 1024px |
| Desktop | 1025px+ |

---

## 🤝 Contribuição e Manutenção

Este é um projeto profissional desenvolvido para cliente. Melhorias e atualizações podem ser solicitadas através de:

- Issues de bug
- Sugestões de features
- Pull Requests (com prévia discussão)

---

## 📝 Licença

Este projeto é propriedade intelectual da MEG Soluções Elétricas. Todos os direitos reservados.

---

## 📧 Suporte e Contato

Para questões técnicas ou manutenção do site:

- **Email Técnico:** [dev@elian.dev.br](mailto:dev@elian.dev.br)
- **Desenvolvedor:** [Elian Oliver](https://github.com/elianoliver)
- **Website da Empresa:** [megsolucoeseletricas.com.br](https://megsolucoeseletricas.com.br)

Para serviços elétricos, contate a MEG Soluções diretamente através do website.

---

## 📈 Estatísticas do Projeto

- **Última Atualização:** 2026
- **Commits:** 24+
- **Linguagens:** TypeScript (94%), HTML (3%), CSS (2%)
- **Status:** Em produção
- **Visitantes Mensais:** [Acompanhado via Analytics]

---

## 🔐 Compliance

- ✅ LGPD Compliant
- ✅ Privacy Policy implementada
- ✅ Cookies consentidos
- ✅ Segurança de dados respeitada

---

<div align="center">

**Desenvolvido com ⚡ por [Elian Oliver](https://github.com/elianoliver)**

Site em produção desde 2025

</div>
