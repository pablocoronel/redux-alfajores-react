import React, { useState, useEffect } from 'react';
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

const Edit = ({
	alfajorProp,
	response,
	acciones,
	idAlfajor,
	alfajorPorUrl
}) => {
	// state local
	const [alfajor, setAlfajor] = useState({
		nombre: '',
		sabor: '',
		precio: 0
	});

	// dispara el fetch
	if (!alfajorPorUrl) {
		useEffect(() => {
			acciones.verAlfajor(idAlfajor);
		}, []);
	}

	// actualiza el state local
	useEffect(
		() => {
			setAlfajor(alfajorProp);
		},
		[alfajorProp]
	);

	// mantiene actualizado el state local desde los inputs
	const handleAlfajor = (event) => {
		setAlfajor({
			...alfajor,
			[event.target.name]: event.target.value
		});
	};

	// guarda los cambios en bd
	const editarAlfajor = () => {
		acciones.editarAlfajor(alfajor);
	};

	return (
		<Grid>
			<Row>
				<Col xs={12} md={4} mdPush={6}>
					Editar
				</Col>
			</Row>

			{alfajor ? (
				<Row>
					<Form horizontal>
						<FormGroup>
							<Col xs={2}>Nombre</Col>
							<Col xs={10}>
								<FormControl
									type="text"
									name="nombre"
									placeholder="Nombre"
									value={alfajor.nombre}
									onChange={handleAlfajor}
								/>
							</Col>
						</FormGroup>

						<FormGroup>
							<Col xs={2}>Sabor</Col>
							<Col xs={10}>
								<FormControl
									componentClass="select"
									name="sabor"
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
									name="precio"
									placeholder="Precio"
									value={alfajor.precio}
									onChange={handleAlfajor}
								/>
							</Col>
						</FormGroup>

						<FormGroup>
							<Col smOffset={2} sm={10}>
								<Button type="button" onClick={editarAlfajor}>
									Guardar cambios
								</Button>
							</Col>
						</FormGroup>
					</Form>
				</Row>
			) : (
				''
			)}
		</Grid>
	);
};

Edit.propTypes = {
	alfajorProp: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
		.isRequired
};

// mapeo del state
const mapStateToProps = (state, ownProps) => {
	return {
		idAlfajor: ownProps.match.params.id,
		alfajorPorUrl:
			typeof ownProps.location.alfajor === 'object' ? true : false,
		alfajorProp:
			typeof ownProps.location.alfajor === 'object'
				? ownProps.location.alfajor
				: state.alfajor.data.length > 0
					? state.alfajor.data[0]
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
)(Edit);
