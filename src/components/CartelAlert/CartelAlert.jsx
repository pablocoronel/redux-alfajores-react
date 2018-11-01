import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions/alfajorActions';
import { Row, Col, Alert } from 'react-bootstrap';

const ListaMensaje = ({ data, type }) => {
	const guardado = 'Guardado';

	return (
		<div>
			{type === 'success' ? (
				<p>{guardado}</p>
			) : (
				Object.keys(data).map((item, index) =>
					data[item].map((field, indexField) => (
						<div key={field + '-' + indexField}>{field}</div>
					))
				)
			)}
		</div>
	);
};

const CartelAlert = ({ response }) => {
	let styleAlert = 'info';
	let type = response.type;
	let data = response.data;

	switch (type) {
		case 'success':
			styleAlert = 'success';
			break;
		case 'error':
			styleAlert = 'danger';
			break;
		default:
			styleAlert = 'info';
			break;
	}

	return (
		<div>
			{Object.keys(response).length > 0 ? (
				<Row>
					<Col xs={12}>
						<Alert bsStyle={styleAlert}>
							<ListaMensaje data={data} type={type} />
						</Alert>
					</Col>
				</Row>
			) : (
				''
			)}
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	return {
		response: state.response
	};
};

const mapDispatchToProps = (dispatch) => ({
	acciones: { ...bindActionCreators(actionCreators, dispatch) }
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CartelAlert);
