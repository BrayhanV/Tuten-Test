import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
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
		marginTop: theme.spacing(2)
	},
	grid: { flexGrow: 1 },
	container: {
		display: 'flex',
		flexWrap: 'wrap'
	},
	menu: {
		width: 200
	},
	item: {
		textAlign: 'left'
	},
	itemSpecial: {
		[theme.breakpoints.down('sm')]: {
			marginLeft: theme.spacing(2),
			textAlign: 'left'
		}
	},
	textField: {
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2)
	}
}));
