import axios from "axios";
const API_URL = "http://127.0.0.1:8000/api/auth/";

export const Login = (email: string, password: string) => {
    const headers = {
        'Access-Control-Allow-Origin': '*',

    };

    return axios
        .post(API_URL + "login", {
            email,
            password
        },
            )
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};
