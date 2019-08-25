import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
	laoderContainer: {
		height: '100vh',
		width: '100%',
		display: 'flex',
		position: 'fixed',
		alignItems: 'center',
		backgroundColor: '#1111117d',
		top: 0,
		right: 0,
		zIndex: 1101
	},
	loader: {
		textAlign: 'center',
		width: '100%'
	}
}));
