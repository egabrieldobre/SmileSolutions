type InfoCardProps = {
    icon: string;
    title: string;
    text: string;
};

export default function InfoCard({ icon, title, text }: InfoCardProps) {
    return (
        <article className="info-card reveal">
            <span className="info-card-icon" aria-hidden>
                {icon}
            </span>
            <h3>{title}</h3>
            <p>{text}</p>
        </article>
    );
}
