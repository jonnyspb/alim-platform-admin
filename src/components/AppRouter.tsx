import React, {useContext} from 'react';
import {privateRoutes, publicRoutes} from "../router";
import {Routes, Route, Navigate} from "react-router-dom";
import {useTypedSelector} from "../hooks/useTypedSelector";
import Login from "../pages/Login";

const AppRouter = () => {
    const { isAuth } = useTypedSelector(state => state.auth )

    return (
        isAuth ?
        <Routes>
            {privateRoutes.map( route =>
                <Route
                    element={ <route.element/> }
                    path={ route.path }
                    // exact={ route.exact }
                    key={ route.path }
                />
            )}
            <Route path="/login" element={<Navigate to="/" />}/>
        </Routes>
            :
            <Routes>
                {publicRoutes.map( route =>
                    <Route
                        element={ <route.element/> }
                        path={ route.path }
                        // exact={ route.exact }
                        key={ route.path }
                    />
                )}
                <Route path="*" element={<Navigate to="/login" />}/>
            </Routes>

    );
};

export default AppRouter;