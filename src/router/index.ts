import React from "react";
import Login from "../pages/Login";
import Home from "../pages/Home";

export interface IRoute {
    path: string;
    element: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    LOGIN = '/login',
    HOME  = '/'
}
export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, exact:true, element: Login }
];

export const privateRoutes: IRoute[] = [
    { path: RouteNames.HOME, exact: true, element: Home }
];