import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";

const Login = () => {
    const dispatch = useDispatch();

    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const login = (event:any) => {
        event.preventDefault();
        dispatch(AuthActionCreators.login(username,password))
    }

    return (
        <div>
            <form onSubmit={login}>
                <input
                    type="email"
                    value={username}
                    onChange={ event => setUsername(event.target.value)}
                />
                <input
                    type="password"
                    value={password}
                    onChange={ event => setPassword(event.target.value)}
                />
                <button type="submit">Log In</button>
            </form>
        </div>
    );
};

export default Login;