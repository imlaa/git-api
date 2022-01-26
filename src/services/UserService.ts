import {api} from '../http';
import {AxiosResponse} from 'axios';

import {IResponse} from "../models/IResponse";
import {IUser} from "../models/IUser";

export class UserService {
	static searchUser = async (username:string): Promise<AxiosResponse<IResponse>> => {
		return await api.get<IResponse>(`/search/users?q=${username}`);
	}

	static getUser = async (username: string | undefined): Promise<AxiosResponse<IUser>> => {
		return await api.get<IUser>(`/users/${username}`);
	}
}