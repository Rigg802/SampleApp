export interface MonitorProps {
    actions?:any
    monitor:Monitor
}

export interface MonitorState {
    actions?:any
}

export interface Monitor {
    id:number,
    name:string
}