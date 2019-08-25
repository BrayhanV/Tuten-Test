import React from 'react';
import LoaderD from 'react-loader-spinner';
import { useStyles } from './style';

export const Loader = ({ loading }) => {
	const classes = useStyles();

	return loading ? (
		<div className={classes.laoderContainer}>
			<div className={classes.loader}>
				<LoaderD type="Grid" color="#0960b5" height={100} width={100} />
			</div>
		</div>
	) : (
		''
	);
};
