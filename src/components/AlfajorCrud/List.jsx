import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/alfajorActions';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const List = ({ listaAlfajores, acciones, idioma }) => {
	useEffect(() => {
		acciones.listarAlfajor();
	}, []);

	const borrarAlfajor = (id) => {
		acciones.borrarAlfajor(id);
	};

	return (
		<div>
			<Table striped bordered condensed hover>
				<thead>
					<tr>
						<th>#</th>
						<th>{idioma.nombre}</th>
						<th>{idioma.sabor}</th>
						<th>{idioma.precio}</th>
						<th>{idioma.editar}</th>
						<th>{idioma.borrar}</th>
					</tr>
				</thead>
				<tbody>
					{listaAlfajores.map((item, index) => (
						<tr key={index + '-' + item}>
							<td>{item.id}</td>
							<td>{item.nombre}</td>
							<td>{item.sabor}</td>
							<td>{item.precio}</td>
							<td>
								<Link
									to={{
										pathname: '/editar/' + item.id,
										alfajor: item
									}}
								>
									{idioma.editar}
								</Link>
							</td>
							<td>
								<Button
									bsStyle="danger"
									onClick={() => {
										borrarAlfajor(item.id);
									}}
								>
									{idioma.borrar}
								</Button>
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</div>
	);
};

List.propTypes = {
	listaAlfajores: PropTypes.array.isRequired
};

const mapStateToProps = (state, ownProps) => {
	return {
		listaAlfajores: state.alfajor.data,
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
)(List);
