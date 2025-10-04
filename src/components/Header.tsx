'use client';

import { Menu, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from './ui/sheet';
import logoImage from '../assets/logo.svg';

export function Header() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const NavLinks = () => (
        <>
            <button
                onClick={() => scrollToSection('inicio')}
                className="hover:text-yellow-500 text-white cursor-pointer transition-colors bg-[rgba(255,255,255,0)]"
            >
                Início
            </button>
            <button
                onClick={() => scrollToSection('sobre')}
                className="hover:text-yellow-500 text-white cursor-pointer transition-colors"
            >
                Sobre
            </button>
            <button
                onClick={() => scrollToSection('servicos')}
                className="hover:text-yellow-500 text-white cursor-pointer transition-colors"
            >
                Serviços
            </button>
            <button
                onClick={() => scrollToSection('contato')}
                className="hover:text-yellow-500 text-white cursor-pointer transition-colors"
            >
                Contato
            </button>
        </>
    );

    return (
        <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-800">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center space-x-3">
                        <img
                            src={logoImage}
                            alt="MEG Soluções Elétricas - Logo da empresa especializada em serviços elétricos profissionais"
                            className="h-12 w-auto"
                            loading="eager"
                        />
                        <span className="text-2xl text-white font-bold">MEG Soluções</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8" role="navigation" aria-label="Menu principal">
                        <NavLinks />
                    </nav>

                    {/* Contact Info */}
                    <div className="hidden lg:flex items-center space-x-4">
                        <div className="flex items-center space-x-2 text-sm text-white">
                            <Phone className="h-4 w-4 text-yellow-500" />
                            <span>(47) 99647-1189</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-white">
                            <Mail className="h-4 w-4 text-yellow-500" />
                            <span>jairzouza0111@gmail.com</span>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <Sheet>
                        <SheetTrigger asChild className="md:hidden">
                            <Button variant="ghost" size="lg" className="text-[14px]">
                                <Menu className="h-6 w-6 text-white" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right" className="bg-slate-900 border-slate-800">
                            <SheetTitle className="sr-only">Menu de Navegação</SheetTitle>
                            <SheetDescription className="sr-only">
                                Menu de navegação do site MEG Soluções Elétricas
                            </SheetDescription>
                            <div className="flex flex-col space-y-6 mt-8">
                                <NavLinks />
                                <div className="border-t border-slate-800 pt-6 space-y-4">
                                    <div className="flex items-center space-x-2">
                                        <Phone className="h-4 w-4 text-yellow-500" />
                                        <span className="text-white">(47) 99647-1189</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Mail className="h-4 w-4 text-yellow-500" />
                                        <span className="text-white">jairzouza0111@gmail.com</span>
                                    </div>
                                </div>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}