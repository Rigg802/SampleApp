export interface MonitorProps {
    actions?:any
    monitor:MonitorState
    monitorData:any
}

export interface MonitorState {
    id:number,
    name:string
}

export interface MonitorsState {
    monitors:Array<MonitorState>
}

export interface MonitorAction {
    type: string,
    payload: any
}