import React, {useEffect, useState} from 'react';
import {SearchInput} from "../components/UI/SearchInput";
import {UserService} from "../services/UserService";
import {useDebounce} from "../hooks/useDebounce";
import {ISearchUser} from "../models/ISearchUser";
import {UserCard} from "../components/UserCard";

export const Search = () => {
	const [value, setValue] = useState<string>('');
	const [users, setUsers] = useState<ISearchUser[]>([]);

	const searchUsers = () => {
		UserService.searchUser(value)
			.then(({data}) => setUsers(data.items));
	}

	const debouncedSearch = useDebounce(searchUsers, 500);

	useEffect(() => {
		if (value) {
			// @ts-ignore
			debouncedSearch(value);
		}

		if (!value) setUsers([]);
	}, [value]);

	useEffect(() => {
		const search = sessionStorage.getItem('searchValue');
		if (search) setValue(search);
	}, []);

	useEffect(() => {
		sessionStorage.setItem('searchValue', value);
	}, [value]);

	return (
		<>
			<SearchInput value={value} setValue={setValue} placeholder={'Search for Users'} />

			{users.map(user => <UserCard key={user.id} user={user} />)}
		</>
	);
}