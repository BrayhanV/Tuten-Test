import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	message: {
		display: 'flex',
		alignItems: 'center',
		verticalAlign: 'middle'
	},
	icon: {
		fontSize: 20
	},
	iconVariant: {
		opacity: 0.9,
		marginRight: theme.spacing(1)
	}
}));
