import * as React from 'react';
import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect, MapDispatchToPropsFunction } from 'react-redux';
import Main from '../components/Main';
import { LayoutProps, LayoutState } from '../models/layoutModel'
import { default as monitorActions } from '../actions/monitorActions';

class layoutContainer extends Component<LayoutProps, LayoutState> {
  constructor(props:LayoutProps){
    super(props);
  }
  render() {
    const {actions} = this.props;
    return (
      <div>
        <p>hello</p>
        <button onClick="{actions.addMonitor}">Add Monitor</button>
        
      </div>
    );
  }
}

function mapStateToProps(state:LayoutState): LayoutProps {
  const props = {
      monitors : state.monitors
  };
  return props;
}

function mapDispatchToProps(dispatch:any) {
  const actionMap:Object = { 
    actions: bindActionCreators(monitorActions, dispatch) 
  };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(layoutContainer);
