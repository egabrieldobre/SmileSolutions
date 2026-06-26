type SectionTitleProps = {
    eyebrow: string;
    title: string;
    description?: string;
    align?: "left" | "center";
};

export default function SectionTitle({
    eyebrow,
    title,
    description,
    align = "left",
}: SectionTitleProps) {
    const alignment = align === "center" ? "section-title-center" : "section-title-left";

    return (
        <header className={`section-title ${alignment} reveal`}>
            <p className="section-eyebrow">{eyebrow}</p>
            <h2>{title}</h2>
            {description ? <p className="section-description">{description}</p> : null}
        </header>
    );
}
