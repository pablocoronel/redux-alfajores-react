import React, { useState, useRef, useEffect } from 'react';
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
import Dropzone from 'react-dropzone';

const Create = ({ alfajorProp, response, acciones, idioma }) => {
	const inputRef = useRef();
	const [alfajor, setAlfajor] = useState({
		nombre: '',
		sabor: '',
		precio: 0
	});

	const [imagen, setImagen] = useState([]);
	const [preview, setPreview] = useState([]);

	const handleAlfajor = (event) => {
		// console.log(inputRef.current.props.nombre);
		setAlfajor({ ...alfajor, [event.target.name]: event.target.value });
	};

	const onDrop = (files) => {
		let imagen_preview = files.map((file) => {
			return {
				...file,
				preview: URL.createObjectURL(file),
				name: file.name,
				size: file.size
			};
		});

		setPreview(imagen_preview);
		// setImagen(files);

		let reader = new FileReader();
		reader.onload = (e) => {
			setImagen(e.target.result);
		};

		// files.map((f, index) => {
		return reader.readAsDataURL(files[0]);
		// });
	};

	const onCancel = () => {
		setImagen([]);
	};

	const agregarAlfajor = () => {
		acciones.crearAlfajor(alfajor);
	};

	useEffect(
		() => {
			if (imagen.length > 0) {
				acciones.subirImagen(imagen);
			}
		},
		[imagen]
	);

	useEffect(() => {
		for (let i = preview.length; i > 0; i--) {
			const file = preview[0];
			URL.revokeObjectURL(file.preview);
		}
	});

	// styles
	const thumbsContainer = {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: 16
	};

	const thumb = {
		display: 'inline-flex',
		borderRadius: 2,
		border: '1px solid #eaeaea',
		marginBottom: 8,
		marginRight: 8,
		width: 100,
		height: 100,
		padding: 4,
		boxSizing: 'border-box'
	};

	const thumbInner = {
		display: 'flex',
		minWidth: 0,
		overflow: 'hidden'
	};

	const img = {
		display: 'block',
		width: 'auto',
		height: '100%'
	};

	const thumbs = preview.map((file, index) => {
		return (
			<div style={thumb} key={'key' + index}>
				<div style={thumbInner}>
					<img src={file.preview} style={img} />
				</div>
			</div>
		);
	});

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
							<Dropzone accept="image/*" onDrop={onDrop}>
								Subir imágenes
							</Dropzone>

							<Col sm={5}>
								<h2>Imágenes</h2>
								<ul>
									{preview.map((f) => (
										<li key={f.name}>
											{f.name} - {f.size} bytes
										</li>
									))}
								</ul>

								<div style={thumbsContainer}>{thumbs}</div>
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
