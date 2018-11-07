import { combineReducers } from 'redux';
import { alfajorReducer } from '../reducers/alfajorReducer';
import { responseReducer } from '../reducers/responseReducer';
import { idiomaReducer } from '../reducers/idiomaReducer';

const rootReducer = combineReducers({
	alfajor: alfajorReducer,
	response: responseReducer,
	idioma: idiomaReducer
});

export default rootReducer;
