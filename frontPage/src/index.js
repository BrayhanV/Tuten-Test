import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { theme } from './styles/MyTheme';
import { MuiThemeProvider } from '@material-ui/core';

ReactDOM.render(
	<MuiThemeProvider theme={theme}>
		<App />
	</MuiThemeProvider>,
	document.getElementById('App')
);
