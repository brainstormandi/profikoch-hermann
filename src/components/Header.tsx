import { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Leistungen', href: '#services' },
        { name: 'Vorteile', href: '#benefits' },
        { name: 'Über mich', href: '#about' },
        { name: 'Referenzen', href: '#testimonials' },
        { name: 'FAQ', href: '#faq' },
    ];

    return (
        <header
            className={clsx(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
                isScrolled ? "py-4" : "py-8"
            )}
        >
            <div className="container mx-auto px-6">
                <div className={clsx(
                    "flex items-center justify-between transition-all duration-500 rounded-[2rem] px-8 border",
                    isScrolled ? "glass-white py-3 border-primary/10 shadow-2xl" : "bg-transparent py-0 border-transparent"
                )}>
                    {/* Logo */}
                    <a href="#" className="z-50 relative block hover:scale-105 transition-transform duration-300">
                        <img
                            src="/bilder/logo.webp"
                            alt="Hermann Stöger Logo"
                            className={clsx(
                                "w-auto object-contain transition-all duration-500",
                                isScrolled ? "h-16 xl:h-20" : "h-24 xl:h-32"
                            )}
                        />
                    </a>

                    {/* Desktop Nav */}
                    <nav className="hidden xl:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-xl xl:text-2xl uppercase tracking-wider font-mono text-primary/80 hover:text-primary-red transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Desktop CTA */}
                    <div className="hidden xl:block">
                        <Button
                            href="mailto:stoegerhermann4@gmail.com"
                            variant="primary"
                            className="text-lg uppercase tracking-wider px-8 py-3"
                        >
                            Erstgespräch
                        </Button>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="xl:hidden text-primary z-50 p-2 rounded-full bg-primary/10"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-background-cream z-40 flex flex-col items-center justify-center gap-12 xl:hidden"
                        >
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-4xl font-serif text-primary hover:text-primary-red transition-colors"
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 }}
                            >
                                <Button href="mailto:stoegerhermann4@gmail.com" variant="primary" onClick={() => setIsMobileMenuOpen(false)}>
                                    Erstgespräch anfragen
                                </Button>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};
