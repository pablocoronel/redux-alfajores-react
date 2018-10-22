import * as actionsType from '../actions/actionTypes';
import initialState from '../store/initialState';

export const reducerEjemplo = (state = initialState.ejemplo, action) => {
	console.log(action);
	switch (action.type) {
		case actionsType.NUEVO:
			return [...state, action.titulo];
		default:
			return state;
	}
};
