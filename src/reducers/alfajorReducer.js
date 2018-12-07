import * as actionsType from '../actions/actionTypes';
import initialState from '../store/initialState';

export const alfajorReducer = (state = initialState.alfajor, action) => {
	switch (action.type) {
		case actionsType.ALL_ALFAJOR:
			return {
				...state,
				data: action.alfajores,
				response: action.response
			};

		case actionsType.ADD_ALFAJOR:
			return { ...state, response: action.response };

		case actionsType.ADD_ALFAJOR_ERROR:
			return { ...state, response: action.response };

		case actionsType.GET_ALFAJOR:
			let alfajor = [];
			alfajor.push(action.alfajor);
			return { ...state, data: alfajor };

		case actionsType.EDIT_ALFAJOR:
			let listadoActualizado = state.data.map((item, index) => {
				if (item.id === action.alfajor.id) {
					return action.alfajor;
				} else {
					return item;
				}
			});

			return {
				...state,
				data: listadoActualizado,
				response: action.response
			};

		case actionsType.EDIT_ALFAJOR_ERROR:
			return { ...state, response: action.response };

		case actionsType.DELETE_ALFAJOR:
			let data_nueva = state.data.filter(
				(x) => x.id !== action.alfajor_id
			);

			return { ...state, data: data_nueva };

		case actionsType.KEEP_IMAGE:
			return { ...state, imagen_temporal: action.imagen };

		// case actionsType.GET_IMAGE:
		// 	return {...state, imagenes : action}

		default:
			return state;
	}
};
