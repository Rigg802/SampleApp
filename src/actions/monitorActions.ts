import { ActionCreatorsMapObject } from 'redux';

export const FETCH_DATA = 'FETCH_DATA';
export const REMOVE_MONITOR = 'REMOVE_MONITOR';

const fetch = (parameter:any) => (
  { type: FETCH_DATA, parameter }
);

const closeMonitor = (id: number) => (
  { type: REMOVE_MONITOR, id }
);

const actions:ActionCreatorsMapObject = { 
  fetch: fetch ,
  closeMonitor: closeMonitor
};

export default actions;