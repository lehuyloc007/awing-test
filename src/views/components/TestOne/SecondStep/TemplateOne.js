import { Form, Input, InputNumber, Select } from "antd";
import React from "react";

const TemplateOne = ({ saveValue }) => {
    return (
        <>
            <Form.Item
                label="Email"
                name="email"
                rules={[
                    {
                        required: true,
                        message: "Error",
                    },
                ]}
            >
                <Input onChange={saveValue} placeholder="Please enter email" />
            </Form.Item>
            <Form.Item label="Age" name="age">
                <InputNumber
                    controls={false}
                    placeholder="Please enter age"
                    onChange={saveValue}
                    style={{ width: "100%" }}
                />
            </Form.Item>
            <Form.Item label="Gender" name="gender">
                <Select
                    options={[
                        { key: 0, value: "Male" },
                        { key: 1, value: "Female" },
                    ]}
                    placeholder="Please select gender"
                    onChange={saveValue}
                />
            </Form.Item>
        </>
    );
};

export default TemplateOne;
