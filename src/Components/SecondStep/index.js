import { Button, Form, Select, message } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    handelAddViewSecondStep,
    handelSetActiveViewSecondStep,
    handelSetValueViewSecondStep,
} from "../../redux/stepManagement";
import TemplateOne from "./TemplateOne";
import TemplateTwo from "./TemplateTwo";

const SeconStep = ({ prev }) => {
    const dispatch = useDispatch();
    const step = useSelector((state) => state.step);
    const secondStep = step?.secondStep;
    const [form] = Form.useForm();
    const [templateActive, setTemplateActive] = useState(null);
    const onFinish = (value) => {
        message.success("Processing complete!");
    };
    const handelChangeTemplate = (value) => {
        setTemplateActive(value);
        saveValue();
    };
    const saveValue = () => {
        dispatch(handelSetValueViewSecondStep(form.getFieldValue()));
    };
    const handelAddView = () => {
        form.validateFields()
            .then((res) => {
                dispatch(handelAddViewSecondStep());
                console.log(secondStep);
                form.resetFields();
                setTemplateActive(null);
            })
            .catch((err) => console.log(err));
    };
    const showView = (data) => {
        dispatch(handelSetActiveViewSecondStep(data.view));
        setTemplateActive(data?.content?.template || null);
        form.setFieldsValue(data.content);
    };
    const showViewNextStep = () => {
        secondStep.forEach((item) => {
            if (item?.active === true) {
                setTemplateActive(item?.content?.template);
                form.setFieldsValue(item?.content);
            }
        });
    };
    useEffect(() => {
        showViewNextStep();
    }, []);
    return (
        <>
            <div>
                {secondStep?.map((item) => {
                    return (
                        <Button
                            type={item?.active ? "primary" : "default"}
                            key={item?.view}
                            style={{
                                marginRight: "0.5rem",
                            }}
                            onClick={() => {
                                showView(item);
                            }}
                        >
                            View {item?.view}
                        </Button>
                    );
                })}
                <Button key="add" type="primary" onClick={handelAddView}>
                    Add (+)
                </Button>
            </div>
            <Form
                name="secondStep"
                form={form}
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                onFinish={onFinish}
                autoComplete="off"
                style={{ marginTop: "1rem" }}
            >
                <Form.Item
                    label="Template"
                    name="template"
                    rules={[
                        {
                            required: true,
                            message: "Error",
                        },
                    ]}
                >
                    <Select
                        onChange={handelChangeTemplate}
                        options={[
                            { key: 1, value: 1 },
                            { key: 2, value: 2 },
                        ]}
                        placeholder="Chọn Template"
                    />
                </Form.Item>
                {templateActive !== null && (
                    <>
                        {templateActive == 1 && (
                            <TemplateOne saveValue={saveValue} />
                        )}
                        {templateActive == 2 && (
                            <TemplateTwo saveValue={saveValue} />
                        )}
                    </>
                )}
                <div
                    style={{
                        marginTop: 24,
                    }}
                >
                    <Button
                        style={{
                            margin: "0 8px",
                        }}
                        onClick={() => prev()}
                    >
                        Previous
                    </Button>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </div>
            </Form>
        </>
    );
};

export default SeconStep;
