import axios, {AxiosResponse} from "axios";
import {AuthResponse} from "../models/AuthResponse";
import {IUser} from "../models/IUser";
import {AuthActionCreators} from "../store/reducers/auth/action-creators";
import {useDispatch} from "react-redux";

export const API_URL = "http://api.alimpatform.com/api/";

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL,
})

$api.interceptors.request.use( ( config:any ) => {

    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;

    return config;

});

$api.interceptors.request.use ( (config ) => {
   return config;
}, async (error) => {

    const dispatch = useDispatch();
    const originalRequest = error.config;
    if ( error.response.status == 401 && error.config && !error.config._isRetry ) {
        originalRequest._isRetry = true;
        try {
            const response = await axios.get<AuthResponse>(`${API_URL}refresh`, { withCredentials: true })
            localStorage.setItem('token', response.data.access_token)
            return $api.request(originalRequest);
        } catch (e) {
            console.log('No autorize')
        }
    }
    throw error;

});

export default $api;