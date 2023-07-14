import React, { useState } from "react";
import { Col, Row, Steps } from "antd";
import FirstStep from "../../components/TestOne/FirstStep";
import SecondStep from "../../components/TestOne/SecondStep";
const TestOne = () => {
    const [current, setCurrent] = useState(0);

    const next = () => {
        setCurrent(current + 1);
    };
    const prev = () => {
        setCurrent(current - 1);
    };
    const steps = [
        {
            title: "First",
            content: <FirstStep next={next} />,
        },
        {
            title: "Second",
            content: <SecondStep prev={prev} />,
        },
    ];
    const items = steps.map((item) => ({
        key: item.title,
        title: item.title,
    }));

    return (
        <>
            <Row justify="center" style={{ marginTop: 40 }}>
                <Col span={6}>
                    <Steps
                        type="navigation"
                        className="site-navigation-steps"
                        current={current}
                        items={items}
                    />
                    <div
                        style={{
                            marginTop: 24,
                        }}
                    >
                        {steps[current].content}
                    </div>
                </Col>
            </Row>
        </>
    );
};

export default TestOne;
