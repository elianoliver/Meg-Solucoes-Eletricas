import {
    Home,
    Building,
    Zap,
    Shield,
    Lightbulb,
    FireExtinguisher,
    AlertTriangle,
    Wrench
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from './ui/carousel';

const allImages = import.meta.glob('../assets/**/*.jpg', { eager: true });
const groupedImages = Object.entries(allImages).reduce((acc, [path, module]) => {
    // Extrai o nome da pasta do caminho do arquivo.
    // Ex: '../assets/services/lustres/lustres-01.jpg' -> 'lustres'
    const folder = path.split('/').slice(-2, -1)[0];
    // Se a chave da pasta ainda não existe no nosso acumulador, cria um array vazio
    if (!acc[folder]) {
        acc[folder] = [];
    }
    // Adiciona a URL da imagem ao array correspondente à sua pasta
    acc[folder].push((module as any).default);
    return acc;
}, {} as Record<string, string[]>);

// Defina aqui os dados customizados para cada pasta/projeto
// Adicione uma entrada para cada subpasta que você quiser customizar
// Se não houver entrada para uma pasta, usaremos valores genéricos
const projectData: Record<string, { title: string; description: string; badges: string[] }> = {
    "1celisa": {
        title: 'Iluminação de LED em área externa',
        description: 'Iluminação moderna com perfis de LED no Residencial Celisa, em Itapema.',
        badges: ['Iluminação Decorativa', 'Design Moderno', 'LED', 'Residencial']
    },
    "2perfil-led": {
        title: 'Iluminação de LED em área interna',
        description: 'Projeto e instalação de perfis de LED para iluminação moderna, funcional e de baixo consumo energético.',
        badges: ['Design Moderno', 'LED', 'Eficiência Energética']
    },
    "3lustres": {
        title: 'Instalação de Lustres e Pendentes',
        description: 'Montagem e instalação de luminárias decorativas, como lustres e pendentes, com precisão e segurança.',
        badges: ['Iluminação Decorativa', 'Design de Interiores', 'Precisão']
    },
    "4iluminacao": {
        title: 'Projeto Luminotécnico',
        description: 'Planejamento completo da iluminação de ambientes para criar espaços confortáveis, valorizando a arquitetura.',
        badges: ['Luminotécnica', 'Conforto Visual', 'Automação']
    },
    "5garagem": {
        title: 'Elétrica para Garagem e Área Externa',
        description: 'Instalação de tomadas, iluminação reforçada e preparação para automação de portões e carregadores veiculares.',
        badges: ['Área Externa', 'Automação', 'Carregador Veicular']
    },
    "6tubulacao": {
        title: 'Passagem de Eletrodutos',
        description: 'Execução da infraestrutura elétrica em fase de obra, com passagem de eletrodutos e caixas de passagem.',
        badges: ['Infraestrutura', 'Obra', 'Planejamento']
    },
    "7predial": {
        title: 'Manutenção Elétrica Predial',
        description: 'Serviços de manutenção e adequação em instalações elétricas de condomínios e edifícios comerciais.',
        badges: ['Predial', 'Manutenção', 'Alta Complexidade']
    },
    "8derivacao-infra": {
        title: 'Infraestrutura e Derivação',
        description: 'Construção da infraestrutura com caixas de derivação para uma distribuição elétrica eficiente e organizada.',
        badges: ['Infraestrutura', 'Conexões', 'Organização']
    },
    "9montagem-infra": {
        title: 'Montagem de Eletrocalhas',
        description: 'Instalação de eletrocalhas e perfilados para a condução segura de grande volume de cabos em ambientes comerciais.',
        badges: ['Comercial', 'Eletrocalha', 'Infraestrutura']
    },
    "91cameras": {
        title: 'Instalação de Câmeras (CFTV)',
        description: 'Instalação e configuração de sistema de câmeras de segurança (CFTV) para monitoramento residencial ou comercial.',
        badges: ['Segurança', 'CFTV', 'Monitoramento']
    },
    "92switch": {
        title: 'Infraestrutura de Rede Estruturada',
        description: 'Montagem de rack com switch, patch panel e organização de cabeamento para uma rede de dados estável e veloz.',
        badges: ['Rede Estruturada', 'Conectividade', 'Smart Home']
    }
};
export function ServicesSection() {
    const services = [
        {
            icon: Home,
            title: "Instalações Residenciais",
            description: "Instalação completa de sistemas elétricos para residências, incluindo quadros de distribuição, tomadas, interruptores e iluminação.",
            features: ["Projeto elétrico", "Instalação completa", "Adequação às normas", "Garantia de segurança"]
        },
        {
            icon: Building,
            title: "Instalações Comerciais",
            description: "Sistemas elétricos para estabelecimentos comerciais e empresariais, com foco na eficiência energética e segurança.",
            features: ["Projeto personalizado", "Sistemas trifásicos", "Automação", "Eficiência energética"]
        },
        {
            icon: Zap,
            title: "Manutenção Preventiva",
            description: "Inspeções regulares e manutenção preventiva para garantir o funcionamento seguro e eficiente dos sistemas elétricos.",
            features: ["Inspeção completa", "Relatório detalhado", "Cronograma de manutenção", "Prevenção de falhas"]
        },
        {
            icon: AlertTriangle,
            title: "Emergências 24h",
            description: "Atendimento de emergência 24 horas para resolver problemas elétricos urgentes com rapidez e segurança.",
            features: ["Atendimento 24h", "Resposta rápida", "Diagnóstico preciso", "Solução imediata"]
        },
        {
            icon: Shield,
            title: "Sistemas de Proteção",
            description: "Instalação de dispositivos de proteção contra surtos, DPS, disjuntores e sistemas de aterramento.",
            features: ["Proteção contra surtos", "Aterramento", "DR e DPS", "Segurança garantida"]
        },
        {
            icon: Lightbulb,
            title: "Iluminação LED",
            description: "Modernização de sistemas de iluminação com tecnologia LED para maior economia de energia e durabilidade.",
            features: ["Economia de energia", "Maior durabilidade", "Luz de qualidade", "Projeto luminotécnico"]
        },
        {
            icon: FireExtinguisher,
            title: "SPDA e Para-raios",
            description: "Instalação, manutenção e laudo de Sistemas de Proteção contra Descargas Atmosféricas, garantindo a segurança de estruturas e pessoas conforme a NBR 5419.",
            features: ["Projeto e instalação", "Laudo técnico (NR 10)", "Manutenção corretiva e preventiva", "Proteção contra raios"]
        },
        {
            icon: Wrench,
            title: "Reforma Elétrica",
            description: "Atualização e modernização de instalações elétricas antigas, adequando-as às normas atuais de segurança.",
            features: ["Adequação às normas", "Modernização", "Aumento de segurança", "Melhoria na eficiência"]
        }
    ];

    return (
        <section id="servicos" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center space-y-4 mb-16">
                    <Badge className="bg-yellow-500 text-black">Nossos Serviços</Badge>
                    <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                        Soluções Elétricas Completas
                    </h2>
                    <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                        Oferecemos uma ampla gama de serviços elétricos para atender todas as suas necessidades
                        com segurança, qualidade e eficiência.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {services.map((service, index) => (
                        <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                            <CardHeader className="text-center">
                                <div className="mx-auto bg-yellow-500 p-3 rounded-full w-fit group-hover:bg-yellow-600 transition-colors">
                                    <service.icon className="h-6 w-6 text-white" />
                                </div>
                                <CardTitle className="text-lg">{service.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="text-center space-y-4">
                                <p className="text-slate-600 text-sm">{service.description}</p>
                                <div className="space-y-2">
                                    {service.features.map((feature, idx) => (
                                        <div key={idx} className="text-xs text-slate-500 bg-slate-50 px-2 py-1 rounded">
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Featured Projects */}
                <div className="space-y-8">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">PROJETOS EM DESTAQUE</h3>
                        <p className="text-slate-600">Alguns dos nossos trabalhos recentes</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {Object.entries(groupedImages).map(([folder, images]) => {
                            const data = projectData[folder] || {
                                title: folder.charAt(0).toUpperCase() + folder.slice(1),
                                description: `Exemplos de projetos relacionados a ${folder}.`,
                                badges: [folder]
                            };
                            return (
                                <Card key={folder} className="overflow-hidden">
                                    <div className="h-[400px]">
                                        <Carousel className="w-full h-full">
                                            <CarouselContent>
                                                {images.map((src, idx) => (
                                                    <CarouselItem key={idx}>
                                                        <ImageWithFallback
                                                            src={src}
                                                            alt={`${data.title} imagem ${idx + 1}`}
                                                            className="w-full h-[400px] object-cover"
                                                        />
                                                    </CarouselItem>
                                                ))}
                                            </CarouselContent>
                                            <CarouselPrevious className="absolute left-2 top-1/2" />
                                            <CarouselNext className="absolute right-2 top-1/2" />
                                        </Carousel>
                                    </div>
                                    <CardContent className="">
                                        <h4 className="font-bold text-lg mb-2">{data.title}</h4>
                                        <p className="text-slate-600 mb-4">{data.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {data.badges.map((badge, idx) => (
                                                <Badge key={idx} variant="secondary">{badge}</Badge>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}