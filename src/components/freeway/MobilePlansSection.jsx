import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Smartphone, Radio, Cpu, ArrowRight, Signal, Wifi } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function MobilePlansSection({ onContactClick }) {
    const [activeTab, setActiveTab] = useState('mobile');

    useEffect(() => {
        const handleHash = () => {
            const hash = window.location.hash;
            if (hash === '#telefonia-mobile') {
                setActiveTab('mobile');
                document.getElementById('telefonia')?.scrollIntoView({ behavior: 'smooth' });
            } else if (hash === '#telefonia-m2m') {
                setActiveTab('m2m');
                document.getElementById('telefonia')?.scrollIntoView({ behavior: 'smooth' });
            }
        };
        handleHash();
        window.addEventListener('hashchange', handleHash);
        return () => window.removeEventListener('hashchange', handleHash);
    }, []);

    const mobilePlans = [
        {
            name: 'Plano 1GB',
            subtitle: 'Para uso básico',
            price: '24,99',
            icon: Smartphone,
            features: [
                '1GB de internet',
                '100 minutos de voz',
                '100 SMS'
            ],
            cta: 'Solicitar Proposta'
        },
        {
            name: 'Plano 3GB',
            subtitle: '+2GB bônus portabilidade',
            price: '39,99',
            icon: Smartphone,
            features: [
                '3GB de internet (+2GB portabilidade)',
                '1000 minutos de voz',
                '100 SMS',
                'WhatsApp ilimitado',
                'Waze ilimitado',
                'Maps ilimitado'
            ],
            cta: 'Solicitar Proposta'
        },
        {
            name: 'Plano 5GB',
            subtitle: '+3GB bônus portabilidade',
            price: '49,99',
            icon: Signal,
            features: [
                '5GB de internet (+3GB portabilidade)',
                '1000 minutos de voz',
                '100 SMS',
                'WhatsApp ilimitado',
                'Waze ilimitado',
                'Maps ilimitado'
            ],
            cta: 'Solicitar Proposta'
        },
        {
            name: 'Plano 10GB',
            subtitle: '+5GB bônus portabilidade',
            price: '59,99',
            icon: Signal,
            popular: true,
            features: [
                '10GB de internet (+5GB portabilidade)',
                '1000 minutos de voz',
                '100 SMS',
                'WhatsApp ilimitado',
                'Waze ilimitado',
                'Maps ilimitado'
            ],
            cta: 'Solicitar Proposta'
        },
        {
            name: 'Plano 15GB',
            subtitle: '+5GB bônus portabilidade',
            price: '64,99',
            icon: Wifi,
            features: [
                '15GB de internet (+5GB portabilidade)',
                '1000 minutos de voz',
                '100 SMS',
                'WhatsApp ilimitado',
                'Waze ilimitado',
                'Maps ilimitado'
            ],
            cta: 'Solicitar Proposta'
        },
        {
            name: 'Plano 25GB',
            subtitle: '+5GB bônus portabilidade',
            price: '89,99',
            icon: Wifi,
            features: [
                '25GB de internet (+5GB portabilidade)',
                '1000 minutos de voz',
                '100 SMS',
                'WhatsApp ilimitado',
                'Waze ilimitado',
                'Maps ilimitado'
            ],
            cta: 'Solicitar Proposta'
        }
    ];

    const m2mCategories = [
        {
            name: 'M2M Padrão',
            subtitle: 'Interação Humana (POS, terminais)',
            icon: Radio,
            plans: [
                { data: '2MB', price: '8,74' },
                { data: '10MB', price: '10,82' },
                { data: '20MB', price: '11,42' },
                { data: 'Alto Consumo', price: '11,42' }
            ]
        },
        {
            name: 'M2M Especial',
            subtitle: 'Telemetria e Rastreamento',
            icon: Cpu,
            popular: true,
            plans: [
                { data: '2MB', price: '4,58' },
                { data: '10MB', price: '6,67' },
                { data: '20MB', price: '7,27' },
                { data: 'Alto Consumo', price: '7,27' }
            ]
        }
    ];

    // currentPlans only used for mobile tab now; M2M uses m2mCategories directly

    return (
        <section id="telefonia" className="py-24 bg-gray-900 relative overflow-hidden" aria-label="Planos de Telefonia Móvel e M2M - Freeway Tecnologia">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="relative max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        <Radio className="w-4 h-4" />
                        Telefonia & IoT
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
                        Conectividade{' '}
                        <span className="text-orange-400">móvel inteligente</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Planos de telefonia móvel e soluções M2M para sensores, rastreamento e IoT empresarial.
                    </p>
                </motion.div>

                {/* Tabs */}
                <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center mb-12"
                >
                    <div className="inline-flex bg-white/10 backdrop-blur-sm rounded-2xl p-1.5">
                        <button
                            onClick={() => setActiveTab('mobile')}
                            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                                activeTab === 'mobile'
                                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                                    : 'text-gray-300 hover:text-white'
                            }`}
                        >
                            <span className="flex items-center gap-2">
                                <Smartphone className="w-4 h-4" />
                                Telefonia Móvel
                            </span>
                        </button>
                        <button
                            onClick={() => setActiveTab('m2m')}
                            className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                                activeTab === 'm2m'
                                    ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30'
                                    : 'text-gray-300 hover:text-white'
                            }`}
                        >
                            <span className="flex items-center gap-2">
                                <Cpu className="w-4 h-4" />
                                M2M / IoT
                            </span>
                        </button>
                    </div>
                </motion.div>

                {/* Mobile Plans Grid */}
                {activeTab === 'mobile' && (
                    <>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {mobilePlans.map((plan, index) => (
                                <motion.div
                                    key={`mobile-${index}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border ${
                                        plan.popular 
                                            ? 'border-orange-500 shadow-2xl shadow-orange-500/20' 
                                            : 'border-white/10'
                                    }`}
                                >
                                    {plan.popular && (
                                        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1">
                                            Mais Popular
                                        </Badge>
                                    )}

                                    <div className="flex items-center gap-4 mb-6">
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                                            plan.popular 
                                                ? 'bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/30' 
                                                : 'bg-white/10'
                                        }`}>
                                            <plan.icon className={`w-7 h-7 ${plan.popular ? 'text-white' : 'text-orange-400'}`} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                                            <p className="text-sm text-gray-400">{plan.subtitle}</p>
                                        </div>
                                    </div>

                                    <div className="mb-8">
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-sm text-gray-400">R$</span>
                                            <span className="text-5xl font-black text-white">{plan.price}</span>
                                            <span className="text-gray-400">/mês</span>
                                        </div>
                                    </div>

                                    <ul className="space-y-4 mb-8">
                                        {plan.features.map((feature, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                                                    plan.popular ? 'bg-orange-500/20 text-orange-400' : 'bg-white/10 text-gray-300'
                                                }`}>
                                                    <Check className="w-3 h-3" />
                                                </div>
                                                <span className="text-gray-300">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <Button 
                                        className={`w-full py-6 text-lg ${
                                            plan.popular 
                                                ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30' 
                                                : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                                        }`}
                                        onClick={onContactClick}
                                    >
                                        {plan.cta}
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </motion.div>
                            ))}
                        </div>
                        <motion.p 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-center text-gray-500 mt-8"
                        >
                            * Valores por linha/mês. Bônus de dados válido para portabilidade numérica.
                        </motion.p>
                    </>
                )}

                {/* M2M Plans */}
                {activeTab === 'm2m' && (
                    <>
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white/5 backdrop-blur-sm rounded-2xl border border-orange-500/30 px-6 py-4 mb-10 text-center"
                        >
                            <p className="text-orange-400 font-semibold">
                                Chip M2M: <span className="text-white">R$ 15,00</span> (valor único)
                            </p>
                            <p className="text-gray-400 text-sm mt-1">
                                Para terminais de pagamento (POS), telemetria e rastreamento
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {m2mCategories.map((cat, catIndex) => (
                                <motion.div
                                    key={`m2m-${catIndex}`}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: catIndex * 0.15 }}
                                    className={`relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 border ${
                                        cat.popular 
                                            ? 'border-orange-500 shadow-2xl shadow-orange-500/20' 
                                            : 'border-white/10'
                                    }`}
                                >
                                    {cat.popular && (
                                        <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1">
                                            Melhor Custo
                                        </Badge>
                                    )}

                                    <div className="flex items-center gap-4 mb-6">
                                        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                                            cat.popular 
                                                ? 'bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/30' 
                                                : 'bg-white/10'
                                        }`}>
                                            <cat.icon className={`w-7 h-7 ${cat.popular ? 'text-white' : 'text-orange-400'}`} />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-white">{cat.name}</h3>
                                            <p className="text-sm text-gray-400">{cat.subtitle}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-3 mb-8">
                                        {cat.plans.map((plan, i) => (
                                            <div key={i} className={`flex items-center justify-between p-3 rounded-xl ${
                                                cat.popular ? 'bg-orange-500/10' : 'bg-white/5'
                                            }`}>
                                                <span className="text-gray-300 font-medium">{plan.data}</span>
                                                <span className="text-white font-bold text-lg">R$ {plan.price}<span className="text-gray-400 text-sm font-normal">/mês</span></span>
                                            </div>
                                        ))}
                                    </div>

                                    <Button 
                                        className={`w-full py-6 text-lg ${
                                            cat.popular 
                                                ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30' 
                                                : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                                        }`}
                                        onClick={onContactClick}
                                    >
                                        Solicitar Proposta
                                        <ArrowRight className="ml-2 w-5 h-5" />
                                    </Button>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div 
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            className="mt-10 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 text-center"
                        >
                            <p className="text-gray-300">
                                <span className="text-orange-400 font-semibold">Plataforma de gestão unificada</span> — Controle total de uso e custos em tempo real para todos os seus dispositivos M2M.
                            </p>
                        </motion.div>
                    </>
                )}
            </div>
        </section>
    );
}
