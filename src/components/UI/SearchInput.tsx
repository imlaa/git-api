import React, {ChangeEvent, FC} from 'react';
import styles from './SearchInput.module.scss';

interface SearchInputProps {
	value: string;
	setValue: (value: string) => void;
	placeholder: string;
}

export const SearchInput: FC<SearchInputProps> = ({value, setValue, placeholder}) => {
	return (
		<input
			className={styles.search_input}
			type={'string'}
			value={value}
			onChange={(e:ChangeEvent<HTMLInputElement>) => {
				setValue(e.target.value);
			}}
			placeholder={placeholder}
		/>
	);
}