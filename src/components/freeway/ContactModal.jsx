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
                    <DialogDescription asChild>
                        <div className="space-y-4 py-2">
                            <p className="text-base">
                                Fale com nosso time comercial pelo WhatsApp:
                            </p>
                            <Button 
                                className="w-full bg-green-600 hover:bg-green-700 text-white"
                                onClick={() => {
                                    const message = encodeURIComponent('Olá! Vim pelo site da Freeway e tenho interesse em mais informações sobre os planos de internet.');
                                    window.open(`https://wa.me/556730253131?text=${message}`, '_blank');
                                    onOpenChange(false);
                                }}
                            >
                                <MessageCircle className="w-4 h-4 mr-2" />
                                WhatsApp (67) 3025-3131
                            </Button>
                        </div>
                    </DialogDescription>
                </DialogHeader>
                <div className="flex justify-end pt-2">
                    <Button variant="outline" onClick={() => onOpenChange(false)}>
                        Fechar
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
