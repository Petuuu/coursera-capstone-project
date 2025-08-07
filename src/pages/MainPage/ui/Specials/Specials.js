import "./Specials.css";
import { Card } from "antd";

const { Meta } = Card;
const dishes = [
    {
        img: "greek-salad.jpg",
        name: "Greek salad",
        price: "12,99€",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
    },
    {
        img: "bruschetta.jpg",
        name: "Bruschetta",
        price: "5,99€",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
    },
    {
        img: "bruschetta.jpg",
        name: "Bruschetta",
        price: "5,99€",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
    }
]

function Specials() {
    return (
        <section className="specials">
            <section className="specials__heading">
                <h2> Specials </h2>
                <a href=""> Online menu </a>
            </section>

            <section className="specials__dishes">
                {dishes.map(({ img, name, price, description }) => (
                    <Card
                        className="dish__card"
                        cover={
                            <img src={img} alt={name} />
                        }
                    >
                        <Meta
                            className="dish__text"
                            title={
                                <section className="dish__title">
                                    <h3> {name} </h3>
                                    <h3 className="dish__price"> {price} </h3>
                                </section>
                            }
                            description={description}
                        />

                        <section className="dish__order">
                            <a href=""> Order for delivery </a>
                            <img src="delivery-icon.png" alt="Delivery icon" />
                        </section>
                    </Card>
                ))}
            </section>
        </section>
    )
}

export default Specials;