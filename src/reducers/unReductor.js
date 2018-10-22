import * as actionsType from '../actions/actionTypes';
import initialState from '../store/initialState';
// console.log(initialState.alfajor)
export const unReductor = (state = initialState, action) => {
	console.log(state);
	switch (action.type) {
		case actionsType.NUEVO:
		return [...state, action.alfajor];
		// return state;
		default:
			return state;
	}
};
