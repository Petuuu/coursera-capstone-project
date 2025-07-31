function Review({ rating, img, name, text }) {
    return (
        <section id="review">
            <section id="rating">
                <p> Wow! {rating}/5 </p>
            </section>

            <section id="reviewer">
                <img src={img} alt="Profile picture" />
                <h3> {name} </h3>
            </section>

            <section id="text">
                <p> {text} </p>
            </section>
        </section>
    )
}

export default Review;