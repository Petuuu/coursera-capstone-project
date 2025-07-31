import "./Hero.css";

function Hero() {
    return (
        <section id="hero">
            <section id="main">
                <h1>Little Lemon</h1>
                <p id="subheading">Chicago</p>

                <p>
                    Little Lemon is a charming neighborhood bistro that serves simple <br />
                    food and classic cocktails in a lively but casual environment <br />
                    The restaurant features a locally-sourced menu with daily specials.
                </p>

                <button
                    type="button"
                    onClick={() => alert("Work in prosess!! Thank you for your patience.")}
                    id="reserve-button"
                ><p> Reserve a table </p></button>
            </section>

            <section id="image">
                <img src="hero-img.jpg" alt="A dish from Little Lemon" />
            </section>
        </section>
    )
}

export default Hero;