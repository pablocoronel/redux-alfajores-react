import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import List from '../AlfajorCrud/List';
import Create from '../AlfajorCrud/Create';
import Edit from '../AlfajorCrud/Edit';
import Error404 from '../Error404/Error404';
import Header from '../Header/Header';

const App = () => {
	return (
		<Router>
			<div>
				<Header />
				<Switch>
					<Route path="/" exact component={List} />
					<Route path="/crear" exact component={Create} />
					<Route path="/editar/:id" exact component={Edit} />
					<Route component={Error404} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
