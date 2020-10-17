import storeDate from './storeDate';
import {combineReducers} from 'redux';
import counter from './increment'


const allReducers = combineReducers({
    storeDate,
    counter
})

export default allReducers;

