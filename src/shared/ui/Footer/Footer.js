import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <img src="footer-logo.png" alt="Logo" />

            <section className="footer__links">
                <section className="footer__nav">
                    <h3> Navigation </h3>

                    <a> Home </a>
                    <a> About </a>
                    <a> Menu </a>
                    <a> Reservations </a>
                    <a> Order online </a>
                    <a> Login </a>
                </section>

                <section className="footer__contact">
                    <h3> Contact </h3>

                    <a> Address </a>
                    <a> Phone number </a>
                    <a> Email </a>
                </section>

                <section className="footer__social">
                    <h3> Social </h3>

                    <a>LinkedIn</a>
                    <a>Instagram</a>
                    <a>Facebook</a>
                    <a>Twitter</a>
                </section>
            </section>
        </footer>
    )
}

export default Footer;