import * as React from 'react';
import { Component } from 'react';
import { LayoutProps, LayoutState } from '../models';
import { default as Monitor } from './Monitor';

class Layout extends Component<LayoutProps, LayoutState> {
  constructor(props:LayoutProps){
    super(props);
  }
  onClick(){
    const { actions } = this.props;
    actions.addMonitor("test");
  }
  render() {
    const { actions, monActions } = this.props;
    let { monitors } = this.props;
    if(monitors === undefined){
      monitors = new Array();
    }
    return (
      <div>
        <p>hello</p>
        <button onClick={this.onClick.bind(this)}>Add Monitor</button>
        <ul className="monitor-list">
          {monitors.map(monitor =>
            <Monitor key={monitor.id} monitor={monitor} actions={monActions} />
          )}
        </ul>
      </div>
    );
  }
}

export default Layout;