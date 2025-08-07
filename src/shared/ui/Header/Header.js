import "./Header.css";
import { Flex } from 'antd';

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
        <Flex align="center" className="header">
            <section>
                <img src="nav-logo.svg" alt="Little Lemon logo" />
            </section>

            <Flex justify="space-between" className="header__menu">
                    {navLinks.map(({ href, label }) => (
                        <a href={href}> {label} </a>
                    ))}
            </Flex>
        </Flex>
    )
}

export default Header;