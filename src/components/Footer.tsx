'use client';

import { Phone, Mail, MapPin, Zap } from 'lucide-react';
import logoImage from '/public/logo.svg';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <img
                                src={logoImage}
                                alt="MEG Soluções Elétricas"
                                className="h-10 w-auto"
                            /> <span className='text-2xl text-white font-bold'>MEG Soluções</span>
                        </div>
                        <p className="text-slate-400 text-sm">
                            Energia. Inovação. Segurança. Soluções elétricas profissionais
                            com qualidade e confiança para sua casa ou empresa.
                        </p>
                        <div className="flex items-center space-x-2 text-sm">
                            <Zap className="h-4 w-4 text-yellow-500" />
                            <span className="text-slate-300">Serviços 24h - Emergências</span>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg">Serviços</h3>
                        <ul className="space-y-2 text-sm text-slate-400">
                            <li>Instalações Residenciais</li>
                            <li>Instalações Comerciais</li>
                            <li>Manutenção Preventiva</li>
                            <li>Automação Residencial</li>
                            <li>Iluminação LED</li>
                            <li>Sistemas de Proteção</li>
                            <li>Reforma Elétrica</li>
                            <li>Emergências 24h</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg">Contato</h3>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-center space-x-2">
                                <Phone className="h-4 w-4 text-yellow-500" />
                                <span className="text-slate-300">(47) 99647-1189</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Mail className="h-4 w-4 text-yellow-500" />
                                <span className="text-slate-300">jairsouza0111@gmail.com</span>
                            </div>
                            <div className="flex items-start space-x-2">
                                <MapPin className="h-4 w-4 text-yellow-500 mt-0.5" />
                                <div className="text-slate-300">
                                    <p>Atendimento em SC e</p>
                                    <p>todo território nacional</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="space-y-4">
                        <h3 className="font-bold text-lg">Atendimento Rápido</h3>
                        <div className="space-y-3">
                            <button
                                onClick={() => window.open('https://wa.me/5547996471189?text=Olá! Gostaria de solicitar um orçamento.')}
                                className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded text-sm font-medium transition-colors"
                            >
                                WhatsApp
                            </button>
                            <button
                                onClick={() => window.open('tel:+5547996471189')}
                                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black py-2 px-4 rounded text-sm font-medium transition-colors"
                            >
                                Ligar Agora
                            </button>
                            <button
                                onClick={() => {
                                    const element = document.getElementById('contato');
                                    if (element) {
                                        element.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                                className="w-full bg-slate-700 hover:bg-slate-600 text-white py-2 px-4 rounded text-sm font-medium transition-colors"
                            >
                                Solicitar Orçamento
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <div className="text-slate-400 text-sm">
                            © {currentYear} MEG Soluções Elétricas. Todos os direitos reservados.
                        </div>
                        <div className="text-slate-400 text-sm">
                            Jair Souza - Eletricista Profissional
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}