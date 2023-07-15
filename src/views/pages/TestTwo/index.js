import { Button, Card, Col, Form, Input, Row, message } from "antd";
import React from "react";

const TestTwo = () => {
    const checkRequire = (a, b) => {
        let result = true;
        if (a.length !== b.length) {
            result = false;
            message.error(`Lỗi: số lượng phần tử 2 mảng không bằng nhau`, 2);
        }
        if (a.length < 0 && b.length < 0) {
            result = false;
            message.error(`Lỗi: số lượng phần tử 2 mảng < 0`, 2);
        }
        let isA = a.find((item) => item <= 0) || 1;
        if (!isA) {
            result = false;
            message.error(`Lỗi: mảng num phải là số nghuyên > 1`, 2);
        }
        let isB = b.find((item) => item < 0) || 1;
        if (!isB) {
            result = false;
            message.error(
                `Lỗi: mảng cost có phần tử không phải là số nguyên`,
                2
            );
        }
        console.log(result);
        return result;
    };

    const checkCaseNumsEqual = (arr) => {
        let flag = 0;
        for (let i = 0; i < arr.length; i++) {
            for (let j = i + 1; j < arr; j++) {
                if (arr[i] == arr[j]) {
                    flag = 1;
                    break;
                }
            }
        }
        message.error(`Tất cả các phần tử trong mảng nums đã bằng nhau`, 2);

        return flag;
    };

    const minTotalCost = (nums, cost) => {
        if (!checkRequire(nums, cost)) return;
        if (checkCaseNumsEqual(nums)) return;
        let listTotal = [];
        for (let n = 0; n < nums.length; n++) {
            let itemAdd = nums[n] + 1;
            let totalItem = 0;
            for (let i = 0; i < nums.length; i++) {
                if (nums[i] < itemAdd) {
                    totalItem += (itemAdd - nums[i]) * cost[i];
                } else {
                    totalItem += (nums[i] - itemAdd) * cost[i];
                }
            }
        }
        message.success(`Chi phí tối thiểu là: ${Math.min(...listTotal)}`, 5);
    };
    const covertArrStrToNumber = (arr) => {
        const arrOfNum = arr.map((item) => {
            return Number(item);
        });
        return arrOfNum;
    };
    const onFinish = (values) => {
        const nums = covertArrStrToNumber(values.nums.split(","));
        const cost = covertArrStrToNumber(values.cost.split(","));
        minTotalCost(nums, cost);
    };
    return (
        <>
            <Row justify="center" style={{ marginTop: 40 }}>
                <Col span={7}>
                    <Form
                        name="testTwo"
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
                            label="Nums"
                            name="nums"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your nums!",
                                },
                            ]}
                        >
                            <Input placeholder="(Ex: 1,2,3)" />
                        </Form.Item>
                        <Form.Item
                            label="Cost"
                            name="cost"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your cost!",
                                },
                            ]}
                        >
                            <Input placeholder="(Ex: 1,2,3)" />
                        </Form.Item>
                        <Form.Item
                            wrapperCol={{
                                offset: 8,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                    <Card>
                        <p>
                            {`const minTotalCost = (nums, cost) => {`} <br />
                            {`let listTotal = [];`} <br />
                            {`for (let n = 0; n < nums.length; n++) {`} <br />
                            {`let itemAdd = nums[n] + 1;`} <br />
                            {`let totalItem = 0;`} <br />
                            {`for (let i = 0; i < nums.length; i++) {`} <br />
                            {`if (nums[i] < itemAdd) {`} <br />
                            {`totalItem += (itemAdd - nums[i]) * cost[i];`}{" "}
                            <br />
                            {`} else {`} <br />
                            {` totalItem += (nums[i] - itemAdd) * cost[i];`}{" "}
                            <br />
                            {`}`} <br />
                            {`}`} <br />
                            {`}`} <br />
                            {`return Math.min(...listTotal)};`} <br />
                            {`}`} <br />
                        </p>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default TestTwo;
