import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award, Users, TrendingUp } from 'lucide-react';

export default function InstitutionalSection() {
    const values = [
        {
            icon: Target,
            title: 'Missão',
            description: 'Prover soluções inovadoras de alta qualidade, garantindo conectividade segura e eficiente para empresas e governo do Mato Grosso do Sul.'
        },
        {
            icon: Eye,
            title: 'Visão',
            description: 'Ser reconhecida como a principal referência em telecomunicações corporativas na região Centro-Oeste, expandindo nossa infraestrutura de forma sustentável.'
        },
        {
            icon: Heart,
            title: 'Valores',
            description: 'Ética, transparência, inovação contínua e compromisso total com a satisfação do cliente em todas as interações.'
        }
    ];

    const achievements = [
        { icon: Users, value: '5.000+', label: 'Empresas Atendidas' },
        { icon: Award, value: '20+', label: 'Anos de Mercado' },
        { icon: TrendingUp, value: '99.9%', label: 'Satisfação' },
    ];

    return (
        <section id="quem-somos" className="py-14 bg-gradient-to-b from-gray-50 to-white" aria-label="Sobre a Freeway Tecnologia - Mais de 20 anos de experiência">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            <Award className="w-4 h-4" />
                            Quem Somos
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                            DNA do{' '}
                            <span className="text-orange-500">Mato Grosso do Sul</span>
                        </h2>
                        <p className="text-xl text-gray-600 leading-relaxed mb-8">
                            Pioneiros em fibra óptica no estado, construímos ao longo de mais de duas décadas uma infraestrutura 
                            robusta e confiável, conectando empresas e governos às melhores oportunidades do mundo digital.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed mb-8">
                            Nossa jornada começou com a visão de transformar a conectividade regional, e hoje somos referência 
                            em soluções corporativas, com presença nas principais cidades do estado e um compromisso 
                            inabalável com a excelência.
                        </p>

                        {/* Achievement Stats */}
                        <div className="grid grid-cols-3 gap-6">
                            {achievements.map((item, i) => (
                                <div key={i} className="text-center">
                                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                                        <item.icon className="w-6 h-6 text-orange-600" />
                                    </div>
                                    <p className="text-2xl font-black text-gray-900">{item.value}</p>
                                    <p className="text-sm text-gray-500">{item.label}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Values Cards */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30 flex-shrink-0">
                                        <value.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{value.description}</p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}