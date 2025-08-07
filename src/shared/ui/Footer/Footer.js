import './Footer.css';

const navLinks = [
    { href: '#header', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#menu', label: 'Menu' },
    { href: '#reservations', label: 'Reservations' },
    { href: '#order', label: 'Order Online' },
    { href: '#login', label: 'Login' }
]

const contactLinks = [
    { href: '', label: 'Address' },
    { href: '', label: 'Phone number' },
    { href: '', label: 'Email' }
]

const socialLinks = [
    { href: '', label: 'LinkedIn' },
    { href: '', label: 'Instagram' },
    { href: '', label: 'Facebook' },
    { href: '', label: 'Twitter' }
]

function Footer() {
    return (
        <footer className="footer">
            <img src="footer-logo.png" alt="Logo" />

            <section className="footer__links">
                <section className="footer__nav">
                    <h3> Navigation </h3>

                    {navLinks.map(({ href, label }) => (
                        <a href={href}> {label} </a>
                    ))}
                </section>

                <section className="footer__contact">
                    <h3> Contact </h3>

                    {contactLinks.map(({ href, label }) => (
                        <a href={href}> {label} </a>
                    ))}
                </section>

                <section className="footer__social">
                    <h3> Social </h3>

                    {socialLinks.map(({ href, label }) => (
                        <a href={href}> {label} </a>
                    ))}
                </section>
            </section>
        </footer>
    )
}

export default Footer;