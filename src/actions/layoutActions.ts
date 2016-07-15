import { ActionCreatorsMapObject } from 'redux';
import { MonitorAction } from '../models/monitorModel';

export const ADD_MONITOR = 'ADD_MONITOR';
export const REMOVE_MONITOR = 'REMOVE_MONITOR';

let monitorID = 0;
export const addMonitor = (name:string): MonitorAction => {
  return { 
    type: ADD_MONITOR, 
    payload: {
      name,
      id : monitorID++
    }
  };
};

export const removeMonitor = (id:number): MonitorAction => {
  return { 
    type: REMOVE_MONITOR, 
    payload: {
      id
    }
  };
};


const actions:ActionCreatorsMapObject = { 
  addMonitor: addMonitor,
  removeMonitor: removeMonitor
};

export default actions;