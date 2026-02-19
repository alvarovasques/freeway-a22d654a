import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Phone, MapPin, Clock, Menu, X,
    Headphones, Settings, Cpu, PhoneCall,
    ArrowRight, Check, Mic, PhoneForwarded,
    Users, LayoutDashboard, Shield, Smartphone,
    TrendingUp, Layers, DollarSign,
    Facebook, Instagram, Youtube, Linkedin
} from 'lucide-react';
import logo from '@/assets/logo.png';
import ContactModal from '@/components/freeway/ContactModal';

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
        { label: 'Recursos', href: '#recursos' },
        { label: 'Vantagens', href: '#vantagens' },
        { label: 'Planos', href: '#planos' },
        { label: 'Suporte', href: '#suporte' },
        { label: '← Voltar ao Site', href: '/', isRoute: true },
    ];

    return (
        <>
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
                                Solicitar Demonstração Gratuita
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
                                        Solicitar Demonstração
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

                {/* Phone connection animation */}
                {[
                    { x: '15%', y: '25%', icon: '📞' },
                    { x: '75%', y: '20%', icon: '🎧' },
                    { x: '85%', y: '65%', icon: '📱' },
                    { x: '25%', y: '75%', icon: '☎️' },
                    { x: '50%', y: '45%', icon: '🖥️' },
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
                    <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
                        <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 mb-6">
                            <PhoneCall className="w-4 h-4 mr-2" />
                            Telefonia 100% na Nuvem
                        </Badge>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
                            Telefonia empresarial inteligente com{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                                PABX 100% na nuvem
                            </span>
                        </h1>

                        <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                            Elimine custos com hardware e tenha <strong className="text-white">URA completa</strong>,{' '}
                            <strong className="text-orange-400">gravação de chamadas</strong>, portabilidade numérica e
                            gestão centralizada em um único painel.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white shadow-xl shadow-orange-500/30" onClick={onContactClick}>
                                Solicitar Demonstração Gratuita
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="hidden lg:block">
                        <div className="relative">
                            <div className="bg-gray-800/50 backdrop-blur-sm rounded-3xl p-8 border border-orange-500/20">
                                <div className="text-center mb-6">
                                    <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl p-6 inline-block shadow-xl mb-4">
                                        <Headphones className="w-12 h-12 text-white" />
                                    </div>
                                    <p className="text-white font-bold text-lg">Central PABX Virtual</p>
                                </div>

                                <div className="grid grid-cols-3 gap-3">
                                    {[
                                        { icon: Mic, label: 'URA' },
                                        { icon: PhoneForwarded, label: 'Ramais' },
                                        { icon: Users, label: 'Filas' },
                                        { icon: Shield, label: 'Gravação' },
                                        { icon: LayoutDashboard, label: 'Painel' },
                                        { icon: Smartphone, label: 'Mobile' },
                                    ].map((item, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 + i * 0.1 }}
                                            className="bg-gray-700/50 rounded-xl p-3 text-center border border-orange-500/30"
                                        >
                                            <item.icon className="w-6 h-6 text-orange-400 mx-auto mb-1" />
                                            <span className="text-gray-300 text-xs font-medium">{item.label}</span>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-400">
                                    <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
                                        <span>Online</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Shield className="w-4 h-4 text-green-400" />
                                        <span>Criptografado</span>
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

// Recursos Section
function RecursosSection() {
    const recursos = [
        {
            icon: Mic,
            title: 'URA Completa',
            description: 'Unidade de Resposta Audível profissional com menus personalizados, direcionamento inteligente e atendimento automático 24h.',
            highlight: 'Atendimento 24h'
        },
        {
            icon: Shield,
            title: 'Gravação de Chamadas',
            description: 'Todas as ligações gravadas com armazenamento seguro na nuvem. Acesse históricos a qualquer momento para auditoria e treinamento.',
            highlight: 'Armazenamento seguro'
        },
        {
            icon: PhoneForwarded,
            title: 'Portabilidade Numérica',
            description: 'Mantenha seus números atuais ao migrar para o PABX Virtual. Transição transparente sem impacto para seus clientes.',
            highlight: 'Sem troca de número'
        },
        {
            icon: Users,
            title: 'Ramais Ilimitados',
            description: 'Adicione quantos ramais precisar. Escale sua operação sem limites.',
            highlight: 'Escala livre'
        },
        {
            icon: Layers,
            title: 'Filas de Atendimento',
            description: 'Filas inteligentes com distribuição automática de chamadas, música de espera personalizada e tempo estimado.',
            highlight: 'Distribuição inteligente'
        },
        {
            icon: LayoutDashboard,
            title: 'Painel de Gestão Web',
            description: 'Dashboard completo com métricas em tempo real, relatórios detalhados e controle total da sua central telefônica.',
            highlight: 'Tempo real'
        }
    ];

    return (
        <section id="recursos" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                    <Badge className="bg-orange-100 text-orange-700 mb-6">
                        <Cpu className="w-4 h-4 mr-2" />
                        Recursos Completos
                    </Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                        Tudo que sua empresa{' '}
                        <span className="text-orange-500">precisa em telefonia</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Uma central telefônica completa na nuvem, com recursos profissionais que antes exigiam investimentos altíssimos em hardware.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recursos.map((item, index) => (
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

// Vantagens Section
function VantagensSection() {
    const vantagens = [
        {
            icon: DollarSign,
            title: 'Zero Investimento em Hardware',
            description: 'Esqueça centrais telefônicas físicas, cabeamento e manutenção. Tudo funciona na nuvem com custo mensal previsível.'
        },
        {
            icon: TrendingUp,
            title: 'Escalabilidade Imediata',
            description: 'Adicione ramais, filas e funcionalidades instantaneamente conforme sua empresa cresce. Sem espera, sem obras.'
        },
        {
            icon: Smartphone,
            title: 'Mobilidade Total',
            description: 'Atenda chamadas de qualquer lugar — escritório, home office ou em trânsito. Seu ramal acompanha você.'
        }
    ];

    return (
        <section id="vantagens" className="py-24 bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                    <Badge className="bg-orange-500/20 text-orange-300 border-orange-500/30 mb-6">
                        <TrendingUp className="w-4 h-4 mr-2" />
                        Por que migrar?
                    </Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
                        Vantagens sobre o{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">PABX físico</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Modernize sua telefonia empresarial e reduza custos com uma solução 100% digital.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {vantagens.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-orange-500/50 transition-colors"
                        >
                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <item.icon className="w-7 h-7 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Planos Section
function PlanosSection({ onContactClick }) {
    const planos = [
        {
            name: 'PABX Básico',
            subtitle: 'Para pequenas empresas',
            price: '99',
            features: [
                'URA completa personalizada',
                'Gravação de chamadas',
                'Até 10 ramais',
                'Painel de gestão web',
                'Suporte comercial',
            ],
            highlight: false
        },
        {
            name: 'PABX Profissional',
            subtitle: 'Para empresas em crescimento',
            price: '199',
            features: [
                'Tudo do plano Básico',
                'Ramais ilimitados',
                'Filas de atendimento inteligentes',
                'Painel avançado com relatórios',
                'Suporte técnico 24/7',
                'Integração com CRM',
            ],
            highlight: true
        },
        {
            name: 'PABX Enterprise',
            subtitle: 'Personalização total',
            price: null,
            features: [
                'Tudo do plano Profissional',
                'Múltiplas URAs',
                'API de integração',
                'SLA dedicado',
                'Gerente de conta exclusivo',
                'Consultoria de implantação',
            ],
            highlight: false
        }
    ];

    return (
        <section id="planos" className="py-24 bg-gradient-to-br from-gray-50 to-orange-50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                    <Badge className="bg-orange-100 text-orange-700 mb-6">
                        <DollarSign className="w-4 h-4 mr-2" />
                        Planos Flexíveis
                    </Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                        Planos e{' '}
                        <span className="text-orange-500">investimento</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Escolha o plano ideal para o tamanho e necessidade da sua empresa. Todos incluem suporte e atualizações.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {planos.map((plano, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative rounded-3xl overflow-hidden ${plano.highlight ? 'ring-2 ring-orange-500' : ''}`}
                        >
                            {plano.highlight && (
                                <div className="absolute top-0 left-0 right-0 bg-orange-500 text-white text-center text-sm font-semibold py-2">
                                    Mais Popular
                                </div>
                            )}
                            <Card className={`h-full border-0 shadow-xl ${plano.highlight ? 'bg-white pt-8' : 'bg-white'}`}>
                                <CardContent className="p-8">
                                    <div className="text-center mb-6">
                                        <h3 className="text-2xl font-bold text-gray-900 mb-1">{plano.name}</h3>
                                        <p className="text-gray-500">{plano.subtitle}</p>
                                    </div>

                                    <div className="text-center mb-6">
                                        {plano.price ? (
                                            <>
                                                <div className="flex items-baseline justify-center gap-1">
                                                    <span className="text-gray-500">A partir de</span>
                                                </div>
                                                <div className="flex items-baseline justify-center gap-1">
                                                    <span className="text-lg text-gray-500">R$</span>
                                                    <span className="text-5xl font-black text-gray-900">{plano.price}</span>
                                                    <span className="text-gray-500">/mês</span>
                                                </div>
                                            </>
                                        ) : (
                                            <div className="py-3">
                                                <span className="text-3xl font-black text-gray-900">Sob consulta</span>
                                            </div>
                                        )}
                                    </div>

                                    <ul className="space-y-3 mb-8">
                                        {plano.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <div className="w-5 h-5 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                    <Check className="w-3 h-3 text-orange-600" />
                                                </div>
                                                <span className="text-gray-600">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Button
                                        className={`w-full ${plano.highlight ? 'bg-orange-500 hover:bg-orange-600' : 'bg-gray-900 hover:bg-gray-800'}`}
                                        onClick={onContactClick}
                                    >
                                        {plano.price ? 'Contratar Agora' : 'Falar com Consultor'}
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </Button>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
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
            description: 'A Freeway é responsável por toda a operação, configuração e manutenção do seu PABX Virtual.'
        },
        {
            icon: Headphones,
            title: 'Suporte 24/7',
            description: 'Equipe técnica especializada disponível 24 horas por dia para garantir o funcionamento da sua central.'
        },
        {
            icon: Cpu,
            title: 'Infraestrutura Própria',
            description: 'Servidores redundantes em data centers no Brasil, garantindo qualidade de voz e disponibilidade máxima.'
        }
    ];

    return (
        <section id="suporte" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
                    <Badge className="bg-orange-100 text-orange-700 mb-6">
                        <Headphones className="w-4 h-4 mr-2" />
                        Suporte Elite
                    </Badge>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                        Suporte e{' '}
                        <span className="text-orange-500">operação Freeway</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Você foca no seu negócio. Nós cuidamos da sua telefonia com excelência operacional.
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
                    <div className="lg:col-span-2">
                        <img src={logo} alt="Freeway Tecnologia" className="h-16 w-auto mb-6" />
                        <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
                            O <strong className="text-white">PABX Virtual Freeway</strong> é a solução completa de telefonia na nuvem
                            para empresas que buscam modernidade, economia e eficiência.
                        </p>
                        <div className="space-y-3">
                            <a href="https://api.whatsapp.com/send?phone=556730253131" className="flex items-center gap-3 text-gray-400 hover:text-orange-400 transition-colors">
                                <Phone className="w-5 h-5" />
                                <span>(67) 3025-3131</span>
                            </a>
                            <div className="flex items-center gap-3 text-gray-400">
                                <MapPin className="w-5 h-5 flex-shrink-0" />
                                <span>R. Goiás, 1757 - Campo Grande, MS</span>
                            </div>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Navegação</h4>
                        <ul className="space-y-3">
                            <li><a href="#recursos" className="text-gray-400 hover:text-orange-400 transition-colors">Recursos</a></li>
                            <li><a href="#vantagens" className="text-gray-400 hover:text-orange-400 transition-colors">Vantagens</a></li>
                            <li><a href="#planos" className="text-gray-400 hover:text-orange-400 transition-colors">Planos</a></li>
                            <li><a href="#suporte" className="text-gray-400 hover:text-orange-400 transition-colors">Suporte</a></li>
                            <li><Link to="/" className="text-gray-400 hover:text-orange-400 transition-colors">Site Principal</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-white mb-4">Atendimento</h4>
                        <ul className="space-y-3 text-gray-400">
                            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" />Campo Grande</li>
                            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" />Bonito</li>
                            <li className="flex items-center gap-2"><MapPin className="w-4 h-4" />Dourados</li>
                        </ul>
                        <button onClick={onContactClick} className="mt-4 text-orange-400 hover:text-orange-300 font-medium transition-colors">
                            Falar com Consultor →
                        </button>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-800">
                    <div className="flex flex-wrap justify-center gap-6">
                        {['PABX 100% na Nuvem', 'Suporte 24/7', 'URA + Gravação'].map((badge, i) => (
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
                        <p>Pioneira em Fibra Óptica no MS</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

// Main Page Component
export default function PabxVirtual() {
    const [contactModalOpen, setContactModalOpen] = useState(false);

    const openContactModal = useCallback(() => {
        setContactModalOpen(true);
    }, []);

    useEffect(() => {
        document.title = 'PABX Virtual Freeway | Telefonia Empresarial na Nuvem | URA e Gravação MS';
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Header onContactClick={openContactModal} />
            <main>
                <HeroSection onContactClick={openContactModal} />
                <RecursosSection />
                <VantagensSection />
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
