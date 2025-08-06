import "./Specials.css";
import { Card } from "antd";

const { Meta } = Card;

function Specials() {
    return (
        <section className="specials">
            <section className="specials__heading">
                <h2> Specials </h2>
                <a href="" className="specials__online-menu"> Online menu </a>
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
                        style={{ minHeight: '6.5vw' }}
                        title={
                            <section style={{ display: 'flex', justifyContent: 'space-between'  }}>
                                <h3> Greek salad </h3>
                                <h3 style={{ color: '#DDBE25' }}> 12,99€ </h3>
                            </section>
                        }
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut"
                    />

                    <section className="dish__order-link">
                        <a href="" style={{ fontSize: '0.8vw', color: 'var(--peach)' }}> Order for delivery </a>
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
                        style={{ minHeight: '6.5vw' }}
                        title={
                            <section style={{ display: 'flex', justifyContent: 'space-between'  }}>
                                <h3> Bruschetta </h3>
                                <h3 style={{ color: '#DDBE25' }}> 5,99€ </h3>
                            </section>
                        }
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"
                    />

                    <section className="dish__order-link">
                        <a href="" style={{ fontSize: '0.8vw', color: 'var(--peach)' }}> Order for delivery </a>
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
                        style={{ minHeight: '6.5vw' }}
                        title={
                            <section style={{ display: 'flex', justifyContent: 'space-between'  }}>
                                <h3> Lemon dessert </h3>
                                <h3 style={{ color: '#DDBE25' }}> 12,00€ </h3>
                            </section>
                        }
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                    minim veniam, quis nostrud"
                    />

                    <section className="dish__order-link">
                        <a href="" style={{ fontSize: '0.8vw', color: 'var(--peach)' }}> Order for delivery </a>
                        <img src="delivery-icon.png" alt="Delivery icon" />
                    </section>
                </Card>
            </section>
        </section>
    )
}

export default Specials;