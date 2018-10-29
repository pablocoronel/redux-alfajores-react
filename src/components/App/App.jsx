import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import List from '../AlfajorCrud/List';
import Create from '../AlfajorCrud/Create';
import Error404 from '../Error404/Error404';
import Navegacion from '../Navegacion/Navegacion';

const App = () => {
	return (
		<Router>
			<div>
				<Navegacion />
				<Switch>
					<Route path="/" exact component={List} />
					<Route path="/crear" exact component={Create} />
					{/* <Route path="/editar/:id" exact component={Editar} /> */}
					<Route component={Error404} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
