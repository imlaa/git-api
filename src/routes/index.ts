import React from 'react';

import {Search} from '../pages/Search';
import {User} from '../pages/User';

export interface IRoute {
	path: string;
	component: React.ComponentType
}

export const routes: IRoute[] = [
	{path: '/', component: Search},
	{path: '/:userLogin', component: User}
];
