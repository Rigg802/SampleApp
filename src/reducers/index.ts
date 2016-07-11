import { combineReducers, ReducersMapObject } from 'redux';
import monitors from '../reducers/monitors';

const reducers: ReducersMapObject = { 
    monitors: monitors
};

export const rootReducer = combineReducers(reducers);
