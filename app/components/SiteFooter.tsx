import Link from "next/link";
import { contactInfo, navLinks } from "../content";

export default function SiteFooter() {
    return (
        <footer className="site-footer">
            <div className="container footer-grid">
                <div className="footer-brand">
                    <p className="footer-title">Smile Solutions</p>
                    <p>Laborator de tehnică dentară. Restaurari premium, flux digital CAD/CAM și termene rapide.</p>
                </div>

                <div className="footer-col">
                    <h4>Navigare</h4>
                    <ul>
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <Link href={link.href}>{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Contact</h4>
                    <ul>
                        {contactInfo.phones.map((phone) => (
                            <li key={phone.href}>
                                <a href={phone.href}>☎️ {phone.label}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Urmărește-ne</h4>
                    <ul>
                        <li>
                            <a href={contactInfo.social.instagram} target="_blank" rel="noopener noreferrer">
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a href={contactInfo.social.facebook} target="_blank" rel="noopener noreferrer">
                                Facebook
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Smile Solutions Dental Lab. Toate drepturile rezervate.</p>
            </div>
        </footer>
    );
}
