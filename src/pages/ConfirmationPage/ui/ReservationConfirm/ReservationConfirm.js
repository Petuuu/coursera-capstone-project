import './ReservationConfirm.css';
import { Flex } from 'antd';

function ReservationConfirm() {
    return (
        <section className="confirmation">
            <Flex vertical gap="2.5vw" justify="center" align="center" className="confirmation__text">
                <h1> Your reservation has been confirmed! </h1>
                <h2> We look forward to welcoming you.</h2>
            </Flex>
        </section>
    )
}

export default ReservationConfirm;