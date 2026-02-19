import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Building, Zap, Rocket, ArrowRight, Network, Shield, Server, Headphones } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const categories = [
    {
        key: 'light',
        label: 'Speedway Light',
        icon: Building,
        description: 'Ideal para empresas que buscam conexão confiável com excelente custo-benefício. Tecnologia FTTH, IP dinâmico e SLA de 12 horas.',
        plans: [
            { name: 'Speedway Light 100 Mega', price: '189,90', highlight: 'Conectividade essencial para pequenas operações comerciais.' },
            { name: 'Speedway Light 400 Mega', price: '229,90', highlight: 'Equilíbrio entre alta velocidade e economia para escritórios.' },
            { name: 'Speedway Light 900 Mbps', price: '289,90', highlight: 'Máxima performance da linha Light para tráfego intenso de dados.' },
        ]
    },
    {
        key: 'empresarial',
        label: 'Speedway Empresarial',
        icon: Zap,
        description: 'Para negócios que necessitam de maior estabilidade e endereçamento fixo. Inclui 1 IP Fixo e SLA de 6 horas.',
        plans: [
            { name: 'Speedway Empresarial 100 Mega', price: '439,90', highlight: 'Estabilidade garantida com IP fixo para serviços básicos de servidor.' },
            { name: 'Speedway Empresarial 400 Mega', price: '479,90', highlight: 'Ideal para empresas com sistemas de gestão (ERP) que exigem conexão constante.' },
            { name: 'Speedway Empresarial 900 Mbps', price: '529,90', highlight: 'Alta disponibilidade e velocidade para operações corporativas robustas.' },
        ]
    },
    {
        key: 'full',
        label: 'Speedway Full',
        icon: Rocket,
        description: 'Solução premium para demandas críticas. Tecnologia VLAN/Ethernet, 2 a 4 IPs Públicos e SLA de apenas 4 horas.',
        plans: [
            { name: 'Speedway Full 100 Mega', price: '900,00', highlight: 'Performance de nível corporativo para aplicações de missão crítica.' },
            { name: 'Speedway Full 1 Giga', price: '3.500,00', highlight: 'Ultravelocidade simétrica ideal para grandes ambientes de rede e nuvem.' },
            { name: 'Speedway Full 2 Giga', price: '6.000,00', highlight: 'A potência máxima em conectividade para empresas com altíssimo volume de dados.' },
        ]
    }
];

const diferenciais = [
    { icon: Network, title: 'Rede Própria', desc: 'Mais de 1.000 km de fibra óptica em Campo Grande e interligação com as principais cidades do estado.' },
    { icon: Shield, title: 'Alta Disponibilidade', desc: 'Backbone em anel de 100Gbps com redundância em dois datacenters próprios.' },
    { icon: Headphones, title: 'Suporte Especializado', desc: 'Equipes treinadas para resolver questões com agilidade e segurança.' },
];

export default function PlansSection({ onContactClick }) {
    const [activeTab, setActiveTab] = useState('light');
    const activeCategory = categories.find(c => c.key === activeTab);

    return (
        <section id="planos" className="py-24 bg-gradient-to-b from-white to-gray-50" aria-label="Planos de Internet Empresarial - Fibra Óptica MS">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
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

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {categories.map((cat) => (
                        <button
                            key={cat.key}
                            onClick={() => setActiveTab(cat.key)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                                activeTab === cat.key
                                    ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/30'
                                    : 'bg-white text-gray-600 border border-gray-200 hover:border-orange-300 hover:text-orange-600'
                            }`}
                        >
                            <cat.icon className="w-5 h-5" />
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Category Description */}
                <motion.p
                    key={activeTab + '-desc'}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-center text-gray-600 max-w-2xl mx-auto mb-10"
                >
                    {activeCategory.description}
                </motion.p>

                {/* Plans Grid */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="grid md:grid-cols-3 gap-8 mb-16"
                >
                    {activeCategory.plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative bg-white rounded-3xl p-8 border border-gray-200 shadow-lg hover:shadow-xl transition-shadow ${
                                index === 1 ? 'ring-2 ring-orange-500 shadow-2xl shadow-orange-500/20' : ''
                            }`}
                        >
                            {index === 1 && (
                                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-1">
                                    Mais Popular
                                </Badge>
                            )}

                            <div className="flex items-center gap-3 mb-4">
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                                    index === 1
                                        ? 'bg-gradient-to-br from-orange-500 to-orange-600 shadow-lg shadow-orange-500/30'
                                        : 'bg-gray-100'
                                }`}>
                                    <activeCategory.icon className={`w-6 h-6 ${index === 1 ? 'text-white' : 'text-gray-600'}`} />
                                </div>
                                <h3 className="text-lg font-bold text-gray-900">{plan.name}</h3>
                            </div>

                            <div className="mb-6">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-sm text-gray-600">R$</span>
                                    <span className="text-4xl font-black text-gray-900">{plan.price}</span>
                                    <span className="text-gray-500">/mês</span>
                                </div>
                            </div>

                            <p className="text-gray-500 mb-8 min-h-[48px]">{plan.highlight}</p>

                            <Button
                                className={`w-full py-6 text-lg ${
                                    index === 1
                                        ? 'bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg shadow-orange-500/30'
                                        : 'bg-gray-900 hover:bg-gray-800 text-white'
                                }`}
                                onClick={onContactClick}
                            >
                                Solicitar Proposta
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </div>
                    ))}
                </motion.div>

                {/* Diferenciais */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-gray-900 rounded-3xl p-10 grid md:grid-cols-3 gap-8"
                >
                    {diferenciais.map((d, i) => (
                        <div key={i} className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                                <d.icon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg mb-1">{d.title}</h4>
                                <p className="text-gray-400 text-sm leading-relaxed">{d.desc}</p>
                            </div>
                        </div>
                    ))}
                </motion.div>

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
