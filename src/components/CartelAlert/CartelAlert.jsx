import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/alfajorActions';
import { Row, Col, Alert } from 'react-bootstrap';

class CartelAlert extends Component {
	constructor(props) {
		super(props);
		this.state = {
			styleMostrar: 'none',
			titulo: '',
			contenido: 'l',
			styleAlert: 'info'
		};
	}

	componentDidMount() {
		let style = '';
		if (this.props.response.type === 'success') {
			style = 'success';
		} else if (this.props.response.type === 'error') {
			style = 'danger';
		} else {
			style = 'warning';
		}
		this.setState({
			styleMostrar: 'block',
			titulo: this.props.response.type,
			contenido: 'algo 1',
			styleAlert: style
		});
	}

	shouldComponentUpdate(nextProps, nextState) {
		return nextProps.response.type !== this.props.response.type;
	}
	componentWillUpdate(nextProps, nextState) {
		let style = '';
		if (this.props.response.type === 'success') {
			style = 'success';
		} else if (this.props.response.type === 'error') {
			style = 'danger';
		} else {
			style = 'warning';
		}
		this.setState({
			styleMostrar: 'block',
			titulo: this.props.response.type,
			contenido: 'algo 2',
			styleAlert: style
		});
	}

	render() {
		// console.log(this.state);
		return (
			<div style={{ display: this.state.styleMostrar }}>
				<Row>
					<Col xs={12}>{this.state.titulo}</Col>
				</Row>
				<Row>
					<Col xs={12}>
						<Alert bsStyle={this.state.styleAlert}>
							{this.state.contenido}
						</Alert>
					</Col>
				</Row>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	// console.log(state)
	return { response: state.response };
};

const mapDispatchToProps = (dispatch) => ({
	// ...bindActionCreators(actionCreators, dispatch),
	// return{};
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CartelAlert);
