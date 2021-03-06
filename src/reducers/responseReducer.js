import * as actionsType from '../actions/actionTypes';
import initialState from '../store/initialState';

export const responseReducer = (state = initialState.response, action) => {
	switch (action.type) {
		case actionsType.RESPONSE_SUCCESS:
			return (state = action.response);

		case actionsType.RESPONSE_ERROR:
			return (state = action.response);

		default:
			return state;
	}
};
