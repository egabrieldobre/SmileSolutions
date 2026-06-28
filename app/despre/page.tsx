import type { Metadata } from "next";
import CtaButton from "../components/CtaButton";
import SectionTitle from "../components/SectionTitle";
import { testimonials } from "../content";

export const metadata: Metadata = {
    title: "Despre noi | Smile Solutions",
    description:
        "Laborator de tehnică dentară cu experiență, flux digital CAD/CAM și parteneriate de încredere cu medici și clinici.",
};

export default function DesprePage() {
    return (
        <>
            <section className="page-head">
                <div className="container">
                    <SectionTitle
                        eyebrow="Despre noi"
                        title="Parteneriat tehnic de incredere pentru medici si clinici stomatologice"
                        description="Lucram exclusiv cu medici stomatologi si clinici care cauta standard inalt de executie, comunicare clara si predictibilitate in rezultate."
                    />
                </div>
            </section>

            <section className="section container">
                <div className="about-grid">
                    <article className="panel reveal delay-1">
                        <h3>Expertiza tehnica + viziune estetica</h3>
                        <p>
                            Fiecare caz este tratat multidisciplinar: analizam contextul clinic, ocluzia,
                            estetica faciala si obiectivele pacientului pentru a obtine lucrari functionale si
                            naturale.
                        </p>
                    </article>
                    <article className="panel reveal delay-2">
                        <h3>Precizie digitala controlata</h3>
                        <p>
                            Folosim scanare, design digital si protocoale de verificare pentru adaptare
                            superioara, reducerea ajustarilor in cabinet si confort crescut pentru pacient.
                        </p>
                    </article>
                </div>
            </section>

            <section className="section section-soft">
                <div className="container">
                    <SectionTitle
                        eyebrow="Testimoniale"
                        title="Increderea partenerilor nostri"
                        align="center"
                    />
                    <div className="testimonial-grid">
                        {testimonials.map((testimonial, index) => (
                            <article
                                className={`testimonial-card reveal delay-${(index % 3) + 1}`}
                                key={testimonial.name}
                            >
                                <p>"{testimonial.quote}"</p>
                                <footer>
                                    <strong>{testimonial.name}</strong>
                                    <span>{testimonial.role}</span>
                                </footer>
                            </article>
                        ))}
                    </div>
                    <div className="section-cta section-cta-center">
                        <CtaButton href="/contact" label="Contacteaza-ne" />
                    </div>
                </div>
            </section>
        </>
    );
}
