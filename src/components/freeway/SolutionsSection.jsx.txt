import React from 'react';
import { motion } from 'framer-motion';
import { Link2, Phone, PhoneCall, Building2, Wifi, Shield, ArrowRight, Radio, Cpu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function SolutionsSection() {
    const solutions = [
        {
            icon: Link2,
            title: 'Megalink (Intranet)',
            description: 'Interligação Ponto a Ponto (LAN to LAN) independente da internet. Conecte filiais com total segurança e velocidade.',
            price: 'A partir de R$ 300,00/mês',
            priceNote: '(mesmo município)',
            features: ['Conexão dedicada', 'Alta segurança', 'Baixa latência'],
            color: 'blue'
        },
        {
            icon: Radio,
            title: 'Telefonia Móvel & M2M',
            description: 'Conectividade 5G e soluções inteligentes para sensores, rastreamento e IoT empresarial.',
            price: 'Móvel: R$ 24,99 | M2M: R$ 4,58',
            features: ['Cobertura 5G', 'IoT/Sensores', 'Rastreamento'],
            color: 'green'
        },
        {
            icon: PhoneCall,
            title: 'PABX Virtual',
            description: 'Sistema de URA completo com gravação de chamadas, portabilidade e gestão centralizada.',
            price: 'A partir de R$ 99,00/mês',
            features: ['URA completa', 'Gravação', 'Portabilidade'],
            color: 'purple'
        },
        {
            icon: Building2,
            title: 'Projetos para Condomínios',
            description: 'Infraestrutura FTTH unificada, Wi-Fi inteligente para áreas comuns e segurança avançada.',
            price: 'Sob consulta',
            features: ['FTTH unificado', 'Wi-Fi áreas comuns', 'Segurança'],
            color: 'orange'
        }
    ];

    const colorClasses = {
        blue: 'from-blue-500 to-blue-600 shadow-blue-500/30',
        green: 'from-green-500 to-green-600 shadow-green-500/30',
        purple: 'from-purple-500 to-purple-600 shadow-purple-500/30',
        orange: 'from-orange-500 to-orange-600 shadow-orange-500/30'
    };

    const badgeClasses = {
        blue: 'bg-blue-100 text-blue-700',
        green: 'bg-green-100 text-green-700',
        purple: 'bg-purple-100 text-purple-700',
        orange: 'bg-orange-100 text-orange-700'
    };

    const openChat = (serviceName) => {
        window.open(`https://api.whatsapp.com/send?phone=556730253131&text=Olá! Tenho interesse no serviço ${serviceName}. Gostaria de mais informações.`, '_blank');
    };

    return (
        <section id="solucoes" className="py-24 bg-white" aria-label="Soluções Corporativas - Conectividade Empresarial MS">
            <div className="max-w-7xl mx-auto px-6">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        <Cpu className="w-4 h-4" />
                        Portfólio Avançado
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6">
                        Soluções{' '}
                        <span className="text-orange-500">especializadas</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Além da conectividade, oferecemos um ecossistema completo de soluções para transformar sua comunicação empresarial.
                    </p>
                </motion.div>

                {/* Solutions Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                    {solutions.map((solution, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group bg-gray-50 rounded-3xl p-8 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200"
                        >
                            <div className="flex items-start gap-6">
                                <div className={`w-16 h-16 bg-gradient-to-br ${colorClasses[solution.color]} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0 group-hover:scale-110 transition-transform`}>
                                    <solution.icon className="w-8 h-8 text-white" />
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{solution.title}</h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed">{solution.description}</p>
                                    
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {solution.features.map((feature, i) => (
                                            <Badge key={i} variant="secondary" className={badgeClasses[solution.color]}>
                                                {feature}
                                            </Badge>
                                        ))}
                                    </div>

                                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                                        <div>
                                            <p className="font-bold text-gray-900">{solution.price}</p>
                                            {solution.priceNote && (
                                                <p className="text-sm text-gray-500">{solution.priceNote}</p>
                                            )}
                                        </div>
                                        <Button 
                                            variant="ghost" 
                                            className="text-gray-600 hover:text-orange-500 group/btn"
                                            onClick={() => openChat(solution.title)}
                                        >
                                            Saiba mais
                                            <ArrowRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Partnership Banner */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                            <Shield className="w-8 h-8 text-orange-400" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">Parceria Olli IXIC</h3>
                            <p className="text-gray-400">Soluções de Automação Residencial e Condominial hospedadas na infraestrutura em nuvem da Freeway.</p>
                        </div>
                    </div>
                    <Button 
                        size="lg" 
                        className="bg-orange-500 hover:bg-orange-600 text-white whitespace-nowrap"
                        onClick={() => openChat('Parceria Olli IXIC')}
                    >
                        Conhecer Parceria
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}