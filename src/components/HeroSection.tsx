'use client';

import { Zap, Shield, Clock, Award } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ImageWithFallback } from './figma/ImageWithFallback';
import jairImage from '../assets/jair2.png';

export function HeroSection() {
    const scrollToContact = () => {
        const element = document.getElementById('contato');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="inicio" className="pt-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-screen" role="banner" aria-label="Seção principal - MEG Soluções Elétricas">
            <div className="container mx-auto px-4 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Content */}
                    <article className="space-y-8">
                        <header className="space-y-4">
                            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                                MEG Soluções
                                <span className="text-yellow-500 block">Elétricas Profissionais</span>
                            </h1>
                            <p className="text-xl text-slate-300 leading-relaxed">
                                Energia. Inovação. Segurança. Serviços elétricos completos com qualidade e confiança para sua casa ou empresa.
                            </p>
                        </header>

                        <div className="flex flex-col gap-4 md:flex-row">
                            <Button
                                onClick={scrollToContact}
                                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 text-lg cursor-pointer"
                            >
                                Solicitar Orçamento
                            </Button>
                            <Button
                                variant="outline"
                                className="bg-white text-black px-8 py-3 text-lg cursor-pointer"
                                onClick={() => window.open('https://wa.me/5547996471189?text=Olá! Gostaria de solicitar um orçamento.', '_blank')}
                            >
                                WhatsApp
                            </Button>
                        </div>

                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-4 pt-8">
                            <Card className="bg-slate-800/50 border-slate-700">
                                <CardContent className="p-4 flex items-center space-x-3">
                                    <Zap className="h-8 w-8 text-yellow-500" />
                                    <div>
                                        <h3 className="font-semibold text-white">Baixa e média Tensão</h3>
                                        <p className="text-sm text-slate-300">Especializado</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-slate-800/50 border-slate-700">
                                <CardContent className="p-4 flex items-center space-x-3">
                                    <Shield className="h-8 w-8 text-blue-400" />
                                    <div>
                                        <h3 className="font-semibold text-white">Segurança</h3>
                                        <p className="text-sm text-slate-300">Garantida</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-slate-800/50 border-slate-700">
                                <CardContent className="p-4 flex items-center space-x-3">
                                    <Clock className="h-8 w-8 text-green-400" />
                                    <div>
                                        <h3 className="font-semibold text-white">24h</h3>
                                        <p className="text-sm text-slate-300">Emergência</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="bg-slate-800/50 border-slate-700">
                                <CardContent className="p-4 flex items-center space-x-3">
                                    <Award className="h-8 w-8 text-purple-400" />
                                    <div>
                                        <h3 className="font-semibold text-white">Certificado</h3>
                                        <p className="text-sm text-slate-300">Profissional</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </article>

                    {/* Image */}
                    <div className="relative">
                        <div className="relative z-10">
                            <ImageWithFallback
                                src={jairImage}
                                alt="Profissional eletricista da MEG Soluções Elétricas em ação, demonstrando expertise em serviços elétricos residenciais e comerciais"
                                className="rounded-lg shadow-2xl w-full h-auto"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-500/20 rounded-full blur-xl"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}