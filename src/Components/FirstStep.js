import { Button, Form, Input } from "antd";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handelSetValueFirstStep } from "../redux/stepManagement";

const FirstStep = ({ next }) => {
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const step = useSelector((state) => state.step);
    const firstStep = step?.firstStep;
    const saveValue = () => {
        dispatch(handelSetValueFirstStep(form.getFieldValue()));
    };
    const onFinish = (value) => {
        next();
    };
    useEffect(() => {
        form.setFieldsValue(firstStep);
    }, []);
    return (
        <>
            <Form
                form={form}
                name="firstStep"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {
                            required: true,
                            message: "Error",
                        },
                    ]}
                >
                    <Input
                        placeholder="Please enter name"
                        onChange={saveValue}
                    />
                </Form.Item>
                <Form.Item
                    label="Title"
                    name="title"
                    rules={[
                        {
                            required: true,
                            message: "Error",
                        },
                    ]}
                >
                    <Input
                        placeholder="Please enter title"
                        onChange={saveValue}
                    />
                </Form.Item>

                <Button type="primary" htmlType="submit">
                    Next
                </Button>
            </Form>
        </>
    );
};

export default FirstStep;
