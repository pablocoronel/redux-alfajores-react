import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Formulario from '../Formulario/Formulario';
import Error404 from '../Error404/Error404';
import Navegacion from '../Navegacion/Navegacion';
import Listado from '../Listado/Listado';

const App = () => {
	return (
		<Router>
			<div>
				<Navegacion />
				<Switch>
					<Route path="/" exact component={Listado} />
					<Route path="/crear" exact component={Formulario} />
					<Route component={Error404} />
				</Switch>
			</div>
		</Router>
	);
};

export default App;
