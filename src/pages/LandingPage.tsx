import { HeroSequence } from '../components/HeroSequence';
import { Header } from '../components/Header';
import { Button } from '../components/ui/Button';
import { CheckCircle2, TrendingUp, ShieldCheck } from 'lucide-react';
import { useRef } from 'react';
import { CookieBanner } from '../components/CookieBanner';

import { motion, useScroll, useTransform } from 'framer-motion';

export const LandingPage = () => {
    const heroRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end end"]
    });

    // Content fades out late in the scroll sequence (between 60% and 90% of the way through)
    const heroOpacity = useTransform(scrollYProgress, [0, 0.6, 0.9], [1, 1, 0]);
    const heroScale = useTransform(scrollYProgress, [0, 0.6, 0.9], [1, 1, 0.95]);

    const schemaData = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "LocalBusiness",
                "@id": "https://hermann-stoeger.at/#organization",
                "name": "Hermann Stöger | Küchenmanagement & Beratung",
                "image": "/bilder/profikoch hermann stoeger.jpg",
                "description": "Professionelle Beratung für Gastronomie und Hotellerie in den Bereichen Küchenmanagement, HACCP und Menüplanung.",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Wiesenbach 6",
                    "addressLocality": "St. Peter in der Au",
                    "postalCode": "3352",
                    "addressCountry": "AT"
                },
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+43 676 7344834",
                    "contactType": "sales",
                    "email": "stoegerhermann4@gmail.com"
                }
            },
            {
                "@type": "Person",
                "name": "Hermann Stöger",
                "jobTitle": "Küchenmeister & Berater",
                "url": "https://hermann-stoeger.at/",
                "sameAs": [],
                "description": "Erfahrener Küchenmeister mit Auszeichnungen im Gault Millau und internationaler Wettbewerbserfahrung."
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Wie läuft die Zusammenarbeit ab?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Nach einem Erstgespräch analysieren wir Ihren Betrieb und definieren konkrete Maßnahmen – Schritt für Schritt."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Ist das auch für kleinere Betriebe sinnvoll?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Ja. Gerade kleinere Küchen profitieren von klaren, einfachen Strukturen."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="bg-background-cream min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <Header />

            {/* HERO SECTION - Extended scroll area (250vh) */}
            <section ref={heroRef} className="relative h-[250vh] bg-primary">
                <div className="sticky top-0 h-screen w-full overflow-hidden">
                    <HeroSequence containerRef={heroRef} />

                    {/* Content Overlay */}
                    <motion.div
                        style={{ opacity: heroOpacity, scale: heroScale }}
                        className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center z-10 pointer-events-none"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="pointer-events-auto max-w-5xl"
                        >
                            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-9xl font-serif text-white mb-8 leading-[1.2] md:leading-[1.1] lg:leading-[1.0] xl:leading-[0.9] tracking-tighter drop-shadow-2xl">
                                Küchen- <br />
                                management <br />
                                <span className="text-primary-red italic">das wirkt.</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                                Strukturierte Abläufe, wirtschaftliche Menüplanung <br className="hidden md:block" />
                                und Hygienesicherheit – individuell für Ihren Betrieb.
                            </p>
                            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                                <Button
                                    href="mailto:stoegerhermann4@gmail.com"
                                    className="button-glow text-lg px-10 py-4"
                                    aria-label="Anfrage für Erstgespräch senden"
                                >
                                    Erstgespräch anfragen
                                </Button>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* HIGHLIGHTS SECTION - SEPARATE AREA BELOW HERO */}
            <section className="py-24 relative z-30 bg-background-cream border-t border-primary/5">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-20">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-primary-red uppercase tracking-[0.3em] text-sm font-bold block mb-4"
                        >
                            Expertise & Schwerpunkte
                        </motion.span>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl font-serif text-primary leading-tight"
                        >
                            Küchenmanagement <br className="hidden md:block" />
                            <span className="italic">neu gedacht.</span>
                        </motion.h2>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-10">
                        {[
                            { title: "Abläufe & Team entlasten", text: "Klare Stationen, saubere Übergaben, weniger Stress – mehr Servicequalität.", icon: <TrendingUp className="w-8 h-8 text-primary-red" /> },
                            { title: "Menüplanung mit System", text: "Kalkulation, Wareneinsatz, Portionierung & Planung – nachvollziehbar und praxisnah.", icon: <CheckCircle2 className="w-8 h-8 text-primary-red" /> },
                            { title: "HACCP: rechtssicher", text: "Von Risikoanalyse bis Doku – so, dass es im Alltag wirklich gelebt wird.", icon: <ShieldCheck className="w-8 h-8 text-primary-red" /> }
                        ].map((card, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: i * 0.2 }}
                                className="glass-white p-12 rounded-[2.5rem] group hover:bg-white transition-all duration-700 hover:shadow-[0_32px_64px_-16px_rgba(0,48,73,0.1)] hover:-translate-y-3"
                            >
                                <div className="mb-8 p-5 bg-background-cream rounded-2xl w-fit group-hover:bg-primary-red/10 transition-colors duration-500">
                                    {card.icon}
                                </div>
                                <h3 className="text-2xl md:text-3xl font-serif text-primary mb-6 group-hover:text-primary-red transition-colors duration-500">{card.title}</h3>
                                <p className="text-primary/70 leading-relaxed text-lg">{card.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* BENEFITS */}
            <section id="benefits" className="py-32 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className="text-primary-red font-mono text-sm tracking-widest uppercase mb-6 block">Warum Hermann Stöger</span>
                            <h2 className="text-5xl md:text-7xl font-serif text-primary mb-8 leading-tight">Weniger Chaos.<br /><span className="text-primary-red">Mehr Kontrolle.</span></h2>
                            <p className="text-xl text-primary/70 mb-12 leading-relaxed">
                                Sie erhalten ein Küchen- und Hygienesystem, das zu Ihrem Betrieb passt – nicht umgekehrt. Praxisnah und sofort wirksam.
                            </p>

                            {/* Benefits List */}
                            <div className="space-y-6">
                                {[
                                    "Ruhigere Abläufe im Küchenalltag",
                                    "Nachvollziehbare Standards für Ihr Team",
                                    "Rechtssichere HACCP-Dokumentation",
                                    "Verbesserter Wareneinsatz & weniger Food Waste"
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.3 + (i * 0.1) }}
                                        className="flex items-center gap-4 text-lg text-primary/80"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-primary-red/10 flex items-center justify-center flex-shrink-0">
                                            <div className="w-2 h-2 rounded-full bg-primary-red" />
                                        </div>
                                        <span>{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Core Values - Right Column */}
                        <div className="grid gap-6">
                            {[
                                { title: "Praxisnah", desc: "sofort umsetzbare Lösungen" },
                                { title: "Individuell", desc: "abgestimmt auf Größe & Konzept" },
                                { title: "Nachhaltig", desc: "dauerhaft wirksame Strukturen" }
                            ].map((value, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.2 }}
                                    className="bg-background-cream/30 p-10 rounded-3xl border border-primary/5 hover:border-primary-red/20 transition-colors group"
                                >
                                    <h4 className="text-2xl font-serif text-primary mb-2 group-hover:text-primary-red transition-colors">{value.title}</h4>
                                    <p className="text-primary/60 text-lg">{value.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section >

            {/* ABOUT / ÜBER MICH */}
            <section id="about" className="py-32 bg-background-cream/50 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-20 items-center">
                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 1 }}
                            className="order-2 md:order-1 relative"
                        >
                            <div className="absolute -inset-4 border border-primary-red/20 rounded-3xl -z-10 translate-x-8 translate-y-8" />
                            <img
                                src="/bilder/profikoch hermann stoeger.jpg"
                                alt="Hermann Stöger - Profikoch"
                                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
                            />
                        </motion.div>

                        {/* Text */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-1 md:order-2"
                        >
                            <span className="text-primary-red font-mono text-sm tracking-widest uppercase mb-6 block">Über mich</span>
                            <h2 className="text-5xl md:text-7xl font-serif text-primary mb-8 leading-tight">
                                Profikoch mit Fokus auf <span className="italic">Alltag.</span>
                            </h2>
                            <p className="text-xl text-primary/70 mb-8 leading-relaxed">
                                Ich begleite Gastronomie- und Hotelbetriebe dabei, ihre Küche so aufzustellen, dass Qualität, Wirtschaftlichkeit und Hygienesicherheit Hand in Hand gehen.
                            </p>
                            <div className="bg-white p-10 rounded-3xl shadow-sm mb-8 border border-primary/5">
                                <p className="text-primary/90 font-serif text-2xl mb-4">Mein Ansatz ist pragmatisch:</p>
                                <p className="text-primary-red/80 font-mono text-sm tracking-tighter">
                                    Analyse → Planung → Umsetzung → Schulung → Stabilisierung.
                                </p>
                            </div>
                            <p className="text-xl text-primary/70 leading-relaxed">
                                Keine theoretischen Konzepte, sondern Lösungen, die im laufenden Betrieb funktionieren.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section >

            {/* SERVICES */}
            <section id="services" className="py-32 bg-white relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="text-center max-w-3xl mx-auto mb-20 text-balance">
                        <span className="text-primary-red font-mono text-sm tracking-widest uppercase mb-6 block">Leistungsspektrum</span>
                        <h2 className="text-5xl md:text-7xl font-serif text-primary leading-tight">Expertise für eine rentable Küche</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {[
                            {
                                title: "Küchenmanagement",
                                items: ["Stationsaufbau & Team-Organisation", "Mise-en-place-Strukturen", "Tages- & Ablaufpläne"],
                                color: "bg-primary-red"
                            },
                            {
                                title: "Arbeitskonzepte",
                                items: ["Logische Küchenwege & Layouts", "Lager- & Produktionsstruktur", "Effizienz-Standards"],
                                color: "bg-primary"
                            },
                            {
                                title: "Mietkoch",
                                items: ["Temporäre Unterstützung", "Saisonspitzen abfangen", "Stabiler Serviceablauf"],
                                color: "bg-support-blue"
                            },
                            {
                                title: "Menüplanung",
                                items: ["Konzept-Optimierung", "Wareneinsatz & Food Waste", "Standardrezepte"],
                                color: "bg-secondary-red"
                            },
                            {
                                title: "Beratung & Coaching",
                                items: ["Führung & Kommunikation", "Kennzahlen & Bestellprozesse", "Begleitung bei Change"],
                                color: "bg-primary"
                            },
                            {
                                title: "HACCP & Hygiene",
                                items: ["Gefahrenanalyse & CCPs", "Reinigungs- & Kontrollpläne", "Mitarbeiterschulung"],
                                color: "bg-primary-red"
                            }
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group p-10 rounded-3xl border border-primary/5 bg-background-cream/10 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
                            >
                                <div className={`w-12 h-1 mb-8 ${service.color}`} />
                                <h3 className="text-2xl font-serif text-primary mb-6">{service.title}</h3>
                                <ul className="space-y-4">
                                    {service.items.map((item, j) => (
                                        <li key={j} className="flex items-start gap-3 text-primary/70 group-hover:text-primary transition-colors">
                                            <span className="mt-2 w-1 h-1 bg-primary-red rounded-full flex-shrink-0" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Button
                            href="mailto:stoegerhermann4@gmail.com"
                            variant="primary"
                            className="button-glow inline-flex items-center gap-2 text-lg px-12 py-5"
                        >
                            <span>👉</span>
                            Leistungspaket besprechen
                        </Button>
                    </div>
                </div>
            </section >

            {/* REFERENZEN */}
            <section id="testimonials" className="py-32 bg-primary text-background-cream relative overflow-hidden">
                <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-red/5 to-transparent pointer-events-none" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="mb-20">
                        <span className="text-white/50 font-mono text-sm tracking-widest uppercase mb-6 block font-bold">Referenzen</span>
                        <h2 className="text-5xl md:text-8xl font-serif leading-none tracking-tighter text-white">Erfahrung <br />aus der <span className="text-primary-red italic whitespace-nowrap">Praxis.</span></h2>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-16 items-stretch">
                        {/* LEFT COLUMN: Featured MS Arkona */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="lg:col-span-7 flex"
                        >
                            <div className="glass-dark p-10 md:p-16 rounded-[3rem] border-white/10 relative overflow-hidden group flex flex-col w-full h-fit">
                                <div className="mb-12">
                                    <span className="text-white/40 font-mono text-xs tracking-[0.3em] uppercase mb-8 block font-bold">Highlight der Karriere</span>
                                    <h3 className="text-3xl md:text-5xl font-serif mb-4 leading-tight text-white">MS Arkona · <br className="hidden md:block" />Internationale Gourmetreise</h3>
                                    <p className="text-white font-bold text-lg mb-10 decoration-primary-red underline underline-offset-8 italic">Mitglied des österreichischen Koch-Nationalteams</p>

                                    <div className="space-y-6 text-white/70 text-lg md:text-xl leading-relaxed font-light">
                                        <p>
                                            Im Rahmen einer internationalen Gourmetreise auf der MS Arkona arbeitete Hermann Stöger gemeinsam mit führenden Spitzenköchen an Bord eines Luxusliners mit 360 Feinschmeckern.
                                            Nach wenigen Tagen prägte das Team maßgeblich die kulinarische Ausrichtung und begeisterte Gäste mit hochwertiger, bodenständiger österreichischer Küche auf höchstem Niveau.
                                        </p>
                                        <p>
                                            Hermann Stöger wurde dabei ausdrücklich als den internationalen Spitzenköchen ebenbürtig wahrgenommen. Besonders hervorgehoben wurden seine fachliche Reife, seine Kreativität sowie seine souveräne Leistung unter anspruchsvollen Bedingungen.
                                        </p>
                                    </div>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                    className="mt-16 pt-16 border-t border-white/10"
                                >
                                    <p className="text-white font-serif text-3xl md:text-4xl italic leading-tight mb-6">
                                        „Ich sehe Hermann Stöger als den jüngsten Kardinal unter den deutschsprachigen Köchen.“
                                    </p>
                                    <p className="font-mono text-xs uppercase tracking-widest text-white/40">— Eckart Witzigmann</p>
                                </motion.div>
                            </div>
                        </motion.div>

                        {/* RIGHT COLUMN: Vertical Scroller (Auto-Scroll) */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:col-span-5 relative overflow-hidden h-[600px] lg:h-0 lg:min-h-full rounded-[3rem]"
                        >
                            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-primary via-primary/80 to-transparent z-10 pointer-events-none" />
                            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary via-primary/80 to-transparent z-10 pointer-events-none" />

                            <div className="h-full overflow-hidden">
                                <div className="animate-marquee-vertical space-y-6 py-12">
                                    {[...Array(2)].map((_, loop) => (
                                        <div key={loop} className="space-y-6">
                                            {[
                                                {
                                                    title: "Hotel Norica · Maria Alm",
                                                    role: "Chef de Partie / Entremetier",
                                                    text: "Zuverlässiger Profikoch mit hoher Eigenverantwortung im À-la-carte- und Grillbereich. Besonders geschätzt für Einsatzbereitschaft, Loyalität und präzise Arbeitsweise."
                                                },
                                                {
                                                    title: "Koch-Nationalteam",
                                                    role: "Internationale Wettbewerbe",
                                                    text: "Mehrfache Gold- und Silbermedaillen bei internationalen Kochbewerben sowie Teilnahme an der Koch-Olympiade in Berlin. Teamarbeit auf Spitzenniveau."
                                                },
                                                {
                                                    title: "Küchenmeister · WIFI Salzburg",
                                                    role: "Geprüfter Küchenmeister",
                                                    text: "Erfolgreich absolvierte Küchenmeisterprüfung mit Schwerpunkt Küchenführung, Organisation, Wirtschaftlichkeit und Mitarbeiterführung."
                                                },
                                                {
                                                    title: "Vital Hotel Rimmele · Südtirol",
                                                    role: "Küchenchef",
                                                    text: "Eigenverantwortliche Leitung des gesamten Küchenbereichs. Konstante Qualität, wirtschaftliche Arbeitsweise und motivierende Mitarbeiterführung."
                                                },
                                                {
                                                    title: "Schlosshotel Rosenegg · Tirol",
                                                    role: "Küchenchef (4-Sterne)",
                                                    text: "Gesamtverantwortung für Menüs/Buffets für bis zu 350 Personen sowie Einkauf, Dienst- und Einsatzplanung. Ruhige Führung in anspruchsvollen Situationen."
                                                },
                                                {
                                                    title: "Restaurant Haller · Maria Alm",
                                                    role: "Küchenchef · Gault Millau",
                                                    text: "Ausgezeichnet mit 13 von 20 Punkten. Kreative, saisonale Küche auf höchstem Niveau mit hoher Akzeptanz."
                                                },
                                                {
                                                    title: "Hotel Latini · Zell am See",
                                                    role: "Souschef / Chefkoch",
                                                    text: "Langjährige Küchenleitung inklusive Einkauf und Lehrlingsausbildung. Zwei Lehrlinge erfolgreich zur Prüfung mit Auszeichnung geführt."
                                                }
                                            ].map((ref, i) => (
                                                <motion.div
                                                    key={`${loop}-${i}`}
                                                    initial={{ opacity: 0, y: 20 }}
                                                    whileInView={{ opacity: 1, y: 0 }}
                                                    viewport={{ once: true }}
                                                    transition={{ delay: 0.4 + (i * 0.1) }}
                                                    className="bg-white/5 border border-white/10 p-10 rounded-[2rem] hover:bg-white/10 transition-all duration-300"
                                                >
                                                    <h4 className="text-2xl font-serif mb-2 text-white">{ref.title}</h4>
                                                    <p className="text-white/60 font-bold text-xs uppercase tracking-widest mb-4 font-mono">{ref.role}</p>
                                                    <p className="text-white/40 leading-relaxed italic text-sm">{ref.text}</p>
                                                </motion.div>
                                            ))}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section >

            {/* FAQ */}
            <section id="faq" className="py-32 bg-background-cream/30">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="text-center mb-20">
                        <span className="text-primary-red font-mono text-sm tracking-widest uppercase mb-6 block">FAQ</span>
                        <h2 className="text-5xl md:text-7xl font-serif text-primary leading-tight">Antworten für Ihren Erfolg</h2>
                    </div>

                    <div className="space-y-4">
                        {[
                            { q: "Wie läuft die Zusammenarbeit ab?", a: "Nach einem Erstgespräch analysieren wir Ihren Betrieb und definieren konkrete Maßnahmen – Schritt für Schritt." },
                            { q: "Ist das auch für kleinere Betriebe sinnvoll?", a: "Ja. Gerade kleinere Küchen profitieren von klaren, einfachen Strukturen." },
                            { q: "Wird mein Team eingebunden?", a: "Ja. Erfolgreiche Umsetzung funktioniert nur gemeinsam mit Ihrem Team." },
                            { q: "Gibt es Vor-Ort-Termine?", a: "Je nach Paket – alternativ auch hybrid oder online." },
                            { q: "Wann sehe ich erste Ergebnisse?", a: "Oft bereits nach wenigen Wochen in Abläufen und Teamruhe." }
                        ].map((faq, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-10 rounded-3xl border border-primary/5 hover:border-primary-red/20 transition-all duration-300"
                            >
                                <h3 className="text-2xl font-serif text-primary mb-4">{faq.q}</h3>
                                <p className="text-primary/60 text-lg leading-relaxed">{faq.a}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section >

            {/* FINAL CTA */}
            <section className="py-40 bg-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-red/20 via-transparent to-transparent opacity-50" />
                <div className="container mx-auto px-6 text-center max-w-4xl relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-5xl md:text-8xl font-serif text-white mb-10 leading-[0.9] tracking-tighter">
                            Bringen Sie Struktur in <br /><span className="text-primary-red italic">Ihre Küche.</span>
                        </h2>
                        <p className="text-2xl mb-12 text-white/70 font-light leading-relaxed">
                            Starten Sie mit einem kostenlosen Erstgespräch und erhalten Sie <br className="hidden md:block" />
                            eine klare Einschätzung Ihrer größten Hebel.
                        </p>
                        <Button
                            href="mailto:stoegerhermann4@gmail.com"
                            className="button-glow text-xl px-12 py-6"
                            aria-label="Jetzt Erstgespräch anfragen"
                        >
                            Jetzt Erstgespräch anfragen
                        </Button>
                    </motion.div>
                </div>
            </section >

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
                            <a href="#" className="hover:text-primary-red transition-all duration-300">Impressum</a>
                            <a href="#" className="hover:text-primary-red transition-all duration-300">Datenschutz</a>
                        </div>
                    </div>
                </div>
            </footer>
            <CookieBanner />
        </div>
    );
};
