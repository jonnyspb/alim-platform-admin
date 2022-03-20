import React from 'react';
import {Content} from "antd/es/layout/layout";

const Dasboard = () => {
    return (
        <Content
            className="site-layout-background"
            style={{
                padding: 24,
                margin: 0,
                minHeight: 880,
            }}
        >
            <h1>Dashboard Page</h1>
        </Content>
    );
};

export default Dasboard;