import './Testimonials.css';
import Review from './Review';

function Testimonials() {
    return (
        <section id="testimonials">
            <h2> Testimonials </h2>

            <section id="reviews">
                <Review
                    rating="4"
                    img="reviewer1.png"
                    name="Kas"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                />

                <Review
                    rating="3"
                    img="reviewer2.jpeg"
                    name="Maria"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                />

                <Review
                    rating="5"
                    img="reviewer3.png"
                    name="Aksu"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua."
                />

                <Review
                    rating="4"
                    img="reviewer4.png"
                    name="Amy"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing"
                />
            </section>
        </section>
    )
}

export default Testimonials;