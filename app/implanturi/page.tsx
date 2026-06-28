import type { Metadata } from "next";
import CtaButton from "../components/CtaButton";
import SectionTitle from "../components/SectionTitle";

export const metadata: Metadata = {
    title: "Implanturi | Smile Solutions",
    description:
        "Protetică pe implant și protocol „dinți în 24 de ore” pentru cazuri eligibile, cu planificare digitală riguroasă.",
};

export default function ImplanturiPage() {
    return (
        <>
            <section className="page-head">
                <div className="container">
                    <SectionTitle
                        eyebrow="Implanturi dentare"
                        title="Dinti in 24 ore: protocol rapid pentru cazuri eligibile"
                        description="Pentru pacientii potriviti, protocolul accelerat permite fixarea provizoriei intr-un interval scurt, cu planificare digitala riguroasa si colaborare stransa cu medicul implantolog."
                    />
                </div>
            </section>

            <section className="section section-highlight">
                <div className="container implants-layout">
                    <div>
                        <ul className="check-list reveal delay-2">
                            <li>Evaluare digitala si plan protetic preoperator.</li>
                            <li>Coordonare tehnician-medic pentru functionalitate imediata.</li>
                            <li>Provizorii estetice realizate cu focus pe confort si stabilitate.</li>
                            <li>Plan clar pentru restaurarea definitiva dupa vindecare.</li>
                        </ul>
                        <div className="inline-cta reveal delay-3">
                            <CtaButton href="/contact" label="Programeaza o consultatie" />
                        </div>
                    </div>
                    <article className="highlight-card reveal delay-4">
                        <p className="badge">Protocol premium</p>
                        <h3>Rapid nu inseamna compromis</h3>
                        <p>
                            Prioritatea noastra ramane siguranta clinica, integrarea functionala si estetica
                            naturala pe termen lung.
                        </p>
                    </article>
                </div>
            </section>
        </>
    );
}
