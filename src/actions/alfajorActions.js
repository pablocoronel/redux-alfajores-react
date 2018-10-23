import * as actionTypes from '../actions/actionTypes';
import API from '../store/config';

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
					// alfajor: response.data
					alfajor: {...response.data, agregadoOk: true}
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};
};

export const editarAlfajor = (alfajor) => ({
	type: actionTypes.EDIT_ALFAJOR,
	alfajor
});

export const borrarAlfajor = (alfajor) => ({
	type: actionTypes.DELETE_ALFAJOR,
	alfajor
});
