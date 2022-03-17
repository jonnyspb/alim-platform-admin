import React, {FC, useEffect} from 'react';
import AppRouter from "./components/AppRouter";
import Home from "./pages/Home";
import {AuthActionCreators} from "./store/reducers/auth/action-creators";
import {useDispatch} from "react-redux";


const App:FC = () => {

    const dispatch = useDispatch();

    useEffect( () => {

        if ( localStorage.getItem('auth') ){
            dispatch(AuthActionCreators.setIsAuth(true))
        } else {
            dispatch(AuthActionCreators.setIsAuth(false))
        }

    },[])
    return (
        <div>
            <AppRouter />
        </div>
    );
}

export default App;
