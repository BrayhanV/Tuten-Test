import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
	paper: {
		margin: '0 auto',
		marginTop: theme.spacing(2),
		padding: theme.spacing(3),
		maxWidth: 500,
		textAlign: 'left'
	}
}));
