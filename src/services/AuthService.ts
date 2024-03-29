import $api from "../api";
import {AxiosResponse} from "axios";
import {AuthResponse} from "../models/AuthResponse";

export default class AuthService {

    static async login ( email: string, password:string ): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/login', {email, password})
    }

    async registration ( email: string, password:string ): Promise<AxiosResponse<AuthResponse>> {
        return $api.post<AuthResponse>('/registration', { email, password } )
    }

    async logout(): Promise<void> {
        return $api.post('/logout' )
    }
}
