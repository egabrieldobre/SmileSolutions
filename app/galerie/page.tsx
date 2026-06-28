import type { Metadata } from "next";
import Image from "next/image";
import SectionTitle from "../components/SectionTitle";
import { galleryImages } from "../content";

export const metadata: Metadata = {
    title: "Galerie | Smile Solutions",
    description:
        "Galerie de lucrări de laborator: coroane ceramice, fațete, protetică pe implant și reabilitări complete.",
};

export default function GaleriePage() {
    return (
        <>
            <section className="page-head">
                <div className="container">
                    <SectionTitle
                        eyebrow="Galerie"
                        title="Estetica premium in detalii"
                        description="Selectie de proiecte si cadre de laborator care evidentiaza precizia executiei, textura materialelor si armonia rezultatelor finale."
                    />
                </div>
            </section>

            <section className="section container">
                <div className="gallery-grid">
                    {galleryImages.map((item, index) => (
                        <figure className={`gallery-item reveal delay-${(index % 4) + 1}`} key={item.src}>
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
            </section>
        </>
    );
}
