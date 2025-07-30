import "./Highlights.css";
import Dish from "./Dish";

function Specials() {
    return (
        <section id="specials">
            <section id="heading">
                <h2> Specials </h2>
                <a href="" id="online-menu"> Online menu </a>
            </section>

            <section id="dishes">
                <Dish
                    img="greek-salad.jpg"
                    alt="Greek salad"
                    name="Greek salad"
                    price="12,99€"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
                    id="greek-salad"
                />

                <Dish
                    img="bruschetta.jpg"
                    alt="Bruschetta"
                    name="Bruschetta"
                    price="5,99€"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                    id="bruschetta"
                />

                <Dish
                    img="lemon-dessert.png"
                    alt="Lemon dessert"
                    name="Lemon dessert"
                    price="12,00€"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud"
                    id="lemon-dessert"
                />
            </section>
        </section>
    )
}

export default Specials;