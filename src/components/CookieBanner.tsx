import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, X } from 'lucide-react';
import { Button } from './ui/Button';

export const CookieBanner = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('cookie-consent', 'accepted');
        setIsVisible(false);
    };

    const handleDecline = () => {
        localStorage.setItem('cookie-consent', 'declined');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="fixed bottom-6 left-6 right-6 z-[100] flex justify-center pointer-events-none"
                >
                    <div className="glass-white p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-white/40 max-w-4xl w-full pointer-events-auto flex flex-col md:flex-row items-center gap-8">
                        <div className="bg-primary/5 p-4 rounded-2xl flex-shrink-0">
                            <ShieldCheck className="w-8 h-8 text-primary" />
                        </div>

                        <div className="flex-grow">
                            <h4 className="text-xl font-serif text-primary mb-2">Ihre Privatsphäre ist uns wichtig</h4>
                            <p className="text-primary/70 text-sm leading-relaxed">
                                Wir nutzen Cookies, um die Nutzererfahrung auf unserer Website zu verbessern.
                                Einige sind essenziell, während andere uns helfen, diese Website und Ihre Erfahrung zu optimieren.
                                Details finden Sie in unserer <a href="#" className="underline hover:text-primary-red transition-colors">Datenschutzerklärung</a>.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4 flex-shrink-0 w-full md:w-auto">
                            <button
                                onClick={handleDecline}
                                className="text-primary/50 hover:text-primary text-sm font-medium px-6 py-2 transition-colors order-2 sm:order-1"
                            >
                                Nur essenzielle
                            </button>
                            <Button
                                onClick={handleAccept}
                                variant="primary"
                                className="button-glow w-full sm:w-auto order-1 sm:order-2"
                            >
                                Alle akzeptieren
                            </Button>
                        </div>

                        <button
                            onClick={() => setIsVisible(false)}
                            className="absolute top-4 right-4 text-primary/20 hover:text-primary transition-colors"
                            aria-label="Schließen"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
