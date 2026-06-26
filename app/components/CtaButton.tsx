import Link from "next/link";

type CtaButtonProps = {
    href: string;
    label: string;
    variant?: "primary" | "secondary";
};

export default function CtaButton({
    href,
    label,
    variant = "primary",
}: CtaButtonProps) {
    return (
        <Link href={href} className={`cta-button cta-${variant}`}>
            {label}
        </Link>
    );
}
