'use client';

import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Badge } from './ui/badge';
import { ContactSEO } from './SEO';

export function ContactSection() {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real application, you would handle form submission here
        alert('Mensagem enviada! Entraremos em contato em breve.');
    };

    const contactInfo = [
        {
            icon: Phone,
            title: "Telefone",
            value: "(47) 99647-1189",
            action: () => window.open('tel:+5547996471189'),
            color: "text-green-500"
        },
        {
            icon: MessageCircle,
            title: "WhatsApp",
            value: "Conversar no WhatsApp",
            action: () => window.open('https://wa.me/5547996471189?text=Olá! Gostaria de solicitar um orçamento para serviços elétricos.'),
            color: "text-green-500"
        },
        {
            icon: Mail,
            title: "Email",
            value: "jairzouza0111@gmail.com",
            action: () => window.open('mailto:jairzouza0111@gmail.com'),
            color: "text-blue-500"
        },
        {
            icon: Clock,
            title: "Horário de Atendimento",
            value: "24h - Emergências",
            action: () => { },
            color: "text-yellow-500"
        }
    ];

    return (
        <>
            <ContactSEO />
            <section id="contato" className="py-20 bg-slate-900 text-white" role="region" aria-label="Seção de contato">
                <div className="container mx-auto px-4">
                    {/* Header */}
                    <header className="text-center space-y-4 mb-16">
                        <Badge className="bg-yellow-500 text-black">Entre em Contato</Badge>
                        <h2 className="text-3xl lg:text-4xl font-bold">
                            Solicite seu Orçamento
                        </h2>
                        <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                            Pronto para atender suas necessidades elétricas. Entre em contato conosco
                            e receba um orçamento personalizado sem compromisso.
                        </p>
                    </header>

                    <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <div className="grid gap-4">
                                    {contactInfo.map((info, index) => (
                                        <Card
                                            key={index}
                                            className="bg-slate-800 border-slate-700 hover:bg-slate-700 transition-colors cursor-pointer"
                                            onClick={info.action}
                                        >
                                            <CardContent className="p-4 flex items-center space-x-4">
                                                <div className={`p-3 rounded-full bg-slate-700 ${info.color}`}>
                                                    <info.icon className="h-6 w-6" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-white">{info.title}</h4>
                                                    <p className="text-slate-300">{info.value}</p>
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                                </div>
                            </div>

                            {/* Emergency Contact */}
                            <Card className="bg-gradient-to-r from-red-600 to-red-700 border-red-500">
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2 text-white">
                                        <Phone className="h-5 w-5" />
                                        <span>Emergência 24h</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="mb-4  text-white">
                                        Para situações de emergência elétrica, estamos disponíveis 24 horas por dia,
                                        7 dias por semana. Atendimento rápido e seguro.
                                    </p>
                                    <Button
                                        className="bg-white text-red-600 cursor-pointer hover:bg-slate-100 w-full"
                                        onClick={() => window.open('tel:+5547996471189')}
                                    >
                                        Ligar Agora - (47) 99647-1189
                                    </Button>
                                </CardContent>
                            </Card>

                        </div>


                        <div className="space-y-6">
                            {/* Service Areas */}
                            <Card className="bg-slate-800 border-slate-700 gap-2">
                                <CardHeader>
                                    <CardTitle className="flex items-center space-x-2">
                                        <MapPin className="h-5 w-5 text-blue-400" />
                                        <span className='text-white'>Área de Atendimento</span>
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-300">
                                        Com base em Santa Catarina, atendemos toda a região do Vale do Itajaí. Para projetos em outras localidades do Brasil, entre em contato para uma consulta.
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Contact Form */}
                            <Card className="bg-slate-800 border-slate-700">
                                <CardHeader>
                                    <CardTitle className='text-white'>Solicitar Orçamento</CardTitle>
                                    <p className="text-slate-300">
                                        Preencha o formulário abaixo e entraremos em contato em breve.
                                    </p>
                                </CardHeader>
                                <CardContent>
                                    <form onSubmit={handleSubmit} className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="block text-sm font-medium mb-2 text-white">Nome</label>
                                                <Input
                                                    type="text"
                                                    required
                                                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                                                    placeholder="Seu nome"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium mb-2 text-white">Telefone</label>
                                                <Input
                                                    type="tel"
                                                    required
                                                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                                                    placeholder="(47) 99999-9999"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-white mb-2">Email</label>
                                            <Input
                                                type="email"
                                                required
                                                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                                                placeholder="seu@email.com"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm text-white font-medium mb-2">Tipo de Serviço</label>
                                            <select
                                                className="w-full p-3 bg-slate-700 border border-slate-600 rounded-md text-white"
                                                required
                                            >
                                                <option value="">Selecione o serviço</option>
                                                <option value="instalacao-residencial">Instalação Residencial</option>
                                                <option value="instalacao-comercial">Instalação Comercial</option>
                                                <option value="manutencao">Manutenção</option>
                                                <option value="emergencia">Emergência</option>
                                                <option value="automacao">Automação</option>
                                                <option value="iluminacao-led">Iluminação LED</option>
                                                <option value="reforma">Reforma Elétrica</option>
                                                <option value="outro">Outro</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm text-white font-medium mb-2">Mensagem</label>
                                            <Textarea
                                                required
                                                rows={4}
                                                className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                                                placeholder="Descreva detalhadamente o serviço que você precisa..."
                                            />
                                        </div>

                                        <Button
                                            type="submit"
                                            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 cursor-pointer"
                                        >
                                            Enviar Solicitação
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}