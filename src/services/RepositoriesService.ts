// https://api.github.com/users/octocat/repos

import {AxiosResponse} from "axios";
// import {IResponse} from "../models/IResponse";
import {api} from "../http";
import {IRepo} from "../models/IRepo";

export class RepositoriesService {
	static getRepositories = async (username:string): Promise<AxiosResponse<IRepo[]>> => {
		return await api.get<IRepo[]>(`/users/${username}/repos`);
	}
}