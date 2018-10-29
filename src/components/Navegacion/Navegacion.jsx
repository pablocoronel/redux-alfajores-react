import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

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
					<NavItem eventKey={1}>
						<Link to="/crear">Crear</Link>
					</NavItem>
					<NavItem eventKey={2}>
						<Link to="/editar">Editar</Link>
					</NavItem>
				</Nav>
			</Navbar>
		</div>
	);
};

export default Navegacion;
