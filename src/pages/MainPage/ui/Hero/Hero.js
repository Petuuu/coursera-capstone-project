import "./Hero.css";
import { Flex, Button } from "antd";
import { useNavigate } from "react-router-dom";

function Hero() {
    const navigate = useNavigate();

    return (
        <Flex justify="space-between" align="center" className="hero">
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
                    onClick={() => navigate("/reservation")}
                >
                    Reserve a table
                </Button>
            </section>

            <section>
                <img src="hero-img.jpg" alt="A dish from Little Lemon" />
            </section>
        </Flex>
    )
}

export default Hero;