import * as actionTypes from '../actions/actionTypes';

export const ejemploAction = (uno) => {
	// console.log(uno)
	return (dispatch) => {
		dispatch({
			type: actionTypes.NUEVO,
			alfajor: uno
		});
	};
};

// console.log(ejemploAction)