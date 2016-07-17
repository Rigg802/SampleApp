import { ActionCreatorsMapObject } from 'redux';
export const ADD_MONITOR = 'ADD_MONITOR';

let monitorID = 0;
export const addMonitor = (name:string) => (
  { 
    type: ADD_MONITOR, 
    payload: {
      name,
      id : monitorID++
    }
  }
);

const actions:ActionCreatorsMapObject = { 
  addMonitor:addMonitor
};

export default actions;