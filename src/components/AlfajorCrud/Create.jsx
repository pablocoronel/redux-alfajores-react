import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as actionCreators from '../../actions/alfajorActions';
import CartelAlert from '../CartelAlert/CartelAlert';
import {
	Form,
	FormGroup,
	FormControl,
	Grid,
	Row,
	Col,
	Button
} from 'react-bootstrap';
import { Object } from 'core-js';

class Create extends Component {
	static propTypes = {
		nombre: PropTypes.string.isRequired,
		sabor: PropTypes.string.isRequired,
		precio: PropTypes.number.isRequired
	};

	constructor(props) {
		super();

		this.state = {
			nombre: '',
			sabor: '',
			precio: 0,
			verAlert: false
		};
	}

	handleNombre = (event) => {
		this.setState({
			nombre: event.target.value
		});
	};

	handlePrecio = (event) => {
		this.setState({
			precio: event.target.value
		});
	};

	handleSabor = (event) => {
		this.setState({
			sabor: event.target.value
		});
	};

	agregarAlfajor = () => {
		const nuevoAlfajor = {
			nombre: this.state.nombre,
			sabor: this.state.sabor,
			precio: this.state.precio
		};

		this.props.acciones.crearAlfajor(nuevoAlfajor);
	};

	verAlert = () => {
		this.setState({
			verAlert: true
		});
	};

	componentDidUpdate() {
		if (this.state.verAlert === false) {
			this.verAlert();
		}
	}

	render() {
		return (
			<Grid>
				<Row>
					<Col xs={12} md={4} mdPush={6}>
						Agregar
					</Col>
				</Row>

				{this.state.verAlert &&
				Object.keys(this.props.response).length > 0 ? (
					<CartelAlert response={this.props.response} />
				) : (
					''
				)}

				<Row>
					<Form horizontal>
						<FormGroup>
							<Col xs={2}>Nombre</Col>
							<Col xs={10}>
								<FormControl
									type="text"
									placeholder="Nombre"
									value={this.state.nombre}
									onChange={this.handleNombre}
								/>
							</Col>
						</FormGroup>

						<FormGroup>
							<Col xs={2}>Sabor</Col>
							<Col xs={10}>
								<FormControl
									componentClass="select"
									placeholder="Sabor"
									value={this.state.sabor}
									onChange={this.handleSabor}
								>
									<option value="">Elegir</option>
									<option value="chocolate blanco">
										Chocolate blanco
									</option>
									<option value="chocolate negro">
										Chocolate negro
									</option>
									<option value="fruta">Fruta</option>
									<option value="dulce de leche">
										Dulce de leche
									</option>
								</FormControl>
							</Col>
						</FormGroup>

						<FormGroup>
							<Col sm={2}>Precio</Col>
							<Col sm={10}>
								<FormControl
									type="text"
									placeholder="Precio"
									value={this.state.precio}
									onChange={this.handlePrecio}
								/>
							</Col>
						</FormGroup>

						<FormGroup>
							<Col smOffset={2} sm={10}>
								<Button
									type="button"
									onClick={this.agregarAlfajor}
								>
									Agregar
								</Button>
							</Col>
						</FormGroup>
					</Form>
				</Row>
			</Grid>
		);
	}
}

// mapeo del state
const mapStateToProps = (state, ownProps) => {
	return {
		nombre: state.nombre ? state.nombre : '',
		sabor: state.sabor ? state.sabor : '',
		precio: state.precio ? state.precio : 0,
		response: state.response
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		acciones: { ...bindActionCreators(actionCreators, dispatch) }
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Create);
