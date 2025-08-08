import './ReservationForm.css';
import { Flex, Form, Input, Select, Button  } from 'antd';
import { requiredFieldRule } from '../../../../shared/utils/formRules.ts';

const { Item } = Form;
const { Option } = Select;
const times = [
    {value: '17:00', label: '17:00'},
    {value: '18:00', label: '18:00'},
    {value: '19:00', label: '19:00'},
    {value: '20:00', label: '20:00'},
    {value: '21:00', label: '21:00'},
    {value: '22:00', label: '22:00'},
]
const occasions = [
    {value: 'none', label: 'None'},
    {value: 'birthday', label: 'Birthday'},
    {value: 'anniversary', label: 'Anniversary'},
];

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
                    <Item name="date" label="Date" wrapperCol={{ span: 5 }} rules={requiredFieldRule('Date')}>
                        <Input type="date" />
                    </Item>

                    <Item name="time" label="Time" wrapperCol={{ span: 3 }} rules={requiredFieldRule('Time')}>
                        <Select>
                            {times.map(({ value, label }) => (
                                <Option value={value}> {label} </Option>
                            ))}
                        </Select>
                    </Item>

                    <Item name="guests" label="Guests" wrapperCol={{ span: 2 }} rules={requiredFieldRule('Guests')}>
                        <Input type="number" min="1" max="10" />
                    </Item>

                    <Item name="occasion" label="Occasion" wrapperCol={{ span: 5 }} rules={requiredFieldRule('Occasion')}>
                        <Select id="occasion">
                            {occasions.map(({ value, label }) => (
                                <Option value={value}> {label} </Option>
                            ))}
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