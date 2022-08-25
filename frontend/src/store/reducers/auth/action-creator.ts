import {
    AuthActionEnum,
    SetAuthAction,
    SetErrorAction,
    SetIsLoadingAction,
    SetUserAction
} from "./types";
import {IUser} from "../../../models/IUser";
import {AppDispatch} from "../../index";
import UserApi from "../../../api/userApi";
import {AxiosResponse} from "axios";
import {errorNotification, successNotification} from "../../../utils/notification";


export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
    setIsAuth: (auth: boolean): SetAuthAction => ({type: AuthActionEnum.SET_AUTH, payload: auth}),
    setIsLoading: (payload: boolean): SetIsLoadingAction => ({type: AuthActionEnum.SET_IS_LOADING, payload}),
    setError: (payload: string): SetErrorAction => ({type: AuthActionEnum.SET_ERROR, payload}),
    login : (username : string, password: string) => async (dispatch : AppDispatch) => {
        dispatch(AuthActionCreators.setIsLoading(true))
        const response: AxiosResponse<IUser[]> = await UserApi.getUsers()
        const user:IUser | undefined = response.data.find(user => user.username === username && user.password === password);
        if (user) {
            localStorage.setItem('auth', 'true');
            localStorage.setItem('username', user.username);
            successNotification(`Welcom ${user.username} `)
            dispatch(AuthActionCreators.setUser(user));
            dispatch(AuthActionCreators.setIsAuth(true))
        } else {
            errorNotification("Wrong login or password")
            dispatch(AuthActionCreators.setError('Некорректный логин или пароль'));
        }
        dispatch(AuthActionCreators.setIsLoading(false));
    },
    checkAuth : ()  => (dispatch: AppDispatch) => {
        dispatch(AuthActionCreators.setIsLoading(true));
        const isAuth = localStorage.getItem('auth');
        if(isAuth) {
            const username = localStorage.getItem('username');
            dispatch(AuthActionCreators.setUser({username} as IUser));
            dispatch(AuthActionCreators.setIsAuth(true))
        }
        dispatch(AuthActionCreators.setIsLoading(false));
    },
    logout : () => (dispatch: AppDispatch) => {
        localStorage.removeItem("auth")
        localStorage.removeItem("username")
        dispatch(AuthActionCreators.setUser({} as IUser));
        dispatch(AuthActionCreators.setIsAuth(false))
    }
}