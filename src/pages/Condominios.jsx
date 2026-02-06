import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from 'framer-motion';
import { 
    ArrowRight, 
    Shield, 
    Wifi, 
    Camera, 
    Phone, 
    Tv, 
    Server, 
    Building2, 
    Network, 
    Lock, 
    Smartphone, 
    Users,
    MapPin,
    Clock,
    Menu,
    X,
    ChevronRight,
    Zap,
    Globe,
    Headphones,
    CheckCircle2,
    Home,
    Eye,
    Radio,
    Fingerprint,
    MonitorPlay,
    PhoneCall,
    HardDrive
} from 'lucide-react';
import { AnimatePresence } from 'framer-motion';
import logo from '@/assets/logo.png';
import ContactModal from '@/components/freeway/ContactModal';

// Header Component
function CondominiosHeader({ onContactClick }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { label: 'Fibra Óptica', href: '#fibra' },
        { label: 'Segurança', href: '#seguranca' },
        { label: 'Wi-Fi', href: '#wifi' },
        { label: 'Entretenimento', href: '#entretenimento' },
        { label: 'Freeway', href: '#autoridade' },
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
                        <Link to="/" className="flex items-center">
                            <img 
                                src={logo} 
                                alt="Freeway Tecnologia" 
                                className="h-16 w-auto"
                            />
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-8">
                            {navItems.map((item) => (
                                <a 
                                    key={item.label}
                                    href={item.href}
                                    className="text-white/90 hover:text-white font-medium transition-colors relative group"
                                >
                                    {item.label}
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full" />
                                </a>
                            ))}
                        </nav>

                        {/* CTA Buttons */}
                        <div className="hidden lg:flex items-center gap-3">
                            <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-transparent" asChild>
                                <Link to="/">
                                    Voltar ao Site
                                </Link>
                            </Button>
                            <Button className="bg-white text-orange-600 hover:bg-gray-100 shadow-lg" onClick={onContactClick}>
                                Solicitar Estudo
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
                                    <a 
                                        key={item.label}
                                        href={item.href}
                                        className="block text-white/90 hover:text-white font-medium py-2"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                    </a>
                                ))}
                                <div className="pt-4 space-y-3 border-t border-orange-400/30">
                                    <Button variant="outline" className="w-full border-white/30 text-white hover:bg-white/10 bg-transparent" asChild>
                                        <Link to="/">Voltar ao Site</Link>
                                    </Button>
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
        <section className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900">
            {/* Background Pattern */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl" />
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Content */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold border border-orange-500/30">
                            <Building2 className="w-4 h-4" />
                            Condomínios Inteligentes
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                            O padrão ouro em{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500">
                                conectividade e segurança
                            </span>{' '}
                            para o seu condomínio
                        </h1>

                        <p className="text-xl text-gray-300 leading-relaxed max-w-xl">
                            Infraestrutura <span className="font-semibold text-white">100% fibra óptica</span> com tecnologia GPON, 
                            unificando internet de alta performance, vigilância inteligente e comunicação digital em uma única rede resiliente.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4">
                            <Button 
                                size="lg" 
                                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-xl shadow-orange-500/30 text-lg px-8 py-6"
                                onClick={onContactClick}
                            >
                                Solicitar Estudo de Viabilidade Gratuito
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap gap-6 pt-4">
                            {[
                                { icon: Shield, text: 'Segurança 24/7' },
                                { icon: Zap, text: '100Gbps Backbone' },
                                { icon: Building2, text: 'Gestão Completa' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2 text-gray-400">
                                    <item.icon className="w-5 h-5 text-orange-500" />
                                    <span className="text-sm font-medium">{item.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative">
                            {/* Main Card */}
                            <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-8 relative z-10 border border-gray-700">
                                <div className="grid grid-cols-2 gap-4">
                                    {[
                                        { icon: Network, label: 'Fibra FTTH', color: 'text-blue-400', bg: 'bg-blue-500/20' },
                                        { icon: Camera, label: 'Câmeras IA', color: 'text-green-400', bg: 'bg-green-500/20' },
                                        { icon: Wifi, label: 'Wi-Fi Pro', color: 'text-purple-400', bg: 'bg-purple-500/20' },
                                        { icon: Tv, label: 'IPTV', color: 'text-orange-400', bg: 'bg-orange-500/20' },
                                    ].map((item, i) => (
                                        <div key={i} className={`${item.bg} rounded-2xl p-6 flex flex-col items-center justify-center gap-3`}>
                                            <item.icon className={`w-10 h-10 ${item.color}`} />
                                            <span className="text-white font-medium text-sm">{item.label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Floating Cards */}
                            <motion.div 
                                className="absolute -left-8 top-1/4 bg-white rounded-2xl shadow-xl p-4 z-20"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                                        <CheckCircle2 className="w-5 h-5 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">Status</p>
                                        <p className="font-bold text-gray-900">100% Online</p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div 
                                className="absolute -right-8 bottom-1/4 bg-white rounded-2xl shadow-xl p-4 z-20"
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                                        <Shield className="w-5 h-5 text-orange-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">Proteção</p>
                                        <p className="font-bold text-gray-900">Ativa 24/7</p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

// Section Component
function Section({ id, title, subtitle, children, dark = false }) {
    return (
        <section id={id} className={`py-16 lg:py-24 ${dark ? 'bg-gray-900 text-white' : 'bg-gray-50'}`}>
            <div className="max-w-7xl mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${dark ? 'text-white' : 'text-gray-900'}`}>
                        {title}
                    </h2>
                    {subtitle && (
                        <p className={`text-lg max-w-3xl mx-auto ${dark ? 'text-gray-400' : 'text-gray-600'}`}>
                            {subtitle}
                        </p>
                    )}
                </motion.div>
                {children}
            </div>
        </section>
    );
}

// Feature Card Component
function FeatureCard({ icon: Icon, title, description, iconColor = 'text-orange-500', iconBg = 'bg-orange-100' }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            <Card className="h-full bg-white border-gray-200 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                    <div className={`w-14 h-14 ${iconBg} rounded-2xl flex items-center justify-center mb-4`}>
                        <Icon className={`w-7 h-7 ${iconColor}`} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
                    <p className="text-gray-600 leading-relaxed">{description}</p>
                </CardContent>
            </Card>
        </motion.div>
    );
}

// Fibra Section
function FibraSection() {
    const features = [
        {
            icon: Home,
            title: 'Rede FTTH Completa',
            description: 'Projetamos e executamos a instalação de fibra óptica diretamente até cada unidade (apartamento ou casa).',
            iconColor: 'text-blue-500',
            iconBg: 'bg-blue-100'
        },
        {
            icon: Zap,
            title: 'Capacidade Ilimitada',
            description: 'Garante velocidade e estabilidade para todos os serviços digitais, eliminando gargalos e preparando o condomínio para as demandas tecnológicas do futuro.',
            iconColor: 'text-yellow-500',
            iconBg: 'bg-yellow-100'
        },
        {
            icon: Globe,
            title: 'Internet de Alta Performance',
            description: 'Conectividade dedicada e unificada para residências e áreas comuns, com a confiabilidade de uma rede própria.',
            iconColor: 'text-green-500',
            iconBg: 'bg-green-100'
        },
    ];

    return (
        <Section 
            id="fibra"
            title="Infraestrutura de Fibra Óptica FTTH"
            subtitle="A base de tudo: tecnologia de ponta que valoriza seu patrimônio e prepara seu condomínio para o futuro"
        >
            <div className="grid md:grid-cols-3 gap-6">
                {features.map((feature, i) => (
                    <FeatureCard key={i} {...feature} />
                ))}
            </div>
        </Section>
    );
}

// Segurança Section
function SegurancaSection() {
    const features = [
        {
            icon: Eye,
            title: 'Câmeras com IA',
            description: 'Monitoramento local ou em nuvem que vai além da gravação simples, oferecendo reconhecimento facial, leitura de placas e detecção de objetos abandonados.',
            iconColor: 'text-purple-500',
            iconBg: 'bg-purple-100'
        },
        {
            icon: Radio,
            title: 'Proteção de Perímetro Multicamadas',
            description: 'Integração de cercas elétricas, sensores infravermelhos e enlaces de fibra óptica para detecção de perturbações, garantindo resposta rápida a invasões.',
            iconColor: 'text-red-500',
            iconBg: 'bg-red-100'
        },
        {
            icon: Fingerprint,
            title: 'Alarmes e Acesso Inteligente',
            description: 'Controle de entrada e saída com monitoramento de vídeo integrado entre a guarita e os condôminos, aumentando a agilidade e conveniência.',
            iconColor: 'text-blue-500',
            iconBg: 'bg-blue-100'
        },
        {
            icon: Smartphone,
            title: 'Portaria e Interfonia via Aplicativo',
            description: 'Gestão de acesso na palma da mão, facilitando a comunicação com visitantes e o controle de segurança em tempo real.',
            iconColor: 'text-green-500',
            iconBg: 'bg-green-100'
        },
    ];

    return (
        <Section 
            id="seguranca"
            title="Segurança e Vigilância Inteligente"
            subtitle="Tecnologia que protege seu patrimônio e traz tranquilidade para todos os moradores"
            dark
        >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                        <Card className="h-full bg-gray-800 border-gray-700 hover:border-orange-500/50 transition-colors">
                            <CardContent className="p-6">
                                <div className={`w-14 h-14 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-4`}>
                                    <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}

// Wi-Fi Section
function WifiSection() {
    const features = [
        {
            icon: Wifi,
            title: 'Projeto de Rede Sem Fio Compartilhada',
            description: 'Cobertura consistente em qualquer ponto das áreas comuns para acesso a câmeras e interfones.',
            iconColor: 'text-purple-500',
            iconBg: 'bg-purple-100'
        },
        {
            icon: Users,
            title: 'Captive Portal Profissional',
            description: 'Solução completa para login social e controle de banda por usuário, garantindo total conformidade com o Marco Civil da Internet e a LGPD.',
            iconColor: 'text-blue-500',
            iconBg: 'bg-blue-100'
        },
        {
            icon: Shield,
            title: 'Firewall Robusto',
            description: 'Implementação de Next Generation Firewall (NGFW) para proteger a rede contra ameaças cibernéticas e garantir a privacidade dos dados.',
            iconColor: 'text-orange-500',
            iconBg: 'bg-orange-100'
        },
    ];

    return (
        <Section 
            id="wifi"
            title="Wi-Fi Inteligente e Gestão de Áreas Comuns"
            subtitle="Conectividade profissional que garante segurança digital e conformidade legal"
        >
            <div className="grid md:grid-cols-3 gap-6">
                {features.map((feature, i) => (
                    <FeatureCard key={i} {...feature} />
                ))}
            </div>
        </Section>
    );
}

// Entretenimento Section
function EntretenimentoSection() {
    const features = [
        {
            icon: MonitorPlay,
            title: 'IPTV de Última Geração',
            description: 'Experiência com mais de 500 canais SD/HD e acesso direto a plataformas como Disney+, HBO MAX, SKY+ e CDNTV, eliminando a necessidade de antenas externas e cabeamentos complexos.',
            iconColor: 'text-red-500',
            iconBg: 'bg-red-100'
        },
        {
            icon: PhoneCall,
            title: 'Telefonia e Interfonia Digital',
            description: 'Modernização da comunicação interna e externa com tecnologia URA (Unidade de Resposta Audível) e gravação de chamadas para total rastreabilidade e segurança.',
            iconColor: 'text-green-500',
            iconBg: 'bg-green-100'
        },
    ];

    return (
        <Section 
            id="entretenimento"
            title="Entretenimento e Comunicação Unificada"
            subtitle="Modernize a experiência dos moradores com soluções integradas"
            dark
        >
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {features.map((feature, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                    >
                        <Card className="h-full bg-gray-800 border-gray-700 hover:border-orange-500/50 transition-colors">
                            <CardContent className="p-6">
                                <div className={`w-14 h-14 ${feature.iconBg} rounded-2xl flex items-center justify-center mb-4`}>
                                    <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}

// Gestão Section
function GestaoSection() {
    return (
        <Section 
            id="gestao"
            title="Gestão Administrativa e Infraestrutura"
            subtitle="Soluções completas para a administração do seu condomínio"
        >
            <div className="max-w-3xl mx-auto">
                <FeatureCard 
                    icon={HardDrive}
                    title="Locação para Administração"
                    description="Oferta de servidores e estações de trabalho dedicados para a gestão financeira e administrativa do condomínio, garantindo performance e segurança nas rotinas internas."
                    iconColor="text-indigo-500"
                    iconBg="bg-indigo-100"
                />
            </div>
        </Section>
    );
}

// Autoridade Section
function AutoridadeSection({ onContactClick }) {
    const stats = [
        { icon: Zap, value: '100Gbps', label: 'Backbone', description: 'Rede em anel com dois datacenters próprios para garantir que a conexão nunca pare.' },
        { icon: Globe, value: '4', label: 'Acessos Independentes', description: 'Alta disponibilidade com transporte de dados direto para São Paulo.' },
        { icon: Headphones, value: '24/7', label: 'Suporte Elite', description: 'Assistência técnica especializada disponível 24 horas por dia, 7 dias por semana.' },
    ];

    return (
        <section id="autoridade" className="py-16 lg:py-24 bg-gradient-to-br from-orange-500 to-orange-600">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                        Autoridade e Confiança Freeway
                    </h2>
                    <p className="text-lg max-w-3xl mx-auto text-orange-100">
                        A Freeway cuida de toda a operação e manutenção do serviço sob sua responsabilidade, 
                        transformando tecnologia em um ativo que valoriza o imóvel.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6 mb-12">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                        >
                            <Card className="h-full bg-white/10 border-white/20 backdrop-blur-sm">
                                <CardContent className="p-6 text-center">
                                    <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                        <stat.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <p className="text-4xl font-black text-white mb-1">{stat.value}</p>
                                    <p className="text-orange-100 font-semibold mb-2">{stat.label}</p>
                                    <p className="text-white/80 text-sm">{stat.description}</p>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <Button 
                        size="lg" 
                        className="bg-white text-orange-600 hover:bg-gray-100 shadow-xl text-lg px-8 py-6"
                        onClick={onContactClick}
                    >
                        Solicitar Estudo de Viabilidade Gratuito
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </div>
            </div>
        </section>
    );
}

// Footer
function CondominiosFooter({ onContactClick }) {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid md:grid-cols-3 gap-8 items-center">
                    <div>
                        <img 
                            src={logo} 
                            alt="Freeway Tecnologia" 
                            className="h-16 w-auto mb-4"
                        />
                        <p className="text-gray-400">
                            Pioneira em Fibra Óptica no MS
                        </p>
                    </div>

                    <div className="text-center">
                        <div className="space-y-2">
                            <a href="https://api.whatsapp.com/send?phone=556730253131" className="flex items-center justify-center gap-2 text-gray-400 hover:text-orange-400 transition-colors">
                                <Phone className="w-5 h-5" />
                                <span>(67) 3025-3131</span>
                            </a>
                            <div className="flex items-center justify-center gap-2 text-gray-400">
                                <MapPin className="w-5 h-5 flex-shrink-0" />
                                <span>R. Goiás, 1757 - Campo Grande, MS</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-right">
                        <Button 
                            className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
                            onClick={onContactClick}
                        >
                            Falar com Consultor
                            <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                        <p>© 2025 Freeway Tecnologia. Todos os direitos reservados.</p>
                        <Link to="/" className="flex items-center gap-2 hover:text-orange-400 transition-colors">
                            <ChevronRight className="w-4 h-4" />
                            Voltar ao Site Principal
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// Main Page Component
export default function Condominios() {
    const [contactModalOpen, setContactModalOpen] = useState(false);

    const openContactModal = useCallback(() => {
        setContactModalOpen(true);
    }, []);

    useEffect(() => {
        document.title = 'Freeway Condomínios Inteligentes | Fibra Óptica, Segurança e Wi-Fi para Condomínios em Campo Grande MS';
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <CondominiosHeader onContactClick={openContactModal} />
            <main>
                <HeroSection onContactClick={openContactModal} />
                <FibraSection />
                <SegurancaSection />
                <WifiSection />
                <EntretenimentoSection />
                <GestaoSection />
                <AutoridadeSection onContactClick={openContactModal} />
            </main>
            <CondominiosFooter onContactClick={openContactModal} />
            
            <ContactModal 
                open={contactModalOpen} 
                onOpenChange={setContactModalOpen} 
            />
        </div>
    );
}
