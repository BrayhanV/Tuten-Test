import { makeStyles } from '@material-ui/core/styles';
import { minHeight } from '@material-ui/system';

const drawerWidth = 240;

export const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		verticalAlign: 'middle',
		width: '100%'
	},
	appBar: {
		transition: theme.transitions.create([ 'margin', 'width' ], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen
		})
	},
	appBarShift: {
		width: `calc(100% - ${drawerWidth}px)`,
		marginLeft: drawerWidth,
		transition: theme.transitions.create([ 'margin', 'width' ], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	},
	menuButton: {
		marginRight: theme.spacing(2)
	},
	menuText: {
		width: '100%',
		textAlign: 'left',
		paddingLeft: 10
	},
	hide: {
		display: 'none'
	},
	drawer: {
		width: 0,
		flexShrink: 0
	},
	drawerPaper: {
		width: drawerWidth
	},
	drawerHeader: {
		display: 'flex',
		alignItems: 'center',
		padding: '0 8px',
		...theme.mixins.toolbar,
		justifyContent: 'flex-end'
	},
	link: {
		color: 'blue'
	},
	container: {
		maxWidth: 900,
		marginTop: theme.spacing(10),
		margin: '0 auto',
		paddingTop: theme.spacing(7),
		paddingRight: theme.spacing(4),
		paddingBottom: theme.spacing(2),
		paddingLeft: theme.spacing(4),
		position: 'relative'
	},
	backIcon: {
		position: 'absolute',
		top: 0
	}
}));
