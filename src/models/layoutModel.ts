import { MonitorState } from './';

export interface LayoutProps {
    actions?:any
    monitors:Array<MonitorState>
    monActions?:any
}

export interface LayoutState {
    monitors:Array<number>
}