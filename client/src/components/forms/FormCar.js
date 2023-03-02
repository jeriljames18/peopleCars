import { useQuery } from "@apollo/client";
import { Button, Input, Select } from "antd";
import { Form, InputNumber } from "antd";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid"
import { GET_PEOPLE } from "../../gQueries";

const FormCar = () => {

    const [id] = useState(uuidv4());
    const [form] = Form.useForm();
    const { Option } = Select;
    const optionss = useQuery(GET_PEOPLE);

    const onFinish = values => { }

    const personMap = () => {
        
    }
    return (
        <div>
            <h2>Add Car</h2>
            <Form name="Add Car"
                form={form}
                layout="horizontal"
                onFinish={onFinish}
                size="large"
                style={{
                    display: "flex",
                    justifyContent: "center",
                }}>
                <Form.Item name="year" label="Year" rules={[{
                    required: true,
                    message: 'Year',
                }]}>

                    <InputNumber min={1900} max={2023} placeholder="Year" />
                </Form.Item>

                <Form.Item name="make" label="Make" rules={[{
                    required: true,
                    message: 'Make'
                }]}>
                    <Input placeholder='Make' />
                </Form.Item>

                <Form.Item name="model" label="Model" rules={[{
                    required: true,
                    message: 'Model'
                }]}>
                    <Input placeholder='Model' />
                </Form.Item>

                <Form.Item name="price" label="Price" rules={[{
                    required: true,
                    message: 'price',
                }]}>

                    <InputNumber placeholder="$" />
                </Form.Item>

                <Form.Item name="person" label="Person" rules={[{
                    required: true,
                    message: 'price',
                }]}>

                    {/* <Select placeholder="Select a Person" >
                        {optionss.data.persons.map((e,i)=>(
                            <Option key={i}value={e.id}>{e.firstName}</Option>
                        ))}
                    </Select> */}
                </Form.Item>

                <Form.Item shouldUpdate={true}>
                    {() => (
                        <Button
                            type="primary"
                            htmlType="submit"
                            style={{
                                backgroundColor: "lightgrey"
                            }}
                            disabled={
                                !form.isFieldsTouched(true) ||
                                form.getFieldsError().filter(({ errors }) => errors.length).length
                            }
                        >
                            Add Person
                        </Button>
                    )}
                </Form.Item>
            </Form>
        </div>
    )


}


export default FormCar;
