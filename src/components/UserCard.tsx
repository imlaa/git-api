import React, {FC} from 'react';
import {ISearchUser} from "../models/ISearchUser";

import { useNavigate } from "react-router-dom";

interface UserCardProps {
	user: ISearchUser
}

export const UserCard: FC<UserCardProps> = ({user}) => {
	const navigate = useNavigate();

	return (
		<div
			className={'user-card'}
			onClick={() => {
				navigate(`/${user.login}`);
			}}
		>
			<div>
				<img className={'user-card__avatar'} src={user.avatar_url} alt="user avatar"/>
				{user.login}
			</div>

			<div className={'user_card__id'}>id: {user.id}</div>
		</div>
	);
};
