import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/alfajorActions';
// console.log(...actions)
class App extends Component {
	constructor(props) {
		super();

		this.state = {
			// titulo: 's'
		};
	}

	render() {
		return <div className="inicio">{this.state.titulo}</div>;
	}

	componentDidMount() {
		const uno = {
			id: 1,
			nombre: 'AGREGADO',
			sabor: 'leche',
			precio: 1
		};

		const dos = {
			id: 2,
			nombre: 'EDITADO',
			sabor: 'negro',
			precio: 30
		};
		// console.log(this.props);
		this.props.acciones.agregarAction(uno);
		this.props.acciones.editarAlfajor(dos);
		this.props.acciones.borrarAlfajor(1);
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
		acciones: { ...bindActionCreators(actionCreators, dispatch) }
	};
};

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		acciones: bindActionCreators({ ...actionCreators }, dispatch)
// 	};
// };

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
