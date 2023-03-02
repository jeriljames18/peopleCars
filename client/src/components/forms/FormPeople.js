import { useEffect, useState } from "react";
import { Form } from "antd";
import {v4 as uuidv4 } from "uuid"
import { Button, Input } from "@mui/material";
import { useMutation } from "@apollo/client";
import { ADD_PERSON, GET_PEOPLE } from "../../gQueries";


const FormPeople = () => {

    const [id] = useState(uuidv4());
    const [form] = Form.useForm();
    const [, forceUpdate] = useState()
    const [addPerson] = useMutation(ADD_PERSON)


    useEffect(() => {
        forceUpdate([])
    }, [])

    const onFinish = values => {
        const { firstName, lastName } = values

        addPerson({
          variables: {
            id,
            firstName,
            lastName
          },
          update: (cache, { data: { addContact } }) => {
            const data = cache.readQuery({ query: GET_PEOPLE })
            cache.writeQuery({
              query: GET_PEOPLE,
              data: {
                ...data,
                contacts: [...data.contacts, addContact]
              }
            })
          }
        })
    }

return (
    <Form name="Add Person"
        form={form}
        layout="horizontal"
        onFinish={onFinish}
        size="large"
        style={{
            display: "flex",
            justifyContent: "center",
        }}>
        <Form.Item name="firstName" label="FirstName" rules={[{
            required: true,
            message: 'Please input your First Name',
        }]}>

            <Input placeholder='First Name' />
        </Form.Item>
        <Form.Item name="lastName" label="LastName" rules={[{
            required: true,
            message: 'Please input your Last Name'
        }]}>
            <Input placeholder='Last Name' />
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

)

                };
export default FormPeople;