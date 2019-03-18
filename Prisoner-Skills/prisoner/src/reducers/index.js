import {combineReducers} from 'redux';
import {inmateReducer} from './inmateReducer';
import {singleReducer} from './singleReducer';

export default combineReducers({
    inmateReducer,
    singleReducer
});