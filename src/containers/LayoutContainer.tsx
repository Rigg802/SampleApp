import * as React from 'react';
import { Component } from 'react';
import { bindActionCreators, Reducer } from 'redux';
import { connect } from 'react-redux';
import { LayoutProps, LayoutState, RootReducer } from '../models';
import { LayoutActions } from '../actions';
import { MonitorActions } from '../actions';
import { default as Layout } from '../components/Layout';
import { getMonitorsForLayout } from '../reducers';

//It's actually the root reducer state
function mapStateToProps(rootState: RootReducer): any {
  const props = {
      monitors : getMonitorsForLayout(rootState)
  };
  return props;
}

function mapDispatchToProps(dispatch:any) {
  const actionMap:Object = {
    actions: bindActionCreators(LayoutActions, dispatch),
    monActions: bindActionCreators(MonitorActions, dispatch)
  };
  return actionMap;
}

class LayoutContainer extends Component<LayoutProps, void> {
  constructor(props:LayoutProps){
    super(props);
  }
  render() {
    const { monActions, monitors, actions } = this.props;
    return (
      <Layout actions={actions} monitors={monitors} monActions={MonitorActions}/>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);
