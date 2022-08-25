import axios, {AxiosResponse} from "axios";
import {IUser} from "../models/IUser";

export default class UserApi {
    static async getUsers(): Promise<AxiosResponse<IUser[]>> {
        return   new Promise(function(resolve) {
            setTimeout(() => {
                resolve(axios.get<IUser[]>('./users.json'))
            }, 1000);
        });
    }
}