import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const Impressum = () => {
    return (
        <div className="bg-background-cream min-h-screen flex flex-col">
            <Header />

            <main className="flex-grow pt-56 pb-32">
                <div className="container mx-auto px-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-primary-red uppercase tracking-[0.3em] text-sm font-bold block mb-4">Rechtliches</span>
                        <h1 className="text-5xl md:text-7xl font-serif text-primary mb-12 leading-tight">
                            Impressum
                        </h1>

                        <div className="grid md:grid-cols-2 gap-16">
                            <section className="space-y-8">
                                <div>
                                    <h2 className="text-xs uppercase tracking-widest text-primary/40 font-mono mb-4">Medieninhaber & Herausgeber</h2>
                                    <div className="text-xl text-primary leading-relaxed">
                                        <p className="font-bold">Hermann Stöger</p>
                                        <p>Küchenmeister & Berater</p>
                                        <p>Wiesenbach 6</p>
                                        <p>3352 St. Peter in der Au</p>
                                        <p>Österreich</p>
                                    </div>
                                </div>

                                <div>
                                    <h2 className="text-xs uppercase tracking-widest text-primary/40 font-mono mb-4">Kontakt</h2>
                                    <div className="text-xl text-primary leading-relaxed">
                                        <p>Mobil: +43 676 73 44 834</p>
                                        <p>E-Mail: <a href="mailto:stoegerhermann4@gmail.com" className="text-primary-red hover:underline transition-all">stoegerhermann4@gmail.com</a></p>
                                        <p>Web: <a href="https://hermann-stoeger.at" className="text-primary-red hover:underline transition-all">www.hermann-stoeger.at</a></p>
                                    </div>
                                </div>
                            </section>

                            <section className="space-y-8">
                                <div>
                                    <h2 className="text-xs uppercase tracking-widest text-primary/40 font-mono mb-4">Unternehmensgegenstand</h2>
                                    <p className="text-lg text-primary/70 leading-relaxed">
                                        Küchenmanagement, gastronomische Beratung, HACCP-Konzepte und Aus- sowie Weiterbildung in der Gastronomie.
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-xs uppercase tracking-widest text-primary/40 font-mono mb-4">Aufsichtsbehörde</h2>
                                    <p className="text-lg text-primary/70 leading-relaxed">
                                        Bezirkshauptmannschaft Amstetten
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-xs uppercase tracking-widest text-primary/40 font-mono mb-4">Berufsbezeichnung</h2>
                                    <p className="text-lg text-primary/70 leading-relaxed">
                                        Geprüfter Küchenmeister (verliehen in Österreich)
                                    </p>
                                </div>

                                <div>
                                    <h2 className="text-xs uppercase tracking-widest text-primary/40 font-mono mb-4">Online-Streitbeilegung</h2>
                                    <p className="text-sm text-primary/60 leading-relaxed">
                                        Verbraucher haben die Möglichkeit, Beschwerden an die Online-Streitbeilegungsplattform der EU zu richten: <a href="http://ec.europa.eu/odr" className="underline hover:text-primary-red">http://ec.europa.eu/odr</a>. Sie können allfällige Beschwerde auch an die oben angegebene E-Mail-Adresse richten.
                                    </p>
                                </div>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
};
