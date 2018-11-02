import React, { useState, useRef } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as actionCreators from '../../actions/alfajorActions';
import {
	Form,
	FormGroup,
	FormControl,
	Grid,
	Row,
	Col,
	Button
} from 'react-bootstrap';

const Create = ({ alfajorProp, response, acciones }) => {
	const inputRef = useRef();
	const [alfajor, setAlfajor] = useState({
		nombre: '',
		sabor: '',
		precio: 0
	});

	const [flagAlert, setVerAlert] = useState(false);

	const handleAlfajor = (event) => {
		// console.log(inputRef.current.props.nombre);
		setAlfajor({ ...alfajor, [event.target.name]: event.target.value });
	};

	const agregarAlfajor = () => {
		acciones.crearAlfajor(alfajor);
	};

	return (
		<Grid>
			<Row>
				<Col xs={12} md={4} mdPush={6}>
					Agregar
				</Col>
			</Row>

			<Row>
				<Form horizontal>
					<FormGroup>
						<Col xs={2}>Nombre</Col>
						<Col xs={10}>
							<FormControl
								type="text"
								name={'nombre'}
								placeholder="Nombre"
								value={alfajor.nombre}
								onChange={handleAlfajor}
								// nombre={"nombre"}
								// ref={inputRef}
							/>
						</Col>
					</FormGroup>

					<FormGroup>
						<Col xs={2}>Sabor</Col>
						<Col xs={10}>
							<FormControl
								name={'sabor'}
								componentClass="select"
								placeholder="Sabor"
								value={alfajor.sabor}
								onChange={handleAlfajor}
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
								name={'precio'}
								placeholder="Precio"
								value={alfajor.precio}
								onChange={handleAlfajor}
							/>
						</Col>
					</FormGroup>

					<FormGroup>
						<Col smOffset={2} sm={10}>
							<Button
								type="button"
								onClick={() => agregarAlfajor()}
							>
								Agregar
							</Button>
						</Col>
					</FormGroup>
				</Form>
			</Row>
		</Grid>
	);
};

Create.propTypes = {
	alfajorProp: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
		.isRequired
};

// mapeo del state
const mapStateToProps = (state, ownProps) => {
	return {
		alfajorProp:
			state.alfajor.length > 0
				? state.alfajor[0]
				: { nombre: '', sabor: '', precio: 0 },
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
