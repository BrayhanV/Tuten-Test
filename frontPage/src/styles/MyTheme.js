import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
	palette: {
		type: 'dark'
	},
	overrides: {
		MuiButton: {
			textPrimary: {
				color: 'white',
				'&:hover': {
					backgroundColor: 'rgba(255, 255, 255, 0.1);'
				}
			}
		}
	}
});
