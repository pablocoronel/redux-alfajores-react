import * as actionTypes from '../actions/actionTypes';

export const agregarAction = (uno) => {
	// console.log(uno)
	return (dispatch) => {
		dispatch({
			type: actionTypes.ADD_ALFAJOR,
			alfajor: uno
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
