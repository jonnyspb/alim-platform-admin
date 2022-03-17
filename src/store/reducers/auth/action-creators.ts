import {IUser} from "../../../models/IUser";
import {AuthActionEnum, SetAuthAction, SetErrorAction, SetLoadingAction, SetUserAction} from "./types";
import {AppDispatch} from "../../index";
import {Login} from "../../../services/authService";

export const AuthActionCreators = {
    setUser: (user: IUser): SetUserAction => ({type: AuthActionEnum.SET_USER, payload: user}),
    setIsAuth: (auth: boolean): SetAuthAction => ({type: AuthActionEnum.SET_IS_AUTH, payload: auth}),
    setIsLoading: (loading: boolean): SetLoadingAction => ({type: AuthActionEnum.SET_IS_LOADING, payload: loading}),
    setError: (error: string): SetErrorAction => ({type: AuthActionEnum.SET_ERROR, payload: error}),
    login: (username: string, password: string ) => async (dispatch: AppDispatch) => {
        try {
            dispatch(AuthActionCreators.setIsLoading(true));
            Login( username, password ).then(
                (res) => {
                    localStorage.setItem( 'auth', 'true' );
                    // localStorage.setItem( 'username', email );
                    dispatch(AuthActionCreators.setIsAuth(true));
                    dispatch(AuthActionCreators.setUser({ username,password }));
                    localStorage.setItem( 'token', res.token )
                    },
                (error) =>{
                    dispatch(AuthActionCreators.setError('Error'))
                })

            dispatch(AuthActionCreators.setIsLoading(false));
        } catch (e) {
            dispatch(AuthActionCreators.setError('Error. Try again.'));
        }
    },
    logout: () => async (dispatch: AppDispatch) => {
       localStorage.removeItem('auth');
       localStorage.removeItem('username');
       dispatch(AuthActionCreators.setIsAuth(false));
       dispatch(AuthActionCreators.setUser({} as IUser ));
    }
}