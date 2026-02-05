import React, { useEffect } from 'react';
import Header from '@/components/freeway/Header';
import HeroSection from '@/components/freeway/HeroSection';
import InfrastructureSection from '@/components/freeway/InfrastructureSection';
import PlansSection from '@/components/freeway/PlansSection';
import MobilePlansSection from '@/components/freeway/MobilePlansSection';
import SolutionsSection from '@/components/freeway/SolutionsSection';
import SolutionsCalculator from '@/components/freeway/SolutionsCalculator';
import InstitutionalSection from '@/components/freeway/InstitutionalSection';
import FAQSection from '@/components/freeway/FAQSection';
import CTASection from '@/components/freeway/CTASection';
import Footer from '@/components/freeway/Footer';

export default function Home() {
    useEffect(() => {
        document.title = 'Freeway Tecnologia | Internet Empresarial Campo Grande MS | Fibra Óptica Corporativa';
    }, []);

    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                <HeroSection />
                <InfrastructureSection />
                <PlansSection />
                <MobilePlansSection />
                <SolutionsSection />
                <SolutionsCalculator />
                <InstitutionalSection />
                <FAQSection />
                <CTASection />
            </main>
            <Footer />
        </div>
    );
}