import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Input } from './ui/input'
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';

export const ContactForm = () => {
    const form = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        setStatus('sending');

        const serviceID = import.meta.env.VITE_SERVICE_ID;
        const templateID = import.meta.env.VITE_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        emailjs
            .sendForm(serviceID, templateID, form.current, publicKey)
            .then(
                () => {
                    setStatus('success');
                    form.current?.reset();
                    setTimeout(() => setStatus('idle'), 5000); // Reseta o status após 5s
                },
                (error) => {
                    console.error('FAILED...', error.text);
                    setStatus('error');
                    setTimeout(() => setStatus('idle'), 5000);
                }
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <label className="block text-sm font-medium mb-2 text-white">Nome</label>
                    <Input
                        type="text"
                        required
                        name='name'
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                        placeholder="Seu nome"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium mb-2 text-white">Telefone</label>
                    <Input
                        type="tel"
                        name="phone"
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
                    name="reply_to"
                    required
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    placeholder="seu@email.com"
                />
            </div>

            <div>
                <label className="block text-sm text-white font-medium mb-2">Tipo de Serviço</label>
                <select
                    name="service_type"
                    className="w-full text-sm p-3 bg-slate-700 border border-slate-600 rounded-md text-white cursor-pointer"
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
                    name="message"
                    required
                    rows={4}
                    className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    placeholder="Descreva detalhadamente o serviço que você precisa..."
                />
            </div>

            <Button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 cursor-pointer"
                disabled={status === 'sending'}
            >
                {status === 'sending' ? 'Enviando...' : 'Enviar Solicitação'}
            </Button>

            {status === 'success' && <p className="text-green-500">Mensagem enviada com sucesso!</p>}
            {status === 'error' && <p className="text-red-500">Ocorreu um erro. Tente novamente.</p>}
        </form>
    );
};