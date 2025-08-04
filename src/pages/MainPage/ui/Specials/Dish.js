function Dish({ img, name, price, description}) {
    return (
        <section className="dish">
            <section className="dish__image">
                <img src={img} alt={name} />
            </section>

            <section className="dish__heading">
                <h3> {name} </h3>
                <h3 id="price"> {price} </h3>
            </section>

            <section className="dish__description">
                <p style={{fontSize: '1vw', lineHeight: '1.2vw'}}> {description} </p>
            </section>

            <section className="dish__order-link">
                <a href="" style={{whiteSpace: 'no-wrap', fontSize: '1vw'}}> Order for delivery </a>
                <img src="delivery-icon.png" alt="Delivery icon" />
            </section>
        </section>
    )
}

export default Dish;