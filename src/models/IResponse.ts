import {ISearchUser} from "./ISearchUser";

export interface IResponse {
	total_count: number;
	incomplete_results: boolean;
	items: ISearchUser[];
}