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
	Button,
	Image
} from 'react-bootstrap';

const Create = ({ alfajorProp, response, acciones, idioma }) => {
	const inputRef = useRef();
	const [alfajor, setAlfajor] = useState({
		nombre: '',
		sabor: '',
		precio: 0
	});

	const [image, setImagen] = useState({});

	const handleAlfajor = (event) => {
		// console.log(inputRef.current.props.nombre);
		setAlfajor({ ...alfajor, [event.target.name]: event.target.value });
	};

	const handleSubirImagen = (event) => {
		const archivo = event.target.files[0];

		setImagen(archivo);

		acciones.subirImagen(image);
	};

	const agregarAlfajor = () => {
		acciones.crearAlfajor(alfajor);
	};
	// {console.log(image)}
	return (
		<Grid>
			<Row>
				<Col xs={12} md={4} mdPush={6}>
					{idioma.crear}
				</Col>
			</Row>

			<Row>
				<Form horizontal>
					<FormGroup>
						<Col xs={2}>{idioma.nombre}</Col>
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
						<Col xs={2}>{idioma.sabor}</Col>
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
						<Col sm={2}>{idioma.precio}</Col>
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
						<Col sm={2}>{idioma.subir_imagen}</Col>
						<Col sm={5}>
							<FormControl
								id="subirImagen"
								name="subirImagen"
								type="file"
								onChange={handleSubirImagen}
							/>
							<Col sm={5}>
								{/* <Image src={image.name} rounded /> */}
							</Col>
						</Col>
					</FormGroup>

					<FormGroup>
						<Col smOffset={2} sm={10}>
							<Button
								type="button"
								onClick={() => agregarAlfajor()}
							>
								{idioma.agregar}
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
			state.alfajor.data.length > 0
				? state.alfajor.data[0]
				: { nombre: '', sabor: '', precio: 0 },
		response: state.response,
		idioma: state.idioma
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
