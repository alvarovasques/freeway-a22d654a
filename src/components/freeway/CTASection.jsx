import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { MessageCircle } from 'lucide-react';

export default function CTASection({ onContactClick }) {
    return (
        <section className="py-14 bg-gradient-to-br from-orange-500 to-orange-600 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="relative max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-6">
                        Pronto para elevar a conectividade da sua empresa?
                    </h2>
                    <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
                        Fale com um de nossos consultores especializados e descubra a solução ideal para o seu negócio.
                    </p>

                    <div className="flex justify-center">
                        <Button 
                            size="lg" 
                            className="bg-gray-900 text-white hover:bg-gray-800 shadow-2xl text-lg px-10 py-7 font-bold"
                            onClick={onContactClick}
                        >
                            <MessageCircle className="mr-3 w-6 h-6" />
                            Falar com Consultor Especialista
                        </Button>
                    </div>

                    <div className="mt-12 flex flex-wrap justify-center gap-8">
                        {['Rede 100% Fibra', 'Suporte 24/7 Dedicados', 'SLA Garantido'].map((badge, i) => (
                            <div key={i} className="flex items-center gap-2 text-white/90">
                                <div className="w-2 h-2 bg-white rounded-full" />
                                <span className="font-medium">{badge}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
