import { CheckCircle, User, Briefcase, Star } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export function AboutSection() {
    const qualifications = [
        "Mais de 18 anos de experiência",
        "Certificação em segurança elétrica",
        "Instalações residenciais, comerciais e industriais",
        "Atendimento 24h para emergências",
        "Garantia em todos os serviços",
        "Uso de equipamentos de última geração"
    ];

    const stats = [
        { icon: User, label: "Clientes Atendidos", value: "+10mil" },
        { icon: Briefcase, label: "Projetos Concluídos", value: "800+" },
        { icon: Star, label: "Avaliação Média", value: "5.0" }
    ];

    return (
        <section id="sobre" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <Badge className="bg-yellow-500 text-black">Sobre o Profissional</Badge>
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">
                                Jair Souza
                                <span className="block text-yellow-600">Eletricista Especializado</span>
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Profissional qualificado com vasta experiência em instalações elétricas residenciais,
                                comerciais e industriais. Comprometido com a segurança, qualidade e satisfação dos clientes.
                            </p>
                        </div>

                        {/* Qualifications */}
                        <div className="space-y-3">
                            {qualifications.map((qualification, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                    <span className="text-slate-700">{qualification}</span>
                                </div>
                            ))}
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 pt-4">
                            {stats.map((stat, index) => (
                                <Card key={index} className="text-center">
                                    <CardContent className="p-4">
                                        <stat.icon className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                                        <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                                        <div className="text-sm text-slate-600">{stat.label}</div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Mission Cards */}
                    <div className="space-y-8">
                        <Card className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold mb-3">Nossa Missão</h3>
                                <p>
                                    Fornecer soluções elétricas seguras, eficientes e inovadoras,
                                    garantindo energia confiável para nossos clientes com o mais alto
                                    padrão de qualidade e segurança.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold mb-3">Nossos Valores</h3>
                                <ul className="space-y-2">
                                    <li>• Segurança em primeiro lugar</li>
                                    <li>• Qualidade e excelência</li>
                                    <li>• Transparência e honestidade</li>
                                    <li>• Inovação constante</li>
                                    <li>• Compromisso com o cliente</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="bg-gradient-to-r from-slate-700 to-slate-800 text-white">
                            <CardContent className="p-6">
                                <h3 className="text-xl font-bold mb-3">Diferencial</h3>
                                <p>
                                    Atendimento personalizado, diagnóstico preciso e soluções
                                    customizadas para cada necessidade. Garantia total e
                                    suporte contínuo em todos os nossos serviços.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}