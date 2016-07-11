import { ActionCreatorsMapObject } from 'redux';

export const ADD_MONITOR = 'ADD_MONITOR';

export const addMonitor = function(parameter:any) {
  return { type: ADD_MONITOR, parameter };
};


const actions:ActionCreatorsMapObject = { 
  addMonitor: addMonitor 
};

export default actions;