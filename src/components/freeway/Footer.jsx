import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Mail, Facebook, Instagram, Youtube, Linkedin, ExternalLink, Building2 } from 'lucide-react';
import logo from '@/assets/logo.png';

export default function Footer({ onContactClick }) {
    const links = {
        produtos: [
            { label: 'Speedway Light', href: '#planos' },
            { label: 'Speedway Empresarial', href: '#planos' },
            { label: 'Speedway Full', href: '#planos' },
            { label: 'Mega Link', href: '/MegaLink', isRoute: true },
            { label: 'PABX Virtual', href: '/PabxVirtual', isRoute: true },
            { label: 'Rede Neutra', href: '/RedeNeutra', isRoute: true },
        ],
        empresa: [
            { label: 'Sobre Nós', href: '#institucional' },
            { label: 'Nossa Infraestrutura', href: '#solucoes' },
            { label: 'Condomínios Inteligentes', href: '/Condominios', isRoute: true },
            { label: 'Cobertura', href: '#' },
            { label: 'Trabalhe Conosco', href: '#' },
        ],
        suporte: [
            { label: 'Área do Cliente', href: 'https://sistema.freewaynet.com.br/central_assinante_web/login', external: true },
            { label: 'Central de Ajuda', href: 'https://sistema.freewaynet.com.br/central_assinante_web/login', external: true },
            { label: 'Suporte Técnico', href: 'https://sistema.freewaynet.com.br/central_assinante_web/login', external: true },
            { label: '2ª Via de Boleto', href: 'https://sistema.freewaynet.com.br/central_assinante_web/login', external: true },
        ]
    };

    return (
        <footer id="contato" className="bg-gray-900 text-white" role="contentinfo">
            {/* Main Footer */}
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="mb-6">
                            <img 
                                src={logo} 
                                alt="Freeway Tecnologia - Provedor de Internet Empresarial em Campo Grande MS" 
                                className="h-16 w-auto"
                                loading="lazy"
                            />
                        </div>
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
                            Pioneira em fibra óptica no Mato Grosso do Sul, conectando empresas e governo com a melhor infraestrutura da região.
                        </p>

                        <div className="space-y-3">
                            <button onClick={onContactClick} className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors">
                                <Phone className="w-5 h-5" />
                                <span>(67) 3304-3003</span>
                            </button>
                            <div className="flex items-center gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 flex-shrink-0" />
                                <span>R. Goiás, 1757 - Campo Grande, MS</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-400">
                                <Clock className="w-5 h-5" />
                                <span>Seg-Sex: 08h às 18h | Sáb: 08h às 12h</span>
                            </div>
                        </div>

                        {/* Social */}
                        <div className="flex gap-3 mt-6">
                            {[
                                { icon: Facebook, href: '#' },
                                { icon: Instagram, href: '#' },
                                { icon: Youtube, href: '#' },
                                { icon: Linkedin, href: '#' },
                            ].map((social, i) => (
                                <a 
                                    key={i} 
                                    href={social.href}
                                    className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors"
                                >
                                    <social.icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Produtos</h4>
                        <ul className="space-y-3">
                            {links.produtos.map((link, i) => (
                                <li key={i}>
                                    {link.isRoute ? (
                                        <Link 
                                            to={link.href} 
                                            className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-1"
                                        >
                                            {link.label}
                                        </Link>
                                    ) : (
                                        <a href={link.href} className="text-gray-400 hover:text-orange-400 transition-colors">
                                            {link.label}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Empresa</h4>
                        <ul className="space-y-3">
                            {links.empresa.map((link, i) => (
                                <li key={i}>
                                    {link.isRoute ? (
                                        <Link 
                                            to={link.href} 
                                            className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-1"
                                        >
                                            {link.label}
                                            <Building2 className="w-3 h-3" />
                                        </Link>
                                    ) : (
                                        <a href={link.href} className="text-gray-400 hover:text-orange-400 transition-colors">
                                            {link.label}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Suporte</h4>
                        <ul className="space-y-3">
                            {links.suporte.map((link, i) => (
                                <li key={i}>
                                    {link.openChat ? (
                                        <button 
                                            onClick={onContactClick} 
                                            className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-1"
                                        >
                                            {link.label}
                                        </button>
                                    ) : (
                                        <a 
                                            href={link.href} 
                                            target={link.external ? "_blank" : undefined}
                                            rel={link.external ? "noopener noreferrer" : undefined}
                                            className="text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-1"
                                        >
                                            {link.label}
                                            {link.external && <ExternalLink className="w-3 h-3" />}
                                        </a>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            'Rede 100% Fibra',
                            'Suporte 24/7 para Circuitos Dedicados',
                            'Backbone 100Gbps',
                            'SLA Garantido'
                        ].map((badge, i) => (
                            <div key={i} className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
                                <div className="w-2 h-2 bg-orange-500 rounded-full" />
                                <span className="text-sm text-gray-300">{badge}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                        <p>© 2025 Freeway Tecnologia. Todos os direitos reservados.</p>
                        <div className="flex gap-6">
                            <a href="#" className="hover:text-orange-400 transition-colors">Política de Privacidade</a>
                            <a href="#" className="hover:text-orange-400 transition-colors">Termos de Uso</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
