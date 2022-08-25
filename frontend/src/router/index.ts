import {ComponentType, FC, ReactNode} from 'react'
import Login from "../pages/Login/Login";
import EventCalendar from "../pages/Event/EventCalendar";
import Home from "../pages/Home/Home";
export interface IRoute {
    path: string;
    element: FC;
    exact?: boolean;
}

export enum RouteNames {
    LOGIN = '/login',
    EVENT = '/event',
    HOME = '/'
}

export const publicRoutes: IRoute[] = [
    {path: RouteNames.HOME, exact: true, element: Home},
    {path: RouteNames.LOGIN, exact: true, element: Login}
]

export const privateRoutes: IRoute[] = [
    {path: RouteNames.HOME, exact: true, element: Home},
    {path: RouteNames.EVENT, exact: true, element: EventCalendar}
]