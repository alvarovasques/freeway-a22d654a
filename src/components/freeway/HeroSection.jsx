import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import mapaMS from '@/assets/mapa-ms.png';

export default function HeroSection({ onContactClick }) {
    return (
        <section className="relative min-h-[50vh] flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-orange-50" aria-label="Internet Empresarial Campo Grande MS - Fibra Óptica Corporativa">
            {/* Background Pattern */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-20 right-20 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-20 w-96 h-96 bg-gray-500/10 rounded-full blur-3xl" />
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="relative max-w-7xl mx-auto px-6 py-8 lg:py-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Content */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="space-y-6"
                    >
                        <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
                            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
                            Pioneira em Fibra Óptica no MS
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight">
                            Conectividade Robusta com{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-600">
                                DNA do Mato Grosso do Sul
                            </span>
                        </h1>

                        <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                            Rede 100% fibra óptica com <span className="font-semibold text-gray-900">backbone de 100Gbps</span> e 
                            redundância em anel para garantir que sua operação <span className="font-semibold text-gray-900">nunca pare</span>.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button 
                                size="lg" 
                                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-xl shadow-orange-500/30 text-lg px-8 py-6"
                                onClick={onContactClick}
                            >
                                Falar com Consultor Especialista
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                            <Button size="lg" variant="outline" className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 text-lg px-8 py-6" asChild>
                                <a href="https://sistema.freewaynet.com.br/central_assinante_web/login" target="_blank" rel="noopener noreferrer">
                                    Área do Cliente
                                </a>
                            </Button>
                        </div>

                        {/* Trust Badges */}
                        <div className="flex flex-wrap gap-6 pt-4">
                            {[
                                { icon: Shield, text: 'SLA 4 horas' },
                                { icon: Zap, text: '100Gbps Backbone' },
                                { icon: Globe, text: '+5.000km Fibra' },
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-2 text-gray-600">
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
                            {/* Main Card - Mapa MS */}
                            <div className="bg-white rounded-3xl shadow-2xl p-6 relative z-10">
                                <div className="relative">
                                    <img 
                                        src={mapaMS} 
                                        alt="Mapa de cobertura Freeway - Cidades atendidas com fibra óptica no Mato Grosso do Sul" 
                                        className="w-full h-auto rounded-2xl"
                                        loading="eager"
                                        width="600"
                                        height="500"
                                    />
                                </div>
                            </div>

                            {/* Floating Stats Cards */}
                            <motion.div 
                                className="absolute -left-8 top-1/4 bg-white rounded-2xl shadow-xl p-4 z-20"
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                                        <Zap className="w-5 h-5 text-green-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">Uptime</p>
                                        <p className="font-bold text-gray-900">99.9%</p>
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
                                        <Globe className="w-5 h-5 text-orange-600" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-gray-500">Cobertura</p>
                                        <p className="font-bold text-gray-900">MS Total</p>
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
