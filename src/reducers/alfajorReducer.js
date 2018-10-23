import * as actionsType from '../actions/actionTypes';
import initialState from '../store/initialState';
// console.log(initialState.alfajor)
export const alfajorReducer = (state = initialState.alfajor, action) => {
	switch (action.type) {
		case actionsType.ADD_ALFAJOR:
			return [...state, action.alfajor];
		// return action.alfajor;

		case actionsType.EDIT_ALFAJOR:
			// console.log(action)
			let stateEditado = state.map((item, index) => {
				if (item.id === action.alfajor.id) {
					return action.alfajor;
				} else {
					return item;
				}
			});
			console.log(stateEditado);

			return stateEditado;

		case actionsType.DELETE_ALFAJOR:
			console.log(state);
			let stateNuevo = state.filter((x) => x.id === action.alfajor);
			console.log(stateNuevo);

			return stateNuevo;
		default:
			return state;
	}
};
