import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {UserService} from "../services/UserService";
import {IUser} from "../models/IUser";

import {RepositoriesList} from "../components/RepositoriesList";

export const User = () => {
	const {userLogin} = useParams();

	const [user, setUser] = useState<IUser>();

	useEffect(() => {
		UserService.getUser(userLogin)
			.then((response) => setUser(response.data))
	}, [userLogin]);

	return (
		<>
			<div className={'user'}>
				<img src={user?.avatar_url} alt="user avatar"/>

				<div className={'user__info'}>
					<div>{user?.name}</div>
					<div>{user?.email}</div>
					<div>{user?.location}</div>
					<div>{user?.updated_at}</div>
					<div>{user?.followers} Followers</div>
					<div>Following {user?.following}</div>
				</div>
			</div>

			<div className={'user__bio'}>{user?.bio}</div>

			<RepositoriesList login={userLogin} />
		</>
	);
}