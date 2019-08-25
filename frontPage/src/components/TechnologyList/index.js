import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { technologies } from '../../constants/index';
import { MyPaper } from '../../styles/StyledComponets';

export const TechnologyList = () => {
	const classes = useStyles();

	const renderItem = () =>
		technologies.map((elem, index) => (
			<Grid key={index} item xs={12} md={6} lg={4}>
				<MyPaper className={classes.papper}>
					<Typography variant="body1">{elem}</Typography>
				</MyPaper>
			</Grid>
		));

	return (
		<Grid container spacing={1}>
			{renderItem()}
		</Grid>
	);
};
