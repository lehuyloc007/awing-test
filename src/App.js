import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routers from "./router";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Layout } from "antd";
import Sider from "antd/es/layout/Sider";
import Navigate from "./navigate";
import { Content } from "antd/es/layout/layout";
import { Suspense } from "react";
const contentStyle = {
    //minHeight: "100vh",
    backgroundColor: "#fff",
};
const siderStyle = {
    backgroundColor: "#001529",
    height: "100vh",
};
const App = () => {
    return (
        <>
            <BrowserRouter>
                <Suspense fallback={null}>
                    <Provider store={store}>
                        <Layout hasSider>
                            <Sider
                                style={siderStyle}
                                breakpoint="lg"
                                collapsedWidth="0"
                            >
                                <Navigate />
                            </Sider>

                            <Content style={contentStyle}>
                                <Routers />
                            </Content>
                        </Layout>
                    </Provider>
                </Suspense>
            </BrowserRouter>
        </>
    );
};
export default App;
