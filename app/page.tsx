import Image from "next/image";
import CtaButton from "./components/CtaButton";
import InfoCard from "./components/InfoCard";
import SectionTitle from "./components/SectionTitle";
import { services, galleryImages, testimonials } from "./content";

export default function Home() {
  return (
    <>
      <header className="hero" id="acasa">
        <div className="hero-overlay" aria-hidden />
        <div className="hero-content container">
          <p className="hero-kicker reveal">Cabinet de Tehnica Dentara</p>
          <h1 className="reveal delay-1">
            Laborator de tehnică dentară - Smile Solutions Dental Lab
          </h1>
          <p className="hero-description reveal delay-2">
            Combinam tehnologia CAD/CAM, materiale premium si experienta tehnicienilor nostri
            pentru a livra lucrari predictibile, rapide si perfect integrate in tratamentul
            pacientului.
          </p>

          <div className="hero-cta reveal delay-3">
            <CtaButton href="/contact" label="Contactează-ne" />
            <CtaButton href="/servicii" label="Vezi serviciile" variant="secondary" />
          </div>

          <div className="hero-metrics reveal delay-4">
            <article>
              <strong>12+</strong>
              <span>ani experienta</span>
            </article>
            <article>
              <strong>5.000+</strong>
              <span>restaurari livrate</span>
            </article>
            <article>
              <strong>48h</strong>
              <span>termen rapid pentru lucrari selectate</span>
            </article>
          </div>
        </div>
      </header>

      <section className="section container">
        <SectionTitle
          eyebrow="Despre noi"
          title="Parteneriat tehnic de incredere pentru medici si clinici stomatologice"
          description="Lucram exclusiv cu medici stomatologi si clinici care cauta standard inalt de executie, comunicare clara si predictibilitate in rezultate."
        />
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
            eyebrow="Servicii"
            title="Solutii complete de tehnica dentara"
            description="De la restaurari unidentare la reabilitari complexe, adaptam fiecare lucrare la planul clinic si la asteptarile estetice ale pacientului."
            align="center"
          />
          <div className="cards-grid">
            {services.slice(0, 3).map((service, index) => (
              <div className={`delay-${(index % 4) + 1}`} key={service.title}>
                <InfoCard icon={service.icon} title={service.title} text={service.text} />
              </div>
            ))}
          </div>
          <div className="section-cta section-cta-center">
            <CtaButton href="/servicii" label="Vezi toate serviciile" />
          </div>
        </div>
      </section>

      <section className="section container">
        <SectionTitle
          eyebrow="Galerie"
          title="Estetica premium in detalii"
          description="O selectie din lucrarile noastre de laborator: precizie, textura naturala si armonie estetica."
        />
        <div className="gallery-grid">
          {galleryImages.slice(0, 3).map((item, index) => (
            <figure className={`gallery-item reveal delay-${index + 1}`} key={item.src}>
              <Image
                src={item.src}
                alt={item.alt}
                width={720}
                height={540}
                sizes="(max-width: 720px) 100vw, 33vw"
              />
            </figure>
          ))}
        </div>
        <div className="section-cta">
          <CtaButton href="/galerie" label="Vezi galeria completă" variant="secondary" />
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
                <p>&ldquo;{testimonial.quote}&rdquo;</p>
                <footer>
                  <strong>{testimonial.name}</strong>
                  <span>{testimonial.role}</span>
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="banner-section">
        <div className="banner-content">
          <div className="banner-text reveal delay-1">
            <p className="banner-eyebrow">Calitate garantata</p>
            <h2>Flux digital complet, de la consultatie la finalizare</h2>
            <p className="banner-description">
              Tehnologie CAD/CAM moderna, materiale premium si echipa de tehnicieni experti, pentru
              restaurari dentare de exceptie.
            </p>
            <div className="banner-cta reveal delay-2">
              <CtaButton href="/contact" label="Contacteaza-ne" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
