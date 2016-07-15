import * as React from 'react';
import { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { LayoutProps, LayoutState } from '../models/layoutModel';
import { default as layoutActions } from '../actions/layoutActions';
import { default as monitorActions } from '../actions/monitorActions';
import { default as Layout } from '../components/Layout';

class LayoutContainer extends Component<LayoutProps, LayoutState> {
  constructor(props:LayoutProps){
    super(props);
  }
  render() {
    const { monActions, monitors, actions } = this.props;
    console.log("Render");
    console.log(this.props);
    console.log(monitors);
    return (
      <Layout actions={actions} monitors={monitors} monActions={monitorActions}/>
    );
  }
}

function mapStateToProps(state:LayoutState): LayoutProps {
  console.log("StateToProps");
  console.log(state);
  const props = {
      monitors : state.monitors
  };
  return props;
}

function mapDispatchToProps(dispatch:any) {
  const actionMap:Object = {
    actions: bindActionCreators(layoutActions, dispatch),
    monActions: bindActionCreators(monitorActions, dispatch)
  };
  return actionMap;
}

export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);
