import { LayoutState as Layout } from './layoutModel';
import { MonitorsState as Monitors } from './monitorModel';

export interface RootReducer {
    layout: Layout
    monitors: Monitors
}
