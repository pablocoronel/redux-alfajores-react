import * as actionTypes from '../actions/actionTypes';
import API from '../store/config';

export const listarAlfajor = (alfajores) => {
	return (dispatch) => {
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

export const editarAlfajor = (alfajor) => ({
	type: actionTypes.EDIT_ALFAJOR,
	alfajor
});

export const borrarAlfajor = (alfajor) => {
	return (dispatch) => {
		API.delete('/alfajor/' + alfajor)
			.then((response) => {
				dispatch({
					type: actionTypes.DELETE_ALFAJOR,
					alfajor
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
