import type { Metadata } from "next";
import CtaButton from "../components/CtaButton";
import SectionTitle from "../components/SectionTitle";
import { contactInfo } from "../content";

export const metadata: Metadata = {
    title: "Contact | Smile Solutions",
    description:
        "Contactează laboratorul de tehnică dentară Smile Solutions: telefon, program de lucru și rețele sociale.",
};

export default function ContactPage() {
    return (
        <>
            <section className="page-head">
                <div className="container">
                    <SectionTitle
                        eyebrow="Contact"
                        title="Hai sa discutam urmatorul tau caz"
                        description="Laborator tehnică dentară Smile Solutions. Contacteaza-ne telefonic sau pe retelele sociale pentru oferte si programari."
                    />
                </div>
            </section>

            <section className="section container">
                <div className="contact-grid">
                    <article className="contact-card reveal delay-1">
                        <h3>Laborator tehnică dentară</h3>
                        {contactInfo.phones.map((phone) => (
                            <p key={phone.href}>
                                ☎️ <a href={phone.href}>{phone.label}</a>
                            </p>
                        ))}
                        <p>
                            📍{" "}
                            <a href={contactInfo.mapLink} target="_blank" rel="noopener noreferrer">
                                {contactInfo.address}
                            </a>
                        </p>
                    </article>
                    <article className="contact-card reveal delay-2">
                        <h3>Program de lucru</h3>
                        {contactInfo.schedule.map((line) => (
                            <p key={line}>{line}</p>
                        ))}
                    </article>
                    <article className="contact-card reveal delay-3">
                        <h3>Urmareste-ne</h3>
                        <p>
                            <a href={contactInfo.social.instagram} target="_blank" rel="noopener noreferrer">
                                Instagram
                            </a>
                        </p>
                        <p>
                            <a href={contactInfo.social.facebook} target="_blank" rel="noopener noreferrer">
                                Facebook
                            </a>
                        </p>
                    </article>
                </div>

                <div className="contact-cta reveal delay-4">
                    <CtaButton href={contactInfo.phones[0].href} label="Suna acum" />
                    <CtaButton
                        href={contactInfo.phones[1].href}
                        label={contactInfo.phones[1].label}
                        variant="secondary"
                    />
                </div>

                <div className="contact-map reveal delay-4">
                    <iframe
                        src={contactInfo.mapEmbed}
                        title="Harta Smile Solutions Dental Lab"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        allowFullScreen
                    />
                </div>
            </section>
        </>
    );
}
