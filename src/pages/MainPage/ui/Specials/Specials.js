import "./Specials.css";
import { Flex, Card } from "antd";

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
        img: "lemon-dessert.png",
        name: "Lemon dessert",
        price: "12,00€",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud"
    }
]

function Specials() {
    return (
        <section className="specials">
            <Flex justify="space-between" align="center">
                <h2> Specials </h2>
                <a href="" className="specials__online-menu"> Online menu </a>
            </Flex>

            <Flex justify="space-between" className="specials__dishes">
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
                                <Flex justify="space-between" >
                                    <h3> {name} </h3>
                                    <h3 className="dish__price"> {price} </h3>
                                </Flex>
                            }
                            description={description}
                        />

                        <Flex justify="left" className="dish__order">
                            <a href=""> Order for delivery </a>
                            <img src="delivery-icon.png" alt="Delivery icon" />
                        </Flex>
                    </Card>
                ))}
            </Flex>
        </section>
    )
}

export default Specials;