import './About.css';
import { Flex } from 'antd';

function About() {
    return (
        <Flex justify="space-between" align="center" className="about">
            <section className="about__main">
                <h2> Little Lemon </h2>
                <p className='subheading'> Chicago </p>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br />
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco <br />
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute <br />
                    irure dolor in reprehenderit in voluptate <br />
                    <br />
                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur <br />
                    sint occaecat cupidatat non proident, sunt in culpa qui officia <br />
                    deserunt mollit anim id est laborum.
                </p>
            </section>

            <section>
                <img src="chef.jpg" alt="A chef from Little Lemon making a dish" />
            </section>
        </Flex>
    )
}

export default About;