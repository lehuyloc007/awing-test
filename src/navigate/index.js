import { Menu } from "antd";
import React, { useState } from "react";
import { FormOutlined } from "@ant-design/icons";
import { NavLink } from "react-router-dom";
const items = [
    {
        label: <NavLink to="test-one">Test One</NavLink>,
        key: "test-one",
        icon: <FormOutlined />,
    },
    {
        label: <NavLink to="test-two">Test Two</NavLink>,
        key: "test-two",
        icon: <FormOutlined />,
    },
];
const Navigate = () => {
    const [current, setCurrent] = useState(1);
    const onClick = (e) => {
        setCurrent(e.key);
    };
    return (
        <Menu
            theme="dark"
            onClick={onClick}
            selectedKeys={[current]}
            mode="inline"
            items={items}
        />
    );
};

export default Navigate;
