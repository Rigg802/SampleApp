import { ActionCreatorsMapObject } from 'redux';

export const FETCH_DATA = 'FETCH_DATA';
export const REMOVE_MONITOR = 'REMOVE_MONITOR';
export const ADD_MONITOR = 'ADD_MONITOR';

const fetch = (parameter:any) => (
  { type: FETCH_DATA, parameter }
);

const closeMonitor = (id: number) => (
  { type: REMOVE_MONITOR, id }
);

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
  fetch: fetch ,
  closeMonitor: closeMonitor,
  addMonitor: addMonitor
};

export default actions;