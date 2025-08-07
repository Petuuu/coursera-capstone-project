import "./Header.css";

const navLinks = [
    { href: "#header", label: "HOME" },
    { href: "#about", label: "ABOUT" },
    { href: "#menu", label: "MENU" },
    { href: "#reservations", label: "RESERVATIONS" },
    { href: "#order", label: "ORDER ONLINE" },
    { href: "#login", label: "LOGIN" }
];

function Header() {
    return (
        <header className="header">
            <section>
                <img src="nav-logo.svg" alt="Little Lemon logo" />
            </section>

            <nav>
                <menu>
                    {navLinks.map(({ href, label }) => (
                        <li><a href={href}> {label} </a></li>
                    ))}
                </menu>
            </nav>
        </header>
    )
}

export default Header;