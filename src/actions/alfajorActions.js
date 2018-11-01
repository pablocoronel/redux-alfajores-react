import * as actionTypes from '../actions/actionTypes';
import API from '../store/config';

export const listarAlfajor = (alfajores) => {
	return (dispatch) => {
		// dispatch({
		// 	type: actionTypes.RESPONSE_EMPTY,
		// 	response: { type: 'empty', data: {} }
		// });

		API.get('/alfajor')
			.then((response) => {
				dispatch({
					type: actionTypes.ALL_ALFAJOR,
					alfajores: response.data
				});
				dispatch({
					type: actionTypes.RESPONSE_SUCCESS,
					response: { type: 'success', data: {} }
				});
			})
			.catch((error) => {
				dispatch({
					type: actionTypes.RESPONSE_ERROR,
					response: { type: 'error', data: { error } }
				});
			});
	};
};

export const crearAlfajor = (nuevoAlfajor) => {
	return (dispatch) => {
		// dispatch({
		// 	type: actionTypes.RESPONSE_EMPTY,
		// 	response: { type: 'empty', data: {} }
		// });

		API.post('/alfajor', {
			nombre: nuevoAlfajor.nombre,
			sabor: nuevoAlfajor.sabor,
			precio: nuevoAlfajor.precio
		})
			.then((response) => {
				dispatch({
					type: actionTypes.ADD_ALFAJOR,
					alfajor: response.data
				});
				dispatch({
					type: actionTypes.RESPONSE_SUCCESS,
					response: { type: 'success', data: {} }
				});
			})
			.catch((error) => {
				dispatch({
					type: actionTypes.RESPONSE_ERROR,
					response: {
						type: 'error',
						data: error.response.data
					}
				});
			});
	};
};

export const verAlfajor = (id) => {
	return (dispatch) => {
		// dispatch({
		// 	type: actionTypes.RESPONSE_EMPTY,
		// 	response: { type: 'empty', data: {} }
		// });

		API.get('/alfajor/' + id)
			.then((response) => {
				dispatch({
					type: actionTypes.GET_ALFAJOR,
					alfajor: response.data
				});
				dispatch({
					type: actionTypes.RESPONSE_SUCCESS,
					response: { type: 'success', data: {} }
				});
			})
			.catch((error) => {
				dispatch({
					type: actionTypes.RESPONSE_ERROR,
					response: { type: 'error', data: error }
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
		// dispatch({
		// 	type: actionTypes.RESPONSE_EMPTY,
		// 	response: { type: 'empty', data: {} }
		// });

		API.delete('/alfajor/' + id)
			.then((response) => {
				dispatch({
					type: actionTypes.DELETE_ALFAJOR,
					alfajor: id
				});
			})
			.catch((error) => {
				dispatch({
					type: actionTypes.RESPONSE_ERROR,
					response: {
						type: 'error',
						data: error
					}
				});
			});
	};
};
