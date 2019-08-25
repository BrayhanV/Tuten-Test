import React from 'react';
import { Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, KeyboardTimePicker } from '@material-ui/pickers';
import { consumeAPI } from '../../requests';
import { useStyles } from './styles';
import { MySnackError } from '../MySnackError';
import { Title } from '../../styles/StyledComponets';
import ReactJson from 'react-json-view';
import { useInputValue } from '../../hook/useInputValue';
import { UTC } from '../../constants';
import exportToJson from '../../lib/exportToJson';
import { Loader } from '../Loader';

export const SolutionConsumeApi = ({ url, urlDownload }) => {
	const classes = useStyles();
	const [ message, setMessage ] = React.useState('');
	const [ open, setOpen ] = React.useState(false);
	const [ data, setData ] = React.useState(null);
	const date = useInputValue(new Date('2014-08-18T21:11:54'));
	const timezone = useInputValue(UTC.initialValue);
	const [ loading, setLoading ] = React.useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		setLoading(true);
		let time = date.value.getHours() + ':' + date.value.getMinutes() + ':' + date.value.getSeconds();
		const response = await consumeAPI(url, 'POST', null, { time, timezone: timezone.value });
		handleResponse(response);
	};

	const handleResponse = (res) => {
		if (res.message) {
			setMessage(res.message);
			setOpen(true);
			setLoading(false);
			return;
		}

		exportToJson(res.data);
		setData(res.data);
		window.setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 300);
		setLoading(false);
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};

	const renderResponse = () => (
		<React.Fragment>
			<Title variant="h5">Respuesta:</Title>
			<ReactJson style={{ textAlign: 'left' }} theme="brewer" src={data} />
		</React.Fragment>
	);

	return (
		<React.Fragment>
			<Loader loading={loading} />
			<MySnackError open={open} message={message} handleClose={handleClose} />
			<form className={classes.from} onSubmit={handleSubmit} autoComplete="off">
				<FormControl>
					<MuiPickersUtilsProvider utils={DateFnsUtils}>
						<KeyboardTimePicker
							className={classes.input}
							margin="normal"
							label="Hora:"
							KeyboardButtonProps={{
								'aria-label': 'change time'
							}}
							{...date}
						/>
					</MuiPickersUtilsProvider>
				</FormControl>
				<FormControl>
					<InputLabel htmlFor="age-simple">timezone</InputLabel>
					<Select
						className={classes.input}
						{...timezone}
						inputProps={{
							name: 'Zona horaria'
						}}
					>
						{UTC.listValues.map((elem, index) => (
							<MenuItem key={index} value={elem.value}>
								{elem.name}
							</MenuItem>
						))}
					</Select>
				</FormControl>
				<Button className={classes.button} variant="contained" color="primary" type="submit">
					Consumir Api
				</Button>
			</form>

			{data && renderResponse()}
		</React.Fragment>
	);
};
