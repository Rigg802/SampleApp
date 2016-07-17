export interface MonitorProps {
    actions?:any
    monitor:MonitorState
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