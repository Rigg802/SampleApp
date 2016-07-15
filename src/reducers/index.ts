import { combineReducers, ReducersMapObject } from 'redux';
import layouts from '../reducers/layoutReducer';
import monitors from '../reducers/monitorReducer';

const reducers: ReducersMapObject = { 
    layouts: layouts,
    monitors: monitors
};

export const rootReducer = combineReducers(reducers);
