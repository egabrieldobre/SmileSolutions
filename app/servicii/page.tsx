import type { Metadata } from "next";
import CtaButton from "../components/CtaButton";
import InfoCard from "../components/InfoCard";
import SectionTitle from "../components/SectionTitle";
import { advantages, services, workflowSteps } from "../content";

export const metadata: Metadata = {
    title: "Servicii | Smile Solutions",
    description:
        "Servicii complete de tehnică dentară: coroane ceramice, fațete, protetică pe implant, proteze, gutiere și flux digital CAD/CAM.",
};

export default function ServiciiPage() {
    return (
        <>
            <section className="page-head">
                <div className="container">
                    <SectionTitle
                        eyebrow="Servicii"
                        title="Solutii complete de tehnica dentara"
                        description="De la restaurari unidentare la reabilitari complexe, adaptam fiecare lucrare la planul clinic si la asteptarile estetice ale pacientului."
                    />
                </div>
            </section>

            <section className="section container">
                <div className="cards-grid">
                    {services.map((service, index) => (
                        <div className={`delay-${(index % 4) + 1}`} key={service.title}>
                            <InfoCard icon={service.icon} title={service.title} text={service.text} />
                        </div>
                    ))}
                </div>
            </section>

            <section className="section section-soft">
                <div className="container">
                    <SectionTitle
                        eyebrow="Stomatologie digitala"
                        title="Flux CAD/CAM modern pentru rezultate predictibile"
                        description="Integram scanarea intraorala, designul digital si productia computerizata pentru a optimiza precizia, timpul si comunicarea cu medicul."
                    />
                    <div className="digital-grid">
                        <article className="feature-card reveal delay-1">
                            <h3>Design digital asistat</h3>
                            <p>
                                Modelam restaurarile pe baza datelor clinice reale, cu control avansat al formei,
                                contactelor si ocluziei.
                            </p>
                        </article>
                        <article className="feature-card reveal delay-2">
                            <h3>Materiale premium</h3>
                            <p>
                                Zirconiu, ceramica si compozite de ultima generatie pentru durabilitate, biomimetica
                                si estetica de nivel inalt.
                            </p>
                        </article>
                        <article className="feature-card reveal delay-3">
                            <h3>Trasabilitate completa</h3>
                            <p>
                                Fiecare etapa este documentata, astfel incat medicul sa beneficieze de transparenta
                                si suport tehnic permanent.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section section-highlight">
                <div className="container">
                    <SectionTitle
                        eyebrow="Implanturi dentare"
                        title="Dinti in 24 ore: protocol rapid pentru cazuri eligibile"
                        description="Pentru pacientii potriviti, protocolul accelerat permite fixarea provizoriei intr-un interval scurt, cu planificare digitala riguroasa si colaborare stransa cu medicul implantolog."
                    />
                    <div className="implants-layout">
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
                </div>
            </section>

            <section className="section container">
                <SectionTitle
                    eyebrow="Workflow"
                    title="Proces clar, controlat, orientat spre rezultate"
                    description="Am construit un flux eficient care reduce erorile, optimizeaza comunicarea si pastreaza standardul premium al fiecarui caz."
                />
                <ol className="workflow-list">
                    {workflowSteps.map((step, index) => (
                        <li key={step} className={`reveal delay-${(index % 4) + 1}`}>
                            <span>{String(index + 1).padStart(2, "0")}</span>
                            <p>{step}</p>
                        </li>
                    ))}
                </ol>
            </section>

            <section className="section section-soft">
                <div className="container">
                    <SectionTitle eyebrow="Avantaje" title="De ce ne aleg clinicile partenere" align="center" />
                    <div className="advantage-grid">
                        {advantages.map((advantage, index) => (
                            <article className={`advantage-card reveal delay-${(index % 4) + 1}`} key={advantage}>
                                <h3>{String(index + 1).padStart(2, "0")}</h3>
                                <p>{advantage}</p>
                            </article>
                        ))}
                    </div>
                    <div className="section-cta section-cta-center">
                        <CtaButton href="/contact" label="Contactează-ne" />
                    </div>
                </div>
            </section>
        </>
    );
}
