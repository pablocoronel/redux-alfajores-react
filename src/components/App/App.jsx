import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import List from '../AlfajorCrud/List';
import Create from '../AlfajorCrud/Create';
import Edit from '../AlfajorCrud/Edit';
import Error404 from '../Error404/Error404';
import Header from '../Header/Header';
// import * as actionCreators from '../../actions/alfajorActions';
import {router_baseURL} from '../../store/config';

const App = () => {
	return (
		<Router>
			<div>
				<Header />
				<Switch>
					<Route path={router_baseURL + "/"} exact component={List} />
					<Route path={router_baseURL + "/crear"} exact component={Create} />
					<Route path={router_baseURL + "/editar/:id"} exact component={Edit} />
					<Route component={Error404} />
				</Switch>
			</div>
		</Router>
	);
};

// const mapStateToProps = (state, ownProps) => ({});

// const mapDispatchToProps = (dispatch) => ({
// 	acciones: { ...bindActionCreators(actionCreators, dispatch) }
// });

// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(App);
export default App;