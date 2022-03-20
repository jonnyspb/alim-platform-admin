import React from "react";
import Login from "../pages/Login";
import Home from "../pages/Home";
import Dasboard from "../pages/Dasboard";
import Courses from "../pages/Courses";
import Users from "../pages/Users";
import Broadcasting from "../pages/Broadcasting";
import Settings from "../pages/Settings";

export interface IRoute {
    path: string;
    element: React.ComponentType;
    exact?: boolean;
}

export enum RouteNames {
    LOGIN        = '/login',
    LOGOUT       = '/logout',
    HOME         = '/',
    DASHBOARD    = '/dashboard',
    COURSES      = '/courses',
    USERS        = '/users',
    BROADCASTING = '/broadcasting',
    SETTINGS     = '/settings'

}
export const publicRoutes: IRoute[] = [
    {path: RouteNames.LOGIN, exact:true, element: Login }
];

export const privateRoutes: IRoute[] = [
    { path: RouteNames.HOME, exact: true, element: Home },
    { path: RouteNames.DASHBOARD, exact: true, element: Dasboard },
    { path: RouteNames.COURSES, exact: true, element: Courses },
    { path: RouteNames.USERS, exact: true, element: Users },
    { path: RouteNames.BROADCASTING, exact: true, element: Broadcasting },
    { path: RouteNames.SETTINGS, exact: true, element: Settings },
];