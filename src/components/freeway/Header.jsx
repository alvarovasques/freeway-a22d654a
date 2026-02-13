import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';
import logo from '@/assets/logo.png';

export default function Header({ onContactClick }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileSolucoesOpen, setMobileSolucoesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const solucoesSubItems = [
        { label: 'Mega Link', href: '/MegaLink', isRoute: true },
        { label: 'PABX Virtual', href: '/PabxVirtual', isRoute: true },
        { label: 'Condomínios', href: '/Condominios', isRoute: true },
        { label: 'Rede Neutra', href: '/RedeNeutra', isRoute: true },
        { label: 'Telefonia Móvel', href: '#telefonia-mobile', isRoute: false },
        { label: 'M2M / IoT', href: '#telefonia-m2m', isRoute: false },
    ];

    const navItems = [
        { label: 'Infraestrutura', href: '#infraestrutura' },
        { label: 'Planos', href: '#planos' },
        { label: 'Soluções', href: '#solucoes', hasDropdown: true },
        { label: 'FAQ', href: '#faq' },
    ];

    return (
        <>
            {/* Top Bar */}
            <div className="bg-gray-900 text-white py-2 hidden md:block">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm">
                    <div className="flex items-center gap-6">
                        <a href="https://api.whatsapp.com/send?phone=556730253131" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                            <Phone className="w-4 h-4" />
                            <span>WhatsApp - (67) 3025-3131</span>
                        </a>
                        <div className="flex items-center gap-2 text-gray-400">
                            <MapPin className="w-4 h-4" />
                            <span>R. Goiás, 1757 - Campo Grande, MS</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span>Seg-Sex: 08h às 18h | Sáb: 08h às 12h</span>
                    </div>
                </div>
            </div>

            {/* Main Header */}
            <header className={`sticky top-0 z-50 transition-all duration-300 bg-gradient-to-r from-orange-500 to-orange-600 ${isScrolled ? 'shadow-lg' : ''}`}>
                <div className="max-w-7xl mx-auto px-6 py-3">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <a href="#" className="flex items-center">
                            <img 
                                src={logo} 
                                alt="Freeway Tecnologia" 
                                className="h-16 w-auto"
                            />
                        </a>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-8">
                            {navItems.map((item) => (
                                item.hasDropdown ? (
                                    <div key={item.label} className="relative group">
                                        <span 
                                            className="text-white/90 hover:text-white font-medium transition-colors relative flex items-center gap-1 cursor-pointer"
                                        >
                                            {item.label}
                                            <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
                                        </span>
                                        <div className="absolute top-full left-0 pt-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-0">
                                            <div className="bg-white rounded-lg shadow-xl border border-gray-100 py-2 min-w-[200px]">
                                                {solucoesSubItems.map((sub) => (
                                                    sub.isRoute ? (
                                                        <Link
                                                            key={sub.label}
                                                            to={sub.href}
                                                            className="block px-4 py-2.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 font-medium transition-colors"
                                                        >
                                                            {sub.label}
                                                        </Link>
                                                    ) : (
                                                        <a
                                                            key={sub.label}
                                                            href={sub.href}
                                                            className="block px-4 py-2.5 text-gray-700 hover:bg-orange-50 hover:text-orange-600 font-medium transition-colors"
                                                        >
                                                            {sub.label}
                                                        </a>
                                                    )
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <a 
                                        key={item.label}
                                        href={item.href}
                                        className="text-white/90 hover:text-white font-medium transition-colors relative group"
                                    >
                                        {item.label}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
                                    </a>
                                )
                            ))}
                        </nav>

                        {/* CTA Buttons */}
                        <div className="hidden lg:flex items-center gap-3">
                            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent" asChild>
                                <a href="https://sistema.freewaynet.com.br/central_assinante_web/login" target="_blank" rel="noopener noreferrer">
                                    Área do Cliente
                                </a>
                            </Button>
                            <Button className="bg-white text-orange-600 hover:bg-gray-100 shadow-lg" onClick={onContactClick}>
                                Falar com Consultor
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button 
                            className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors text-white"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="lg:hidden bg-orange-600 border-t border-orange-400/30"
                        >
                            <div className="px-6 py-4 space-y-4">
                                {navItems.map((item) => (
                                    item.hasDropdown ? (
                                        <div key={item.label}>
                                            <button
                                                className="flex items-center justify-between w-full text-white/90 hover:text-white font-medium py-2"
                                                onClick={() => setMobileSolucoesOpen(!mobileSolucoesOpen)}
                                            >
                                                {item.label}
                                                <ChevronDown className={`w-4 h-4 transition-transform ${mobileSolucoesOpen ? 'rotate-180' : ''}`} />
                                            </button>
                                            {mobileSolucoesOpen && (
                                                <div className="pl-4 space-y-1">
                                                    {solucoesSubItems.map((sub) => (
                                                        sub.isRoute ? (
                                                            <Link
                                                                key={sub.label}
                                                                to={sub.href}
                                                                className="block text-white/70 hover:text-white font-medium py-2"
                                                                onClick={() => setMobileMenuOpen(false)}
                                                            >
                                                                {sub.label}
                                                            </Link>
                                                        ) : (
                                                            <a
                                                                key={sub.label}
                                                                href={sub.href}
                                                                className="block text-white/70 hover:text-white font-medium py-2"
                                                                onClick={() => setMobileMenuOpen(false)}
                                                            >
                                                                {sub.label}
                                                            </a>
                                                        )
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <a 
                                            key={item.label}
                                            href={item.href}
                                            className="block text-white/90 hover:text-white font-medium py-2"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.label}
                                        </a>
                                    )
                                ))}
                                <div className="pt-4 space-y-3 border-t border-orange-400/30">
                                    <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 bg-transparent" asChild>
                                        <a href="https://sistema.freewaynet.com.br/central_assinante_web/login" target="_blank" rel="noopener noreferrer">
                                            Área do Cliente
                                        </a>
                                    </Button>
                                    <Button className="w-full bg-white text-orange-600 hover:bg-gray-100" onClick={onContactClick}>Falar com Consultor</Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
}
