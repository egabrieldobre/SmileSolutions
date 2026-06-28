import type { Metadata } from "next";
import Image from "next/image";
import CtaButton from "../components/CtaButton";
import SectionTitle from "../components/SectionTitle";
import { team } from "../content";

export const metadata: Metadata = {
    title: "Echipa | Smile Solutions",
    description:
        "Echipa Smile Solutions Dental Lab: tehnicieni dentari, specialisti CAD/CAM si ceramisti dedicati lucrarilor de inalta precizie.",
};

export default function EchipaPage() {
    return (
        <>
            <section className="page-head">
                <div className="container">
                    <SectionTitle
                        eyebrow="Echipa"
                        title="Oamenii din spatele fiecarei lucrari"
                        description="O echipa de tehnicieni cu experienta, specialisti in flux digital si ceramisti dedicati, care lucreaza impreuna pentru rezultate predictibile si estetice."
                    />
                </div>
            </section>

            <section className="section container">
                <div className="team-grid">
                    {team.map((member, index) => (
                        <article
                            className={`team-card reveal delay-${(index % 4) + 1}`}
                            key={member.name}
                        >
                            {member.image ? (
                                <span className="team-photo">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        width={160}
                                        height={160}
                                        sizes="160px"
                                    />
                                </span>
                            ) : (
                                <span className="team-avatar" aria-hidden>
                                    {member.initials}
                                </span>
                            )}
                            <h3>{member.name}</h3>
                            <p className="team-role">{member.role}</p>
                            <p>{member.text}</p>
                        </article>
                    ))}
                </div>
                <div className="section-cta section-cta-center">
                    <CtaButton href="/contact" label="Lucreaza cu echipa noastra" />
                </div>
            </section>
        </>
    );
}
