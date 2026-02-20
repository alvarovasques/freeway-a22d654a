import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronDown, MessageCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const faqCategories = [
        {
            title: 'Internet Empresarial',
            faqs: [
                {
                    question: 'Qual a diferença entre internet empresarial e residencial?',
                    answer: 'A internet empresarial oferece garantias contratuais (SLA), IP fixo, suporte prioritário e velocidade simétrica (upload igual ao download). Diferente da residencial, é dimensionada para múltiplos usuários simultâneos e aplicações críticas de negócio como sistemas ERP, videoconferências e cloud computing.'
                },
                {
                    question: 'O que é SLA e por que é importante para minha empresa?',
                    answer: 'SLA (Service Level Agreement) é o acordo de nível de serviço que garante tempo máximo de resposta para resolução de problemas. Na Freeway, oferecemos SLA de até 4 horas para planos Full, 6 horas para Empresarial e 12 horas para Light. Isso significa que sua empresa tem garantia contratual de atendimento prioritário.'
                },
                {
                    question: 'A Freeway atende empresas em todo Mato Grosso do Sul?',
                    answer: 'Sim! Temos cobertura em Campo Grande, Dourados, Bonito, Três Lagoas e interligação com as principais cidades do estado. Nossa rede própria de mais de 1.000 km de fibra óptica garante conectividade de alta qualidade em toda a região.'
                },
                {
                    question: 'Qual plano é indicado para órgãos públicos e governo?',
                    answer: 'Recomendamos o Speedway Full para órgãos governamentais, pois oferece conexão 100% simétrica, até 4 IPs públicos, SLA prioritário de 4 horas e suporte 24/7. Também atendemos licitações e contratos públicos com todas as certidões e documentações necessárias.'
                }
            ]
        },
        {
            title: 'Infraestrutura e Tecnologia',
            faqs: [
                {
                    question: 'O que é tecnologia GPON e quais suas vantagens?',
                    answer: 'GPON (Gigabit Passive Optical Network) é a tecnologia de fibra óptica utilizada em países como EUA, Japão e Portugal. Oferece maior velocidade, menor latência, imunidade a interferências eletromagnéticas e maior segurança na transmissão de dados. A Freeway foi pioneira em implementar essa tecnologia no MS.'
                },
                {
                    question: 'O que significa backbone de 100Gbps?',
                    answer: 'Backbone é a "espinha dorsal" da rede que conecta nossa infraestrutura aos principais pontos de troca de tráfego do Brasil. Com 100Gbps de capacidade, garantimos que mesmo em horários de pico, sua conexão permanece estável e veloz, sem congestionamentos.'
                },
                {
                    question: 'O que é redundância em anel?',
                    answer: 'Nossa rede possui topologia em anel, ou seja, existem dois caminhos para os dados chegarem ao destino. Se um caminho apresentar problema, o tráfego é automaticamente redirecionado pelo outro, garantindo que sua empresa permaneça conectada mesmo em caso de rompimento de fibra.'
                },
                {
                    question: 'A Freeway possui datacenters próprios?',
                    answer: 'Sim, operamos dois datacenters próprios em Campo Grande com infraestrutura redundante, geradores, nobreaks e sistema de refrigeração. Isso garante que nossos equipamentos e os serviços hospedados tenham máxima disponibilidade.'
                }
            ]
        },
        {
            title: 'Planos e Serviços',
            faqs: [
                {
                    question: 'Qual a diferença entre Speedway Light, Empresarial e Full?',
                    answer: 'Light: ideal para pequenas empresas, com IP dinâmico e SLA de 12h. Empresarial: para negócios em crescimento, inclui 1 IP fixo e SLA de 6h. Full: para operações críticas, oferece conexão 100% simétrica, até 4 IPs públicos, SLA de 4h e suporte 24/7.'
                },
                {
                    question: 'O que é o Megalink e quando devo usar?',
                    answer: 'Megalink é nossa solução de interligação ponto a ponto (LAN to LAN) entre dois ou mais endereços da sua empresa, independente da internet. Ideal para conectar matriz e filiais com total segurança, baixa latência e sem tráfego pela internet pública.'
                },
                {
                    question: 'A Freeway oferece soluções de telefonia?',
                    answer: 'Sim! Oferecemos PABX Virtual (a partir de R$ 99/mês) com URA, gravação de chamadas e portabilidade. Também temos planos de telefonia móvel (a partir de R$ 24,99) e M2M para IoT e rastreamento (a partir de R$ 4,58).'
                },
                {
                    question: 'Vocês fazem projetos personalizados para condomínios?',
                    answer: 'Sim, desenvolvemos projetos completos de infraestrutura FTTH para condomínios residenciais e comerciais, incluindo Wi-Fi inteligente para áreas comuns, sistema de segurança integrado e gestão centralizada. Entre em contato para uma avaliação gratuita.'
                }
            ]
        }
    ];

    return (
        <section className="py-24 bg-white" id="faq">
            <div className="max-w-5xl mx-auto px-6">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        <HelpCircle className="w-4 h-4" />
                        Dúvidas Frequentes
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
                        Perguntas{' '}
                        <span className="text-orange-500">Frequentes</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Tire suas dúvidas sobre internet empresarial, fibra óptica MS, conectividade corporativa e soluções para governo.
                    </p>
                </motion.div>

                {/* FAQ Categories */}
                <div className="space-y-12">
                    {faqCategories.map((category, catIndex) => (
                        <motion.div
                            key={catIndex}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: catIndex * 0.1 }}
                        >
                            <h3 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">
                                {category.title}
                            </h3>
                            <div className="space-y-3">
                                {category.faqs.map((faq, faqIndex) => {
                                    const globalIndex = `${catIndex}-${faqIndex}`;
                                    const isOpen = openIndex === globalIndex;
                                    
                                    return (
                                        <div 
                                            key={faqIndex}
                                            className={`rounded-xl border-2 transition-all ${
                                                isOpen ? 'border-orange-200 bg-orange-50' : 'border-gray-100 bg-gray-50'
                                            }`}
                                        >
                                            <button
                                                onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                                                className="w-full flex items-center justify-between p-5 text-left"
                                            >
                                                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                                                <ChevronDown className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${
                                                    isOpen ? 'rotate-180' : ''
                                                }`} />
                                            </button>
                                            {isOpen && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="px-5 pb-5"
                                                >
                                                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                                                </motion.div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8"
                >
                    <h3 className="text-2xl font-bold text-white mb-3">Não encontrou sua dúvida?</h3>
                    <p className="text-gray-400 mb-6">Fale com um de nossos consultores especializados.</p>
                    <Button 
                        size="lg" 
                        className="bg-orange-500 hover:bg-orange-600 text-white gap-2"
                        onClick={() => window.open('https://api.whatsapp.com/send?phone=556733043003', '_blank')}
                    >
                        <MessageCircle className="w-5 h-5" />
                        Falar com Consultor Especialista
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}