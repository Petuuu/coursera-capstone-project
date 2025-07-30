function Dish({ img, alt, name, price, description, id}) {
    return (
        <section className="dish">
            <section id="dish-image">
                <img src={img} alt={alt} id={id} />
            </section>

            <section id="dish-heading">
                <h3> {name} </h3>
                <h3 id="price"> {price} </h3>
            </section>

            <section id="dish-description">
                <p style={{fontSize: '1vw', lineHeight: '1.2vw'}}> {description} </p>
            </section>

            <section id="order-link">
                <a href="" style={{whiteSpace: 'no-wrap', fontSize: '1vw'}}> Order for delivery </a>
                <img src="delivery-icon.png" alt="Delivery icon" />
            </section>
        </section>
    )
}

export default Dish;