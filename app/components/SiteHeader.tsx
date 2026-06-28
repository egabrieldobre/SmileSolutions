"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navLinks } from "../content";

export default function SiteHeader() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <nav className="top-nav">
            <Link className="brand" href="/" onClick={() => setOpen(false)}>
                <Image src="/logo.svg" alt="Smile Solutions" width={88} height={88} priority />
                <span>Smile Solutions</span>
            </Link>

            <button
                type="button"
                className={`nav-burger ${open ? "is-open" : ""}`}
                aria-label="Comută meniul"
                aria-expanded={open}
                onClick={() => setOpen((value) => !value)}
            >
                <span />
                <span />
                <span />
            </button>

            <div className={`nav-menu ${open ? "is-open" : ""}`}>
                {navLinks.map((link) => {
                    const isActive =
                        link.href === "/" ? pathname === "/" : pathname.startsWith(link.href);
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`nav-link ${isActive ? "active" : ""}`}
                            onClick={() => setOpen(false)}
                        >
                            {link.label}
                        </Link>
                    );
                })}
                <Link href="/contact" className="nav-cta" onClick={() => setOpen(false)}>
                    Contactează-ne
                </Link>
            </div>
        </nav>
    );
}
