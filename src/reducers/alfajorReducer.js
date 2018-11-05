import * as actionsType from '../actions/actionTypes';
import initialState from '../store/initialState';

export const alfajorReducer = (state = initialState.alfajor, action) => {
	switch (action.type) {
		case actionsType.ALL_ALFAJOR:
			return {...state, data : action.alfajores, response: action.response};

		case actionsType.ADD_ALFAJOR:
			return {...state, response: action.response};

		case actionsType.ADD_ALFAJOR_ERROR:
			return {...state, response: action.response};

		case actionsType.GET_ALFAJOR:
			return {...state, data: action.alfajor};

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
			let data_nueva = state.data.filter((x) => x.id !== action.alfajor_id);

			return {...state, data: data_nueva};
		default:
			return state;
	}
};
