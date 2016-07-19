import * as React from 'react';
import { Component } from 'react';
import { LayoutProps, LayoutState, LayoutCompState } from '../models';
import { default as Monitor } from './Monitor';
import { FakeObjectDataListStore } from '../api/faker';

class Layout extends Component<LayoutProps, LayoutCompState> {
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
    let monitorData = new FakeObjectDataListStore(30);
    return (
      <div>
        <p>hello</p>
        <button onClick={this.onClick.bind(this)}>Add Monitor</button>
        <ul className="monitor-list">
          {monitors.map(monitor =>
            <Monitor key={monitor.id} monitor={monitor} actions={monActions} monitorData={monitorData}/>
          )}
        </ul>
      </div>
    );
  }
}

export default Layout;