import React from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Zap, Building, Rocket, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function PlansSection() {
    const openChat = () => {
        // Open Redrive chat widget
        if (window.redriveWidget) {
            window.redriveWidget.open();
        }
    };
    const plans = [
        {
            name: 'Speedway Light',
            subtitle: 'Custo-benefício para Pequenas Empresas',
            price: '189,90',
            icon: Building,
            color: 'gray',
            features: [
                'Tecnologia FTTH',
                'IP Dinâmico',
                'SLA até 12 horas',
                'Garantia Padrão Empresarial',
                'Suporte comercial',
                'Ideal para escritórios e lojas'
            ],
            cta: 'Solicitar Proposta'
        },
        {
            name: 'Speedway Empresarial',
            subtitle: 'Estabilidade para Negócios em Crescimento',
            price: '439,90',
            icon: Zap,
            color: 'orange',
            popular: true,
            features: [
                'Tecnologia FTTH',
                '1 IP Fixo incluso',
                'SLA até 6 horas',
                'Garantia Robusta',
                'Suporte prioritário',
                'Ideal para empresas médias'
            ],
            cta: 'Solicitar Proposta'
        },
        {
            name: 'Speedway Full',
            subtitle: 'Missão Crítica e Alta Performance',
            price: '400,00',
            priceNote: '(10Mb)',
            icon: Rocket,
            color: 'gray',
            features: [
                'Tecnologia FTTH / VLAN',
                'Até 4 IPs Públicos',
                'SLA Prioritário: até 4h',
                '100% Simétrico (Upload=Download)',
                'Suporte 24/7',
                'Ideal para datacenters e ISPs'
            ],
            cta: 'Solicitar Proposta'
        }
    ];

    return (
        <section id="planos" className="py-24 bg-gradient-to-b from-white to-gray-50" aria-label="Planos de Internet Empresarial - Fibra Óptica MS">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        <Star className="w-4 h-4" />
                        Planos Speedway
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                        Escolha o plano ideal para{' '}
                        <span className="text-orange-500">sua empresa</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Soluções sob medida para cada necessidade, com a qualidade e estabilidade que sua empresa merece.
                    </p>
                </motion.div>

                {/* Plans Grid */}
                <div className="grid lg:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`relative bg-white rounded-3xl p-8 ${
                                plan.popular 
                                    ? 'ring-2 ring-orange-500 shadow-2xl shadow-orange-500/20' 
                                    : 'border border-gray-200 shadow-lg'
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
                                        : 'bg-gray-100'
                                }`}>
                                    <plan.icon className={`w-7 h-7 ${plan.popular ? 'text-white' : 'text-gray-600'}`} />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900">{plan.name}</h3>
                                    <p className="text-sm text-gray-500">{plan.subtitle}</p>
                                </div>
                            </div>

                            <div className="mb-8">
                                <div className="flex items-baseline gap-1">
                                    <span className="text-sm text-gray-500">A partir de</span>
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-sm text-gray-600">R$</span>
                                    <span className="text-5xl font-black text-gray-900">{plan.price}</span>
                                    <span className="text-gray-500">/mês</span>
                                </div>
                                {plan.priceNote && (
                                    <span className="text-sm text-gray-400">{plan.priceNote}</span>
                                )}
                            </div>

                            <ul className="space-y-4 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                                            plan.popular ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-600'
                                        }`}>
                                            <Check className="w-3 h-3" />
                                        </div>
                                        <span className="text-gray-600">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button 
                                className={`w-full py-6 text-lg ${
                                    plan.popular 
                                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30' 
                                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                                }`}
                                onClick={() => openChat(plan.name)}
                            >
                                {plan.cta}
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </motion.div>
                    ))}
                </div>

                {/* Comparison Note */}
                <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center text-gray-500 mt-12"
                >
                    * Valores iniciais. Consulte condições especiais para contratos de maior largura de banda.
                </motion.p>
            </div>
        </section>
    );
}