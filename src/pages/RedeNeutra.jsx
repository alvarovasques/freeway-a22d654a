import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Phone, MapPin, Clock, Menu, X,
    Shield, Zap, Network, Server,
    ArrowRight, Check, Globe, Cpu,
    Building2, Settings, Lock, DollarSign,
    TrendingUp, Layers, MonitorSmartphone,
    Facebook, Instagram, Youtube, Linkedin
} from 'lucide-react';
import logo from '@/assets/logo.png';
import ContactModal from '@/components/freeway/ContactModal';
import SEOHead from '@/components/freeway/SEOHead';

// Header Component
function Header({ onContactClick }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Vantagens', href: '#vantagens' },
        { label: 'Como Funciona', href: '#como-funciona' },
        { label: 'Cobertura', href: '#cobertura' },
        { label: 'Investimento', href: '#investimento' },
        { label: '← Voltar ao Site', href: '/', isRoute: true },
    ];

    return (
        <>
            <div className="bg-gray-900 text-white py-2 hidden md:block">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm">
                    <div className="flex items-center gap-6">
                        <a href="https://wa.me/556733043003?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20Rede%20Neutra." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                            <Phone className="w-4 h-4" />
                            <span>WhatsApp - (67) 3304-3003</span>
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

            <header className={`sticky top-0 z-50 transition-all duration-300 bg-gradient-to-r from-orange-500 to-orange-600 ${isScrolled ? 'shadow-lg' : ''}`}>
                <div className="max-w-7xl mx-auto px-6 py-3">
                    <div className="flex items-center justify-between">
                        <Link to="/" className="flex items-center">
                            <img src={logo} alt="Freeway Tecnologia" className="h-24 w-auto" />
                        </Link>

                        <nav className="hidden lg:flex items-center gap-8">
                            {navItems.map((item) => (
                                item.isRoute ? (
                                    <Link key={item.label} to={item.href} className="text-white/90 hover:text-white font-medium transition-colors relative group">
                                        {item.label}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
                                    </Link>
                                ) : (
                                    <a key={item.label} href={item.href} className="text-white/90 hover:text-white font-medium transition-colors relative group">
                                        {item.label}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
                                    </a>
                                )
                            ))}
                        </nav>

                        <div className="hidden lg:flex items-center gap-3">
                            <Button className="bg-white text-orange-600 hover:bg-gray-100 shadow-lg" onClick={onContactClick}>
                                Seja um Parceiro Freeway
                            </Button>
                        </div>

                        <button className="lg:hidden p-2 hover:bg-white/10 rounded-lg transition-colors text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="lg:hidden bg-orange-600 border-t border-orange-400/30">
                            <div className="px-6 py-4 space-y-4">
                                {navItems.map((item) => (
                                    item.isRoute ? (
                                        <Link key={item.label} to={item.href} className="block text-white/90 hover:text-white font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                                            {item.label}
                                        </Link>
                                    ) : (
                                        <a key={item.label} href={item.href} className="block text-white/90 hover:text-white font-medium py-2" onClick={() => setMobileMenuOpen(false)}>
                                            {item.label}
                                        </a>
                                    )
                                ))}
                                <div className="pt-4 border-t border-orange-400/30">
                                    <Button className="w-full bg-white text-orange-600 hover:bg-gray-100" onClick={onContactClick}>
                                        Seja um Parceiro
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </header>
        </>
    );
}

// Hero Section
function HeroSection({ onContactClick }) {
    return (
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900">
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />

                {/* Network Animation */}
                <svg className="absolute inset-0 w-full h-full opacity-20">
                    <defs>
                        <linearGradient id="lineGradientRN" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
                            <stop offset="50%" stopColor="#f97316" stopOpacity="1" />
                            <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    <motion.line x1="50%" y1="40%" x2="15%" y2="25%" stroke="url(#lineGradientRN)" strokeWidth="2"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }} />
                    <motion.line x1="50%" y1="40%" x2="85%" y2="20%" stroke="url(#lineGradientRN)" strokeWidth="2"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.3 }} />
                    <motion.line x1="50%" y1="40%" x2="20%" y2="70%" stroke="url(#lineGradientRN)" strokeWidth="2"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.2, repeat: Infinity, repeatType: "reverse", delay: 0.6 }} />
                    <motion.line x1="50%" y1="40%" x2="80%" y2="65%" stroke="url(#lineGradientRN)" strokeWidth="2"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.8, repeat: Infinity, repeatType: "reverse", delay: 0.9 }} />
                </svg>

                {/* Connection Points */}
                {[
                    { x: '50%', y: '40%' },
                    { x: '15%', y: '25%' },
                    { x: '85%', y: '20%' },
                    { x: '20%', y: '70%' },
                    { x: '80%', y: '65%' },
                ].map((point, i) => (
                    <motion.div
                        key={i}
                        className="absolute"
                        style={{ left: point.x, top: point.y }}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: i * 0.2, duration: 0.5 }}
                    >
                        <div className="relative">
                            <div className={`${i === 0 ? 'w-6 h-6' : 'w-4 h-4'} bg-orange-500 rounded-full animate-pulse`} />
                            <div className="absolute -inset-2 bg-orange-500/30 rounded-full animate-ping" />
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                        <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 mb-6">
                            <Network className="w-4 h-4 mr-2" />
                            Rede Neutra para ISPs
                        </Badge>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                            Expanda seu Provedor com a{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                                Rede Neutra da Freeway
                            </span>
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Utilize nossa infraestrutura de fibra óptica de última geração para alcançar novos clientes em Campo Grande{' '}
                            <strong className="text-orange-400">sem custos de construção de rede</strong>.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white shadow-xl shadow-orange-500/30" onClick={onContactClick}>
                                Seja um Parceiro Freeway
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="hidden lg:block">
                        <div className="relative">
                            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-orange-500/20">
                                {/* Central Hub - Freeway */}
                                <div className="flex justify-center mb-6">
                                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-center shadow-xl">
                                        <Globe className="w-12 h-12 text-white mx-auto mb-2" />
                                        <span className="text-white font-bold text-lg">FREEWAY</span>
                                        <p className="text-white/70 text-xs mt-1">Rede Neutra</p>
                                    </div>
                                </div>

                                {/* Connection Lines */}
                                <div className="flex justify-center mb-4">
                                    <div className="h-8 w-px bg-gradient-to-b from-orange-500 to-orange-500/30" />
                                </div>

                                {/* ISPs */}
                                <div className="grid grid-cols-3 gap-3">
                                    {['ISP Alpha', 'ISP Beta', 'ISP Gamma'].map((name, i) => (
                                        <motion.div
                                            key={name}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 + i * 0.2 }}
                                            className="bg-gray-700/50 rounded-xl p-4 text-center border border-orange-500/30"
                                        >
                                            <Building2 className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                                            <span className="text-gray-300 text-sm font-medium">{name}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
                                        <span>Rede Compartilhada</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Lock className="w-4 h-4 text-green-400" />
                                        <span>VLAN Isolada</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// Vantagens Section
function VantagensSection() {
    const vantagens = [
        {
            icon: DollarSign,
            title: 'Redução Drástica de CAPEX',
            description: 'Transforme investimentos pesados em custos operacionais previsíveis. Sem necessidade de construir rede própria.',
            highlight: 'OPEX previsível'
        },
        {
            icon: Zap,
            title: 'Agilidade (Time-to-Market)',
            description: 'Comece a vender em novas áreas imediatamente, sem obras ou longos prazos de implantação.',
            highlight: 'Expansão imediata'
        },
        {
            icon: TrendingUp,
            title: 'Foco no Core Business',
            description: 'Deixe a manutenção física da rede conosco e foque em vendas, produtos e atendimento ao cliente.',
            highlight: 'Menos operação'
        },
        {
            icon: Shield,
            title: 'Qualidade Comprovada',
            description: 'Rede construída com tecnologia de ponta, baixa latência e alta disponibilidade garantida.',
            highlight: 'Alta disponibilidade'
        }
    ];

    return (
        <section id="vantagens" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                    <Badge className="bg-orange-100 text-orange-700 mb-6">
                        <Zap className="w-4 h-4 mr-2" />
                        Vantagens Estratégicas
                    </Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                        Por que escolher a{' '}
                        <span className="text-orange-500">Freeway?</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Escale sua operação com responsabilidade, aproveitando uma infraestrutura já consolidada e pronta para uso.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {vantagens.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-gray-50 to-white">
                                <CardContent className="p-8">
                                    <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30 mb-6">
                                        <item.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                                    </div>
                                    <Badge variant="secondary" className="bg-orange-100 text-orange-700 mb-3">
                                        {item.highlight}
                                    </Badge>
                                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Como Funciona Section
function ComoFuncionaSection() {
    const detalhes = [
        {
            icon: Lock,
            title: 'VLAN Exclusiva',
            description: 'Segregação lógica que garante que o tráfego dos seus clientes seja isolado e seguro. Cada parceiro opera em sua própria VLAN.',
            highlight: 'Isolamento total'
        },
        {
            icon: Settings,
            title: 'Provisionamento Simplificado',
            description: 'Receba usuário e senha para integrar nossa OLT ao seu próprio sistema de gerenciamento. Operação ágil e descomplicada.',
            highlight: 'Integração fácil'
        },
        {
            icon: Globe,
            title: 'Pontos de Presença (POPs)',
            description: 'Interconexão física em POPs estrategicamente localizados: Moreninha, Aerorancho, Nova Lima, União, entre outros.',
            highlight: 'POPs estratégicos'
        },
        {
            icon: Cpu,
            title: 'Hardware Homologado',
            description: 'Compatibilidade com ONUs FiberHome, Huawei e Datacom. Flexibilidade para usar o hardware que melhor atende sua operação.',
            highlight: 'Multi-fabricante'
        }
    ];

    return (
        <section id="como-funciona" className="py-24 bg-gray-900">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                    <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 mb-6">
                        <Cpu className="w-4 h-4 mr-2" />
                        Detalhes Técnicos
                    </Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
                        Como{' '}
                        <span className="text-orange-400">funciona</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Infraestrutura robusta e padronizada, pronta para integrar ao seu sistema de gestão.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {detalhes.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full border-0 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-orange-500/30 transition-all">
                                <CardContent className="p-8">
                                    <div className="flex items-start gap-6">
                                        <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30 flex-shrink-0">
                                            <item.icon className="w-7 h-7 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                                            <Badge variant="secondary" className="bg-orange-500/20 text-orange-300 mb-3">
                                                {item.highlight}
                                            </Badge>
                                            <p className="text-gray-400 leading-relaxed">{item.description}</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Cobertura Section
function CoberturaSection() {
    const regioes = [
        { nome: 'Região Sul', bairros: 'Aerorancho, Los Angeles, Nova Lima, Panamá' },
        { nome: 'Região Leste', bairros: 'Moreninha, Rita Vieira, Mário Covas' },
        { nome: 'Região Oeste', bairros: 'Caiobá, Ipiranga, Popular' },
        { nome: 'Região Norte', bairros: 'Coronel Antonino, São Francisco, Monte Castelo' },
        { nome: 'Região Central', bairros: 'Centro, Amambaí, Cabreúva' },
    ];

    return (
        <section id="cobertura" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                    <Badge className="bg-orange-100 text-orange-700 mb-6">
                        <MapPin className="w-4 h-4 mr-2" />
                        Cobertura
                    </Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                        Ampla cobertura em{' '}
                        <span className="text-orange-500">Campo Grande</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Nossa rede própria possui mais de <strong>1.000 km de fibra óptica</strong> e backbone de <strong>100Gbps em anel</strong>, 
                        abrangendo centenas de bairros nas principais regiões da cidade.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {regioes.map((regiao, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-orange-200 transition-colors"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                                    <MapPin className="w-5 h-5 text-orange-600" />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900">{regiao.nome}</h3>
                            </div>
                            <p className="text-gray-600 text-sm">{regiao.bairros}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {[
                        { value: '1.000+', label: 'km de fibra' },
                        { value: '100Gbps', label: 'Backbone em anel' },
                        { value: '5', label: 'Regiões cobertas' },
                        { value: '100%', label: 'Fibra óptica' },
                    ].map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center p-6 bg-gradient-to-br from-orange-50 to-white rounded-2xl"
                        >
                            <p className="text-3xl font-black text-orange-500 mb-1">{stat.value}</p>
                            <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Investimento Section
function InvestimentoSection({ onContactClick }) {
    return (
        <section id="investimento" className="py-24 bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                    <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 mb-6">
                        <DollarSign className="w-4 h-4 mr-2" />
                        Investimento
                    </Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
                        Investimento e{' '}
                        <span className="text-orange-400">parceria</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Modelo transparente e acessível para provedores que buscam crescimento escalável.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    {/* Standard Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        <Card className="h-full border-0 bg-gray-800/50 backdrop-blur-sm border border-gray-700/50">
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-2">Porta Padrão</h3>
                                <p className="text-gray-400 mb-6">Acesso à Rede Neutra Freeway</p>
                                <div className="mb-6">
                                    <span className="text-5xl font-black text-white">R$ 25</span>
                                    <span className="text-gray-400 text-lg">,00/porta</span>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {[
                                        'Franquia mínima: 100 portas',
                                        'VLAN exclusiva',
                                        'OLT própria',
                                        'Suporte técnico dedicado',
                                        'Provisionamento simplificado',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-gray-300">
                                            <Check className="w-5 h-5 text-orange-400 flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white" onClick={onContactClick}>
                                    Solicitar Parceria
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Discount Plan */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                    >
                        <Card className="h-full border-0 bg-gradient-to-br from-orange-500 to-orange-600 relative overflow-hidden">
                            <div className="absolute top-4 right-4">
                                <Badge className="bg-white/20 text-white border-white/30">
                                    Melhor Custo
                                </Badge>
                            </div>
                            <CardContent className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-2">Porta com Link Freeway</h3>
                                <p className="text-white/70 mb-6">Valor de porta para clientes com Link Freeway</p>
                                <div className="mb-6">
                                    <span className="text-5xl font-black text-white">R$ 20</span>
                                    <span className="text-white/70 text-lg">,00/porta</span>
                                </div>
                                <ul className="space-y-3 mb-8">
                                    {[
                                        'Franquia mínima: 100 portas',
                                        'VLAN exclusiva',
                                        'OLT própria',
                                        
                                        'Suporte técnico dedicado',
                                        'Economia de R$ 5,00 por porta',
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center gap-3 text-white">
                                            <Check className="w-5 h-5 text-white flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <Button className="w-full bg-white text-orange-600 hover:bg-gray-100" onClick={onContactClick}>
                                    Solicitar Parceria
                                </Button>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// Footer Component
function Footer({ onContactClick }) {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="lg:col-span-2">
                        <img src={logo} alt="Freeway Tecnologia" className="h-16 w-auto mb-6" />
                        <p className="text-gray-400 leading-relaxed mb-4 max-w-sm">
                            A <strong className="text-white">Rede Neutra Freeway</strong> é a solução ideal para provedores 
                            que buscam expandir sua operação com infraestrutura de qualidade e custo previsível.
                        </p>
                        <p className="text-sm text-gray-500 mb-6">Uma empresa do Grupo Easy Net</p>

                        <div className="space-y-3">
                            <a href="https://wa.me/556733043003?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20a%20Rede%20Neutra." target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors">
                                <Phone className="w-5 h-5" />
                                <span>(67) 3304-3003</span>
                            </a>
                            <div className="flex items-center gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 flex-shrink-0" />
                                <span>R. Goiás, 1757 - Campo Grande, MS</span>
                            </div>
                        </div>

                        <div className="flex gap-3 mt-6">
                            {[Facebook, Instagram, Youtube, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors">
                                    <Icon className="w-5 h-5" />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Navegação</h4>
                        <ul className="space-y-3">
                            <li><a href="#vantagens" className="text-gray-400 hover:text-orange-400 transition-colors">Vantagens</a></li>
                            <li><a href="#como-funciona" className="text-gray-400 hover:text-orange-400 transition-colors">Como Funciona</a></li>
                            <li><a href="#cobertura" className="text-gray-400 hover:text-orange-400 transition-colors">Cobertura</a></li>
                            <li><a href="#investimento" className="text-gray-400 hover:text-orange-400 transition-colors">Investimento</a></li>
                            <li><Link to="/" className="text-gray-400 hover:text-orange-400 transition-colors">Site Principal</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Contato</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                Seg-Sex: 08h às 18h
                            </li>
                            <li className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                Sáb: 08h às 12h
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            'Rede 100% Fibra Óptica',
                            'Backbone 100Gbps em Anel',
                            '+1.000 km de Fibra',
                            'Grupo Easy Net'
                        ].map((badge, i) => (
                            <div key={i} className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-full">
                                <div className="w-2 h-2 bg-orange-500 rounded-full" />
                                <span className="text-sm text-gray-300">{badge}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-6 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                        <p>© 2025 Freeway Tecnologia. Todos os direitos reservados.</p>
                        <p>Uma empresa do Grupo Easy Net • Pioneira em Fibra Óptica no MS</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// Main Page Component
export default function RedeNeutra() {
    const [contactModalOpen, setContactModalOpen] = useState(false);

    const openContactModal = useCallback(() => {
        setContactModalOpen(true);
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <SEOHead
                title="Rede Neutra | Infraestrutura Fibra Óptica para ISPs | Freeway Campo Grande MS"
                description="Rede Neutra para provedores de internet (ISPs) em Campo Grande MS. Infraestrutura FTTH pronta para uso, VLAN exclusiva, OLT própria. Porta a partir de R$ 20,00 com Link Freeway."
                canonical="https://freeway.lovable.app/RedeNeutra"
            />
            <Header onContactClick={openContactModal} />
            <main>
                <HeroSection onContactClick={openContactModal} />
                <VantagensSection />
                <ComoFuncionaSection />
                <CoberturaSection />
                <InvestimentoSection onContactClick={openContactModal} />
            </main>
            <Footer onContactClick={openContactModal} />

            <ContactModal
                open={contactModalOpen}
                onOpenChange={setContactModalOpen}
            />
        </div>
    );
}
