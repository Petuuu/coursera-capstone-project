import './Footer.css';

const footerLinks = [
    {
        className: "footer__nav",
        title: "Navigation",
        links: [
            { href: "#header", label: "Home" },
            { href: "#about", label: "About" },
            { href: "#menu", label: "Menu" },
            { href: "#reservations", label: "Reservations" },
            { href: "#order", label: "Order Online" },
            { href: "#login", label: "Login" }
        ]
    },
    {
        className: "footer__contact",
        title: "Contact",
        links: [
            { href: "", label: "Address" },
            { href: "", label: "Phone number" },
            { href: "", label: "Email" }
        ]
    },
    {
        className: "footer__social",
        title: "Social",
        links: [
            { href: "", label: "LinkedIn" },
            { href: "", label: "Instagram" },
            { href: "", label: "Facebook" },
            { href: "", label: "Twitter" }
        ]
    }
];

function Footer() {
    return (
        <footer className="footer">
            <img src="footer-logo.png" alt="Logo" />

            <section className="footer__links">
                {footerLinks.map(({ className, title, links }) => (
                    <section className={className}>
                        <h3> {title} </h3>
                        
                        {links.map(({ href, label }) => (
                            <a href={href}> {label} </a>
                        ))}
                    </section>
                ))}
            </section>
        </footer>
    );
}

export default Footer;