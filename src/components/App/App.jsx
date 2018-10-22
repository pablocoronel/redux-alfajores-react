import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/alfajorActions';
// console.log(...actions)
class App extends Component {
	constructor(props) {
		super();

		this.state = {
			// titulo: 's'
		};

		// this.props.acciones.ejemploAction(uno);
	}

	render() {
		return <div className="inicio">{this.state.titulo}</div>;
	}

	componentDidMount() {
		const uno = {
			id: 1,
			nombre: 'uno',
			sabor: 'uno',
			precio: 1
		};
		this.props.acciones.ejemploAction(uno);
	}
}

// mapeo del state
const mapStateToProps = (state, ownProps) => {
	return {
		titulo: state.titulo
	};
};
const mapDispatchToProps = (dispatch) => {
	return {
		acciones: bindActionCreators({ ...actions }, dispatch)
	};
};

// console.log(mapDispatchToProps)

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
