import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Phone, MapPin, Clock, Menu, X, 
    Shield, Zap, Network, Server,
    Lock, Globe, ArrowRight, Check,
    Headphones, Settings, Cpu, Building2,
    Link2, MonitorSmartphone, Gauge, DollarSign,
    Facebook, Instagram, Youtube, Linkedin, ExternalLink
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
        { label: 'Diferenciais', href: '#diferenciais' },
        { label: 'Especificações', href: '#especificacoes' },
        { label: 'Planos', href: '#planos' },
        { label: 'Suporte', href: '#suporte' },
        { label: '← Voltar ao Site', href: '/', isRoute: true },
    ];

    return (
        <>
            {/* Top Bar */}
            <div className="bg-gray-900 text-white py-2 hidden md:block">
                <div className="max-w-7xl mx-auto px-6 flex justify-between items-center text-sm">
                    <div className="flex items-center gap-6">
                        <a href="https://api.whatsapp.com/send?phone=556733043003" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
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

            {/* Main Header */}
            <header className={`sticky top-0 z-50 transition-all duration-300 bg-gradient-to-r from-orange-500 to-orange-600 ${isScrolled ? 'shadow-lg' : ''}`}>
                <div className="max-w-7xl mx-auto px-6 py-3">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link to="/" className="flex items-center">
                            <img 
                                src={logo} 
                                alt="Freeway Tecnologia" 
                                className="h-24 w-auto"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-8">
                            {navItems.map((item) => (
                                item.isRoute ? (
                                    <Link 
                                        key={item.label}
                                        to={item.href}
                                        className="text-white/90 hover:text-white font-medium transition-colors relative group"
                                    >
                                        {item.label}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
                                    </Link>
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

                        {/* CTA Button */}
                        <div className="hidden lg:flex items-center gap-3">
                            <Button className="bg-white text-orange-600 hover:bg-gray-100 shadow-lg" onClick={onContactClick}>
                                Solicitar Estudo de Viabilidade
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
                                    item.isRoute ? (
                                        <Link 
                                            key={item.label}
                                            to={item.href}
                                            className="block text-white/90 hover:text-white font-medium py-2"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
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
                                <div className="pt-4 border-t border-orange-400/30">
                                    <Button className="w-full bg-white text-orange-600 hover:bg-gray-100" onClick={onContactClick}>
                                        Solicitar Estudo
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
            {/* Network Animation Background */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
                
                {/* Network Lines */}
                <svg className="absolute inset-0 w-full h-full opacity-20">
                    <defs>
                        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#f97316" stopOpacity="0" />
                            <stop offset="50%" stopColor="#f97316" stopOpacity="1" />
                            <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                    {/* Animated connection lines */}
                    <motion.line x1="10%" y1="30%" x2="40%" y2="50%" stroke="url(#lineGradient)" strokeWidth="2"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }} />
                    <motion.line x1="60%" y1="20%" x2="90%" y2="60%" stroke="url(#lineGradient)" strokeWidth="2"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }} />
                    <motion.line x1="20%" y1="70%" x2="80%" y2="40%" stroke="url(#lineGradient)" strokeWidth="2"
                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 1 }} />
                </svg>
                
                {/* Connection Points */}
                {[
                    { x: '10%', y: '30%', label: 'Matriz' },
                    { x: '40%', y: '50%', label: 'Filial 1' },
                    { x: '60%', y: '20%', label: 'Filial 2' },
                    { x: '90%', y: '60%', label: 'Filial 3' },
                    { x: '20%', y: '70%', label: 'DC' },
                    { x: '80%', y: '40%', label: 'Filial 4' },
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
                            <div className="w-4 h-4 bg-orange-500 rounded-full animate-pulse" />
                            <div className="absolute -inset-2 bg-orange-500/30 rounded-full animate-ping" />
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 mb-6">
                            <Link2 className="w-4 h-4 mr-2" />
                            Rede Privada Dedicada
                        </Badge>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                            Conecte suas filiais com{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                                velocidade e sigilo
                            </span>{' '}
                            de uma rede 100% dedicada
                        </h1>
                        
                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            O <strong className="text-white">Mega Link Freeway</strong> oferece interligação Ponto a Ponto (LAN to LAN) 
                            totalmente independente da internet, garantindo <strong className="text-orange-400">sigilo absoluto</strong> e 
                            proteção contra ameaças externas.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white shadow-xl shadow-orange-500/30" onClick={onContactClick}>
                                Solicitar Estudo de Viabilidade
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hidden lg:block"
                    >
                        <div className="relative">
                            {/* Network Diagram */}
                            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-orange-500/20">
                                <div className="grid grid-cols-3 gap-4">
                                    {/* Central Hub */}
                                    <div className="col-span-3 flex justify-center mb-4">
                                        <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 text-center shadow-xl w-full max-w-full">
                                            <Building2 className="w-12 h-12 text-white mx-auto mb-2" />
                                            <span className="text-white font-bold">MATRIZ</span>
                                        </div>
                                    </div>
                                    
                                    {/* Connection Lines - one per branch */}
                                    <div className="col-span-3 grid grid-cols-3 gap-4">
                                        {[0, 1, 2].map((i) => (
                                            <div key={i} className="flex justify-center">
                                                <motion.div 
                                                    className="h-12 w-0.5 bg-gradient-to-b from-orange-500 to-orange-500/30"
                                                    initial={{ scaleY: 0 }}
                                                    animate={{ scaleY: 1 }}
                                                    transition={{ delay: 0.3 + i * 0.15, duration: 0.4 }}
                                                    style={{ transformOrigin: 'top' }}
                                                />
                                            </div>
                                        ))}
                                    </div>
                                    
                                    {/* Branches */}
                                    {['Filial 1', 'Filial 2', 'Filial 3'].map((name, i) => (
                                        <motion.div
                                            key={name}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 + i * 0.2 }}
                                            className="bg-gray-700/50 rounded-xl p-4 text-center border border-orange-500/30"
                                        >
                                            <Server className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                                            <span className="text-gray-300 text-sm font-medium">{name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                                
                                <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
                                        <span>Conexão Ativa</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Lock className="w-4 h-4 text-green-400" />
                                        <span>100% Privado</span>
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

// Diferenciais Section
function DiferenciaisSection() {
    const diferenciais = [
        {
            icon: Shield,
            title: 'Independência Total',
            description: 'Operação livre dos riscos e ameaças da internet pública. Sua comunicação interna nunca passa pela rede mundial.',
            highlight: 'Zero exposição'
        },
        {
            icon: Zap,
            title: 'Velocidade sem Limites',
            description: 'Disponível em velocidades que variam de 1Mbps até 100Gbps. Escale conforme sua demanda cresce.',
            highlight: 'Até 100Gbps'
        },
        {
            icon: Network,
            title: 'Imunidade Técnica',
            description: 'Conexão via fibra óptica imune a interferências eletromagnéticas, garantindo estabilidade mesmo em ambientes desafiadores.',
            highlight: '100% Fibra'
        },
        {
            icon: DollarSign,
            title: 'Custos Previsíveis',
            description: 'Custos fixos mensais, independentes do volume de tráfego utilizado. Planeje seu orçamento com segurança.',
            highlight: 'Valor fixo'
        }
    ];

    return (
        <section id="diferenciais" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <Badge className="bg-orange-100 text-orange-700 mb-6">
                        <Zap className="w-4 h-4 mr-2" />
                        Diferenciais Exclusivos
                    </Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                        Diferenciais que{' '}
                        <span className="text-orange-500">impulsionam negócios</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        O Mega Link é a solução para empresas que não podem depender da instabilidade da internet pública para seus sistemas internos.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {diferenciais.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-shadow bg-gradient-to-br from-gray-50 to-white">
                                <CardContent className="p-8">
                                    <div className="flex items-start gap-6">
                                        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/30 flex-shrink-0">
                                            <item.icon className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-3 mb-2">
                                                <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                                                <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                                                    {item.highlight}
                                                </Badge>
                                            </div>
                                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
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

// Especificações Section
function EspecificacoesSection() {
    const specs = [
        {
            icon: MonitorSmartphone,
            title: 'Interface Ethernet',
            description: 'Interligação de LANs em diferentes sites como se estivessem em um mesmo local físico. Transparência total para suas aplicações.'
        },
        {
            icon: Settings,
            title: 'Porta Layer 2',
            description: 'Liberdade total para utilizar seus próprios roteadores, firewalls e appliances de segurança. Você mantém o controle.'
        },
        {
            icon: Gauge,
            title: 'Qualidade Digital',
            description: 'Circuitos digitais dedicados que proporcionam alta confiabilidade e sigilo na comunicação de dados.'
        }
    ];

    return (
        <section id="especificacoes" className="py-24 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 mb-6">
                        <Cpu className="w-4 h-4 mr-2" />
                        Para o Time de TI
                    </Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
                        Especificações{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">técnicas</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Infraestrutura de nível carrier, projetada para integrar-se perfeitamente ao seu ambiente de rede existente.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {specs.map((spec, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-orange-500/50 transition-colors"
                        >
                            <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
                                <spec.icon className="w-7 h-7 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{spec.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{spec.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Planos Section
function PlanosSection({ onContactClick }) {
    const planosMunicipal = [
        {
            name: 'Megalink Municipal 10 Mega',
            price: '300,00',
            speed: '10 Mega',
            destaque: 'Ideal para interligação básica de sistemas e dados administrativos com segurança total.',
        },
        {
            name: 'Megalink Municipal 100 Mega',
            price: '1.100,00',
            speed: '100 Mega',
            destaque: 'Alta velocidade para tráfego intenso de arquivos, backups locais e sistemas de gestão em tempo real.',
            popular: true,
        },
        {
            name: 'Megalink Municipal 1 Giga',
            price: '5.800,00',
            speed: '1 Giga',
            destaque: 'Solução de ultra velocidade para empresas que demandam máxima largura de banda e latência mínima entre sites.',
        },
    ];

    const planosEstadual = [
        {
            name: 'Megalink Estadual 10 Mega',
            price: '500,00',
            speed: '10 Mega',
            destaque: 'Conexão estável e segura para comunicação essencial entre unidades distantes.',
        },
        {
            name: 'Megalink Estadual 100 Mega',
            price: '1.300,00',
            speed: '100 Mega',
            destaque: 'Performance robusta para unificar redes corporativas (LANs) em diferentes localidades como se fossem um único site.',
            popular: true,
        },
        {
            name: 'Megalink Estadual 1 Giga',
            price: '6.500,00',
            speed: '1 Giga',
            destaque: 'Potência máxima em fibra óptica para acelerar grandes volumes de negócios em todo o estado.',
        },
    ];

    const diferenciais = [
        { icon: Shield, text: 'Segurança Máxima: Rede privada livre de riscos de ataques vindos da internet pública.' },
        { icon: DollarSign, text: 'Custos Fixos: Valor mensal independente do volume de tráfego utilizado.' },
        { icon: Zap, text: 'Estabilidade: Imune a interferências eletromagnéticas.' },
        { icon: Settings, text: 'Tecnologia Layer 2: Entrega em interface Ethernet, permitindo total liberdade para gerenciar seus próprios roteadores e firewalls.' },
        { icon: Headphones, text: 'Suporte 24/7: Assistência técnica e monitoramento sob responsabilidade da Freeway todos os dias da semana.' },
    ];

    const renderPlanCard = (plano, index) => (
        <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className={`relative rounded-3xl overflow-hidden ${plano.popular ? 'ring-2 ring-orange-500 shadow-2xl shadow-orange-500/20' : ''}`}
        >
            {plano.popular && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-center text-sm font-semibold py-2 z-10">
                    Mais Popular
                </div>
            )}
            <Card className={`h-full border-0 shadow-xl ${plano.popular ? 'bg-white pt-8' : 'bg-white'}`}>
                <CardContent className="p-8">
                    <div className="text-center mb-4">
                        <Badge className="bg-orange-100 text-orange-700 mb-3">{plano.speed}</Badge>
                        <h3 className="text-xl font-bold text-gray-900">{plano.name}</h3>
                    </div>
                    
                    <div className="text-center mb-6">
                        <div className="flex items-baseline justify-center gap-1">
                            <span className="text-sm text-gray-500">R$</span>
                            <span className="text-4xl font-black text-gray-900">{plano.price}</span>
                            <span className="text-gray-500">/mês</span>
                        </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-6 text-center leading-relaxed">{plano.destaque}</p>

                    <Button 
                        className={`w-full ${plano.popular ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 shadow-lg shadow-orange-500/30' : 'bg-gray-900 hover:bg-gray-800'} text-white`}
                        onClick={onContactClick}
                    >
                        Solicitar Proposta
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                </CardContent>
            </Card>
        </motion.div>
    );

    return (
        <section id="planos" className="py-24 bg-gradient-to-br from-gray-50 to-orange-50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <Badge className="bg-orange-100 text-orange-700 mb-6">
                        <DollarSign className="w-4 h-4 mr-2" />
                        Investimento Acessível
                    </Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                        Planos e{' '}
                        <span className="text-orange-500">investimento</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Conectividade estratégica com valores que cabem no orçamento da sua empresa. Velocidades escalam até 2 Giga sob consulta.
                    </p>
                </motion.div>

                {/* Municipal Plans */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-8"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                            <MapPin className="w-6 h-6 inline-block mr-2 text-orange-500" />
                            Megalink Municipal
                        </h3>
                        <p className="text-gray-600">Conectividade de alta performance para unidades dentro do mesmo município.</p>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {planosMunicipal.map(renderPlanCard)}
                    </div>
                </div>

                {/* Estadual Plans */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-8"
                    >
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                            <Globe className="w-6 h-6 inline-block mr-2 text-orange-500" />
                            Megalink Estadual
                        </h3>
                        <p className="text-gray-600">Interligação segura entre filiais localizadas em diferentes cidades do estado.</p>
                    </motion.div>
                    <div className="grid md:grid-cols-3 gap-6">
                        {planosEstadual.map(renderPlanCard)}
                    </div>
                </div>

                {/* Diferenciais */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gray-900 rounded-3xl p-8 md:p-12"
                >
                    <h3 className="text-2xl font-bold text-white text-center mb-8">Diferenciais Inclusos em Todos os Planos</h3>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {diferenciais.map((item, i) => (
                            <div key={i} className="flex items-start gap-3">
                                <div className="w-10 h-10 bg-orange-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <item.icon className="w-5 h-5 text-orange-400" />
                                </div>
                                <p className="text-gray-300 text-sm leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-gray-500 mt-8"
                >
                    * Velocidades escalam até 2 Giga com valores sob consulta para projetos maiores.
                </motion.p>
            </div>
        </section>
    );
}

// Suporte Section
function SuporteSection() {
    const items = [
        {
            icon: Settings,
            title: 'Gestão Completa',
            description: 'A Freeway é responsável por toda a operação, supervisão e manutenção do circuito via software.'
        },
        {
            icon: Headphones,
            title: 'Assistência Especializada',
            description: 'Suporte técnico disponível 24 horas por dia, 7 dias por semana para garantir sua operação.'
        },
        {
            icon: Cpu,
            title: 'Infraestrutura Própria',
            description: 'Tecnologia GPON e backbone de 100Gbps garantindo a evolução tecnológica da sua rede.'
        }
    ];

    return (
        <section id="suporte" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <Badge className="bg-orange-100 text-orange-700 mb-6">
                        <Headphones className="w-4 h-4 mr-2" />
                        Suporte Elite
                    </Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                        Suporte e{' '}
                        <span className="text-orange-500">operação Freeway</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Você foca no seu negócio. Nós cuidamos da sua conectividade com excelência operacional.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center"
                        >
                            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-orange-500/30">
                                <item.icon className="w-10 h-10 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
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
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <img 
                            src={logo} 
                            alt="Freeway Tecnologia" 
                            className="h-16 w-auto mb-6"
                        />
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
                            O <strong className="text-white">Mega Link</strong> é a solução definitiva para empresas que precisam de 
                            conexão privada, segura e de alta performance entre suas unidades.
                        </p>

                        <div className="space-y-3">
                            <a href="https://api.whatsapp.com/send?phone=556733043003" className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors">
                                <Phone className="w-5 h-5" />
                                <span>(67) 3304-3003</span>
                            </a>
                            <div className="flex items-center gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 flex-shrink-0" />
                                <span>R. Goiás, 1757 - Campo Grande, MS</span>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Navegação</h4>
                        <ul className="space-y-3">
                            <li><a href="#diferenciais" className="text-gray-400 hover:text-orange-400 transition-colors">Diferenciais</a></li>
                            <li><a href="#especificacoes" className="text-gray-400 hover:text-orange-400 transition-colors">Especificações</a></li>
                            <li><a href="#planos" className="text-gray-400 hover:text-orange-400 transition-colors">Planos</a></li>
                            <li><a href="#suporte" className="text-gray-400 hover:text-orange-400 transition-colors">Suporte</a></li>
                            <li><Link to="/" className="text-gray-400 hover:text-orange-400 transition-colors">Site Principal</Link></li>
                        </ul>
                    </div>

                    {/* Atendimento */}
                    <div>
                        <h4 className="font-bold text-white mb-4">Atendimento</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                Campo Grande
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                Bonito
                            </li>
                            <li className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" />
                                Dourados
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex flex-wrap justify-center gap-6">
                        {[
                            'Conexão Ponto a Ponto Dedicada',
                            'Rede 100% Fibra Óptica',
                            'Suporte 24/7'
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
                        <p>Pioneira em Fibra Óptica no MS</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// Main Page Component
export default function MegaLink() {
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
                title="Mega Link | Conexão Privada Ponto a Ponto | Freeway Campo Grande MS"
                description="Interligação ponto a ponto (LAN to LAN) independente da internet. Conecte matriz e filiais com segurança total, baixa latência e velocidades de até 100Gbps em Campo Grande MS."
                canonical="https://freeway.lovable.app/MegaLink"
            />
            <Header onContactClick={openContactModal} />
            <main>
                <HeroSection onContactClick={openContactModal} />
                <DiferenciaisSection />
                <EspecificacoesSection />
                <PlanosSection onContactClick={openContactModal} />
                <SuporteSection />
            </main>
            <Footer onContactClick={openContactModal} />
            
            <ContactModal 
                open={contactModalOpen} 
                onOpenChange={setContactModalOpen} 
            />
        </div>
    );
}
