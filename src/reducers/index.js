import { combineReducers } from 'redux';
import { unReductor } from '../reducers/unReductor';
// console.log(unReductor())
const rootReducer = combineReducers({
	redu: unReductor
});

export default rootReducer;
