import './Testimonials.css';
import { Avatar, Card } from 'antd';

const { Meta } = Card;
const reviews = [
    {
        rating: 4,
        avatar: "reviewer1.png",
        name: "Kas",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
    },
    {
        rating: 3,
        avatar: "reviewer2.jpeg",
        name: "Maria",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
    },
    {
        rating: 5,
        avatar: "reviewer3.png",
        name: "kas",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim"
    },
    {
        rating: 4,
        avatar: "reviewer4.png",
        name: "Amy",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing"
    }
]

function Testimonials() {
    return (
        <section className="testimonials">
            <h2> Testimonials </h2>

            <section className="testimonials__reviews">
                {reviews.map(({ rating, avatar, name, description }) => (
                    <Card className="review__card">
                        <section className="review__rating"> Rating: {rating}/5 </section>

                        <Meta
                            avatar={<Avatar className="review__avatar" src={avatar} />}
                            title={name}
                            description={description}
                        />
                    </Card>
                ))}
            </section>
        </section>
    )
}

export default Testimonials;