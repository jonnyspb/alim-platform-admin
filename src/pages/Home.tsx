import React, {FC} from 'react';
import {Layout} from "antd";
import AppRouter from "../components/AppRouter";
import {Content} from "antd/es/layout/layout";
import axios from "axios";

const Home: FC = () => {
    return (
        <Content
            className="site-layout-background"
            style={{
                padding: 24,
                margin: 0,
                minHeight: 880,
            }}
        >
            <h1>Home</h1>
        </Content>
    );
};

export default Home;