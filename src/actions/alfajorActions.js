import * as actionTypes from '../actions/actionTypes';
import API from '../store/config';

export const listarAlfajor = (alfajores) => {
	return (dispatch) => {
		return API.get('/alfajor')
			.then((response) => {
				dispatch({
					type: actionTypes.ALL_ALFAJOR,
					alfajores: response.data,
					response: {
						type: 'success',
						data: {},
						verAlert: false
					}
				});
				dispatch({
					type: actionTypes.RESPONSE_SUCCESS,
					response: {
						type: 'success',
						action: 'ALL_ALFAJOR'
					}
				});
			})
			.catch((error) => {
				console.log(error);

				dispatch({
					type: actionTypes.RESPONSE_ERROR,
					response: {
						type: 'error',
						action: 'ALL_ALFAJOR'
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
					response: {
						type: 'success',
						data: response.data,
						verAlert: true
					}
				});
				dispatch({
					type: actionTypes.RESPONSE_SUCCESS,
					response: {
						type: 'success',
						action: 'ADD_ALFAJOR'
					}
				});
			})
			.catch((error) => {
				console.log(error);

				dispatch({
					type: actionTypes.ADD_ALFAJOR_ERROR,
					response: {
						type: 'error',
						data: error.response.data,
						verAlert: true
					}
				});
				dispatch({
					type: actionTypes.RESPONSE_ERROR,
					response: {
						type: 'error',
						action: 'ADD_ALFAJOR'
					}
				});
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
						action: 'GET_ALFAJOR'
					}
				});
			})
			.catch((error) => {
				console.log(error);

				dispatch({
					type: actionTypes.RESPONSE_ERROR,
					response: {
						type: 'error',
						action: 'GET_ALFAJOR'
					}
				});
			});
	};
};

export const editarAlfajor = (alfajor) => {
	return (dispatch) => {
		API.put('/alfajor/' + alfajor.id, {
			nombre: alfajor.nombre,
			sabor: alfajor.sabor,
			precio: alfajor.precio
		})
			.then((response) => {
				dispatch({
					type: actionTypes.EDIT_ALFAJOR,
					alfajor: response.data,
					response: {
						type: 'success',
						data: {},
						verAlert: true
					}
				});
				dispatch({
					type: actionTypes.RESPONSE_SUCCESS,
					response: {
						type: 'success',
						action: 'EDIT_ALFAJOR'
					}
				});
			})
			.catch((error) => {
				console.log(error);

				dispatch({
					type: actionTypes.EDIT_ALFAJOR_ERROR,
					response: {
						type: 'error',
						data: error.response.data,
						verAlert: true
					}
				});
				dispatch({
					type: actionTypes.RESPONSE_ERROR,
					response: {
						type: 'error',
						action: 'EDIT_ALFAJOR'
					}
				});
			});
	};
};

export const borrarAlfajor = (id) => {
	return (dispatch) => {
		API.delete('/alfajor/' + id)
			.then((response) => {
				dispatch({
					type: actionTypes.DELETE_ALFAJOR,
					alfajor_id: id
				});
				dispatch({
					type: actionTypes.RESPONSE_SUCCESS,
					response: {
						type: 'success',
						action: 'DELETE_ALFAJOR'
					}
				});
			})
			.catch((error) => {
				console.log(error);

				dispatch({
					type: actionTypes.RESPONSE_ERROR,
					response: {
						type: 'error',
						action: 'DELETE_ALFAJOR'
					}
				});
			});
	};
};

export const mantenerImagenEnStore = (imagen) => ({
	type: actionTypes.KEEP_IMAGE,
	imagen
});

export const subirImagen = (imagen, idAlfajor) => {
	return (dispatch) => {
		var formData = new FormData();
		imagen.forEach((element) => {
			var cada_img = new Blob([element]);
			formData.append('imagen[]', cada_img);
		});

		formData.append('idAlfajor', idAlfajor);

		API.post('/imagenUpload', formData)
			.then((response) => {})
			.catch((error) => {
				console.log(error);
			});
	};
};
