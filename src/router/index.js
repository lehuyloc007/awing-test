import { lazy } from "react";

const { useRoutes } = require("react-router-dom");
const TestOne = lazy(() => import("../views/pages/TestOne"));
const TestTwo = lazy(() => import("../views/pages/TestTwo"));
const Routers = () => {
    const router = useRoutes([
        {
            path: "/",
            element: <TestOne />,
        },
        {
            path: "/test-one",
            element: <TestOne />,
        },
        {
            path: "/test-two",
            element: <TestTwo />,
        },
    ]);
    return router;
};
export default Routers;
