import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';

class App extends Component {
	constructor(props) {
		super();

		this.state = {
			titulo: 's'
		};
	}

	render() {
		return <div className="inicio">{this.state.titulo}</div>;
	}
}

// mapeo del state
const mapStateToProps = (state) => {
	return {
		titulo: state.titulo
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		actions: ''
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
