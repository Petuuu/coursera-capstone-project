import './Testimonials.css';
import { Avatar, Card } from 'antd';

const { Meta } = Card;

function Testimonials() {
    return (
        <section className="testimonials">
            <h2> Testimonials </h2>

            <section className="testimonials__reviews">
                <Card className="testimonials__review">
                    <section className="testimonials__rating">
                        Wow!!! 4/5
                    </section>
                    <Meta
                        avatar={<Avatar className="testimonials__avatar" src="/reviewer1.png" />}
                        title="Kas"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                    />
                </Card>

                <Card className="testimonials__review">
                    <section className="testimonials__rating">
                        Wow!!! 3/5
                    </section>
                    <Meta
                        avatar={<Avatar className="testimonials__avatar" src="/reviewer2.jpeg" />}
                        title="Maria"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
                    />
                </Card>

                <Card className="testimonials__review">
                    <section className="testimonials__rating">
                        Wow!!! 5/5
                    </section>
                    <Meta
                        avatar={<Avatar className="testimonials__avatar" src="/reviewer3.png" />}
                        title="Aksu"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                    />
                </Card>

                <Card className="testimonials__review">
                    <section className="testimonials__rating">
                        Wow!!! 4/5
                    </section>
                    <Meta
                        avatar={<Avatar className="testimonials__avatar" src="/reviewer4.png" />}
                        title="Amy"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing"
                    />
                </Card>
            </section>
        </section>
    )
}

export default Testimonials;