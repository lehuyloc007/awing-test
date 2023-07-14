import { Form, Input } from "antd";
import React from "react";

const TemplateTwo = ({ saveValue }) => {
    return (
        <>
            <Form.Item
                label="Id"
                name="Id"
                rules={[
                    {
                        required: true,
                        message: "Error",
                    },
                ]}
            >
                <Input placeholder="Please enter Id" onChange={saveValue} />
            </Form.Item>
            <Form.Item label="Username" name="username">
                <Input
                    controls={false}
                    placeholder="Please enter username"
                    onChange={saveValue}
                />
            </Form.Item>
            <Form.Item label="Password" name="password">
                <Input.Password
                    controls={false}
                    placeholder="Please enter password"
                    onChange={saveValue}
                />
            </Form.Item>
        </>
    );
};

export default TemplateTwo;
