import { motion } from 'framer-motion';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const Datenschutz = () => {
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
                            Datenschutz
                        </h1>

                        <div className="space-y-12 text-primary/70 leading-relaxed text-lg">
                            <section>
                                <h2 className="text-2xl font-serif text-primary mb-4">1. Datenschutz auf einen Blick</h2>
                                <h3 className="text-xl font-serif text-primary mb-2 italic">Allgemeine Hinweise</h3>
                                <p>
                                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-serif text-primary mb-4">2. Datenerfassung auf dieser Website</h2>
                                <h3 className="text-xl font-serif text-primary mb-2 italic">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h3>
                                <p>
                                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber:
                                </p>
                                <div className="mt-4 p-6 bg-white rounded-2xl border border-primary/5 text-primary">
                                    <p className="font-bold">Hermann Stöger</p>
                                    <p>Wiesenbach 6, 3352 St. Peter in der Au</p>
                                    <p>E-Mail: stoegerhermann4@gmail.com</p>
                                </div>
                            </section>

                            <section>
                                <h3 className="text-xl font-serif text-primary mb-2 italic">Wie erfassen wir Ihre Daten?</h3>
                                <p>
                                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie uns per E-Mail senden.
                                    Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-serif text-primary mb-4">3. Ihre Rechte</h2>
                                <p>
                                    Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-serif text-primary mb-4">4. Hosting</h2>
                                <p>
                                    Wir hosten unsere Website bei einem externen Dienstleister. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden und im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
                                </p>
                            </section>

                            <section>
                                <h2 className="text-2xl font-serif text-primary mb-4">5. Cookies</h2>
                                <p>
                                    Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
                                </p>
                                <p className="mt-4">
                                    Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschern der Cookies beim Schließen des Browsers aktivieren.
                                </p>
                            </section>
                        </div>
                    </motion.div>
                </div>
            </main>

            <Footer />
        </div>
    );
};
