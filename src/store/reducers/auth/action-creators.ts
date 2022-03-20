import {IUser} from "../../../models/IUser";
import {AuthActionEnum, SetAuthAction, SetErrorAction, SetLoadingAction, SetUserAction} from "./types";
import {AppDispatch} from "../../index";
import AuthService from "../../../services/AuthService";
import axios, {AxiosResponse} from "axios";
import {API_URL} from "../../../api";
import {AuthResponse} from "../../../models/AuthResponse";

export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
    setIsAuth: (auth: boolean): SetAuthAction => ({type: AuthActionEnum.SET_IS_AUTH, payload: auth}),
    setIsLoading: (loading: boolean): SetLoadingAction => ({type: AuthActionEnum.SET_IS_LOADING, payload: loading}),
    setError: (error: string): SetErrorAction => ({type: AuthActionEnum.SET_ERROR, payload: error}),
    login: (username: string, password: string ) => async (dispatch: AppDispatch) => {
        dispatch(AuthActionCreators.setIsLoading(true));
        try {
            const response = await AuthService.login(username, password);
            localStorage.setItem( 'auth', 'true' );
            // localStorage.setItem( 'username', email );
            dispatch(AuthActionCreators.setIsAuth(true));
            // dispatch(AuthActionCreators.setUser({ username,password }));



        } catch (e) {
            dispatch(AuthActionCreators.setError('Error. Try again.'));
        } finally {
            dispatch(AuthActionCreators.setIsLoading(false));
        }

    },
    logout: () => async (dispatch: AppDispatch) => {

       localStorage.removeItem('auth');
       localStorage.removeItem('username');
       dispatch(AuthActionCreators.setIsAuth(false));
       dispatch(AuthActionCreators.setUser({} as IUser ));

    },
    checkAuth: () => async (dispatch: AppDispatch) => {

        dispatch(AuthActionCreators.setIsLoading(true));
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}refresh`, { withCredentials:true })
            dispatch(AuthActionCreators.setIsAuth(true));
            localStorage.setItem( 'token', response.data.access_token );
            localStorage.setItem( 'auth', 'true' );
        } catch (e) {
            dispatch(AuthActionCreators.setError('Error. Try again.'));
        } finally {
            dispatch(AuthActionCreators.setIsLoading(false));
        }
    }
}