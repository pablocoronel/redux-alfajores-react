import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ejemploAction } from '../../actions/alfajorActions';

class App extends Component {
	constructor(props) {
		super();

		this.state = {
			titulo: 's'
		};

		
		// console.log(this.props)
	}

	render() {
		return <div className="inicio">{this.state.titulo}</div>;
	}
}

// mapeo del state
const mapStateToProps = (state, ownProps) => {
	return {
		titulo: state.titulo
	};
};
const mapDispatchToProps = (dispatch) => ({
	...bindActionCreators(ejemploAction, dispatch),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
