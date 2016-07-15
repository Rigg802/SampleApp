import { ActionCreatorsMapObject } from 'redux';
import * as Actions from './index';

const fetch = (parameter:any) => (
  { type: Actions.FETCH_DATA, parameter }
);

const closeMonitor = (id: number) => (
  { type: Actions.REMOVE_MONITOR, id }
);

let monitorID = 0;
export const addMonitor = (name:string) => (
  { 
    type: Actions.ADD_MONITOR, 
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