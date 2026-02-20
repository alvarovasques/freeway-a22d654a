import React, { useState, useCallback } from 'react';
import Header from '@/components/freeway/Header';
import HeroSection from '@/components/freeway/HeroSection';
import InfrastructureSection from '@/components/freeway/InfrastructureSection';
import PlansSection from '@/components/freeway/PlansSection';
import MobilePlansSection from '@/components/freeway/MobilePlansSection';
import SolutionsSection from '@/components/freeway/SolutionsSection';
// import SolutionsCalculator from '@/components/freeway/SolutionsCalculator';
import InstitutionalSection from '@/components/freeway/InstitutionalSection';
import FAQSection from '@/components/freeway/FAQSection';
import CTASection from '@/components/freeway/CTASection';
import Footer from '@/components/freeway/Footer';
import ContactModal from '@/components/freeway/ContactModal';
import SEOHead from '@/components/freeway/SEOHead';

const FAQ_JSONLD = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Qual a diferença entre internet empresarial e residencial?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "A internet empresarial oferece garantias contratuais (SLA), IP fixo, suporte prioritário e velocidade simétrica. É dimensionada para múltiplos usuários simultâneos e aplicações críticas como ERP e videoconferências."
            }
        },
        {
            "@type": "Question",
            "name": "O que é SLA e por que é importante para minha empresa?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "SLA (Service Level Agreement) é o acordo que garante tempo máximo de resposta. Na Freeway, oferecemos SLA de até 4 horas para planos Full, 6 horas para Empresarial e 12 horas para Light."
            }
        },
        {
            "@type": "Question",
            "name": "A Freeway atende empresas em todo Mato Grosso do Sul?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim! Temos cobertura em Campo Grande, Dourados, Bonito, Três Lagoas e interligação com as principais cidades do estado com mais de 5.000km de fibra óptica."
            }
        },
        {
            "@type": "Question",
            "name": "Qual a diferença entre Speedway Light, Empresarial e Full?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Light: ideal para pequenas empresas, IP dinâmico e SLA 12h. Empresarial: 1 IP fixo e SLA 6h. Full: conexão 100% simétrica, até 4 IPs públicos, SLA 4h e suporte 24/7."
            }
        },
        {
            "@type": "Question",
            "name": "O que é o Megalink e quando devo usar?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Megalink é a solução de interligação ponto a ponto (LAN to LAN) entre endereços da sua empresa, independente da internet. Ideal para conectar matriz e filiais com segurança e baixa latência."
            }
        }
    ]
};

export default function Home() {
    const [contactModalOpen, setContactModalOpen] = useState(false);

    const openContactModal = useCallback(() => {
        setContactModalOpen(true);
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <SEOHead
                title="Freeway Tecnologia | Internet Empresarial Campo Grande MS | Fibra Óptica Corporativa"
                description="Internet empresarial com fibra óptica em Campo Grande MS. Backbone 100Gbps, SLA de até 4h, rede própria com +5.000km. Planos corporativos, PABX Virtual, Mega Link e Rede Neutra."
                canonical="https://freeway.lovable.app/"
                jsonLd={FAQ_JSONLD}
            />
            <Header onContactClick={openContactModal} />
            <main>
                <HeroSection onContactClick={openContactModal} />
                <InfrastructureSection />
                <PlansSection onContactClick={openContactModal} />
                <MobilePlansSection onContactClick={openContactModal} />
                <SolutionsSection onContactClick={openContactModal} />
                {/* <SolutionsCalculator onContactClick={openContactModal} /> */}
                <InstitutionalSection />
                <FAQSection />
                <CTASection onContactClick={openContactModal} />
            </main>
            <Footer onContactClick={openContactModal} />
            
            <ContactModal 
                open={contactModalOpen} 
                onOpenChange={setContactModalOpen} 
            />
        </div>
    );
}
