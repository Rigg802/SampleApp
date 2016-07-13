import { combineReducers, ReducersMapObject } from 'redux';
import monitors from '../reducers/monitorReducer';

const reducers: ReducersMapObject = { 
    monitors: monitors
};
console.log("reducers exported");

export const rootReducer = combineReducers(reducers);
