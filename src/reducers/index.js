import { combineReducers } from 'redux';
import { alfajorReducer } from '../reducers/alfajorReducer';
// console.log(unReductor())
const rootReducer = combineReducers({
	alfajor: alfajorReducer
});

export default rootReducer;
