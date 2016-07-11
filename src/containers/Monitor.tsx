import * as React from 'react';
import { Component } from 'react';
import { bindActionCreators, Dispatch } from 'redux';
import { connect, MapDispatchToPropsFunction } from 'react-redux';
import Main from '../components/Main';
import { MonitorState, MonitorProps } from '../models/monitorModel';
import { LayoutState } from '../models/layoutModel';
import { default as monitorActions } from '../actions/monitorActions';

class monitorContainer extends Component<MonitorProps, MonitorState> {
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

function mapDispatchToProps(dispatch:Dispatch<MonitorState>) {
  
  const actionMap:Object = { 
    actions: bindActionCreators(monitorActions, dispatch) 
  };
  return actionMap;
}

export default connect(null, mapDispatchToProps)(monitorContainer);
