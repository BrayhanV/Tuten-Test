import React from 'react';
import clsx from 'clsx';
import { withRouter } from 'react-router-dom';
import { useStyles } from './styles';
import { useTheme } from '@material-ui/core/styles';
import {
	AppBar,
	Toolbar,
	Typography,
	Drawer,
	Divider,
	List,
	ListItem,
	ListItemIcon,
	IconButton,
	ListItemText
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeIcon from '@material-ui/icons/Home';
import { problems } from '../../constants';

const Layout = (props) => {
	const classes = useStyles();
	const theme = useTheme();
	const [ open, setOpen ] = React.useState(false);

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpen(false);
	};

	const goTo = (location) => {
		setOpen(false);
		props.history.push(location);
	};

	return (
		<div className={classes.root}>
			<AppBar
				color="default"
				position="fixed"
				className={clsx(classes.appBar, {
					[classes.appBarShift]: open
				})}
			>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						className={clsx(classes.menuButton, open && classes.hide)}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap>
						Prueba Técnica
					</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				className={classes.drawer}
				variant="persistent"
				anchor="left"
				open={open}
				classes={{
					paper: classes.drawerPaper
				}}
			>
				<div className={classes.drawerHeader}>
					<Typography className={classes.menuText} variant="h6" noWrap>
						Menu
					</Typography>
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
				</div>
				<Divider />
				<List>
					<ListItem button onClick={(e) => goTo('/')}>
						<ListItemIcon>
							<HomeIcon />
						</ListItemIcon>
						<ListItemText primary="Home" />
					</ListItem>
					{problems.map((elem) => {
						const Icon = elem.Icon;
						return (
							<ListItem button key={elem.id} onClick={(e) => goTo(`/problem/${elem.id}`)}>
								<ListItemIcon>
									<Icon />
								</ListItemIcon>
								<ListItemText primary={elem.title} />
							</ListItem>
						);
					})}
				</List>
			</Drawer>
			<div className={classes.container}>{props.children}</div>
		</div>
	);
};

export default withRouter(Layout);
