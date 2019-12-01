import request from "./interceptor";
import credentials from "../commons/utils/credentials.json";


export async function getUsers(url, params = null) {
    return request.get(url, params);
}

export async function login(params = null) {
    return (params.hasOwnProperty('username') && params.hasOwnProperty('password') && params.username == credentials.username && params.password == credentials.password);
}