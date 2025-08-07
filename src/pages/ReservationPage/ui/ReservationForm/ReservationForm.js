import './ReservationForm.css';
import { Flex, Form, Input, Select, Button  } from 'antd';

const { Item } = Form;
const { Option } = Select;

function ReservationForm() {
    const handleSubmit = (values) => {
        console.log('Form values:', values);
    };

    return (
        <Flex vertical align="center" className="reservation">
            <h1> Reserve a table </h1>

            <Form
                className="reservation__form-container"
                onFinish={handleSubmit}
                labelAlign="left"
                labelCol={{ span: 6 }}
            >
                <Flex vertical gap="1vw" align="left" className="reservation__form">
                    <Item name="date" label="Date" wrapperCol={{ span: 5 }} rules={[{ required: true, message: 'Please select a date!' }]}>
                        <Input type="date" />
                    </Item>

                    <Item name="time" label="Time" wrapperCol={{ span: 3 }} rules={[{ required: true, message: 'Please select a time!' }]}>
                        <Select>
                            <Option value="17:00"> 17:00 </Option>
                            <Option value="18:00"> 18:00 </Option>
                            <Option value="19:00"> 19:00 </Option>
                            <Option value="20:00"> 20:00 </Option>
                            <Option value="21:00"> 21:00 </Option>
                            <Option value="22:00"> 22:00 </Option>
                        </Select>
                    </Item>

                    <Item name="guests" label="Guests" wrapperCol={{ span: 2 }} rules={[{ required: true, message: 'Please select the number of guests!' }]}>
                        <Input type="number" min="1" max="10" />
                    </Item>

                    <Item name="occasion" label="Occasion" wrapperCol={{ span: 5 }} rules={[{ required: true, message: 'Please select an occasion!' }]}>
                        <Select id="occasion">
                            <Option value="none"> None </Option>
                            <Option value="birthday"> Birthday </Option>
                            <Option value="anniversary"> Anniversary </Option>
                        </Select>
                    </Item>

                    <Item name="specialRequests" label="Special requests" wrapperCol={{ span: 16 }}>
                        <Input.TextArea rows={4} placeholder="Any special requests?" />
                    </Item>

                    <Button
                        className="button form__button"
                        htmlType="submit"
                    >
                        Proceed to confirmation
                    </Button>
                </Flex>
            </Form>
        </Flex>
    )
}

export default ReservationForm;