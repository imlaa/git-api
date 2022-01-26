import React, {FC} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {AppRouter} from "./components/AppRouter";

export const App: FC = () => {
	return (
		<BrowserRouter>
			<div className='container'>
				<div className={'title'}>GitHub Search</div>

				<AppRouter />
			</div>
		</BrowserRouter>
	);
}
