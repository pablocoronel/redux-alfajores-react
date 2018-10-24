import { combineReducers } from 'redux';
import { alfajorReducer } from '../reducers/alfajorReducer';
import { responseReducer } from '../reducers/responseReducer';
// console.log(unReductor())
const rootReducer = combineReducers({
	alfajor: alfajorReducer,
	response: responseReducer
});

export default rootReducer;
