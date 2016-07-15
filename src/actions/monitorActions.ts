import { ActionCreatorsMapObject } from 'redux';

export const FETCH_DATA = 'FETCH_DATA';
export const CLOSE_MONITOR = 'CLOSE_MONITOR';

const fetch = function(parameter:any) {
  return { type: FETCH_DATA, parameter };
};

const closeMonitor = function(id: number) {
  return { type: CLOSE_MONITOR, id };
};

const actions:ActionCreatorsMapObject = { 
  fetch: fetch ,
  closeMonitor: closeMonitor
};

export default actions;