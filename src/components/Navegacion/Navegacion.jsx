import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

const Navegacion = () => {
	return (
		<div>
			<Navbar>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to="/">Inicio</Link>
					</Navbar.Brand>
				</Navbar.Header>
				<Nav>
					<LinkContainer to="/crear">
						<NavItem eventKey={1}>Crear</NavItem>
					</LinkContainer>

					<LinkContainer to="/editar">
						<NavItem eventKey={2}>Editar</NavItem>
					</LinkContainer>
				</Nav>
			</Navbar>
		</div>
	);
};

export default Navegacion;
