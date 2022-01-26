import React, {useCallback, useRef} from 'react';

export const useDebounce = (callback: () => void, delay: number) => {
	const timer = useRef();

	const debouncedCallback = useCallback(() => {
		if (timer.current) {
			clearTimeout(timer.current);
		}

		// @ts-ignore
		timer.current = setTimeout(() => {
			callback();
		}, delay)
	}, [callback, delay]);

	return debouncedCallback;
}