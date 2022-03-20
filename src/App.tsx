import React, {FC, useEffect} from 'react';
import AppRouter from "./components/AppRouter";
import Home from "./pages/Home";
import {AuthActionCreators} from "./store/reducers/auth/action-creators";
import {useDispatch} from "react-redux";
import {Layout} from "antd";
import Navbar from "./components/Navbar";
import './App.less';

const App:FC = () => {

    const dispatch = useDispatch();

    useEffect( () => {

        if ( localStorage.getItem('auth') ){
            dispatch(AuthActionCreators.checkAuth())
        }

    },[])

    return (
        <Layout>
            <Navbar/>
            <Layout.Content/>
        </Layout>
    );
}

export default App;
