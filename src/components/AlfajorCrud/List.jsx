import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/alfajorActions';
import { Table, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class List extends Component {
	// static Listado.propTypes = {};

	constructor(props) {
		super(props);

		this.state = {};
	}

	componentDidMount() {
		if (
			typeof this.props.listaAlfajores === 'undefined' ||
			this.props.listaAlfajores.length === 0
		) {
			this.props.acciones.listarAlfajor();
		}
	}

	borrarAlfajor = (id) => {
		this.props.acciones.borrarAlfajor(id);
	};

	render() {
		return (
			<div>
				<Table striped bordered condensed hover>
					<thead>
						<tr>
							<th>#</th>
							<th>Nombre</th>
							<th>Sabor</th>
							<th>Precio</th>
							<th>Editar</th>
							<th>Borrar</th>
						</tr>
					</thead>
					<tbody>
						{console.log(this.props)}
						{
							this.props.listaAlfajores.map((item, index) => (
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
										Editar
									</Link>
								</td>
								<td>
									<Button
										bsStyle="danger"
										onClick={() => {
											this.borrarAlfajor(item.id);
										}}
									>
										Borrar
									</Button>
								</td>
							</tr>
						))}
					</tbody>
				</Table>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		listaAlfajores: state.alfajor
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
