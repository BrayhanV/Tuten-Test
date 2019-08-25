import React, { useState } from 'react';

export const useInputValue = (initialValue) => {
	const [ value, setValue ] = useState(initialValue);
	const onChange = (e) => {
		const value = e.target ? e.target.value : e;
		setValue(value);
	};

	return { value, onChange };
};
