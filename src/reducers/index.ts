import { combineReducers, ReducersMapObject, Reducer } from 'redux';
import layout from './layoutReducer';
import monitors from './monitorReducer';
import * as fromLayout from './layoutReducer';
import * as fromMonitors from './monitorReducer';
import { RootReducer, LayoutState as Layout } from '../models';

const reducers: ReducersMapObject = { 
    layout: layout,
    monitors: monitors
};

export const rootReducer = combineReducers(reducers);

export const getMonitorsForLayout = (state: RootReducer) => ( 
  getMonitorIds(state.layout).map(id => 
    Object.assign({}, getMonitor(state, id)) 
  )
);

const getMonitorIds = (state: Layout) => ( fromLayout.getMonitorIds(state) );

const getMonitor = (state:RootReducer, id:number) => (
    fromMonitors.getMonitor(state.monitors, id)
);