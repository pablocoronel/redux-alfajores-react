import * as actionTypes from '../actions/actionTypes';
import API from '../store/config';

export const listarAlfajor = (alfajores) => {
	return (dispatch) => {
		return API.get('/alfajor')
			.then((response) => {
				dispatch({
					type: actionTypes.ALL_ALFAJOR,
					alfajores: response.data
				});
				dispatch({
					type: actionTypes.RESPONSE_SUCCESS,
					response: {
						type: 'success',
						action: 'ALL_ALFAJOR',
						data: {}
					}
				});
			})
			.catch((error) => {
				dispatch({
					type: actionTypes.RESPONSE_ERROR,
					response: {
						type: 'error',
						action: 'ALL_ALFAJOR',
						data: { error }
					}
				});
			});
	};
};

export const crearAlfajor = (nuevoAlfajor) => {
	return (dispatch) => {
		API.post('/alfajor', {
			nombre: nuevoAlfajor.nombre,
			sabor: nuevoAlfajor.sabor,
			precio: nuevoAlfajor.precio
		})
			.then((response) => {
				dispatch({
					type: actionTypes.ADD_ALFAJOR,
					alfajor: response.data,
					verAlert: true
				});
				dispatch({
					type: actionTypes.RESPONSE_SUCCESS,
					response: {
						type: 'success',
						action: 'ADD_ALFAJOR',
						data: {}
					}
				});
			})
			.catch((error) => {
				dispatch({
					type: actionTypes.ADD_ALFAJOR_ERROR,
					response: {
						type: 'error',
						action: 'ADD_ALFAJOR',
						data: error.response.data,
						verAlert: true
					}
				});
				// dispatch({
				// 	type: actionTypes.RESPONSE_ERROR,
				// 	response: {
				// 		type: 'error',
				// 		action: 'ADD_ALFAJOR',
				// 		data: error.response.data
				// 	}
				// });
			});
	};
};

export const verAlfajor = (id) => {
	return (dispatch) => {
		API.get('/alfajor/' + id)
			.then((response) => {
				dispatch({
					type: actionTypes.GET_ALFAJOR,
					alfajor: response.data
				});
				dispatch({
					type: actionTypes.RESPONSE_SUCCESS,
					response: {
						type: 'success',
						action: 'GET_ALFAJOR',
						data: {}
					}
				});
			})
			.catch((error) => {
				dispatch({
					type: actionTypes.RESPONSE_ERROR,
					response: {
						type: 'error',
						action: 'GET_ALFAJOR',
						data: error
					}
				});
			});
	};
};

export const editarAlfajor = (alfajor) => ({
	type: actionTypes.EDIT_ALFAJOR,
	alfajor
});

export const borrarAlfajor = (id) => {
	return (dispatch) => {
		API.delete('/alfajor/' + id)
			.then((response) => {
				dispatch({
					type: actionTypes.DELETE_ALFAJOR,
					alfajor: id
				});
				dispatch({
					type: actionTypes.RESPONSE_SUCCESS,
					response: {
						type: 'success',
						action: 'DELETE_ALFAJOR',
						data: {}
					}
				});
			})
			.catch((error) => {
				dispatch({
					type: actionTypes.RESPONSE_ERROR,
					response: {
						type: 'error',
						action: 'DELETE_ALFAJOR',
						data: error
					}
				});
			});
	};
};
