import { Link } from 'react-router-dom';

export const Footer = () => {
    return (
        <footer className="bg-primary text-background-cream py-20 border-t border-white/5">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-16 items-start">
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-3xl font-serif mb-4 italic text-white font-bold">Hermann Stöger</h3>
                        <p className="text-xl text-white/50 font-light max-w-md italic">
                            "Mein Ziel ist es, dass Sie wieder Freude an der Arbeit in der Küche haben – durch Struktur, die wirklich funktioniert."
                        </p>
                    </div>

                    <div className="space-y-8">
                        <div>
                            <h4 className="text-xs uppercase tracking-widest text-white font-mono mb-4">Kontakt</h4>
                            <div className="space-y-2 text-lg text-white/70">
                                <p>St. Peter in der Au, Wiesenbach 6</p>
                                <p>Mobil: 0676 73 44 834</p>
                                <a href="mailto:stoegerhermann4@gmail.com" className="text-white hover:text-primary-red transition-colors">stoegerhermann4@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-sm tracking-widest uppercase text-white/60">
                    <p>© 2026 Hermann Stöger. Küchenmeister & Berater.</p>
                    <div className="flex gap-12">
                        <Link to="/impressum" className="hover:text-primary-red transition-all duration-300">Impressum</Link>
                        <Link to="/datenschutz" className="hover:text-primary-red transition-all duration-300">Datenschutz</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
