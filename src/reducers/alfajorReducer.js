import * as actionsType from '../actions/actionTypes';
import initialState from '../store/initialState';

export const alfajorReducer = (state = initialState.alfajor, action) => {
	switch (action.type) {
		case actionsType.ALL_ALFAJOR:
			let nuevoState = action.alfajores;
			// console.log(nuevoState)
			return nuevoState;
		// return [...state, action.alfajores];

		case actionsType.ADD_ALFAJOR:
			return [...state, action.alfajor];

		case actionsType.GET_ALFAJOR:
			let get_alfajor = action.alfajor;
			return get_alfajor;
		// case actionsType.EDIT_ALFAJOR_PROPERTY:
		//deepclone state
		// const editStatte = deepClone(state);

			// return state.map((item, index) => {
			// 	if (item.id === action.alfajor.id) {
			// 		return {...item, nombre:action.payload};
			// 	} else {
			// 		return item;
			// 	}
			// });

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
