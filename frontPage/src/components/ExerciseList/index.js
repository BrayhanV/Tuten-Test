import React from 'react';
import { useStyles } from './styles';
import { problems } from '../../constants';
import { Grid, Typography } from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';
import { MyPaper } from '../../styles/StyledComponets';

export const ExerciseList = (props) => {
	const classes = useStyles();

	const renderItem = () =>
		problems.map((elem, index) => (
			<Grid key={index} item xs={12} md={6} lg={4}>
				<MyPaper className={classes.paper} onClick={(e) => props.click(`/problem/${elem.id}`)}>
					<CodeIcon className={classes.icon} />
					<Typography variant="body1">{elem.title}</Typography>
				</MyPaper>
			</Grid>
		));

	return (
		<div className={classes.root}>
			<Grid container spacing={2}>
				{renderItem()}
			</Grid>
		</div>
	);
};
