function Dish({ img, alt, name, price, description, id}) {
    return (
        <section className="dish">
            <section id="dish-image">
                <img src={img} alt={alt} id={id} />
            </section>

            <section id="dish-heading">
                <h3> {name} </h3>
                <p id="price"> {price} </p>
            </section>

            <section id="dish-description">
                <p> {description} </p>
            </section>

            <section>
                <a id="order-link">
                    <p style={{whiteSpace: 'no-wrap'}}> Order for delivery </p>
                    <img src="delivery-icon.png" alt="Delivery icon" />
                </a>
            </section>
        </section>
    )
}

export default Dish;