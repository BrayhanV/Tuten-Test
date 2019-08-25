import React, { useEffect, useState } from 'react';
import { useInputValue } from '../../hook/useInputValue';
import { InputAdornment, IconButton, Button, Grid, TextField, MenuItem } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import { useStyles } from './styles';
import { consumeAPI } from '../../requests';
import { MySnackError } from '../MySnackError';
import { app, fecthUrl } from '../../constants';
import { useLocalStorage } from '../../hook/useLocalStorage';
import { useFilter } from '../../hook/useFilter';
import { ListOfBooking } from '../ListOfBooking';
import { Loader } from '../Loader';

export const SolutionLogin = ({ url }) => {
	const classes = useStyles();
	const email = useInputValue('testapis@tuten.cl');
	const password = useInputValue('1234');
	const [ message, setMessage ] = useState('');
	const [ open, setOpen ] = useState(false);
	const [ showPassword, setShowPassword ] = useState(false);
	const [ token, setToken ] = useLocalStorage('token', null);
	const [ fectchData, setFetchData ] = useState([]);
	const { query, priceComparation, price, filteredData } = useFilter(fectchData);
	const [ loading, setLoading ] = useState(false);

	const onSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		let response = await consumeAPI(
			`${url}/${unescape(email.value).replace(/@/g, '%40')}`,
			'PUT',
			{ password: password.value, app },
			{}
		);

		handleResponse(response);
	};

	const handleResponse = (response) => {
		if (response.message) {
			setMessage(response.message);
			setOpen(true);
			setLoading(false);
			return;
		}

		if (!response.data.sessionTokenBck) {
			setLoading(false);
			setOpen(true);
			setMessage('No se ha podido iniciar sesión');
			return;
		}

		setToken(response.data.sessionTokenBck);
	};

	const handleClickShowPassword = () => {
		setShowPassword(!showPassword);
	};

	const handleMouseDownPassword = (event) => {
		event.preventDefault();
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};

	const fecthData = async () => {
		setLoading(true);
		let response = await consumeAPI(fecthUrl, 'GET', { adminemail: email.value, token, app }, {});

		if (response.message) {
			setLoading(false);
			window.localStorage.removeItem('token');
			return;
		}

		let data = response.data.map((elem) => ({
			bookingId: elem.bookingId,
			firstName: elem.locationId.tutenUser.firstName,
			LastName: elem.locationId.tutenUser.lastName,
			bookingTime: elem.bookingTime,
			streetAddress: elem.locationId.streetAddress,
			bookingPrice: elem.bookingPrice
		}));

		setFetchData(data);
		setLoading(false);
	};

	const logout = () => {
		setToken(null);
	};

	useEffect(() => {
		if (window.localStorage.getItem('token')) {
			setToken(window.localStorage.getItem('token'));
		}
	}, []);

	useEffect(
		() => {
			fecthData();
		},
		[ token ]
	);

	return !token ? (
		<React.Fragment>
			<MySnackError open={open} message={message} handleClose={handleClose} />
			<Loader loading={loading} />
			<ValidatorForm className={classes.from} onError={(errors) => console.log(errors)} onSubmit={onSubmit}>
				<TextValidator
					className={classes.input}
					label="Email"
					onChange={email.onChange}
					name="email"
					value={email.value}
					validators={[ 'required', 'isEmail' ]}
					errorMessages={[ 'Debe introducir su email', 'Debe introducir un email' ]}
				/>
				<TextValidator
					className={classes.input}
					label="Password"
					onChange={password.onChange}
					name="password"
					value={password.value}
					validators={[ 'required' ]}
					errorMessages={[ 'Debe introducir su email' ]}
					type={showPassword ? 'text' : 'password'}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword}
									onMouseDown={handleMouseDownPassword}
								>
									{showPassword ? <Visibility /> : <VisibilityOff />}
								</IconButton>
							</InputAdornment>
						)
					}}
				/>
				<Button variant="contained" color="primary" type="submit">
					Submit
				</Button>
			</ValidatorForm>
		</React.Fragment>
	) : (
		<React.Fragment>
			<Loader loading={loading} />
			<Grid className={classes.grid} container spacing={2}>
				<Grid className={classes.itemSpecial} item xs={12} md={6}>
					<TextField {...query} id="bookingId-filter" label="BookingId" margin="normal" type="number" />
				</Grid>
				<Grid item xs={12} md={6}>
					<div className={classes.container}>
						<TextField
							className={classes.textField}
							select
							margin="normal"
							{...priceComparation}
							SelectProps={{
								MenuProps: {
									className: classes.menu
								}
							}}
							label="Filtro"
						>
							<MenuItem value={1}>Mayor que</MenuItem>
							<MenuItem value={2}>Manor que</MenuItem>
						</TextField>
						<TextField
							{...price}
							className={classes.textField}
							margin="normal"
							id="bookingId-filter"
							label="Precio"
							margin="normal"
							type="number"
						/>
					</div>
				</Grid>
			</Grid>
			<ListOfBooking data={filteredData} />
			<Button className={classes.button} variant="contained" color="primary" type="submit" onClick={logout}>
				Cerrar sesión
			</Button>
		</React.Fragment>
	);
};
