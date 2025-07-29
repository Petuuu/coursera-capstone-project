import "./Header.css";

function Header() {
    return (
        <header id="header">
            <nav>
                <ul>
                    <li id="logo"><img src="nav-logo.svg" alt="Little Lemon logo" /></li>
                    <li><a href="#header"> Home </a></li>
                    <li><a href="#about"> About </a></li>
                    <li><a href="#menu"> Menu </a></li>
                    <li><a href="#reservations"> Reservations </a></li>
                    <li><a href="#order"> Order online </a></li>
                    <li><a href="login"> Login </a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;