import * as React from 'react';
import { Component } from 'react';
import { MonitorState, MonitorProps } from '../models/monitorModel';
import { LayoutState } from '../models/layoutModel';
import { default as monitorActions } from '../actions/monitorActions';

class Monitor extends Component<MonitorProps, MonitorState> {
  constructor(props:MonitorProps){
    super(props);
  }
  render() {
    const { actions } = this.props;
    const { monitor } = this.props;
    return (
      <div>
        <h1>Monitor #{monitor.id}</h1>
        {monitor.name}
      </div>
    );
  }
}

export default Monitor;