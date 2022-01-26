import React, {FC} from 'react';
import {IRepo} from "../models/IRepo";

interface RepoProps {
	repo: IRepo
}

export const Repo: FC<RepoProps> = ({repo}) => {
	return (
		<a href={repo.svn_url} target={'_blank'} className={'repo-card'}>
			{repo.full_name}

			<div>
				<div>{repo.forks_count} Forks</div>
				<div>{repo.stargazers_count} Stars</div>
			</div>
		</a>
	);
};
