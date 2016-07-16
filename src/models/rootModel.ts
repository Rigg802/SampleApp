import { LayoutState as Layout } from './layoutModel';
import { MonitorState as Monitor } from './monitorModel';

export interface RootReducer {
    layout: Layout
    monitors: Array<Monitor>
}
