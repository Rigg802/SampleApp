import { MonitorState } from './';

export interface LayoutProps {
    actions?:any
    monitors:Array<MonitorState>
    monActions?:any
}

//Reducer State
export interface LayoutState {
    monitors:Array<number>
}

export interface LayoutCompState{
    isActive:boolean;
}