import * as React from 'react';
import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { LayoutProps, LayoutState } from '../models/layoutModel';
import { default as monitorActions } from '../actions/monitorActions';

class LayoutContainer extends Component<LayoutProps, LayoutState> {
  constructor(props:LayoutProps){
    super(props);
    console.log("in layout container");
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

export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);
