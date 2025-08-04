import "./Specials.css";
import Dish from "./Dish";

function Specials() {
    return (
        <section className="specials">
            <section className="specials__heading">
                <h2> Specials </h2>
                <a href="" className="specials__online-menu"> Online menu </a>
            </section>

            <section className="specials__dishes">
                <Dish
                    img="greek-salad.jpg"
                    name="Greek salad"
                    price="12,99€"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
                />

                <Dish
                    img="bruschetta.jpg"
                    name="Bruschetta"
                    price="5,99€"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
                />

                <Dish
                    img="lemon-dessert.png"
                    name="Lemon dessert"
                    price="12,00€"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud"
                />
            </section>
        </section>
    )
}

export default Specials;