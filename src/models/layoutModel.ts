import { Monitor } from './monitorModel';

export interface LayoutProps {
    actions?:any
    monitors:Array<Monitor>
    monActions?:any
}

export interface LayoutState {
    actions?:any
    monitors:Array<number>
}