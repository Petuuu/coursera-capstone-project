import "./Hero.css";
import { Button } from "antd";

function Hero() {
    return (
        <section className="hero">
            <section className="hero__main">
                <h1>Little Lemon</h1>
                <p className="subheading">Chicago</p>

                <p>
                    Little Lemon is a charming neighborhood bistro that serves simple <br />
                    food and classic cocktails in a lively but casual environment <br />
                    The restaurant features a locally-sourced menu with daily specials.
                </p>

                <Button
                    className="hero__button"
                    onClick={() => alert("Work in prosess!! Thank you for your patience.")}
                >
                    Reserve a table
                </Button>
            </section>

            <section>
                <img src="hero-img.jpg" alt="A dish from Little Lemon" />
            </section>
        </section>
    )
}

export default Hero;