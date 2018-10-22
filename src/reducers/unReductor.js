import * as actionsType from '../actions/actionTypes';
import initialState from '../store/initialState';
// console.log(initialState.alfajor)
export const unReductor = (state = initialState.redu, action) => {
	switch (action.type) {
		case actionsType.NUEVO:
			return [...state, action.alfajor];
		// return action.alfajor;

		case actionsType.EDITAR:
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

		// case actionsType.EDITAR:
		// // console.log(action)
		// let stateEditado = state.filter((x) => {
		// 	if (x.id === action.alfajor.id) {
		// 		console.log(x);
		// 		x = action.alfajor;

		// 		console.log(x);
		// 		return x;
		// 	} else {
		// 		return x;
		// 	}
		// });
		// console.log(stateEditado);

		// return stateEditado;
		default:
			return state;
	}
};
