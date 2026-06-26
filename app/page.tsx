import Image from "next/image";
import CtaButton from "./components/CtaButton";
import InfoCard from "./components/InfoCard";
import SectionTitle from "./components/SectionTitle";

const services = [
  {
    icon: "✦",
    title: "Coroane integral ceramice",
    text: "Restaurari precise, cu transluciditate naturala si integrare estetica armonioasa.",
  },
  {
    icon: "◉",
    title: "Fatete dentare premium",
    text: "Soluții minim invazive pentru zambete luminoase, proporții echilibrate si aspect natural.",
  },
  {
    icon: "◆",
    title: "Protetica pe implant",
    text: "Lucrari stabile si functionale, compatibile cu fluxurile digitale moderne ale clinicii.",
  },
  {
    icon: "△",
    title: "Proteze moderne",
    text: "Confort ridicat, adaptare rapida si finisaje premium pentru pacienti exigenti.",
  },
  {
    icon: "◎",
    title: "Aparate si gutiere",
    text: "Gutiere personalizate pentru bruxism, albire si aliniere, produse cu acuratete ridicata.",
  },
  {
    icon: "⬢",
    title: "Restaurari provizorii rapide",
    text: "Soluții temporare estetice, realizate eficient pentru continuitatea tratamentului.",
  },
];

const workflowSteps = [
  "Consultare cu medicul si analiza planului protetic.",
  "Scanare intraorala si prelucrare CAD a designului.",
  "Simulare estetica si validare functionala impreuna cu echipa medicala.",
  "Frezare/printare digitala si stratificare ceramica in laborator.",
  "Control final de calitate, livrare rapida si suport post-livrare.",
];

const advantages = [
  "Flux digital complet, de la scanare la restaurare finala.",
  "Timp redus de executie si predictibilitate ridicata.",
  "Comunicare transparenta cu medicii parteneri.",
  "Control strict al calitatii pe fiecare etapa.",
];

const testimonials = [
  {
    name: "Dr. Andreea Marin",
    role: "Medic stomatolog, Bucuresti",
    quote:
      "Colaborarea este impecabila. Lucrarile vin constant la acelasi standard premium, iar pacientii apreciaza estetica naturala.",
  },
  {
    name: "Dr. Radu Ionescu",
    role: "Implantolog, Cluj-Napoca",
    quote:
      "Pentru cazurile complexe pe implant aleg acest laborator datorita preciziei digitale si timpului excelent de livrare.",
  },
  {
    name: "Dr. Mihaela Sandu",
    role: "Clinica multidisciplinara, Iasi",
    quote:
      "Echipa raspunde rapid, explica clar fiecare etapa si livreaza lucrari de incredere, perfect adaptate pacientului.",
  },
];

export default function Home() {
  return (
    <div className="site-shell">
      <header className="hero" id="acasa">
        <div className="hero-overlay" aria-hidden />
        <nav className="top-nav reveal">
          <p className="brand">Smile Solutions</p>
          <a href="#contact" className="top-nav-link">
            Contact rapid
          </a>
        </nav>

        <div className="hero-content container">
          <p className="hero-kicker reveal">Cabinet de Tehnica Dentara</p>
          <h1 className="reveal delay-1">
            Laborator de tehnică dentară - Smile Solutions Dental Cab
          </h1>
          <p className="hero-description reveal delay-2">
            Combinam tehnologia CAD/CAM, materiale premium si experienta tehnicienilor nostri
            pentru a livra lucrari predictibile, rapide si perfect integrate in tratamentul
            pacientului.
          </p>

          <div className="hero-cta reveal delay-3">
            <CtaButton href="#contact" label="Solicita o oferta" />
            <CtaButton href="#digital" label="Contacteaza-ne" variant="secondary" />
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

      <main>
        <section className="section container" id="despre">
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

        <section className="section section-soft" id="servicii">
          <div className="container">
            <SectionTitle
              eyebrow="Servicii"
              title="Solutii complete de tehnica dentara"
              description="De la restaurari unidentare la reabilitari complexe, adaptam fiecare lucrare la planul clinic si la asteptarile estetice ale pacientului."
              align="center"
            />
            <div className="cards-grid">
              {services.map((service, index) => (
                <div className={`delay-${(index % 4) + 1}`} key={service.title}>
                  <InfoCard icon={service.icon} title={service.title} text={service.text} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="banner-section" id="banner">
          <div className="banner-content">
            <div className="banner-text reveal delay-1">
              <p className="banner-eyebrow">Calitate garantata</p>
              <h2>Flux digital complet, de la consultatie la finalizare</h2>
              <p className="banner-description">Tehnologie CAD/CAM moderna, materiale premium si echipa de tehnicieni experti, pentru restaurari dentare de exceptie.</p>
              <div className="banner-cta reveal delay-2">
                <CtaButton href="#contact" label="Afla mai multe" />
              </div>
            </div>
          </div>
        </section>

        <section className="section container" id="digital">
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
        </section>

        <section className="section section-highlight" id="dinti-24-ore">
          <div className="container implants-layout">
            <div>
              <SectionTitle
                eyebrow="Implanturi dentare"
                title="Dinti in 24 ore: protocol rapid pentru cazuri eligibile"
                description="Pentru pacientii potriviti, protocolul accelerat permite fixarea provizoriei intr-un interval scurt, cu planificare digitala riguroasa si colaborare stransa cu medicul implantolog."
              />
              <ul className="check-list reveal delay-2">
                <li>Evaluare digitala si plan protetic preoperator.</li>
                <li>Coordonare tehnician-medic pentru functionalitate imediata.</li>
                <li>Provizorii estetice realizate cu focus pe confort si stabilitate.</li>
                <li>Plan clar pentru restaurarea definitiva dupa vindecare.</li>
              </ul>
              <div className="inline-cta reveal delay-3">
                <CtaButton href="#contact" label="Programeaza o consultatie" />
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

        <section className="section container" id="flux">
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

        <section className="section section-soft" id="avantaje">
          <div className="container">
            <SectionTitle
              eyebrow="Avantaje"
              title="De ce ne aleg clinicile partenere"
              align="center"
            />
            <div className="advantage-grid">
              {advantages.map((advantage, index) => (
                <article className={`advantage-card reveal delay-${(index % 4) + 1}`} key={advantage}>
                  <h3>{String(index + 1).padStart(2, "0")}</h3>
                  <p>{advantage}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section container" id="galerie">
          <SectionTitle
            eyebrow="Galerie"
            title="Estetica premium in detalii"
            description="Selectie de proiecte si cadre de laborator care evidentiaza precizia executiei, textura materialelor si armonia rezultatelor finale."
          />

          <div className="gallery-grid">
            {[
              { src: "/gallery-1.svg", alt: "Modelare digitala CAD pentru reabilitare" },
              { src: "/gallery-2.svg", alt: "Restaurare ceramica cu textura naturala" },
              { src: "/gallery-3.svg", alt: "Lucrare pe implant realizata in laborator" },
            ].map((item, index) => (
              <figure className={`gallery-item reveal delay-${index + 1}`} key={item.src}>
                <Image src={item.src} alt={item.alt} width={720} height={480} />
                <figcaption>{item.alt}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="section section-soft" id="testimoniale">
          <div className="container">
            <SectionTitle
              eyebrow="Testimoniale"
              title="Increderea partenerilor nostri"
              align="center"
            />

            <div className="testimonial-grid">
              {testimonials.map((testimonial, index) => (
                <article className={`testimonial-card reveal delay-${(index % 3) + 1}`} key={testimonial.name}>
                  <p>"{testimonial.quote}"</p>
                  <footer>
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </footer>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section container" id="contact">
          <SectionTitle
            eyebrow="Contact"
            title="Hai sa discutam urmatorul tau caz"
            description="Datele de mai jos sunt demonstrative si pot fi inlocuite rapid cu informatiile finale ale laboratorului."
          />

          <div className="contact-grid">
            <article className="contact-card reveal delay-1">
              <h3>Solicita o oferta</h3>
              <p>Email: contact@smilesolutions.ro</p>
              <p>Telefon: +40 700 000 000</p>
            </article>
            <article className="contact-card reveal delay-2">
              <h3>Program de lucru</h3>
              <p>Luni - Vineri: 08:00 - 18:00</p>
              <p>Sambata: 09:00 - 13:00</p>
            </article>
            <article className="contact-card reveal delay-3">
              <h3>Adresa laborator</h3>
              <p>Str. Exemplu 10, Bucuresti</p>
              <p>Romania</p>
            </article>
          </div>

          <div className="contact-cta reveal delay-4">
            <CtaButton href="mailto:contact@smilesolutions.ro" label="Contacteaza-ne" />
            <CtaButton href="tel:+40700000000" label="Programeaza o consultatie" variant="secondary" />
          </div>
        </section>
      </main>
    </div>
  );
}
