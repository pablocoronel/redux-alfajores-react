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
					<NavItem eventKey={1} href="/crear">
						Crear
					</NavItem>
					<NavItem eventKey={2} href="/editar">
						Editar
					</NavItem>
				</Nav>
			</Navbar>
		</div>
	);
};

export default Navegacion;
