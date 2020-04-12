import {combineReducers} from 'redux';
import tasks from './tasks.js'
import filters from './filters.js'

const rootReducer = combineReducers({tasks, filters});

export default rootReducer;
