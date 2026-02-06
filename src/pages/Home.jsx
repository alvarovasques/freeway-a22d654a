import React, { useEffect, useState, useCallback } from 'react';
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

export default function Home() {
    const [contactModalOpen, setContactModalOpen] = useState(false);

    const openContactModal = useCallback(() => {
        setContactModalOpen(true);
    }, []);

    useEffect(() => {
        document.title = 'Freeway Tecnologia | Internet Empresarial Campo Grande MS | Fibra Óptica Corporativa';
    }, []);

    return (
        <div className="min-h-screen bg-white">
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
