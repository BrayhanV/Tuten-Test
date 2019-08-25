import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1
	},
	icon: {
		marginRight: theme.spacing(1)
	},
	paper: {
		cursor: 'pointer',
		display: 'flex',
		justifyContent: 'center'
	}
}));
