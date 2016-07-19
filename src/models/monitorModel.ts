export interface MonitorProps {
    actions?:any
    monitor:MonitorState
    monitorData:any
}

//Reducer State
export interface MonitorsState {
    monitors:Array<MonitorState>
}

//sub reducer state
export interface MonitorState {
    id:number,
    name:string,
}

export interface MonitorCompState {
    isFocused?:boolean,
    isBackground?:boolean
}

export interface MonitorAction {
    type: string,
    payload: any
}