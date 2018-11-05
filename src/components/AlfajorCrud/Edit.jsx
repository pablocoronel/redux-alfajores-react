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

const Edit = ({alfajorProp, response, acciones, idAlfajor}) => {
	// console.log(alfajorProp)
	// constructor(props) {
	// 	super(props);

	// 	let alfajor_props;

	// 	if (
	// 		typeof this.props.location.alfajor === 'undefined' ||
	// 		this.props.location.alfajor.length === 0
	// 	) {
	// 		alfajor_props = { nombre: '', sabor: '', precio: 0 };
	// 	} else {
	// 		alfajor_props = props.location.alfajor;
	// 	}

	// 	this.state = {
	// 		alfajor: alfajor_props,
	// 		verAlert: false
	// 	};
	// }

	useEffect(()=>{
		acciones.verAlfajor(idAlfajor)
	}, [])

	const [alfajor, setAlfajor] = useState(alfajorProp)

	const handleAlfajor = (event) =>{
		setAlfajor({
			...alfajor, [event.target.name]: event.target.value
		})
	}

	const editarAlfajor = () =>{
		// console.log(alfajor)
		acciones.editarAlfajor(alfajor)
	}
	
	// handleNombre = (event) => {
	// 	this.setState({
	// 		alfajor: { ...this.state.alfajor, nombre: event.target.value }
	// 	});
	// };

	// handlePrecio = (event) => {
	// 	this.setState({
	// 		precio: event.target.value
	// 	});
	// };

	// handleSabor = (event) => {
	// 	this.setState({
	// 		sabor: event.target.value
	// 	});
	// };

	// verAlert = () => {
	// 	this.setState({
	// 		verAlert: true
	// 	});
	// };

	// componentDidMount() {
	// 	if (
	// 		typeof this.props.location.alfajor === 'undefined' ||
	// 		this.props.location.alfajor.length === 0
	// 	) {
	// 		let id = parseInt(this.props.match.params.id);

	// 		this.props.acciones.verAlfajor(id);
	// 	}
	// }

	// componentDidUpdate(prevProps, prevState) {
	// 	if (prevProps.alfajor !== this.props.alfajor) {
	// 		this.setState({
	// 			alfajor: this.props.alfajor
	// 		});
	// 	}

	// 	// console.log(prevProps)
	// 	if (prevProps.response.type === 'success') {
	// 		if (this.state.verAlert === false) {
	// 			this.verAlert();
	// 		}
	// 	}
	// }

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
									<Button
										type="button"
										onClick={editarAlfajor}
									>
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
	
}

Edit.propTypes = {
	alfajorProp: PropTypes.oneOfType([PropTypes.array, PropTypes.object])
		.isRequired
};

// mapeo del state
const mapStateToProps = (state, ownProps) => {
	console.log(ownProps)
	// console.log(state)
	return {
		idAlfajor: ownProps.match.params.id,
		alfajorProp:
			state.alfajor.data.length > 0
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
