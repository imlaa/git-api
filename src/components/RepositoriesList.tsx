import React, {FC, useEffect, useState} from 'react';
import {SearchInput} from "./UI/SearchInput";
import {RepositoriesService} from "../services/RepositoriesService";
import {IRepo} from "../models/IRepo";
import {Repo} from "./Repo";

interface RepositoriesListProps {
	login: string | undefined;
}

export const RepositoriesList: FC<RepositoriesListProps> = ({login}) => {
	const [value, setValue] = useState<string>('');
	const [repos, setRepos] = useState<IRepo[]>([]);

	useEffect(() => {
		if (login) {
			RepositoriesService.getRepositories(login)
				.then(response => setRepos(response.data));
		}
	}, [login]);

	const searchRepo = ():IRepo[] => {
		return repos.filter(repo => {
			if (!value) return repo;
			return repo.full_name.toLocaleLowerCase().includes(value.toLocaleLowerCase());
		});
	}

	return (
		<>
			<SearchInput value={value} setValue={setValue} placeholder={'Search for User\'s Repositories'} />

			{searchRepo().map(repo => <Repo key={repo.id} repo={repo} />)}
		</>
	);
};
