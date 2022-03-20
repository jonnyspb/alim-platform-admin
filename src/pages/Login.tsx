import React, {useState} from 'react';

import {Card, Layout, Row} from "antd";
import LoginForm from "../components/LoginForm";

const Login = () => {
    return (
        <Layout.Content>
            <Row justify="center" align="middle" >
                <Card style={{ width: 300 }}>
                <LoginForm/>
            </Card>
            </Row>
        </Layout.Content>
    );
};

export default Login;