import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	jsonView: {
		textAlign: 'left !important'
	},
	from: {
		display: 'grid',
		maxWidth: 400,
		margin: '0 auto'
	},
	input: {
		textAlign: 'left',
		marginBottom: theme.spacing(6)
	},
	button: {
		maxWidth: 200,
		margin: '0 auto'
	}
}));
