import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, Users, Building2, Wifi, MapPin, ArrowRight, ArrowLeft, Check, MessageCircle, Zap, Shield, Server } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function SolutionsCalculator() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        companyType: '',
        employees: '',
        location: '',
        bandwidth: '',
        needs: [],
        criticalOperations: false
    });
    const [showResults, setShowResults] = useState(false);

    const companyTypes = [
        { value: 'small', label: 'Pequena Empresa', desc: 'Até 20 funcionários' },
        { value: 'medium', label: 'Média Empresa', desc: '21 a 100 funcionários' },
        { value: 'large', label: 'Grande Empresa', desc: 'Mais de 100 funcionários' },
        { value: 'government', label: 'Governo / Órgão Público', desc: 'Instituição governamental' },
        { value: 'condominium', label: 'Condomínio', desc: 'Residencial ou comercial' }
    ];

    const bandwidthOptions = [
        { value: '50', label: 'Até 50 Mbps', desc: 'Navegação e email' },
        { value: '100', label: '50 a 100 Mbps', desc: 'Videoconferências frequentes' },
        { value: '300', label: '100 a 300 Mbps', desc: 'Cloud e sistemas online' },
        { value: '500', label: '300 a 500 Mbps', desc: 'Alta demanda de dados' },
        { value: '1000', label: '500 Mbps a 1 Gbps', desc: 'Missão crítica' }
    ];

    const needsOptions = [
        { value: 'ip_fixo', label: 'IP Fixo' },
        { value: 'simetrico', label: 'Upload = Download (Simétrico)' },
        { value: 'sla', label: 'SLA Garantido' },
        { value: 'suporte_24h', label: 'Suporte 24/7' },
        { value: 'filiais', label: 'Interligar Filiais' },
        { value: 'telefonia', label: 'Telefonia PABX' },
        { value: 'iot', label: 'IoT / M2M / Rastreamento' }
    ];

    const locations = [
        { value: 'campo_grande', label: 'Campo Grande' },
        { value: 'dourados', label: 'Dourados' },
        { value: 'bonito', label: 'Bonito' },
        { value: 'tres_lagoas', label: 'Três Lagoas' },
        { value: 'other_ms', label: 'Outra cidade do MS' }
    ];

    const getRecommendations = () => {
        const recommendations = [];
        const { companyType, bandwidth, needs, criticalOperations } = formData;
        
        // Main plan recommendation
        if (criticalOperations || companyType === 'government' || companyType === 'large' || parseInt(bandwidth) >= 500) {
            recommendations.push({
                type: 'plan',
                name: 'Speedway Full',
                description: 'Conexão 100% simétrica com SLA de 4 horas para operações críticas',
                price: 'A partir de R$ 400,00/mês',
                features: ['FTTH / VLAN', 'Até 4 IPs Públicos', 'SLA 4h', '100% Simétrico', 'Suporte 24/7'],
                highlight: true
            });
        } else if (companyType === 'medium' || parseInt(bandwidth) >= 100 || needs.includes('ip_fixo')) {
            recommendations.push({
                type: 'plan',
                name: 'Speedway Empresarial',
                description: 'Estabilidade e performance para negócios em crescimento',
                price: 'A partir de R$ 439,90/mês',
                features: ['FTTH', '1 IP Fixo incluso', 'SLA 6h', 'Garantia Robusta', 'Suporte Prioritário'],
                highlight: true
            });
        } else {
            recommendations.push({
                type: 'plan',
                name: 'Speedway Light',
                description: 'Custo-benefício ideal para pequenas empresas',
                price: 'A partir de R$ 189,90/mês',
                features: ['FTTH', 'IP Dinâmico', 'SLA 12h', 'Garantia Padrão'],
                highlight: true
            });
        }

        // Additional services
        if (needs.includes('filiais')) {
            recommendations.push({
                type: 'service',
                name: 'Megalink (Intranet)',
                description: 'Interligação Ponto a Ponto entre filiais',
                price: 'A partir de R$ 300,00/mês',
                features: ['LAN to LAN', 'Independente da internet', 'Alta segurança']
            });
        }

        if (needs.includes('telefonia')) {
            recommendations.push({
                type: 'service',
                name: 'PABX Virtual',
                description: 'Sistema telefônico completo com URA',
                price: 'A partir de R$ 99,00/mês',
                features: ['URA completa', 'Gravação', 'Portabilidade']
            });
        }

        if (needs.includes('iot')) {
            recommendations.push({
                type: 'service',
                name: 'Telefonia M2M',
                description: 'Conectividade para IoT e rastreamento',
                price: 'A partir de R$ 4,58/mês',
                features: ['5G', 'Sensores', 'Rastreamento']
            });
        }

        if (companyType === 'condominium') {
            recommendations.push({
                type: 'service',
                name: 'Projeto Condomínio',
                description: 'Infraestrutura FTTH unificada',
                price: 'Sob consulta',
                features: ['Wi-Fi áreas comuns', 'Segurança', 'Gestão centralizada']
            });
        }

        return recommendations;
    };

    const handleNeedToggle = (need) => {
        setFormData(prev => ({
            ...prev,
            needs: prev.needs.includes(need) 
                ? prev.needs.filter(n => n !== need)
                : [...prev.needs, need]
        }));
    };

    const nextStep = () => {
        if (step < 4) setStep(step + 1);
        else setShowResults(true);
    };

    const prevStep = () => {
        if (showResults) setShowResults(false);
        else if (step > 1) setStep(step - 1);
    };

    const canProceed = () => {
        switch(step) {
            case 1: return formData.companyType !== '';
            case 2: return formData.location !== '';
            case 3: return formData.bandwidth !== '';
            case 4: return true;
            default: return false;
        }
    };

    const resetCalculator = () => {
        setStep(1);
        setShowResults(false);
        setFormData({
            companyType: '',
            employees: '',
            location: '',
            bandwidth: '',
            needs: [],
            criticalOperations: false
        });
    };

    return (
        <section className="py-24 bg-gradient-to-b from-gray-50 to-white" id="calculadora">
            <div className="max-w-4xl mx-auto px-6">
                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        <Calculator className="w-4 h-4" />
                        Ferramenta Exclusiva
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-4">
                        Calculadora de{' '}
                        <span className="text-orange-500">Soluções</span>
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Descubra em menos de 2 minutos qual a solução ideal de internet empresarial e conectividade corporativa para sua empresa.
                    </p>
                </motion.div>

                {/* Calculator Card */}
                <Card className="shadow-2xl border-0 overflow-hidden">
                    {/* Progress Bar */}
                    {!showResults && (
                        <div className="bg-gray-100 h-2">
                            <motion.div 
                                className="h-full bg-gradient-to-r from-orange-500 to-orange-600"
                                initial={{ width: 0 }}
                                animate={{ width: `${(step / 4) * 100}%` }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    )}

                    <CardContent className="p-8">
                        <AnimatePresence mode="wait">
                            {!showResults ? (
                                <motion.div
                                    key={step}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {/* Step 1: Company Type */}
                                    {step === 1 && (
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                                                    <Building2 className="w-5 h-5 text-orange-600" />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-500">Passo 1 de 4</p>
                                                    <h3 className="text-xl font-bold text-gray-900">Qual o perfil da sua organização?</h3>
                                                </div>
                                            </div>
                                            <RadioGroup 
                                                value={formData.companyType} 
                                                onValueChange={(v) => setFormData({...formData, companyType: v})}
                                                className="grid gap-3"
                                            >
                                                {companyTypes.map((type) => (
                                                    <Label
                                                        key={type.value}
                                                        className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                                                            formData.companyType === type.value 
                                                                ? 'border-orange-500 bg-orange-50' 
                                                                : 'border-gray-200 hover:border-gray-300'
                                                        }`}
                                                    >
                                                        <RadioGroupItem value={type.value} />
                                                        <div>
                                                            <p className="font-semibold text-gray-900">{type.label}</p>
                                                            <p className="text-sm text-gray-500">{type.desc}</p>
                                                        </div>
                                                    </Label>
                                                ))}
                                            </RadioGroup>
                                        </div>
                                    )}

                                    {/* Step 2: Location */}
                                    {step === 2 && (
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                                                    <MapPin className="w-5 h-5 text-orange-600" />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-500">Passo 2 de 4</p>
                                                    <h3 className="text-xl font-bold text-gray-900">Onde está localizada sua empresa?</h3>
                                                </div>
                                            </div>
                                            <RadioGroup 
                                                value={formData.location} 
                                                onValueChange={(v) => setFormData({...formData, location: v})}
                                                className="grid sm:grid-cols-2 gap-3"
                                            >
                                                {locations.map((loc) => (
                                                    <Label
                                                        key={loc.value}
                                                        className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                                                            formData.location === loc.value 
                                                                ? 'border-orange-500 bg-orange-50' 
                                                                : 'border-gray-200 hover:border-gray-300'
                                                        }`}
                                                    >
                                                        <RadioGroupItem value={loc.value} />
                                                        <span className="font-medium">{loc.label}</span>
                                                    </Label>
                                                ))}
                                            </RadioGroup>
                                        </div>
                                    )}

                                    {/* Step 3: Bandwidth */}
                                    {step === 3 && (
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                                                    <Wifi className="w-5 h-5 text-orange-600" />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-500">Passo 3 de 4</p>
                                                    <h3 className="text-xl font-bold text-gray-900">Qual sua necessidade de banda?</h3>
                                                </div>
                                            </div>
                                            <RadioGroup 
                                                value={formData.bandwidth} 
                                                onValueChange={(v) => setFormData({...formData, bandwidth: v})}
                                                className="grid gap-3"
                                            >
                                                {bandwidthOptions.map((opt) => (
                                                    <Label
                                                        key={opt.value}
                                                        className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                                                            formData.bandwidth === opt.value 
                                                                ? 'border-orange-500 bg-orange-50' 
                                                                : 'border-gray-200 hover:border-gray-300'
                                                        }`}
                                                    >
                                                        <RadioGroupItem value={opt.value} />
                                                        <div>
                                                            <p className="font-semibold text-gray-900">{opt.label}</p>
                                                            <p className="text-sm text-gray-500">{opt.desc}</p>
                                                        </div>
                                                    </Label>
                                                ))}
                                            </RadioGroup>
                                        </div>
                                    )}

                                    {/* Step 4: Additional Needs */}
                                    {step === 4 && (
                                        <div className="space-y-6">
                                            <div className="flex items-center gap-3 mb-6">
                                                <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                                                    <Zap className="w-5 h-5 text-orange-600" />
                                                </div>
                                                <div>
                                                    <p className="text-sm text-gray-500">Passo 4 de 4</p>
                                                    <h3 className="text-xl font-bold text-gray-900">Quais recursos são importantes?</h3>
                                                </div>
                                            </div>
                                            <div className="grid sm:grid-cols-2 gap-3">
                                                {needsOptions.map((need) => (
                                                    <Label
                                                        key={need.value}
                                                        className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                                                            formData.needs.includes(need.value) 
                                                                ? 'border-orange-500 bg-orange-50' 
                                                                : 'border-gray-200 hover:border-gray-300'
                                                        }`}
                                                    >
                                                        <Checkbox 
                                                            checked={formData.needs.includes(need.value)}
                                                            onCheckedChange={() => handleNeedToggle(need.value)}
                                                        />
                                                        <span className="font-medium">{need.label}</span>
                                                    </Label>
                                                ))}
                                            </div>
                                            <Label className={`flex items-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all mt-4 ${
                                                formData.criticalOperations 
                                                    ? 'border-orange-500 bg-orange-50' 
                                                    : 'border-gray-200 hover:border-gray-300'
                                            }`}>
                                                <Checkbox 
                                                    checked={formData.criticalOperations}
                                                    onCheckedChange={(c) => setFormData({...formData, criticalOperations: c})}
                                                />
                                                <div>
                                                    <span className="font-semibold">Operações de Missão Crítica</span>
                                                    <p className="text-sm text-gray-500">Minha empresa não pode ficar offline</p>
                                                </div>
                                            </Label>
                                        </div>
                                    )}

                                    {/* Navigation */}
                                    <div className="flex justify-between mt-8 pt-6 border-t">
                                        <Button 
                                            variant="outline" 
                                            onClick={prevStep}
                                            disabled={step === 1}
                                            className="gap-2"
                                        >
                                            <ArrowLeft className="w-4 h-4" />
                                            Voltar
                                        </Button>
                                        <Button 
                                            onClick={nextStep}
                                            disabled={!canProceed()}
                                            className="bg-orange-500 hover:bg-orange-600 gap-2"
                                        >
                                            {step === 4 ? 'Ver Recomendações' : 'Próximo'}
                                            <ArrowRight className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </motion.div>
                            ) : (
                                /* Results */
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="space-y-6"
                                >
                                    <div className="text-center mb-8">
                                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <Check className="w-8 h-8 text-green-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Soluções Recomendadas</h3>
                                        <p className="text-gray-600">Com base nas suas necessidades, recomendamos:</p>
                                    </div>

                                    <div className="space-y-4">
                                        {getRecommendations().map((rec, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className={`p-6 rounded-2xl border-2 ${
                                                    rec.highlight 
                                                        ? 'border-orange-500 bg-gradient-to-br from-orange-50 to-white' 
                                                        : 'border-gray-200 bg-white'
                                                }`}
                                            >
                                                <div className="flex items-start justify-between mb-4">
                                                    <div>
                                                        <div className="flex items-center gap-2 mb-1">
                                                            {rec.highlight && (
                                                                <Badge className="bg-orange-500 text-white">Recomendado</Badge>
                                                            )}
                                                            <Badge variant="outline" className="text-gray-500">
                                                                {rec.type === 'plan' ? 'Plano' : 'Serviço Adicional'}
                                                            </Badge>
                                                        </div>
                                                        <h4 className="text-xl font-bold text-gray-900">{rec.name}</h4>
                                                        <p className="text-gray-600">{rec.description}</p>
                                                    </div>
                                                    <div className="text-right">
                                                        <p className="font-bold text-orange-600">{rec.price}</p>
                                                    </div>
                                                </div>
                                                <div className="flex flex-wrap gap-2">
                                                    {rec.features.map((feature, i) => (
                                                        <span key={i} className="inline-flex items-center gap-1 text-sm bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                                                            <Check className="w-3 h-3 text-green-600" />
                                                            {feature}
                                                        </span>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="bg-gray-900 rounded-2xl p-6 mt-8">
                                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                                            <div className="text-center md:text-left">
                                                <h4 className="text-xl font-bold text-white mb-1">Solicite um Orçamento Personalizado</h4>
                                                <p className="text-gray-400">Um consultor especialista entrará em contato em até 2 horas.</p>
                                            </div>
                                            <Button 
                                                size="lg" 
                                                className="bg-orange-500 hover:bg-orange-600 text-white whitespace-nowrap gap-2"
                                                onClick={() => {
                                                    // Will open embedded chat later
                                                    window.open('https://api.whatsapp.com/send?phone=556730253131&text=Olá! Utilizei a calculadora de soluções e gostaria de um orçamento personalizado.', '_blank');
                                                }}
                                            >
                                                <MessageCircle className="w-5 h-5" />
                                                Falar com Consultor Especialista
                                            </Button>
                                        </div>
                                    </div>

                                    <div className="flex justify-center pt-4">
                                        <Button variant="ghost" onClick={resetCalculator} className="text-gray-500">
                                            <ArrowLeft className="w-4 h-4 mr-2" />
                                            Refazer Simulação
                                        </Button>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}