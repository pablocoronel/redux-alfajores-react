import React from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import * as actionCreators from '../../actions/idiomaActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Navegacion = ({ acciones, idioma }) => {
	const cambiarIdioma = (cambio_idioma) => {
		acciones.cambiarIdioma(cambio_idioma);
	};

	return (
		<div>
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to="/">{idioma.inicio}</Link>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav>
					<LinkContainer to="/crear">
						<NavItem eventKey={1}>{idioma.crear}</NavItem>
					</LinkContainer>
				</Nav>
				<Nav pullRight>
					<NavDropdown
						eventKey={3}
						title={idioma.idioma}
						id="basic-nav-dropdown"
					>
						<MenuItem
							eventKey={3.1}
							onClick={() => cambiarIdioma('es')}
						>
							Español
						</MenuItem>
						<MenuItem
							eventKey={3.2}
							onClick={() => cambiarIdioma('en')}
						>
							English
						</MenuItem>
					</NavDropdown>
				</Nav>
			</Navbar>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	return {
		idioma: state.idioma
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		acciones: {
			...bindActionCreators(actionCreators, dispatch)
		}
	};
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Navegacion);
