import React from 'react';
import { motion } from 'framer-motion';
import { Network, Server, Shield, Zap, Globe, Building2 } from 'lucide-react';

export default function InfrastructureSection() {
    const features = [
        {
            icon: Network,
            title: 'Rede Própria',
            description: 'Mais de 1.000 km de fibra óptica em Campo Grande e interligação com as principais cidades do MS.',
            stat: '+5.000km',
            statLabel: 'Fibra Óptica'
        },
        {
            icon: Shield,
            title: 'Alta Disponibilidade',
            description: '4 acessos independentes à internet, transporte de dados direto para São Paulo e dois datacenters próprios.',
            stat: '4x',
            statLabel: 'Redundância'
        },
        {
            icon: Zap,
            title: 'Backbone 100Gbps',
            description: 'Capacidade de backbone robusta garantindo velocidade e estabilidade mesmo em horários de pico.',
            stat: '100Gbps',
            statLabel: 'Capacidade'
        },
        {
            icon: Globe,
            title: 'Tecnologia GPON',
            description: 'Aplicação das melhores práticas globais de transmissão de dados, referência em EUA e Japão.',
            stat: 'GPON',
            statLabel: 'Padrão Global'
        },
        {
            icon: Server,
            title: 'Datacenters Próprios',
            description: 'Dois datacenters com infraestrutura redundante para máxima segurança dos seus dados.',
            stat: '2',
            statLabel: 'Datacenters'
        },
        {
            icon: Building2,
            title: 'Cobertura Regional',
            description: 'Presença em Campo Grande, Dourados, Bonito e principais polos econômicos do estado.',
            stat: 'MS',
            statLabel: 'Cobertura Total'
        }
    ];

    return (
        <section id="infraestrutura" className="py-24 bg-gray-900 relative overflow-hidden" aria-label="Infraestrutura de Rede 100Gbps - Fibra Óptica Campo Grande MS">
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
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 bg-orange-500/20 text-orange-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        <Network className="w-4 h-4" />
                        Infraestrutura de Ponta
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
                        Diferenciais que fazem a{' '}
                        <span className="text-orange-500">diferença</span>
                    </h2>
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                        Nossa infraestrutura foi construída para atender às demandas mais exigentes de empresas e governo, 
                        com redundância total e suporte especializado 24/7.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-orange-500/50 transition-all duration-300 hover:bg-gray-800"
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
                                    <feature.icon className="w-7 h-7 text-white" />
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl font-black text-white">{feature.stat}</p>
                                    <p className="text-xs text-gray-500 uppercase tracking-wide">{feature.statLabel}</p>
                                </div>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                            <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Stats */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-3xl p-8 border border-orange-500/20"
                >
                    {[
                        { value: '20+', label: 'Anos de Experiência' },
                        { value: '99.9%', label: 'Disponibilidade' },
                        { value: '24/7', label: 'Suporte Dedicado' },
                        { value: '4h', label: 'SLA Máximo' },
                    ].map((stat, i) => (
                        <div key={i} className="text-center">
                            <p className="text-3xl md:text-4xl font-black text-orange-500">{stat.value}</p>
                            <p className="text-gray-400 text-sm mt-1">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}