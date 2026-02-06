import React, { useState, useEffect } from 'react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageCircle, CheckCircle2, Loader2 } from 'lucide-react';

export default function ContactModal({ open, onOpenChange }) {
    const [status, setStatus] = useState('loading'); // 'loading' | 'success' | 'fallback'

    useEffect(() => {
        if (open) {
            setStatus('loading');
            
            // Try to open the Redrive widget
            const tryOpenWidget = () => {
                if (window.redriveWidget && typeof window.redriveWidget.open === 'function') {
                    window.redriveWidget.open();
                    setStatus('success');
                    // Close modal after showing success
                    setTimeout(() => {
                        onOpenChange(false);
                    }, 2000);
                } else {
                    // Widget not available, show fallback
                    setStatus('fallback');
                }
            };

            // Small delay to show loading state
            setTimeout(tryOpenWidget, 500);
        }
    }, [open, onOpenChange]);

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-3 text-xl">
                        <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                            <MessageCircle className="w-5 h-5 text-orange-600" />
                        </div>
                        Atendimento Freeway
                    </DialogTitle>
                    <DialogDescription className="text-base pt-2">
                        {status === 'loading' && (
                            <div className="flex items-center gap-3 py-4">
                                <Loader2 className="w-5 h-5 animate-spin text-orange-500" />
                                <span>Conectando você com nosso atendimento...</span>
                            </div>
                        )}
                        
                        {status === 'success' && (
                            <div className="flex items-center gap-3 py-4 text-green-600">
                                <CheckCircle2 className="w-5 h-5" />
                                <span>Chat aberto! Fale com nosso consultor no canto inferior direito.</span>
                            </div>
                        )}
                        
                        {status === 'fallback' && (
                            <div className="space-y-4 py-2">
                                <p>
                                    Nosso chat de atendimento está disponível no <strong>canto inferior direito</strong> da tela.
                                </p>
                                <p className="text-sm text-gray-500">
                                    Se não visualizar o ícone do chat, entre em contato pelo WhatsApp:
                                </p>
                                <Button 
                                    className="w-full bg-green-600 hover:bg-green-700 text-white"
                                    onClick={() => {
                                        window.open('https://wa.me/556740423345', '_blank');
                                        onOpenChange(false);
                                    }}
                                >
                                    <MessageCircle className="w-4 h-4 mr-2" />
                                    WhatsApp
                                </Button>
                            </div>
                        )}
                    </DialogDescription>
                </DialogHeader>
                
                {status !== 'loading' && (
                    <div className="flex justify-end pt-2">
                        <Button variant="outline" onClick={() => onOpenChange(false)}>
                            Fechar
                        </Button>
                    </div>
                )}
            </DialogContent>
        </Dialog>
    );
}
