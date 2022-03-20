import React, {useState} from 'react';
import {Button, Checkbox, Form, Input} from "antd";
import {useDispatch} from "react-redux";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";
import {useTypedSelector} from "../hooks/useTypedSelector";

const LoginForm = () => {

    const dispatch = useDispatch();
    const {error, isLoading} = useTypedSelector(state => state.auth);

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const login = (event:any) => {
        // event.preventDefault();
        dispatch(AuthActionCreators.login(username,password))
    }
    return (
        <Form onFinish={login}
              name="basic"
              initialValues={{ remember: true }}
              autoComplete="off"
              layout="vertical"
              size={"large"}
        >
            <Form.Item
                label="Username"
                name="username"

                rules={[{ required: true, message: 'Please input your username!' }]}

            >
                <Input
                    type="email"
                    value={username}
                    onChange={ event => setUsername(event.target.value)}

                />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"

                rules={[{ required: true, message: 'Please input your password!' }]}
            >
                <Input
                    type="password"
                    value={password}
                    onChange={ event => setPassword(event.target.value)}
                />
            </Form.Item>

            <Form.Item name="remember" valuePropName="checked" >
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" block loading={isLoading}>
                    Login
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;