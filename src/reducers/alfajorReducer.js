import * as actionsType from '../actions/actionTypes';
import initialState from '../store/initialState';

export const alfajorReducer = (state = initialState.alfajor, action) => {
	switch (action.type) {
		case actionsType.ALL_ALFAJOR:
		let nuevoState = action.alfajores;
		return nuevoState;
		
		case actionsType.ADD_ALFAJOR:
		return [...state, action.alfajor];
		
		case actionsType.ADD_ALFAJOR_ERROR:
		// console.log('aca')
		// console.log(action)
			return [...state, action.response]

		case actionsType.GET_ALFAJOR:
			return [...state, action.alfajor];

		// case actionsType.EDIT_ALFAJOR:
		// 	let stateEditado = state.map((item, index) => {
		// 		if (item.id === action.alfajor.id) {
		// 			return action.alfajor;
		// 		} else {
		// 			return item;
		// 		}
		// 	});

		// 	return stateEditado;

		case actionsType.DELETE_ALFAJOR:
			let stateNuevo = state.filter((x) => x.id !== action.alfajor);

			return stateNuevo;
		default:
			return state;
	}
};
