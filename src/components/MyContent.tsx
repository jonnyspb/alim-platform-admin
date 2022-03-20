import React from 'react';
import {Layout} from "antd";
import {Content} from "antd/es/layout/layout";
import AppRouter from "./AppRouter";

const MyContent = () => {
    return (
        <Layout style={{ padding: '24px' ,minHeight: 500}}>
            <AppRouter/>
        </Layout>
    );
};

export default MyContent;