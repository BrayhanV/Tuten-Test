import React from 'react';
import { SnackbarContentError } from '../../styles/StyledComponets';
import { useStyles } from './styles';
import ErrorIcon from '@material-ui/icons/Error';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton, Snackbar } from '@material-ui/core';
import clsx from 'clsx';

export const MySnackError = ({ message, open, handleClose }) => {
	const classes = useStyles();
	return (
		<Snackbar
			open={open}
			onClose={handleClose}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'left'
			}}
			autoHideDuration={5000}
		>
			<SnackbarContentError
				message={
					<span id="client-snackbar" className={classes.message}>
						<ErrorIcon className={clsx(classes.icon, classes.iconVariant)} />
						{message}
					</span>
				}
				action={[
					<IconButton key="close" aria-label="close" color="inherit" onClick={handleClose}>
						<CloseIcon className={classes.icon} />
					</IconButton>
				]}
			/>
		</Snackbar>
	);
};
