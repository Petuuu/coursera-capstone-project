import "./Header.css";

function Header() {
    return (
        <header className="header">
            <section>
                <img src="nav-logo.svg" alt="Little Lemon logo" />
            </section>

            <nav>
                <menu>
                    <li><a href="#header"> HOME </a></li>
                    <li><a href="#about"> ABOUT </a></li>
                    <li><a href="#menu"> MENU </a></li>
                    <li><a href="#reservations"> RESERVATION </a></li>
                    <li><a href="#order"> ORDER ONLINE </a></li>
                    <li><a href="#login"> LOGIN </a></li>
                </menu>
            </nav>
        </header>
    )
}

export default Header;