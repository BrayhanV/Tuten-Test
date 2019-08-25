import { withStyles } from '@material-ui/core/styles';
import { Typography, Paper, SnackbarContent, ExpansionPanelDetails, IconButton } from '@material-ui/core';

export const Title = withStyles(
	(theme) => ({
		root: {
			marginTop: theme.spacing(1),
			marginBottom: theme.spacing(1)
		}
	}),
	{ withTheme: true }
)(Typography);

export const MainTitle = withStyles(
	(theme) => ({
		root: {
			marginTop: theme.spacing(6)
		}
	}),
	{ withTheme: true }
)(Title);

export const Subtitle = withStyles(
	(theme) => ({
		root: {
			textAlign: 'left',
			fontWeight: 700,
			marginTop: theme.spacing(3),
			marginBottom: theme.spacing(3)
		}
	}),
	{ withTheme: true }
)(Typography);

export const Paragraph = withStyles(
	(theme) => ({
		root: {
			textAlign: 'left !important',
			textIndent: theme.spacing(4),
			whiteSpace: 'pre-wrap',
			wordBreak: 'break-word',
			color: theme.palette.text.primary
		}
	}),
	{ withTheme: true }
)(Typography);

export const MyPaper = withStyles(
	(theme) => ({
		root: {
			textAlign: 'left',
			padding: theme.spacing(2),
			color: theme.palette.text.primary,
			elevation: 10
		}
	}),
	{ withTheme: true }
)(Paper);

export const MyPaperDark = withStyles(
	(theme) => ({
		root: {
			backgroundColor: '#303030'
		}
	}),
	{ withTheme: true }
)(MyPaper);

export const SnackbarContentError = withStyles(
	(theme) => ({
		root: {
			backgroundColor: theme.palette.error.dark
		}
	}),
	{ withTheme: true }
)(SnackbarContent);

export const NoFlexExpansion = withStyles(
	(theme) => ({
		root: {
			display: 'block'
		}
	}),
	{ withTheme: true }
)(ExpansionPanelDetails);

export const BackButton = withStyles(
	(theme) => ({
		root: {
			position: 'absolute',
			top: 0,
			left: 0
		}
	}),
	{ withStyles: true }
)(IconButton);
