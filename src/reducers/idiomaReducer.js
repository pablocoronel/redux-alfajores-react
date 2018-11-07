import * as actionsType from '../actions/actionTypes';
import initialState from '../store/initialState';

export const idiomaReducer = (state = initialState.idioma, action) => {
	switch (action.type) {
		case actionsType.IDIOMA_EDIT:
			const nuevoState = action.idioma;
			return nuevoState;
		default:
			return state;
	}
};
