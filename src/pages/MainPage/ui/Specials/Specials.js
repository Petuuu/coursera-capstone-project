import "./Specials.css";
import { Card } from "antd";

const { Meta } = Card;

function Specials() {
    return (
        <section className="specials">
            <section className="specials__heading">
                <h2> Specials </h2>
                <a href=""> Online menu </a>
            </section>

            <section className="specials__dishes">
                <Card
                    className="dish__card"
                    cover={
                        <img
                            src="greek-salad.jpg"
                            alt="Greek salad"
                        />
                    }
                >
                    <Meta
                        className="dish__text"
                        title={
                            <section className="dish__title">
                                <h3> Greek salad </h3>
                                <h3 className="dish__price"> 12,99€ </h3>
                            </section>
                        }
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
                    />

                    <section className="dish__order">
                        <a href=""> Order for delivery </a>
                        <img src="delivery-icon.png" alt="Delivery icon" />
                    </section>
                </Card>

                <Card
                    className="dish__card"
                    cover={
                        <img
                            src="bruschetta.jpg"
                            alt="Bruschetta"
                        />
                    }
                >
                    <Meta
                        className="dish__text"
                        title={
                            <section className="dish__title">
                                <h3> Bruschetta </h3>
                                <h3 className="dish__price"> 5,99€ </h3>
                            </section>
                        }
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
                    />

                    <section className="dish__order">
                        <a href=""> Order for delivery </a>
                        <img src="delivery-icon.png" alt="Delivery icon" />
                    </section>
                </Card>

                <Card
                    className="dish__card"
                    cover={
                        <img
                            src="lemon-dessert.png"
                            alt="Lemon dessert"
                        />
                    }
                >
                    <Meta
                        className="dish__text"
                        title={
                            <section className="dish__title">
                                <h3> Lemon dessert </h3>
                                <h3 className="dish__price"> 12,00€ </h3>
                            </section>
                        }
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud"
                    />

                    <section className="dish__order">
                        <a href=""> Order for delivery </a>
                        <img src="delivery-icon.png" alt="Delivery icon" />
                    </section>
                </Card>
            </section>
        </section>
    )
}

export default Specials;