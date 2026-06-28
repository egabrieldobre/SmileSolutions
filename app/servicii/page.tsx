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
