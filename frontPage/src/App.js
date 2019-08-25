import React from 'react';
import { GlobalStyle } from './styles/GolbalStyles';
import Layout from './components/Layout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Problem } from './pages/Problem';

export const App = () => (
	<BrowserRouter>
		<GlobalStyle />
		<Layout>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route exact path="/problem/:id" component={Problem} />
			</Switch>
		</Layout>
	</BrowserRouter>
);
